"use client";

import { LucideCheck, LucideLink } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type AsideCardTitleLinkProps = {
  title: string;
  titleLink: string;
};

export function AsideCardTitleLink({
  title,
  titleLink,
}: AsideCardTitleLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === titleLink;

  return (
    <Link
      href={titleLink}
      className={cn(
        "flex justify-between hover:underline underline-offset-4",
        isActive
          ? "font-bold text-primary-foreground underline underline-offset-4"
          : "hover:text-primary-foreground",
      )}
    >
      {title}
      {isActive ? (
        <LucideCheck className="ml-1 size-5 inline-block" />
      ) : (
        <LucideLink className="ml-1 size-5 inline-block" />
      )}
    </Link>
  );
}
