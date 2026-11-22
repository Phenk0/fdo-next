import Image from "next/image";
import Link from "next/link";
import { LucideMail, LucidePhone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { Button } from "@/components/ui/button";
import { MenuButton } from "@/components/layout/site-header/menu-button";
import { AsideTrigger } from "@/components/layout/site-content/site-aside/aside-trigger";
import { routes } from "@/config/routes";

export function SiteHeader() {
  return (
    <header className="max-w-480 mx-auto w-full bg-background">
      {/* Contact bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2 text-sm">
        <MenuButton ariaLabel="Відкрити меню" />
        <address className="flex flex-wrap items-center gap-x-5 gap-y-2 not-italic">
          <Button
            variant="ghost"
            render={
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2"
                title={siteConfig.phone}
              >
                <LucidePhone className="size-4" />
                <span className="hidden sm:inline-block">
                  {siteConfig.phone}
                </span>
              </a>
            }
            nativeButton={false}
          />
          <Button
            variant="ghost"
            render={
              <a
                href={`mailto:${siteConfig.email}`}
                title={siteConfig.email}
                className="inline-flex items-center gap-2"
              >
                <LucideMail className="size-4" />
                <span className="hidden sm:inline-block">
                  {siteConfig.email}
                </span>
              </a>
            }
            nativeButton={false}
          />
        </address>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">Вітаємо на сайті Факультету</span>
          <ThemeSwitcher />
          <AsideTrigger />
        </div>
      </div>

      {/* Branding */}
      <div className="flex justify-center px-4 py-2 md:py-6">
        {/* <- centered */}
        <Link
          href={routes.home}
          aria-label={siteConfig.name.short}
          className="flex w-full max-w-5xl items-center justify-center gap-6"
        >
          <Image
            src={siteConfig.logo}
            alt=""
            width={160}
            height={160}
            priority
            className="size-24 shrink-0 object-contain sm:size-28 lg:size-32"
          />

          <div className="min-w-0 text-center">
            <p className="text-2xl font-bold uppercase leading-tight sm:text-3xl lg:text-4xl">
              {" "}
              {/* <- larger */}
              {siteConfig.name.short}
            </p>
            <p className=" hidden sm:block mt-2 text-sm font-medium sm:text-base lg:text-lg">
              {siteConfig.university.long}
            </p>
            <p className="sm:hidden mt-2 text-sm font-medium sm:text-base lg:text-lg">
              {siteConfig.university.short}
            </p>
          </div>
        </Link>
      </div>

      {/* University motto */}
      <div className="px-4 py-3 text-center text-sm text-primary-foreground font-semibold italic sm:text-base bg-primary truncate">
        {siteConfig.motto}
      </div>
    </header>
  );
}
