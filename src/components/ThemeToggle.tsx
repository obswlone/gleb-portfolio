"use client";

import { LuMoon, LuSun } from "react-icons/lu";

import { ThemeContext } from "@/context/theme";

export function ThemeToggle() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button
          type="button"
          onClick={toggleTheme}
          className="flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground"
          aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        >
          {theme === "dark" ? (
            <LuSun className="size-4" />
          ) : (
            <LuMoon className="size-4" />
          )}
        </button>
      )}
    </ThemeContext.Consumer>
  );
}
