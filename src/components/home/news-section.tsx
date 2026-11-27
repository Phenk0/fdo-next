"use server";

import Link from "next/link";

import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";
import { getHomeNews } from "@/features/news/queries/get-home-news";
import { NewsCard } from "@/components/home/news-card";
import { Button } from "@/components/ui/button";
import { scrollbarStyles } from "@/lib/styles/scrollbar";

export async function NewsSection() {
  const news = await getHomeNews();

  if (news.length === 0) return null;

  return (
    <section aria-labelledby="home-news-title" className="space-y-4">
      <header className="flex items-center justify-between gap-3">
        <h2 id="home-news-title" className="text-2xl font-bold">
          Новини факультету
        </h2>
        <Button
          variant="outline"
          nativeButton={false}
          render={
            <Link
              href={routes.news.archive}
              // className="shrink-0 text-sm font-medium text-primary hover:underline"
            >
              Усі новини →
            </Link>
          }
        />
      </header>

      {/* Large articles: one normally, two from xl */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        {news.slice(0, 2).map((item, index) => (
          <NewsCard
            key={item.id}
            news={item}
            featured
            className={cn(
              news.length === 1 && "xl:col-span-2",
              index === 1 && "hidden xl:block",
            )}
          />
        ))}
      </div>

      {/* Horizontal row below xl: starts with article 2 */}
      {news.length > 1 && (
        <div
          className={cn(
            "flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 xl:hidden",
            scrollbarStyles,
          )}
        >
          {news.slice(1).map((item) => (
            <NewsCard
              key={item.id}
              news={item}
              className="w-[40%] shrink-0 snap-start sm:w-[40%] lg:w-[28.5%]"
            />
          ))}
        </div>
      )}

      {/* Horizontal row at xl: starts with article 3 */}
      {news.length > 2 && (
        <div
          className={cn(
            "hidden xl:flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3",
            scrollbarStyles,
          )}
        >
          {news.slice(2).map((item) => (
            <NewsCard
              key={item.id}
              news={item}
              className="w-[22.25%] shrink-0 snap-start"
            />
          ))}
        </div>
      )}
    </section>
  );
}
