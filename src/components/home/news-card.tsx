import { getHomeNews } from "@/features/news/queries/get-home-news";
import Link from "next/link";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";
import { newsContentSchema } from "@/features/news/schemas/news-content.schema";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

type NewsItem = Awaited<ReturnType<typeof getHomeNews>>[number];

export function NewsCard({
  news,
  featured = false,
  className,
}: {
  news: NewsItem;
  featured?: boolean;
  className?: string;
}) {
  const parsedContent = newsContentSchema.safeParse(news.content);
  const blocks = parsedContent.success ? parsedContent.data : [];

  const image = blocks.find((block) => block.type === "imageGallery")
    ?.images[0];
  const description = blocks.find((block) => block.type === "paragraph")?.text;

  const cardContent = (
    <>
      <div
        className={cn(
          "relative overflow-hidden rounded-lg bg-muted",
          featured ? "aspect-[16/7]" : "aspect-[16/9]",
        )}
      >
        {image ? (
          <Image
            src={image.url}
            alt={image.alt ?? news.title ?? ""}
            fill
            unoptimized
            sizes={featured ? "(min-width: 1280px) 50vw, 100vw" : "40vw"}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <ImageIcon className="size-8 text-muted-foreground" />
          </div>
        )}
      </div>

      <div className="space-y-1.5">
        <time
          dateTime={news.createdAt.toISOString()}
          className="text-xs text-muted-foreground"
        >
          {new Intl.DateTimeFormat("uk-UA", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(news.createdAt)}
        </time>

        {news.title && (
          <h3
            className={cn(
              "font-semibold leading-snug group-hover:text-primary line-clamp-3",
              featured ? "text-lg sm:text-xl" : "text-sm",
            )}
            title={news.title}
          >
            {news.title}
          </h3>
        )}

        {featured && description && (
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </>
  );

  return (
    <article className={cn("min-w-0", className)}>
      {news.slug ? (
        <Link
          href={routes.news.article(news.slug)}
          className="group block space-y-2"
        >
          {cardContent}
        </Link>
      ) : (
        <div className="group space-y-2">{cardContent}</div>
      )}
    </article>
  );
}
