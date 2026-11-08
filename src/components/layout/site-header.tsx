import Image from "next/image";
import Link from "next/link";
import { LucideMail, LucidePhone } from "lucide-react";

import { siteConfig } from "@/config/site";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";

export function SiteHeader() {
  return (
    <header>
      {/* Contact bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2 text-sm">
        <address className="flex flex-wrap items-center gap-x-5 gap-y-2 not-italic">
          <a
            href={`tel:${siteConfig.phone}`} // <- use config
            className="inline-flex items-center gap-2"
          >
            <LucidePhone className="size-4" />
            {siteConfig.phone}
          </a>

          <a
            href={`mailto:${siteConfig.email}`} // <- use config
            className="inline-flex items-center gap-2"
          >
            <LucideMail className="size-4" />
            {siteConfig.email}
          </a>
        </address>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">Вітаємо на сайті Факультету</span>
          <ThemeSwitcher />
        </div>
      </div>

      {/* Branding */}
      <div className="flex justify-center px-4 py-8">
        {" "}
        {/* <- centered */}
        <Link
          href="/"
          aria-label={siteConfig.name.short}
          className="flex w-full max-w-5xl items-center justify-center gap-6"
        >
          <Image
            src={siteConfig.logo}
            alt=""
            width={160}
            height={160}
            priority
            className="size-24 shrink-0 object-contain sm:size-28" // <- larger logo
          />

          <div className="min-w-0 text-center">
            <p className="text-2xl font-bold uppercase leading-tight sm:text-3xl lg:text-4xl">
              {" "}
              {/* <- larger */}
              {siteConfig.name.short}
            </p>
            <p className="mt-2 text-sm font-medium sm:text-base lg:text-lg">
              {siteConfig.university.long}
            </p>
          </div>
        </Link>
      </div>

      {/* University motto */}
      <div className="px-4 py-3 text-center text-sm font-semibold italic sm:text-base bg-primary">
        {siteConfig.motto}
      </div>
    </header>
  );
}
