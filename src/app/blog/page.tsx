import type { Metadata } from "next";

import { BlogFeed } from "@/components/BlogFeed";
import { PageIntro } from "@/components/PageIntro";
import { blog } from "@/content/site";

export const metadata: Metadata = {
  title: blog.title,
  description: blog.description,
};

export default function BlogPage() {
  return (
    <article>
      <PageIntro title={blog.title} description={blog.description} />
      <BlogFeed />
    </article>
  );
}
