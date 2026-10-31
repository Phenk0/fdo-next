"use server";

import {
  NewsContent,
  newsContentSchema,
} from "@/features/news/schemas/news-content.schema";
import { prisma } from "@/lib/prisma";
import type { NewsTag } from "@/generated/prisma/enums";

type CreateNewsProps = {
  title: string;
  content: NewsContent;
  tags: NewsTag[];
  // to delete later
  createdAt: Date;
};

export const createNews = async ({
  title,
  content,
  tags,
  createdAt,
}: CreateNewsProps) => {
  const validatedContent = newsContentSchema.parse(content);

  await prisma.news.create({
    data: {
      title,
      content: validatedContent,
      tags,
      // to delete later
      createdAt,
    },
  });
};
