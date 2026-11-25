import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    title: "Facebook",
    href: siteConfig.facebook,
    icon: siteConfig.facebookLogo,
  },
  {
    title: "Instagram",
    href: siteConfig.instagram,
    icon: siteConfig.instagramLogo,
  },
  {
    title: "YouTube",
    href: siteConfig.youtube,
    icon: siteConfig.youtubeLogo,
  },
];

export function FooterSocials() {
  return (
    <ul className="flex items-center gap-3">
      {socialLinks.map(({ title, href, icon }) => (
        <li key={title}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={title}
            title={title}
          >
            <Button
              variant="link"
              size="icon"
              nativeButton={false}
              render={
                <Image
                  src={icon}
                  alt=""
                  width={22}
                  height={22}
                  className="size-10 object-contain"
                />
              }
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
