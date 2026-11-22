"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ExternalLink } from "lucide-react";
import type { NavigationItem } from "@/config/navigation";
import { useNavigation } from "./navigation-provider";
import { cn } from "@/lib/utils";

function isRouteActive(href: string, pathname: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}
const isPageActive = (href: string, pathname: string) => pathname === href;

function hasActiveDescendant(item: NavigationItem, pathname: string): boolean {
  return (
    item.children?.some(
      (child) =>
        isRouteActive(child.href, pathname) ||
        hasActiveDescendant(child, pathname),
    ) ?? false
  );
}

function isExternalHref(href: string) {
  return href.startsWith("http");
}

export function NavigationItemRow({ item }: { item: NavigationItem }) {
  const pathname = usePathname();
  const { closeMenu } = useNavigation();

  const isActive = isPageActive(item.href, pathname);
  const hasChildren = Boolean(item.children?.length);

  const [previousPathname, setPreviousPathname] = useState(pathname);
  const [expandedOverride, setExpandedOverride] = useState<boolean | null>(
    null,
  );
  if (previousPathname !== pathname) {
    setPreviousPathname(pathname);
    setExpandedOverride(null);
  }
  const shouldExpand = hasActiveDescendant(item, pathname);
  const isExpanded = expandedOverride ?? shouldExpand;

  function toggleExpanded() {
    setExpandedOverride((previous) => !(previous ?? shouldExpand));
  }
  return (
    <li>
      <div
        className={cn(
          "flex items-center justify-between gap-2 rounded-md px-4 py-3 text-primary-foreground hover:bg-primary-foreground/10",
          isActive ? "bg-primary-foreground/15 underline font-semibold" : "",
        )}
      >
        {isExternalHref(item.href) ? (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center gap-2 rounded-md px-4 py-2 text-base text-primary-foreground "
          >
            {item.title} <ExternalLink className="size-4 shrink-0" />
          </a>
        ) : (
          <Link
            href={item.href}
            onClick={closeMenu}
            aria-current={pathname === item.href ? "page" : undefined}
            className="min-w-0 flex-1 px-4 py-2  text-base text-primary-foreground"
          >
            {item.title}
          </Link>
        )}

        {hasChildren && (
          <button
            type="button"
            aria-label={`${isExpanded ? "Згорнути" : "Розгорнути"} ${item.title}`}
            aria-expanded={isExpanded}
            onClick={toggleExpanded}
            className="mr-2 rounded-md p-2 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ChevronRight
              className={cn(
                "size-5 transition-transform duration-200",
                isExpanded ? "rotate-90" : "",
              )}
            />
          </button>
        )}
      </div>

      {hasChildren && (
        <ul
          className={cn(
            "ml-4 grid transition-[grid-template-rows] duration-200",
            isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <li className="overflow-hidden">
            <ul className="space-y-1 border-l border-primary-foreground/25 pl-2">
              {item.children?.map((child) => (
                <NavigationItemRow key={child.href} item={child} />
              ))}
            </ul>
          </li>
        </ul>
      )}
    </li>
  );
}
