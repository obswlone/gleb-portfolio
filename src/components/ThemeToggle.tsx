"use client";

import { LuMoon, LuSun } from "react-icons/lu";

import { useTheme } from "@/context/theme";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground"
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      {theme === "dark" ? (
        <LuSun className="size-4" />
      ) : (
        <LuMoon className="size-4" />
      )}
    </button>
  );
}
