"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LucideMenu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { cn } from "@/lib/utils";

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

  const onMenuClick = () => {};

  return (
    <div
      aria-hidden={!isVisible}
      inert={!isVisible}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-background/95 shadow-sm backdrop-blur duration-300",
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Відкрити меню"
          onClick={onMenuClick}
        >
          <LucideMenu className="size-5" />
        </Button>

        <Link
          href="/"
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
            <p className="hidden truncate text-xs text-muted-foreground sm:block">
              {siteConfig.university.short}
            </p>
          </div>
        </Link>

        <ThemeSwitcher />
      </div>
    </div>
  );
}
