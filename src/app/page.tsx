import Link from "next/link";

import { Avatar } from "@/components/Avatar";
import { HomeSlider } from "@/components/HomeSlider";
import { PostCard } from "@/components/PostCard";
import { ProjectCard } from "@/components/ProjectCard";
import { blog, home, person, work } from "@/content/site";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 sm:gap-20">
      <section className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
        <Avatar size={88} />
        <div className="flex flex-col gap-4">
          <p className="text-sm text-muted">{person.role}</p>
          <h1 className="max-w-lg text-4xl font-semibold tracking-tight sm:text-5xl">
            {person.name}. {home.headline}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted">{home.subline}</p>
        </div>
      </section>

      <section className="flex flex-col gap-6 border-t border-border pt-10">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-sm text-muted">Work</h2>
          <Link
            href="/work"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            View all
          </Link>
        </div>
        <HomeSlider label="Selected work" perView={1}>
          {work.projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </HomeSlider>
      </section>

      <section className="flex flex-col gap-6 border-t border-border pt-10">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-sm text-muted">Travel</h2>
          <Link
            href="/blog"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            View all
          </Link>
        </div>
        <HomeSlider label="Travel notes" perView={3}>
          {blog.posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </HomeSlider>
      </section>
    </div>
  );
}
