import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { NewsStatus, NewsTag } from "@/generated/prisma/enums";
import { prisma } from "@/lib/prisma";
import { createCorsPreflightResponse, getCorsHeaders } from "@/lib/cors";

export function OPTIONS(request: Request) {
  return createCorsPreflightResponse(request);
}

const querySchema = z.object({
  page: z.coerce.number().int().min(1).max(1_000_000).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(10),
  tag: z.enum(NewsTag).optional(),
});

export async function GET(request: NextRequest) {
  const params = Object.fromEntries(request.nextUrl.searchParams);

  const validation = querySchema.safeParse(params);

  if (!validation.success) {
    return NextResponse.json(
      {
        error: "Invalid query parameters",
        details: z.treeifyError(validation.error),
      },
      { status: 400 },
    );
  }

  const { page, limit, tag } = validation.data;

  const where = {
    status: NewsStatus.PUBLISHED,
    ...(tag && { tags: { has: tag } }),
  };

  try {
    const [news, total] = await Promise.all([
      prisma.news.findMany({
        where,
        orderBy: [{ createdAt: "desc" }, { id: "desc" }],
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.news.count({ where }),
    ]);

    const totalPages = Math.ceil(total / limit);

    const headers = getCorsHeaders(request);

    headers.set("Cache-Control", "no-store");

    return NextResponse.json(
      {
        data: news,
        pagination: {
          page,
          limit,
          total,
          totalPages,
          hasNextPage: page < totalPages,
          hasPreviousPage: page > 1,
        },
      },
      {
        headers,
      },
    );
  } catch (error) {
    console.error("GET /api/v1/news:", error);

    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 },
    );
  }
}
