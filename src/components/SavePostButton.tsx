"use client";

import { LuBookmark } from "react-icons/lu";

import { useSavedPosts, useSavedPostsDispatch } from "@/context/saved-posts";

export function SavePostButton({
  id,
  className = "",
}: {
  id: string;
  className?: string;
}) {
  const savedIds = useSavedPosts();
  const dispatch = useSavedPostsDispatch();
  const saved = savedIds.includes(id);

  return (
    <button
      type="button"
      onClick={() => {
        dispatch({
          type: saved ? "deleted" : "added",
          id,
        });
      }}
      className={`flex size-9 items-center justify-center rounded-full border border-border bg-background/80 text-muted backdrop-blur-md transition-colors hover:text-foreground ${className}`}
      aria-pressed={saved}
      aria-label={saved ? "Remove from saved" : "Save post"}
    >
      <LuBookmark className={`size-4 ${saved ? "fill-current text-foreground" : ""}`} />
    </button>
  );
}
