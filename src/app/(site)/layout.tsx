import type { ReactNode } from "react";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CompactHeader } from "@/components/layout/compact-header";
import { NavigationProvider } from "@/components/layout/navigation/navigation-provider";

export default function SiteLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <NavigationProvider>
      <SiteHeader />
      <CompactHeader />
      <div className="site-layout">
        <main id="mail-content">{children}</main>
      </div>

      <SiteFooter />
    </NavigationProvider>
  );
}
