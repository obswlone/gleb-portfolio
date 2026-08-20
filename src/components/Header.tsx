"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { LuHouse } from "react-icons/lu";

import { ThemeToggle } from "@/components/ThemeToggle";
import { nav } from "@/content/site";

function TimeDisplay() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="hidden min-w-[5.5rem] font-mono text-xs text-muted tabular-nums sm:inline">
      {time || "\u00a0"}
    </span>
  );
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-center gap-2 px-6 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:gap-0">
        <TimeDisplay />

        <nav className="flex items-center gap-1 rounded-full border border-border bg-surface/80 p-1">
          <Link
            href="/"
            aria-label="Home"
            className={`flex size-8 items-center justify-center rounded-full text-sm font-medium transition-colors ${
              pathname === "/"
                ? "bg-foreground text-background"
                : "text-muted hover:text-foreground"
            }`}
          >
            <LuHouse className="size-4" />
          </Link>
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                  active
                    ? "bg-foreground text-background"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
