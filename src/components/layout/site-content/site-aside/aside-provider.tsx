"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer";
import { AsideContent } from "./aside-content";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

type AsideContextValue = {
  openAside: () => void;
};

const AsideContext = createContext<AsideContextValue | null>(null);

const drawerScrollbarStyles =
  "[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-muted-foreground [&::-webkit-scrollbar-thumb:hover]:bg-foreground [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-button]:hidden";

export function AsideProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobileNavigation = useMediaQuery("(width < 768px)");

  const openAside = useCallback(() => setIsOpen(true), []);

  return (
    <AsideContext.Provider value={{ openAside }}>
      {children}
      {isMobileNavigation && (
        <Drawer open={isOpen} onOpenChange={setIsOpen} swipeDirection="right">
          <DrawerContent className="p-0">
            <DrawerTitle className="sr-only">Корисні ресурси</DrawerTitle>
            <DrawerDescription className="sr-only">
              Посилання та інформаційні ресурси факультету
            </DrawerDescription>

            <div
              className={cn(
                "h-full overflow-y-auto p-4",
                drawerScrollbarStyles,
              )}
            >
              <AsideContent />
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </AsideContext.Provider>
  );
}

export function useAside() {
  const context = useContext(AsideContext);

  if (!context) {
    throw new Error("useAside must be used within AsideProvider");
  }

  return context;
}
