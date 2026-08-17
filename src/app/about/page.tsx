import type { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";
import { about } from "@/content/site";

export const metadata: Metadata = {
  title: about.title,
  description: about.description,
};

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-3 border-t border-border py-8 sm:grid-cols-[8rem_1fr] sm:gap-8">
      <h2 className="text-sm text-muted">{label}</h2>
      <div>{children}</div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <article>
      <PageIntro title={about.title} description={about.description} />
      <p className="mb-12 max-w-xl leading-relaxed text-muted">{about.intro}</p>

      <Section label="Work">
        <ul className="space-y-8">
          {about.experience.map((item) => (
            <li key={item.title}>
              <p className="font-medium">{item.title}</p>
              <p className="mt-1 text-sm text-muted">
                {item.place} · {item.timeframe}
              </p>
              <p className="mt-2 leading-relaxed text-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Studies">
        <ul className="space-y-6">
          {about.studies.map((item) => (
            <li key={item.title}>
              <p className="font-medium">{item.title}</p>
              <p className="mt-1 text-sm text-muted">
                {item.place} · {item.timeframe}
              </p>
              <p className="mt-2 leading-relaxed text-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Skills">
        <ul className="flex flex-wrap gap-2">
          {about.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-border px-3 py-1 text-sm text-muted"
            >
              {skill}
            </li>
          ))}
        </ul>
      </Section>
    </article>
  );
}
