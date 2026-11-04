import { createCorsPreflightResponse, getCorsHeaders } from "@/lib/cors";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { SportsmanGroup } from "@/generated/prisma/enums";
import { z } from "zod";

export function OPTIONS(request: Request) {
  return createCorsPreflightResponse(request);
}

const querySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(10),
  groupName: z.enum(SportsmanGroup).optional(),
});

export async function GET(request: NextRequest) {
  const headers = getCorsHeaders(request);
  headers.set("Cache-Control", "no-store");

  const params = Object.fromEntries(request.nextUrl.searchParams);

  const validation = querySchema.safeParse(params);
  if (!validation.success) {
    return NextResponse.json(
      {
        error: "Invalid query parameters",
        details: z.treeifyError(validation.error),
      },
      { status: 400, headers },
    );
  }

  const { page, limit, groupName } = validation.data;

  try {
    const total = await prisma.sportsman.count({ where: { groupName } });

    const totalPages = Math.ceil(total / limit);
    if (page > totalPages && totalPages > 0) {
      return NextResponse.json(
        {
          error: "Invalid page number",
          pagination: {
            page,
            limit,
            total,
            totalPages,
          },
        },
        { status: 400, headers },
      );
    }

    const sportsmen = await prisma.sportsman.findMany({
      where: { groupName },
      orderBy: [{ name: "asc" }, { id: "asc" }],
      skip: (page - 1) * limit,
      take: limit,
    });

    return NextResponse.json(
      {
        data: sportsmen,
        pagination: {
          page,
          limit,
          total,
          totalPages,
          hasNextPage: page < totalPages,
          hasPreviousPage: page > 1,
        },
      },
      { headers },
    );
  } catch (error) {
    console.error("GET /api/v1/sportsmen:", error);

    return NextResponse.json(
      { error: "Failed to fetch sportsmen" },
      { status: 500, headers },
    );
  }
}
