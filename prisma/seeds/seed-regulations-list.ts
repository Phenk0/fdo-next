// import "dotenv/config";
//
// import { PrismaPg } from "@prisma/adapter-pg";
// import regulations from "../data/regulation-list.json";
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
// async function seedRegulationList() {
//   await prisma.regulationList.createMany({
//     data: regulations satisfies Prisma.RegulationListCreateManyInput[],
//   });
//
//   console.log(`Successfully seeded ${regulations.length} regulations.`);
// }
//
// seedRegulationList()
//   .catch((error) => {
//     console.error("Failed to seed regulations:", error);
//     process.exitCode = 1;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
