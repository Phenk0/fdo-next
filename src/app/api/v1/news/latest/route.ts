import { prisma } from "@/lib/prisma";
import type { NewsStatus, NewsTag } from "@/generated/prisma/enums";
import { NextRequest, NextResponse } from "next/server";
import { createCorsPreflightResponse, getCorsHeaders } from "@/lib/cors";

const where = {
  status: "PUBLISHED" as NewsStatus,
  tags: { has: "news" as NewsTag },
};

const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

export function OPTIONS(request: Request) {
  return createCorsPreflightResponse(request);
}

export async function GET(request: NextRequest) {
  const headers = getCorsHeaders(request);
  headers.set("Cache-Control", "no-store");

  try {
    const recentNews = await prisma.news.findMany({
      where: {
        ...where,
        createdAt: { gte: thirtyDaysAgo },
      },
      orderBy: [{ createdAt: "desc" }, { id: "desc" }],
    });

    const news =
      recentNews.length >= 5
        ? recentNews
        : await prisma.news.findMany({
            where,
            orderBy: [{ createdAt: "desc" }, { id: "desc" }],
            take: 5,
          });
    return NextResponse.json({ data: news }, { headers });
  } catch (error) {
    console.error("GET /api/v1/news/latest:", error);

    return NextResponse.json(
      { error: "Failed to fetch latest news" },
      { status: 500 },
    );
  }
}
