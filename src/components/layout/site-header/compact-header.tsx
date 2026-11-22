"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { cn } from "@/lib/utils";
import { MenuButton } from "@/components/layout/site-header/menu-button";
import { AsideTrigger } from "@/components/layout/site-content/site-aside/aside-trigger";
import { routes } from "@/config/routes";

export function CompactHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 250); // <- added
    };

    handleScroll(); // <- added: initial state
    window.addEventListener("scroll", handleScroll, { passive: true }); // <- added

    return () => window.removeEventListener("scroll", handleScroll); // <- added
  }, []);

  return (
    <header
      aria-hidden={!isVisible}
      inert={!isVisible}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-background/90 shadow-sm backdrop-blur duration-300",
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none",
        "3xl:hidden",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4">
        <MenuButton ariaLabel="Відкрити меню" />
        <Link
          href={routes.home}
          aria-label={siteConfig.name.short}
          className="flex min-w-0 flex-1 items-center gap-3"
        >
          <Image
            src={siteConfig.logo}
            alt=""
            width={160}
            height={160}
            className="size-10 shrink-0 object-contain"
          />

          <div className="min-w-0">
            <p className="truncate text-sm font-bold uppercase sm:text-base">
              {siteConfig.name.short}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {siteConfig.university.short}
            </p>
          </div>
        </Link>
        <ThemeSwitcher />
        <AsideTrigger />
      </div>
    </header>
  );
}
