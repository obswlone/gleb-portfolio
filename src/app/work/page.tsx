import type { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";
import { ProjectCard } from "@/components/ProjectCard";
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
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </article>
  );
}
