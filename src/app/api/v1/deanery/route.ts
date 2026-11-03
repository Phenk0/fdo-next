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
    const employees = await prisma.employee.findMany({
      where: {
        deaneryProfile: {
          isNot: null,
        },
      },
      select: {
        name: true,
        academicTitle: true,
        photoUrl: true,
        emails: true,
        phones: true,

        deaneryProfile: {
          select: {
            deaneryRole: true,
          },
        },
        facultyProfile: {
          select: {
            jobTitle: true,
          },
        },
      },
      orderBy: {
        deaneryProfile: {
          sortOrder: "asc",
        },
      },
    });

    return NextResponse.json(
      employees.map(({ deaneryProfile, facultyProfile, ...employee }) => ({
        ...employee,
        deaneryRole: deaneryProfile!.deaneryRole,
        jobTitle: facultyProfile?.jobTitle || null,
      })),
      { headers },
    );
  } catch (error) {
    console.error("GET /api/v1/deanery:", error);

    return NextResponse.json(
      { error: "Failed to fetch deanery employees" },
      { status: 500, headers },
    );
  }
}
