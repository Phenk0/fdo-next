"use client";

import { LucideMoon, LucideSun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    (() => setMounted(true))();
  }, []);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled aria-label="Toggle theme">
        <LucideSun className="size-4.5" />
      </Button>
    );
  }
  const handleThemeChange = () =>
    setTheme(theme === "light" ? "dark" : "light");

  return (
    <Button
      onClick={handleThemeChange}
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
    >
      <LucideSun className="size-4.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <LucideMoon className="absolute size-4.5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
export { ThemeSwitcher };
