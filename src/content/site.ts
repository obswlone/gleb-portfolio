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
  intro:
    "I study and build for the web. Right now I'm focused on frontend: layout, component structure, and making interfaces that stay readable as they grow. This site is where I collect that work.",
  experience: [
    {
      title: "Frontend developer",
      place: "Personal projects",
      timeframe: "Present",
      description:
        "Designing and building web interfaces with React and Next.js, including this portfolio.",
    },
  ],
  studies: [
    {
      title: "Bachelor's in Programming",
      place: "KUL, Poland",
      timeframe: "2024 — Present",
      description:
        "Undergraduate studies in programming at The John Paul II Catholic University of Lublin.",
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
  ],
};

export const work = {
  title: "Work",
  description:
    "Selected projects I contributed to, from an internship to freelance frontend work.",
  projects: [
    {
      name: "Midapt",
      href: "https://midapt.com/",
      contribution:
        "Internship at Midapt, where I worked on UI and SEO tasks.",
      summary:
        "A Polish digital partner building web, mobile, and AI products for businesses.",
      logo: {
        src: "/images/work/midapt.png",
        alt: "Midapt",
        shape: "square",
      },
    },
    {
      name: "Tea4You",
      href: "https://www.instagram.com/tea4you.shop/",
      contribution:
        "I built the frontend for the shop's Telegram page.",
      summary: "An Instagram tea shop with a custom Telegram storefront.",
      logo: {
        src: "/images/work/tea4you.png",
        alt: "Tea4You",
        shape: "circle",
      },
    },
  ],
};

export const blog = {
  title: "Blog",
  description:
    "Notes on frontend development and what I'm learning along the way.",
};
