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
      <p className="text-muted">No case studies yet. This page will list selected projects.</p>
    </article>
  );
}
