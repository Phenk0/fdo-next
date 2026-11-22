"use client";

import { PanelRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAside } from "./aside-provider";

export function AsideTrigger() {
  const { openAside } = useAside();

  return (
    <Button
      type="button"
      variant="secondary"
      size="icon"
      aria-label="Відкрити корисні ресурси"
      onClick={openAside}
      className="md:hidden"
    >
      <PanelRight className="size-5" />
    </Button>
  );
}
