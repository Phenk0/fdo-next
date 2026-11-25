import type { ReactNode } from "react";

import { SiteHeader } from "@/components/layout/site-header/site-header";
import { SiteFooter } from "@/components/layout/site-footer/site-footer";
import { SiteLayout } from "@/components/layout/site-content/site-layout";
import { CompactHeader } from "@/components/layout/site-header/compact-header";
import { NavigationProvider } from "@/components/layout/navigation/navigation-provider";
import { AsideProvider } from "@/components/layout/site-content/site-aside/aside-provider";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <NavigationProvider>
      <AsideProvider>
        <SiteHeader />
        <CompactHeader />
        <SiteLayout>{children}</SiteLayout>
        <SiteFooter />
      </AsideProvider>
    </NavigationProvider>
  );
}
