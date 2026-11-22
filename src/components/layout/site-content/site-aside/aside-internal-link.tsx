"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type AsideExternalLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: string;
  children: ReactNode;
};

export function AsideInternalLink({
  href,
  children,
  ...props
}: AsideExternalLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Button
      variant={isActive ? "secondary" : "link"}
      nativeButton={false}
      disabled={isActive}
      className={cn(
        "h-auto w-full whitespace-normal text-base py-2 justify-between",
        isActive
          ? "underline underline-offset-4"
          : "text-foreground/80 hover:text-foreground",
      )}
      render={
        <Link href={href} {...props}>
          {children}
        </Link>
      }
    />
  );
}
