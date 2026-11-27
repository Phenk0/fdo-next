import { cn } from "@/lib/utils";

export const scrollbarStyles = cn(
  "[&::-webkit-scrollbar]:h-2", // <- Chromium / WebKit
  "[&::-webkit-scrollbar]:w-2",
  "[&::-webkit-scrollbar-track]:rounded-full",
  "[&::-webkit-scrollbar-track]:bg-muted",
  "[&::-webkit-scrollbar-thumb]:rounded-full",
  "[&::-webkit-scrollbar-thumb]:bg-muted-foreground",
  "[&::-webkit-scrollbar-thumb:hover]:bg-foreground",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  "not-supports-[selector(::-webkit-scrollbar)]:[scrollbar-color:var(--muted-foreground)_transparent] not-supports-[selector(::-webkit-scrollbar)]:scrollbar-thin", // <- Firefox
);
