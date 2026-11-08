import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header>
      <Link href="/">HEADER</Link>
      <ThemeSwitcher />
    </header>
  );
}
