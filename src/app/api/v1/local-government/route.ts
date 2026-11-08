import { createCorsPreflightResponse, getCorsHeaders } from "@/lib/cors";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Specialty } from "@/generated/prisma/enums";
import { z } from "zod";

export function OPTIONS(request: Request) {
  return createCorsPreflightResponse(request);
}

const querySchema = z.object({
  specialty: z.enum(Specialty),
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

  const { specialty } = validation.data;

  try {
    const localGovernors = await prisma.localGovernment.findMany({
      where: { specialty },
      select: {
        id: true,
        name: true,
        role: true,
        status: true,
        photoUrl: true,
      },

      orderBy: [{ sortOrder: "asc" }, { id: "asc" }],
    });

    return NextResponse.json(
      {
        data: localGovernors,
      },
      { headers },
    );
  } catch (error) {
    console.error("GET /api/v1/local-government:", error);

    return NextResponse.json(
      { error: "Failed to fetch local government" },
      { status: 500, headers },
    );
  }
}
