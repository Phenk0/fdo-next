import { createCorsPreflightResponse, getCorsHeaders } from "@/lib/cors";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Department } from "@/generated/prisma/enums";
import { z } from "zod";

export function OPTIONS(request: Request) {
  return createCorsPreflightResponse(request);
}

const querySchema = z.object({
  department: z.enum(Department).optional(),
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

  const { department } = validation.data;

  try {
    const employees = await prisma.employee.findMany({
      where: {
        facultyProfile: {
          department,
        },
      },
      select: {
        id: true,
        name: true,
        slug: true,
        academicTitle: true,
        photoUrl: true,
        emails: true,

        facultyProfile: {
          select: {
            jobTitle: true,
            googleAcademy: true,
            orcid: true,
            WoSRID: true,
            rGate: true,
            scopusID: true,
            bibliometrics: true,
            scienceUkr: true,
          },
        },
      },
      orderBy: {
        facultyProfile: {
          sortOrder: "asc",
        },
      },
    });

    return NextResponse.json(
      employees.map(({ facultyProfile, ...employee }) => ({
        ...employee,
        jobTitle: facultyProfile!.jobTitle,
        social: {
          googleAcademy: facultyProfile!.googleAcademy,
          orcid: facultyProfile!.orcid,
          WoSRID: facultyProfile!.WoSRID,
          rGate: facultyProfile!.rGate,
          scopusID: facultyProfile!.scopusID,
          bibliometrics: facultyProfile!.bibliometrics,
          scienceUkr: facultyProfile!.scienceUkr,
        },
      })),
      { headers },
    );
  } catch (error) {
    console.error("GET /api/v1/employees:", error);

    return NextResponse.json(
      { error: "Failed to fetch employees" },
      { status: 500, headers },
    );
  }
}
