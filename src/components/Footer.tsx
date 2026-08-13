import { person, social } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} / {person.name} / {person.role}
        </p>
        <ul className="flex flex-wrap gap-4 text-sm">
          {social.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-muted transition-colors hover:text-foreground"
                {...(item.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
