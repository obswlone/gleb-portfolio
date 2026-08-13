import type { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";
import { about, person, social } from "@/content/site";

export const metadata: Metadata = {
  title: about.title,
  description: about.description,
};

export default function AboutPage() {
  return (
    <article>
      <PageIntro title={about.title} description={about.description} />
      <dl className="space-y-8 border-t border-border pt-8">
        <div className="grid gap-2 sm:grid-cols-[8rem_1fr]">
          <dt className="text-sm text-muted">Role</dt>
          <dd>{person.headline}</dd>
        </div>
        <div className="grid gap-2 sm:grid-cols-[8rem_1fr]">
          <dt className="text-sm text-muted">Connect</dt>
          <dd className="flex flex-col gap-2">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="w-fit underline-offset-4 transition-colors hover:underline"
                {...(item.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {item.name}
              </a>
            ))}
          </dd>
        </div>
      </dl>
    </article>
  );
}
