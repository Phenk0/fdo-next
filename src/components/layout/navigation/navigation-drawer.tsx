import { cn } from "@/lib/utils";
import { NavigationItemRow } from "@/components/layout/navigation/navigation-item";
import { navigationItems } from "@/config/navigation";

const drawerScrollbarStyles =
  "[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-muted-foreground [&::-webkit-scrollbar-thumb:hover]:bg-primary-foreground [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-button]:hidden";

export function NavigationDrawer() {
  return (
    <nav
      className={cn(
        "h-full flex-1 overflow-y-auto bg-primary px-3 py-6",
        drawerScrollbarStyles,
      )}
    >
      <ul className="space-y-1">
        {navigationItems.map((item) => (
          <NavigationItemRow key={item.href} item={item} />
        ))}
      </ul>
    </nav>
  );
}
