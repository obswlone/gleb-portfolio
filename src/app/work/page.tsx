import type { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";
import { work } from "@/content/site";

export const metadata: Metadata = {
  title: work.title,
  description: work.description,
};

export default function WorkPage() {
  return (
    <article>
      <PageIntro title={work.title} description={work.description} />
      <ul className="flex flex-col gap-12">
        {work.projects.map((project) => (
          <li key={project.name} className="flex flex-col gap-4">
            <p className="leading-relaxed text-muted">{project.contribution}</p>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border bg-surface/80 p-4 transition-colors hover:border-foreground/20 sm:gap-5 sm:p-5"
            >
              <div
                className={`flex size-16 shrink-0 items-center justify-center sm:size-20 ${
                  project.logo.shape === "square" ? "p-3 sm:p-4" : ""
                }`}
              >
                <img
                  src={project.logo.src}
                  alt={project.logo.alt}
                  className={
                    project.logo.shape === "square"
                      ? "size-8 object-contain sm:size-9"
                      : "size-full object-contain"
                  }
                />
              </div>
              <div className="min-w-0">
                <h2 className="font-medium tracking-tight">{project.name}</h2>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
