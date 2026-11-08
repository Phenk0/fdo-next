import type { ReactNode } from "react";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { NavigationDrawer } from "@/components/layout/navigation";

export default function SiteLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <SiteHeader />

      <div className="site-layout">
        <NavigationDrawer />

        <main id="mail-content">{children}</main>
      </div>

      <SiteFooter />
    </>
  );
}
