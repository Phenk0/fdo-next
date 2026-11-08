// import "dotenv/config";
//
// import { PrismaPg } from "@prisma/adapter-pg";
// import alumniReviews from "./data/alumni-reviews.json";
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
// async function seedAlumniReviews() {
//   await prisma.alumniReview.createMany({
//     data: alumniReviews satisfies Prisma.AlumniReviewCreateManyInput[],
//   });
//
//   console.log(`Successfully seeded ${alumniReviews.length} alumni reviews.`);
// }
//
// seedAlumniReviews()
//   .catch((error) => {
//     console.error("Failed to seed alumni reviews:", error);
//     process.exitCode = 1;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
