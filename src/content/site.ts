export const person = {
  name: "Gleb",
  role: "Frontend developer",
  headline: "Student and frontend developer",
  email: "baturahlib@gmail.com",
};

export const social = [
  {
    name: "GitHub",
    href: "https://github.com/obswlone",
  },
  {
    name: "Telegram",
    href: "https://t.me/obswlone",
  },
  {
    name: "Email",
    href: `mailto:${person.email}`,
  },
] as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
] as const;

export const home = {
  title: "Gleb — Frontend Developer",
  description:
    "Portfolio of Gleb, a student and frontend developer. Selected work and writing.",
  headline: "Student and frontend developer.",
  subline:
    "I design and build web interfaces. This site is where I share my work and what I'm learning.",
};

export const about = {
  title: "About",
  description:
    "I'm Gleb, a student and frontend developer. I care about clear interfaces, solid fundamentals, and shipping work I can stand behind.",
};

export const work = {
  title: "Work",
  description:
    "Selected projects and case studies. I'm putting this section together.",
};

export const blog = {
  title: "Blog",
  description:
    "Notes on frontend development and what I'm learning along the way.",
};
