import { z } from "zod";

const paragraphSchema = z.object({
  type: z.literal("paragraph"),
  text: z.string(),
});

const imageGallerySchema = z.object({
  type: z.literal("imageGallery"),
  images: z.array(
    z.object({
      url: z.url(),
      alt: z.string().optional(),
    }),
  ),
});

const pdfSchema = z.object({
  type: z.literal("pdf"),
  url: z.url(),
  title: z.string().optional(),
});

const videoBlockSchema = z.object({
  type: z.literal("video"),
  url: z.url(),
  title: z.string().optional(),
});

export const newsContentSchema = z.array(
  z.discriminatedUnion("type", [
    paragraphSchema,
    imageGallerySchema,
    pdfSchema,
    videoBlockSchema,
  ]),
);

export type NewsContent = z.infer<typeof newsContentSchema>;
