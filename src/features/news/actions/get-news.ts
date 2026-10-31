"use server";

import { prisma } from "@/lib/prisma";
import { newsContentSchema } from "@/features/news/schemas/news-content.schema";
import type { NewsTag } from "@/generated/prisma/enums";

type GetNewsProps = {
  tags: NewsTag[];
};
export const getNews = async ({ tags }: GetNewsProps) => {
  const news = await prisma.news.findMany({
    where: {
      ...(tags?.length && {
        tags: { hasSome: tags },
      }),
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return news.map((post) => ({
    ...post,
    content: newsContentSchema.parse(post.content),
  }));
};
