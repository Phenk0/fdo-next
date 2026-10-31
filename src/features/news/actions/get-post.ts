"use server";

import { prisma } from "@/lib/prisma";
import { newsContentSchema } from "@/features/news/schemas/news-content.schema";

export const getPost = async ({ slug }: { slug: string }) => {
  const news = await prisma.news.findUnique({
    where: { slug },
  });

  if (!news) return null;

  const content = newsContentSchema.parse(news.content);

  return {
    ...news,
    content,
  };
};
