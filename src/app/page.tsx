import Link from "next/link";

import { home, nav, person } from "@/content/site";

export default function Home() {
  return (
    <section className="flex flex-col gap-8">
      <p className="text-sm text-muted">{person.role}</p>
      <h1 className="max-w-lg text-4xl font-semibold tracking-tight sm:text-5xl">
        {person.name}. {home.headline}
      </h1>
      <p className="max-w-xl text-lg leading-relaxed text-muted">{home.subline}</p>
      <div className="flex flex-wrap gap-3">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full border border-border px-4 py-2 text-sm transition-colors hover:bg-surface"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
