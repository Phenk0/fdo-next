// import "dotenv/config";
//
// import { PrismaPg } from "@prisma/adapter-pg";
// import sportsmen from "./data/sportsmen.json";
// import { PrismaClient, type Sportsman } from "@/generated/prisma/client";
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
// async function seedSportsmen() {
//   await prisma.$transaction(
//     async (tx) => {
//       for (const sportsman of sportsmen) {
//         const { name, groupName, sportTitle, achievements, photoUrl } =
//           sportsman as Sportsman;
//
//         await tx.sportsman.upsert({
//           where: {
//             name_groupName: {
//               name,
//               groupName,
//             },
//           },
//           create: sportsman,
//           update: {
//             sportTitle,
//             achievements,
//             photoUrl,
//           },
//         });
//       }
//     },
//     { timeout: 30_000 },
//   );
//
//   console.log(`Successfully seeded ${sportsmen.length} sportsmen.`);
// }
//
// seedSportsmen()
//   .catch((error) => {
//     console.error("Failed to seed sportsmen:", error);
//     process.exitCode = 1;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
