'use client';

/* eslint-disable @next/next/no-img-element */

interface TechBadge {
  name: string;
  url: string;
  icon: string;
  label: string;
}

const techStack: TechBadge[] = [
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    icon: 'https://assets.chanhdai.com/images/tech-stack-icons/typescript.svg',
    label: 'TypeScript',
  },
  {
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: 'https://assets.chanhdai.com/images/tech-stack-icons/js.svg',
    label: 'JavaScript',
  },
  {
    name: 'Python',
    url: 'https://www.python.org/',
    icon: 'https://assets.chanhdai.com/images/tech-stack-icons/python.svg',
    label: 'Python',
  },
  {
    name: 'Java',
    url: 'https://www.java.com/',
    icon: 'https://assets.chanhdai.com/images/tech-stack-icons/java.svg',
    label: 'Java',
  },
  {
    name: 'React',
    url: 'https://react.dev/',
    icon: 'https://assets.chanhdai.com/images/tech-stack-icons/react.svg',
    label: 'React',
  },
  {
    name: 'Next.js',
    url: 'https://nextjs.org/',
    icon: 'https://assets.chanhdai.com/images/tech-stack-icons/nextjs.svg',
    label: 'Next.js',
  },
  {
    name: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
    icon: 'https://assets.chanhdai.com/images/tech-stack-icons/tailwind.svg',
    label: 'Tailwind CSS',
  },
  {
    name: 'shadcn/ui',
    url: 'https://ui.shadcn.com/',
    icon: 'https://assets.chanhdai.com/images/tech-stack-icons/shadcn.svg',
    label: 'shadcn/ui',
  },
  {
    name: 'Radix UI',
    url: 'https://www.radix-ui.com/',
    icon: 'https://assets.chanhdai.com/images/tech-stack-icons/radix.svg',
    label: 'Radix UI',
  },
  {
    name: 'Base UI',
    url: 'https://base-ui.com/',
    icon: 'https://assets.chanhdai.com/images/tech-stack-icons/base-ui.svg',
    label: 'Base UI',
  },
  {
    name: 'Redux',
    url: 'https://redux.js.org/',
    icon: 'https://assets.chanhdai.com/images/tech-stack-icons/redux.svg',
    label: 'Redux',
  },
  {
    name: 'React Navigation',
    url: 'https://reactnavigation.org/',
    icon: 'https://assets.chanhdai.com/images/tech-stack-icons/react-navigation.svg',
    label: 'React Navigation',
  },
  {
    name: 'Node.js',
    url: 'https://nodejs.org/',
    icon: 'https://assets.chanhdai.com/images/tech-stack-icons/nodejs.svg',
    label: 'Node.js',
  },
  {
    name: 'PostgreSQL',
    url: 'https://www.postgresql.org/',
    icon: 'https://assets.chanhdai.com/images/tech-stack-icons/postgresql.svg',
    label: 'PostgreSQL',
  },
  {
    name: 'MySQL',
    url: 'https://www.mysql.com/',
    icon: 'https://assets.chanhdai.com/images/tech-stack-icons/mysql.svg',
    label: 'MySQL',
  },
  {
    name: 'MongoDB',
    url: 'https://www.mongodb.com/',
    icon: 'https://assets.chanhdai.com/images/tech-stack-icons/mongodb.svg',
    label: 'MongoDB',
  },
  {
    name: 'Redis',
    url: 'https://redis.io/',
    icon: 'https://assets.chanhdai.com/images/tech-stack-icons/redis.svg',
    label: 'Redis',
  },
  {
    name: 'Git',
    url: 'https://git-scm.com/',
    icon: 'https://assets.chanhdai.com/images/tech-stack-icons/git.svg',
    label: 'Git',
  },
  {
    name: 'Docker',
    url: 'https://www.docker.com/',
    icon: 'https://assets.chanhdai.com/images/tech-stack-icons/docker.svg',
    label: 'Docker',
  },
  {
    name: 'Claude',
    url: 'https://claude.ai/',
    icon: 'https://assets.chanhdai.com/images/tech-stack-icons/claude.svg',
    label: 'Claude',
  },
  {
    name: 'Cursor',
    url: 'https://cursor.com/',
    icon: 'https://assets.chanhdai.com/images/tech-stack-icons/cursor.svg',
    label: 'Cursor',
  },
  {
    name: 'ChatGPT',
    url: 'https://openai.com/chatgpt/',
    icon: 'https://assets.chanhdai.com/images/tech-stack-icons/chatgpt.svg',
    label: 'ChatGPT',
  },
  {
    name: 'Figma',
    url: 'https://www.figma.com/',
    icon: 'https://assets.chanhdai.com/images/tech-stack-icons/figma.svg',
    label: 'Figma',
  },
];

export function TechStackBadges() {
  return (
    <div>
        {/* HEADING */}
      <div className="text-center mt-6 mb-6">
        {/* <p className="tracking-[0.4em] text-[#F36639] text-sm">
          TECHNICAL PROFICIENCIES
        </p> */}
        <h2 className="mt-10 mb-10 text-3xl font-extrabold">SKILLS</h2>
      </div>
    
    <ul className="flex flex-wrap gap-2">
      {techStack.map((tech) => (
        <li key={tech.name} className="flex">
          <a
            href={tech.url}
            target="_blank"
            rel="noopener"
            aria-label={tech.label}
            className="surface-panel flex items-center gap-1.5 rounded-full border border-zinc-700 px-1.5 py-0.5 text-xs tracking-wide text-zinc-200 transition-colors duration-200 hover:bg-zinc-900 [&_img]:size-3.5 [&_img]:select-none"
          >
            <img
              alt={`${tech.name} icon`}
              loading="lazy"
              width={14}
              height={14}
              decoding="async"
              src={tech.icon}
              style={{ color: 'transparent' }}
            />
            {tech.name}
          </a>
        </li>
      ))}
    </ul>
    </div>
  );
}
