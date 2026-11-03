import { createCorsPreflightResponse, getCorsHeaders } from "@/lib/cors";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export function OPTIONS(request: Request) {
  return createCorsPreflightResponse(request);
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const headers = getCorsHeaders(request);
  headers.set("Cache-Control", "no-store");

  try {
    const { slug } = await params;
    const employeeProfile = await prisma.employee.findUnique({
      where: {
        slug,
      },
      select: {
        id: true,
        name: true,
        slug: true,
        academicTitle: true,
        photoUrl: true,
        emails: true,
        phones: true,

        facultyProfile: {
          select: {
            department: true,
            jobTitle: true,
            educationInfo: true,
            degreeInfo: true,
            dissertationTopic: true,
            academicTitleInfo: true,
            awardsAndHonors: true,
            supervisions: true,
            scientificWorksPDF: true,
            scientificWorksUrl: true,
            professionalActivities: true,
            professionalDevelopment: true,
            certificationInfo: true,
            certificates: true,
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
    });

    if (!employeeProfile) {
      return NextResponse.json(
        { error: "Employee not found" },
        { status: 404, headers },
      );
    }

    const { facultyProfile, ...employee } = employeeProfile;

    const data = facultyProfile
      ? {
          ...employee,
          department: facultyProfile.department,
          jobTitle: facultyProfile.jobTitle,
          educationInfo: facultyProfile.educationInfo,
          degreeInfo: facultyProfile.degreeInfo,
          dissertationTopic: facultyProfile.dissertationTopic,
          academicTitleInfo: facultyProfile.academicTitleInfo,
          awardsAndHonors: facultyProfile.awardsAndHonors,
          supervisions: facultyProfile.supervisions,
          scientificWorksPDF: facultyProfile.scientificWorksPDF,
          scientificWorksUrl: facultyProfile.scientificWorksUrl,
          professionalActivities: facultyProfile.professionalActivities,
          professionalDevelopment: facultyProfile.professionalDevelopment,
          certificationInfo: facultyProfile.certificationInfo,
          certificates: facultyProfile.certificates,
          social: {
            googleAcademy: facultyProfile.googleAcademy,
            orcid: facultyProfile.orcid,
            WoSRID: facultyProfile.WoSRID,
            rGate: facultyProfile.rGate,
            scopusID: facultyProfile.scopusID,
            bibliometrics: facultyProfile.bibliometrics,
            scienceUkr: facultyProfile.scienceUkr,
          },
        }
      : employee;

    return NextResponse.json({ data }, { headers });
  } catch (error) {
    console.error("GET /api/v1/employees/[slug]:", error);

    return NextResponse.json(
      { error: "Failed to fetch employee" },
      { status: 500, headers },
    );
  }
}
