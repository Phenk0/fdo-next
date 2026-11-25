import { ReactNode, Suspense } from "react";
import { NavigationDrawer } from "@/components/layout/navigation/navigation-drawer";
import { cn } from "@/lib/utils";
import { AsideContent } from "@/components/layout/site-content/site-aside/aside-content";

type SiteLayoutProps = {
  children: ReactNode;
};
const drawerScrollbarStyles =
  "[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-muted-foreground [&::-webkit-scrollbar-thumb:hover]:bg-primary-foreground [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-button]:hidden";

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="w-full max-w-480 min-h-screen mx-auto bg-background">
      <div
        className={cn(
          "h-full grid grid-cols-[minmax(0,1fr)] gap-6 p-4",
          "md:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)] md:p-6",
          "3xl:grid-cols-[minmax(260px,0.8fr)_minmax(0,2fr)_minmax(280px,0.8fr)] 3xl:p-8",
        )}
      >
        <aside
          className={cn(
            "hidden",
            "3xl:h-full 3xl:block 3xl:sticky 3xl:top-4 3xl:self-start 3xl:max-h-[calc(100dvh-2rem)] 3xl:overflow-y-auto",
            drawerScrollbarStyles,
          )}
        >
          <Suspense fallback={null}>
            <NavigationDrawer />
          </Suspense>
        </aside>

        <main id="main-content" className="min-w-0">
          {children}
        </main>

        <aside className={cn("hidden", "md:block md:min-w-0")}>
          <Suspense fallback={null}>
            <AsideContent />
          </Suspense>
        </aside>
      </div>
    </div>
  );
}
