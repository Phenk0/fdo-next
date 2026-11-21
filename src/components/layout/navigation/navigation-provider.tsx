"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";

import { NavigationDrawer } from "./navigation-drawer";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer";

type NavigationContextValue = {
  openMenu: () => void;
  closeMenu: () => void;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = useCallback(() => setIsOpen(true), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <NavigationContext.Provider value={{ openMenu, closeMenu }}>
      {children}

      <Drawer swipeDirection="left" open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent
          className="data-[swipe-direction=left]:h-full data-[swipe-direction=left]:w-[min(85vw,320px)] data-[swipe-direction=left]:max-w-[320px] data-[swipe-direction=left]:rounded-none p-0" // <- changed: navigation panel sizing
        >
          <DrawerTitle className="sr-only">Навігація сайту</DrawerTitle>
          <DrawerDescription className="sr-only">
            Основні розділи сайту факультету
          </DrawerDescription>

          <NavigationDrawer />
        </DrawerContent>
      </Drawer>
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
