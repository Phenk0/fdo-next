import { prisma } from "@/lib/prisma";
import { createCorsPreflightResponse, getCorsHeaders } from "@/lib/cors";
import { NextResponse } from "next/server";

export function OPTIONS(request: Request) {
  return createCorsPreflightResponse(request);
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const headers = getCorsHeaders(request);
  headers.set("Cache-Control", "no-store");

  try {
    const { slug } = await params;

    const news = await prisma.news.findUnique({
      where: {
        slug,
        status: "PUBLISHED",
      },
    });

    if (!news) {
      return NextResponse.json(
        { error: "News not found" },
        { status: 404, headers },
      );
    }

    return NextResponse.json({ data: news }, { headers });
  } catch (error) {
    console.error("GET /api/v1/news/[slug]:", error);

    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500, headers },
    );
  }
}
