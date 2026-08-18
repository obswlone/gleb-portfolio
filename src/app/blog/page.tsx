import type { Metadata } from "next";

import { PageIntro } from "@/components/PageIntro";
import { PostCard } from "@/components/PostCard";
import { blog } from "@/content/site";

export const metadata: Metadata = {
  title: blog.title,
  description: blog.description,
};

export default function BlogPage() {
  const [featured, ...rest] = blog.posts;

  return (
    <article>
      <PageIntro title={blog.title} description={blog.description} />
      <div className="flex flex-col gap-6">
        {featured ? <PostCard {...featured} featured /> : null}
        {rest.length > 0 ? (
          <ul className="grid gap-6 sm:grid-cols-2">
            {rest.map((post) => (
              <li key={post.id}>
                <PostCard {...post} />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
