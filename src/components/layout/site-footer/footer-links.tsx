import Link from "next/link";
import { routes } from "@/config/routes";

const footerLinks = [
  { title: "Про факультет", href: routes.about.index },
  { title: "Навчання", href: routes.discipline.index },
  { title: "Наука", href: routes.science.index },
  { title: "Вступникам", href: routes.entrants.index },
  { title: "Асоціація випускників", href: routes.alumni.association },
  { title: "Відгуки випускників", href: routes.alumni.reviews },
  { title: "Карта сайту", href: routes.map },
];

export function FooterLinks() {
  return (
    <ul className="space-y-2 text-sm">
      {footerLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="opacity-80 transition-opacity hover:opacity-100 hover:underline"
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
