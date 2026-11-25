import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { MenuButton } from "@/components/layout/site-header/menu-button";
import { AsideTrigger } from "@/components/layout/site-content/site-aside/aside-trigger";
import { routes } from "@/config/routes";

export function SiteHeader() {
  return (
    <header className="max-w-480 mx-auto w-full bg-background">
      <div className="flex items-center justify-between gap-3 px-4 py-2 text-sm 3xl:justify-end">
        <MenuButton ariaLabel="Відкрити меню" />

        <div className="flex items-center gap-3">
          <span className="hidden xs:inline">Вітаємо на сайті Факультету</span>
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
            className="size-24 xs:size-20 shrink-0 object-contain sm:size-28 lg:size-32"
          />

          <div className="min-w-0 text-center">
            <p className="text-2xl font-bold uppercase leading-tight sm:text-3xl lg:text-4xl">
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
      <div className="truncate bg-primary px-4 py-3 text-center text-sm font-semibold italic text-primary-foreground sm:text-base">
        {siteConfig.motto}
      </div>
    </header>
  );
}
