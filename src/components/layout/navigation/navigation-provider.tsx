"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
  Suspense,
} from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer";
import { NavigationDrawer } from "./navigation-drawer";

type NavigationContextValue = {
  openMenu: () => void;
  closeMenu: () => void;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const is3xlNavigation = useMediaQuery("(width < 1800px)");

  const openMenu = useCallback(() => setIsOpen(true), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <NavigationContext.Provider value={{ openMenu, closeMenu }}>
      {children}
      {is3xlNavigation && (
        <Drawer swipeDirection="left" open={isOpen} onOpenChange={setIsOpen}>
          <DrawerContent>
            <DrawerTitle className="sr-only">Навігація сайту</DrawerTitle>
            <DrawerDescription className="sr-only">
              Основні розділи сайту факультету
            </DrawerDescription>

            <Suspense fallback={null}>
              <NavigationDrawer />
            </Suspense>
          </DrawerContent>
        </Drawer>
      )}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }

  return context;
}
