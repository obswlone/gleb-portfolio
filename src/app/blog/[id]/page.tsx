import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Avatar } from "@/components/Avatar";
import { formatPostDate } from "@/components/PostCard";
import { blog, getPost, person } from "@/content/site";

type PostPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return blog.posts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = getPost(id);

  if (!post) {
    return { title: "Not found" };
  }

  return {
    title: post.place,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <article className="flex flex-col gap-8">
      <Link href="/blog" className="text-sm text-muted transition-colors hover:text-foreground">
        ← Travel
      </Link>
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border">
        <Image
          src={post.image}
          alt={post.place}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      <header className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Avatar size={32} />
            <span className="text-sm">{person.name}</span>
          </div>
          <time className="text-sm text-muted" dateTime={post.date}>
            {formatPostDate(post.date)}
          </time>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">{post.place}</h1>
      </header>
      <p className="max-w-xl text-lg leading-relaxed text-muted">{post.body}</p>
    </article>
  );
}
