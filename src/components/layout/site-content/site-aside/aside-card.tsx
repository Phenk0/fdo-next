import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AsideCardTitleLink } from "@/components/layout/site-content/site-aside/aside-card-title-link";

type AsideCardProps = {
  title: string;
  titleLink?: string;
  children?: ReactNode;
  className?: string;
};

export function AsideCard({
  title,
  titleLink,
  children,
  className,
}: AsideCardProps) {
  return (
    <section
      className={cn("rounded-lg border overflow-hidden mb-2", className)}
    >
      <h2 className="px-4 py-3 font-semibold bg-primary/95 text-primary-foreground">
        {titleLink ? (
          <AsideCardTitleLink title={title} titleLink={titleLink} />
        ) : (
          title
        )}
      </h2>

      {children && (
        <div className="space-y-2 p-1 bg-card text-card-foreground">
          {children}
        </div>
      )}
    </section>
  );
}
