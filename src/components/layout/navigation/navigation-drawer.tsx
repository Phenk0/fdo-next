"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ExternalLink } from "lucide-react";

import { navigationItems, type NavigationItem } from "@/config/navigation";
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
  return href.startsWith("http"); // <- external URL detection
}

function NavigationItemRow({ item }: { item: NavigationItem }) {
  // const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const { closeMenu } = useNavigation();

  const isActive = isPageActive(item.href, pathname);
  const hasChildren = Boolean(item.children?.length);
  const shouldExpand = hasActiveDescendant(item, pathname);

  const [isExpanded, setIsExpanded] = useState(shouldExpand);

  useEffect(() => {
    const effect = () => setIsExpanded(shouldExpand);
    effect();
  }, [shouldExpand]);

  return (
    <li>
      <div
        className={cn(
          "flex items-center justify-between gap-2 rounded-md px-4 py-3 text-white hover:bg-white/10",
          isActive ? "bg-white/15 underline font-semibold" : "",
        )}
      >
        {isExternalHref(item.href) ? (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center gap-2 rounded-md px-4 py-3 text-white "
          >
            {item.title} <ExternalLink className="size-4 shrink-0" />
          </a>
        ) : (
          <Link
            href={item.href}
            onClick={closeMenu}
            aria-current={pathname === item.href ? "page" : undefined}
            className="min-w-0 flex-1 px-4 py-3 text-white"
          >
            {item.title}
          </Link>
        )}

        {hasChildren && (
          <button
            type="button"
            aria-label={`${isExpanded ? "Згорнути" : "Розгорнути"} ${item.title}`}
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded((previous) => !previous)}
            className="mr-2 rounded-md p-2 text-white hover:bg-white/10"
          >
            <ChevronDown
              className={cn(
                "size-5 transition-transform duration-200",
                isExpanded ? "rotate-180" : "",
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
            <ul className="space-y-1 border-l border-white/25 pl-2">
              {item.children!.map((child) => (
                <NavigationItemRow key={child.href} item={child} />
              ))}
            </ul>
          </li>
        </ul>
      )}
    </li>
  );
}

export function NavigationDrawer() {
  return (
    <nav className="h-full overflow-y-auto bg-primary px-3 py-6">
      <ul className="space-y-1">
        {navigationItems.map((item) => (
          <NavigationItemRow key={item.href} item={item} />
        ))}
      </ul>
    </nav>
  );
}
