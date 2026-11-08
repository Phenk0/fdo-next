// import employees from "./data/departments/personnel.json";
// import { prisma } from "@/lib/prisma-client";
//
// type Department = "KDPP" | "KTMDO" | "KTMFV";
//
// type EmployeeSeed = {
//   slug: string;
//   name: string;
//   photoUrl?: string | null;
//   academicTitle?: string | null;
//   emails?: string[];
//   phones?: string[];
//
//   // Faculty profile
//   department?: string;
//   jobTitle?: string;
//   educationInfo?: string[];
//   degreeInfo?: string[];
//   dissertationTopic?: string[];
//   academicTitleInfo?: string[];
//   awardsAndHonors?: string[];
//   supervisions?: string[];
//   scientificWorksPDF?: string | null;
//   scientificWorksUrl?: string | null;
//   professionalActivities?: string | null;
//   professionalDevelopment?: string[];
//   certificationInfo?: string | null;
//   certificates?: string[];
//   googleAcademy?: string | null;
//   orcid?: string | null;
//   WoSRID?: string | null;
//   rGate?: string | null;
//   scopusID?: string | null;
//   bibliometrics?: string | null;
//   scienceUkr?: string | null;
//
//   // Deanery profile
//   deaneryRole?: string;
//
//   // Display order
//   sortOrder?: number;
// };
//
// const people = employees as EmployeeSeed[];
//
// const departments = ["KDPP", "KTMDO", "KTMFV"] as const;
//
// function getDepartment(value?: string): Department | null {
//   if (!value) return null;
//
//   if (!departments.includes(value as Department)) {
//     throw new Error(`Unknown department: ${value}`);
//   }
//
//   return value as Department;
// }
//
// async function main() {
//   // Validate source data before writing anything.
//   const slugs = people.map(({ slug }) => slug);
//
//   if (new Set(slugs).size !== slugs.length) {
//     throw new Error("Duplicate employee slugs found in employees.json");
//   }
//
//   await prisma.$transaction(
//     async (tx) => {
//       for (const person of people) {
//         const department = getDepartment(person.department);
//
//         if (department && !person.jobTitle) {
//           throw new Error(`Missing jobTitle for ${person.slug}`);
//         }
//
//         if (!department && !person.deaneryRole) {
//           throw new Error(`No profile defined for ${person.slug}`);
//         }
//
//         // 1. Create or reuse Employee.
//         const employee = await tx.employee.upsert({
//           where: { slug: person.slug },
//           create: {
//             slug: person.slug,
//             name: person.name,
//             photoUrl: person.photoUrl ?? null,
//             academicTitle: person.academicTitle ?? null,
//             emails: person.emails ?? [],
//             phones: person.phones ?? [],
//           },
//           update: {},
//         });
//         const check = await tx.employee.findUnique({
//           where: { id: employee.id },
//         });
//
//         console.log({
//           slug: person.slug,
//           employeeId: employee.id,
//           employeeExists: !!(await tx.employee.findUnique({
//             where: { id: employee.id },
//           })),
//         });
//         // 2. Create FacultyProfile only when department exists.
//         if (department) {
//           // await tx.facultyProfile.upsert({
//           //   where: { employeeId: employee.id },
//           //   create: {
//           await tx.facultyProfile.create({
//             data: {
//               employeeId: employee.id,
//               department,
//               jobTitle: person.jobTitle!,
//               educationInfo: person.educationInfo ?? [],
//               degreeInfo: person.degreeInfo ?? [],
//               dissertationTopic: person.dissertationTopic ?? [],
//               academicTitleInfo: person.academicTitleInfo ?? [],
//               awardsAndHonors: person.awardsAndHonors ?? [],
//               supervisions: person.supervisions ?? [],
//               scientificWorksPDF: person.scientificWorksPDF ?? null,
//               scientificWorksUrl: person.scientificWorksUrl ?? null,
//               professionalActivities: person.professionalActivities ?? null,
//               professionalDevelopment: person.professionalDevelopment ?? [],
//               certificationInfo: person.certificationInfo ?? null,
//               certificates: person.certificates ?? [],
//               googleAcademy: person.googleAcademy ?? null,
//               orcid: person.orcid ?? null,
//               WoSRID: person.WoSRID ?? null,
//               rGate: person.rGate ?? null,
//               scopusID: person.scopusID ?? null,
//               bibliometrics: person.bibliometrics ?? null,
//               scienceUkr: person.scienceUkr ?? null,
//               sortOrder: person.sortOrder ?? 0,
//             },
//             // update: {},
//           });
//         }
//
//         // 3. Create DeaneryProfile only when deaneryRole exists.
//         if (person.deaneryRole) {
//           await tx.deaneryProfile.upsert({
//             where: { employeeId: employee.id },
//             create: {
//               employeeId: employee.id,
//               deaneryRole: person.deaneryRole,
//               sortOrder: person.sortOrder ?? 0,
//             },
//             update: {},
//           });
//         }
//       }
//     },
//     {
//       maxWait: 10_000,
//       timeout: 30_000,
//     },
//   );
//
//   console.log(`Imported ${people.length} employees.`);
// }
//
// main()
//   .catch((error) => {
//     console.error("Seed failed:", error);
//     process.exitCode = 1;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
