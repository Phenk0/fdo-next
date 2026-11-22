"use client";

import { Button } from "@/components/ui/button";
import { LucideMenu } from "lucide-react";
import { useNavigation } from "@/components/layout/navigation/navigation-provider";

export function MenuButton({ ariaLabel }: { ariaLabel: string }) {
  const { openMenu } = useNavigation();
  return (
    <Button
      variant="default"
      size="icon"
      aria-label={ariaLabel}
      onClick={openMenu}
      className="3xl:hidden"
    >
      <LucideMenu className="size-5" />
    </Button>
  );
}
