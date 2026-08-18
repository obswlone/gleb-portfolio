import { person } from "@/content/site";

export function Avatar({ size = 28 }: { size?: number }) {
  if (person.avatar) {
    return (
      <img
        src={person.avatar}
        alt={person.name}
        width={size}
        height={size}
        className="rounded-full object-cover object-[center_70%]"
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <span
      className="flex items-center justify-center rounded-full bg-foreground text-xs font-medium text-background"
      style={{ width: size, height: size }}
      aria-hidden
    >
      {person.name.charAt(0)}
    </span>
  );
}
