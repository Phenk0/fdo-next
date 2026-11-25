import Image from "next/image";
import Link from "next/link";
import { LucideMapPin, LucideMail, LucidePhone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { FooterLinks } from "./footer-links";
import { FooterSocials } from "./footer-socials";

const currentYear = new Date().getFullYear();
export function SiteFooter() {
  return (
    <footer className="max-w-480 mx-auto mt-auto bg-primary text-primary-foreground">
      <div className="mx-auto grid w-full max-w-480 grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* 1. Faculty and university identity */}
        <div className="flex flex-col gap-6">
          <Link
            href="/"
            aria-label={siteConfig.name.short}
            className="shrink-0 flex items-center gap-4"
          >
            <Image
              src={siteConfig.logo}
              alt=""
              width={88}
              height={88}
              className="size-22 object-contain"
            />
            <p className="font-semibold">{siteConfig.name.short}</p>
          </Link>

          <a
            href={siteConfig.university.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={siteConfig.university.long}
            className="shrink-0 flex items-center gap-4"
          >
            <Image
              src={siteConfig.university.logo}
              alt=""
              width={88}
              height={88}
              className="size-23 object-contain"
            />
            <p className="text-sm text-primary-foreground/80 font-semibold">
              {siteConfig.university.long}
            </p>
          </a>
        </div>
        {/* 2. Useful links */}
        <div>
          <h2 className="mb-4 font-semibold">Корисні посилання</h2>
          <FooterLinks />
        </div>
        {/* 3. Contacts */}
        <div>
          <h2 className="mb-4 font-semibold">Контакти</h2>

          <address className="space-y-3 text-sm not-italic">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-3 hover:underline"
            >
              <LucidePhone className="size-4 shrink-0" />
              {siteConfig.phone}
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 hover:underline"
            >
              <LucideMail className="size-4 shrink-0" />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.university.location}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:underline"
            >
              <LucideMapPin className="size-4 shrink-0" />
              {siteConfig.university.address}
            </a>
          </address>
        </div>
        {/* 4. Social media */}
        <div>
          <h2 className="mb-4 font-semibold">Ми в соціальних мережах</h2>
          <FooterSocials />
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 px-4 py-4 text-center text-xs opacity-80">
        © {currentYear} {siteConfig.name.short}
      </div>
    </footer>
  );
}
