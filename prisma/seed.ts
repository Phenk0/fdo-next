import "dotenv/config";

import { readFile } from "node:fs/promises";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";
import type { Prisma } from "@/generated/prisma/client";
import { NewsStatus, NewsTag } from "@/generated/prisma/enums";

import {
  newsContentSchema,
  type NewsContent,
} from "@/features/news/schemas/news-content.schema";

import { z } from "zod";
import { convertLegacyComponent } from "./htmlToMarkdown";

const connectionString = process.env.DIRECT_URL;

if (!connectionString) {
  throw new Error("DIRECT_URL is not defined");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const legacyNewsSchema = z.array(
  z.object({
    id: z.string(),
    type: z.string(),
    shortCut: z.string(),
    title: z.string(),
    imagesList: z.array(z.string()),
    text: z.array(z.string()),
    component: z.string(),
    pdfUrl: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    linkTo: z.string(),
  }),
);

type LegacyNews = z.infer<typeof legacyNewsSchema>;

type NewsTagValue = (typeof NewsTag)[keyof typeof NewsTag];

const allowedTags = new Set<NewsTagValue>(Object.values(NewsTag));

const unsupportedTags = new Set<string>();

const getNewsTags = (type: string): NewsTagValue[] => {
  const tags = [...new Set(type.split("-"))];

  return tags.map((tag) => {
    if (!allowedTags.has(tag as NewsTagValue)) {
      throw new Error(`Unsupported news tag: "${tag}"`);
    }

    return tag as NewsTagValue;
  });
};

const getNewsContent = (post: LegacyNews[0]): NewsContent => {
  const content: NewsContent = [];

  if (post.shortCut.trim()) {
    content.push({
      type: "paragraph",
      text: post.shortCut.trim(),
    });
  }

  const images = post.imagesList
    .filter((url) => url.trim())
    .map((url) => ({ url }));

  if (images.length) {
    content.push({
      type: "imageGallery",
      images,
    });
  }

  // const paragraphs = post.text.length
  //   ? post.text
  //   : post.shortCut.trim()
  //     ? [post.shortCut.trim()]
  //     : [];
  //
  // for (const text of paragraphs) {
  //   content.push({
  //     type: "paragraph",
  //     text,
  //   });
  // }

  for (const text of post.text) {
    if (text.trim()) {
      content.push({
        type: "paragraph",
        text: text.trim(),
      });
    }
  }

  if (post.pdfUrl) {
    content.push({
      type: "pdf",
      url: post.pdfUrl,
    });
  }

  content.push(...convertLegacyComponent(post.component));

  return newsContentSchema.parse(content);
};

const getNewsData = (post: LegacyNews[0]) => ({
  slug: post.linkTo || `anno-${post.date.replaceAll("-", "")}-${post.id}`,
  title: post.title || null,
  content: getNewsContent(post) as Prisma.InputJsonValue,
  tags: getNewsTags(post.type),
  status: NewsStatus.PUBLISHED,
  createdAt: new Date(`${post.date}T00:00:00.000Z`),
});

const seed = async () => {
  const t0 = performance.now();

  console.log("DB SEED: Started");

  await prisma.news.deleteMany();

  const rawData = await readFile(
    new URL("./data/announcements-list.json", import.meta.url),
    "utf8",
  );

  const news = legacyNewsSchema.parse(JSON.parse(rawData));

  // Do not lose legacy HTML content.
  // const postsWithComponents = news.filter((post) => post.component.trim());
  //
  // if (postsWithComponents.length) {
  //   const ids = postsWithComponents.map((post) => post.id);
  //
  //   throw new Error(
  //     `Found ${postsWithComponents.length} legacy HTML components. ` +
  //       `Convert them before seeding. IDs: ${ids.join(", ")}`,
  //   );
  // }
  // const invalidImages = news.flatMap((post) =>
  //   post.imagesList
  //     .filter((url) => {
  //       try {
  //         new URL(url);
  //         return false;
  //       } catch {
  //         return true;
  //       }
  //     })
  //     .map((url) => ({
  //       id: post.id,
  //       url,
  //     })),
  // );
  //
  // console.table(invalidImages);
  const data = news.map(getNewsData);

  const result = await prisma.news.createMany({
    data,
    skipDuplicates: true,
  });

  console.log(`DB SEED: Inserted ${result.count} announcements`);

  if (unsupportedTags.size) {
    console.warn("DB SEED: Unsupported tags:", [...unsupportedTags].join(", "));
  }

  const t1 = performance.now();

  console.log(`DB SEED: Completed in ${(t1 - t0).toFixed(0)}ms`);
};

seed()
  .catch((error) => {
    console.error("DB SEED: Failed", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
