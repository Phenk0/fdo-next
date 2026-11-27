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
  slug: string;
  // to delete later
  createdAt: Date;
};

export const createNews = async ({
  title,
  content,
  tags,
  createdAt,
  slug,
}: CreateNewsProps) => {
  const validatedContent = newsContentSchema.parse(content);

  await prisma.news.create({
    data: {
      title,
      slug,
      content: validatedContent,
      tags,
      // to delete later
      createdAt,
    },
  });
};
