import { createCorsPreflightResponse, getCorsHeaders } from "@/lib/cors";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export function OPTIONS(request: Request) {
  return createCorsPreflightResponse(request);
}

export async function GET(request: NextRequest) {
  const headers = getCorsHeaders(request);
  headers.set("Cache-Control", "no-store");

  try {
    const regulations = await prisma.regulationList.findMany({
      select: { id: true, text: true, url: true, sortOrder: true },
      orderBy: [{ sortOrder: "asc" }, { text: "asc" }],
    });

    return NextResponse.json(
      {
        data: regulations,
      },
      { headers },
    );
  } catch (error) {
    console.error("GET /api/v1/regulations:", error);

    return NextResponse.json(
      { error: "Failed to fetch regulation list" },
      { status: 500, headers },
    );
  }
}
