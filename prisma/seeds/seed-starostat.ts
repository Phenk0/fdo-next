// import "dotenv/config";
//
// import { PrismaPg } from "@prisma/adapter-pg";
// import starostat from "../data/starostat.json";
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
// async function seedStarostat() {
//   await prisma.starostat.createMany({
//     data: starostat satisfies Prisma.StarostatCreateManyInput[],
//   });
//
//   console.log(`Successfully seeded ${starostat.length} starostat.`);
// }
//
// seedStarostat()
//   .catch((error) => {
//     console.error("Failed to seed starostat:", error);
//     process.exitCode = 1;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
