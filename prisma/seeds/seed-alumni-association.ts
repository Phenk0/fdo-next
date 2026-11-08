// import "dotenv/config";
//
// import { PrismaPg } from "@prisma/adapter-pg";
// import alumni from "./data/alumni-association.json";
// import { PrismaClient } from "@/generated/prisma/client";
// import type { Prisma } from "@/generated/prisma/client";
//
// const connectionString = process.env.DATABASE_URL;
//
// if (!connectionString) {
//   throw new Error("DATABASE_URL is not defined");
// }
//
// const adapter = new PrismaPg({ connectionString });
// const prisma = new PrismaClient({ adapter });
//
// async function seedAlumniAssociation() {
//   await prisma.alumni.createMany({
//     data: alumni satisfies Prisma.AlumniReviewCreateManyInput[],
//   });
//
//   console.log(`Successfully seeded ${alumni.length} alumni.`);
// }
//
// seedAlumniAssociation()
//   .catch((error) => {
//     console.error("Failed to seed alumni:", error);
//     process.exitCode = 1;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
