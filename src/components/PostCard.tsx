import Image from "next/image";
import Link from "next/link";

import { Avatar } from "@/components/Avatar";
import { SavePostButton } from "@/components/SavePostButton";
import { person } from "@/content/site";

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

type PostCardProps = {
  id: string;
  place: string;
  date: string;
  image: string;
  featured?: boolean;
};

export function PostCard({ id, place, date, image, featured = false }: PostCardProps) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/80 transition-colors hover:border-foreground/20">
      <SavePostButton id={id} className="absolute top-3 right-3 z-10" />
      <Link href={`/blog/${id}`} className="flex h-full flex-col">
        <div className={`relative overflow-hidden ${featured ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
          <Image
            src={image}
            alt={place}
            fill
            sizes={featured ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Avatar size={28} />
              <span className="text-sm">{person.name}</span>
            </div>
            <time className="text-sm text-muted" dateTime={date}>
              {formatPostDate(date)}
            </time>
          </div>
          <h2 className="text-lg font-medium tracking-tight">{place}</h2>
        </div>
      </Link>
    </article>
  );
}
