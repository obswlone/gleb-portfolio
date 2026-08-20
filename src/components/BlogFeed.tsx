"use client";

import { useState } from "react";

import { PostCard } from "@/components/PostCard";
import { blog } from "@/content/site";
import { useSavedPosts } from "@/context/saved-posts";

type Filter = "all" | "saved";

export function BlogFeed() {
  const savedIds = useSavedPosts();
  const [filter, setFilter] = useState<Filter>("all");
  const posts =
    filter === "saved"
      ? blog.posts.filter((post) => savedIds.includes(post.id))
      : blog.posts;
  const [featured, ...rest] = filter === "all" ? posts : [];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-1 self-start rounded-full border border-border bg-surface/80 p-1">
        <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
          All
        </FilterButton>
        <FilterButton active={filter === "saved"} onClick={() => setFilter("saved")}>
          Saved
        </FilterButton>
      </div>

      {filter === "saved" ? (
        posts.length > 0 ? (
          <ul className="grid gap-6 sm:grid-cols-2">
            {posts.map((post) => (
              <li key={post.id}>
                <PostCard {...post} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">No saved posts yet.</p>
        )
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
        active ? "bg-foreground text-background" : "text-muted hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
