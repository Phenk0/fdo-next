"use server";

import { NewsStatus, NewsTag } from "@/generated/prisma/enums";
import { prisma } from "@/lib/prisma";

const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

export async function getHomeNews() {
  const where = {
    status: NewsStatus.PUBLISHED,
    tags: { has: NewsTag.news },
  };

  const recentNews = await prisma.news.findMany({
    where: {
      ...where,
      createdAt: { gte: thirtyDaysAgo },
    },
    orderBy: [{ createdAt: "desc" }, { id: "desc" }],
  });

  if (recentNews.length > 5) return recentNews;

  return prisma.news.findMany({
    where,
    orderBy: [{ createdAt: "desc" }, { id: "desc" }],
    take: 6,
  });
}
