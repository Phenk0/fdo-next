// import "dotenv/config";
//
// import { PrismaPg } from "@prisma/adapter-pg";
// import localGovernment from "../data/local-government.json";
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
// async function seedLocalGovernment() {
//   await prisma.localGovernment.createMany({
//     data: localGovernment satisfies Prisma.LocalGovernmentCreateManyInput[],
//   });
//
//   console.log(
//     `Successfully seeded ${localGovernment.length} local government.`,
//   );
// }
//
// seedLocalGovernment()
//   .catch((error) => {
//     console.error("Failed to seed local government:", error);
//     process.exitCode = 1;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
