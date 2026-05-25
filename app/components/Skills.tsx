'use client';

/* eslint-disable @next/next/no-img-element */

import Tooltip from "./Tooltip";

interface TechBadge {
  name: string;
  url: string;
  icon: string;
  label: string;
  tooltip?: string;
}

const techStack: TechBadge[] = [
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    icon: 'https://cdn.simpleicons.org/typescript',
    label: 'TypeScript',
  },
  {
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: 'https://cdn.simpleicons.org/javascript',
    label: 'JavaScript',
  },
  {
    name: 'Python',
    url: 'https://www.python.org/',
    icon: 'https://cdn.simpleicons.org/python',
    label: 'Python',
  },
  {
    name: 'Java',
    url: 'https://www.java.com/',
    icon: 'https://cdn.simpleicons.org/openjdk',
    label: 'Java',
  },
  {
    name: 'Algorithms',
    url: 'https://en.wikipedia.org/wiki/Algorithm',
    icon: 'https://cdn.simpleicons.org/thealgorithms',
    label: 'Advanced Algorithms',
  },
  {
    name: 'Data Structures',
    url: 'https://en.wikipedia.org/wiki/Data_structure',
    icon: 'https://cdn.simpleicons.org/thealgorithms',
    label: 'Data Structures',
  },
  {
    name: 'OOP',
    url: 'https://en.wikipedia.org/wiki/Object-oriented_programming',
    icon: 'https://cdn.simpleicons.org/java',
    label: 'OOP Principles',
  },
  {
    name: 'React',
    url: 'https://react.dev/',
    icon: 'https://cdn.simpleicons.org/react',
    label: 'React',
  },
  {
    name: 'Next.js',
    url: 'https://nextjs.org/',
    icon: 'https://cdn.simpleicons.org/nextdotjs',
    label: 'Next.js',
  },
  {
    name: 'Payload CMS',
    url: 'https://payloadcms.com/',
    icon: 'https://cdn.simpleicons.org/payloadcms',
    label: 'Payload CMS',
    tooltip: 'Headless CMS for content-heavy product and business sites.',
  },
  {
    name: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
    icon: 'https://cdn.simpleicons.org/tailwindcss',
    label: 'Tailwind CSS',
  },
  {
    name: 'shadcn/ui',
    url: 'https://ui.shadcn.com/',
    icon: 'https://ui.shadcn.com/apple-touch-icon.png',
    label: 'shadcn/ui',
  },
  {
    name: 'Radix UI',
    url: 'https://www.radix-ui.com/',
    icon: 'https://cdn.simpleicons.org/radixui',
    label: 'Radix UI',
  },
  {
    name: 'Base UI',
    url: 'https://base-ui.com/',
    icon: 'https://base-ui.com/logo.svg',
    label: 'Base UI',
  },
  {
    name: 'Redux',
    url: 'https://redux.js.org/',
    icon: 'https://cdn.simpleicons.org/redux',
    label: 'Redux',
  },
  {
    name: 'Recoil',
    url: 'https://recoiljs.org/',
    icon: 'https://cdn.simpleicons.org/recoil',
    label: 'Recoil',
  },
  {
    name: 'React Native',
    url: 'https://reactnative.dev/',
    icon: 'https://cdn.simpleicons.org/react',
    label: 'React Native',
  },
  {
    name: 'React Navigation',
    url: 'https://reactnavigation.org/',
    icon: 'https://reactnavigation.org/img/spiro.svg',
    label: 'React Navigation',
  },
  {
    name: 'Node.js',
    url: 'https://nodejs.org/',
    icon: 'https://cdn.simpleicons.org/nodedotjs',
    label: 'Node.js',
  },
  {
    name: 'Prisma',
    url: 'https://www.prisma.io/',
    icon: 'https://cdn.simpleicons.org/prisma',
    label: 'Prisma',
    tooltip: 'Type-safe ORM for database schemas, queries, and migrations.',
  },
  {
    name: 'GraphQL',
    url: 'https://graphql.org/',
    icon: 'https://cdn.simpleicons.org/graphql',
    label: 'GraphQL',
    tooltip: 'API query layer for precise client-server data contracts.',
  },
  {
    name: 'Scalable Systems',
    url: 'https://en.wikipedia.org/wiki/Scalability',
    icon: 'https://cdn.simpleicons.org/apachekafka',
    label: 'Scalable Systems Architecture',
    tooltip: 'Architecture choices for systems that can grow without rewrites.',
  },
  {
    name: 'PostgreSQL',
    url: 'https://www.postgresql.org/',
    icon: 'https://cdn.simpleicons.org/postgresql',
    label: 'PostgreSQL',
  },
  {
    name: 'MySQL',
    url: 'https://www.mysql.com/',
    icon: 'https://cdn.simpleicons.org/mysql',
    label: 'MySQL',
  },
  {
    name: 'MongoDB',
    url: 'https://www.mongodb.com/',
    icon: 'https://cdn.simpleicons.org/mongodb',
    label: 'MongoDB',
  },
  {
    name: 'Firebase',
    url: 'https://firebase.google.com/',
    icon: 'https://cdn.simpleicons.org/firebase',
    label: 'Firebase',
  },
  {
    name: 'Supabase',
    url: 'https://supabase.com/',
    icon: 'https://cdn.simpleicons.org/supabase',
    label: 'Supabase',
  },
  {
    name: 'Redis',
    url: 'https://redis.io/',
    icon: 'https://cdn.simpleicons.org/redis',
    label: 'Redis',
    tooltip: 'In-memory data store for caching, queues, and fast workflows.',
  },
  {
    name: 'AWS',
    url: 'https://aws.amazon.com/',
    icon: 'https://cdn.simpleicons.org/amazonaws',
    label: 'AWS',
  },
  {
    name: 'Google Cloud',
    url: 'https://cloud.google.com/',
    icon: 'https://cdn.simpleicons.org/googlecloud',
    label: 'Google Cloud',
  },
  {
    name: 'Cloudflare',
    url: 'https://www.cloudflare.com/',
    icon: 'https://cdn.simpleicons.org/cloudflare',
    label: 'Cloudflare',
    tooltip: 'Edge network, DNS, security, and performance infrastructure.',
  },
  {
    name: 'Git',
    url: 'https://git-scm.com/',
    icon: 'https://cdn.simpleicons.org/git',
    label: 'Git',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/',
    icon: 'https://cdn.simpleicons.org/github',
    label: 'GitHub',
  },
  {
    name: 'Docker',
    url: 'https://www.docker.com/',
    icon: 'https://cdn.simpleicons.org/docker',
    label: 'Docker',
    tooltip: 'Containerized development and deployment environments.',
  },
  {
    name: 'n8n',
    url: 'https://n8n.io/',
    icon: 'https://cdn.simpleicons.org/n8n',
    label: 'n8n',
    tooltip: 'Workflow automation for AI, operations, and business processes.',
  },
  {
    name: 'Agile & Scrum',
    url: 'https://www.scrum.org/',
    icon: 'https://cdn.simpleicons.org/scrumalliance',
    label: 'Agile and Scrum',
  },
  {
    name: 'Project Flow',
    url: 'https://www.atlassian.com/software/jira',
    icon: 'https://cdn.simpleicons.org/jira',
    label: 'Project Flow',
  },
  {
    name: 'Version Control',
    url: 'https://git-scm.com/',
    icon: 'https://cdn.simpleicons.org/git',
    label: 'Version Control',
  },
  {
    name: 'CI/CD',
    url: 'https://github.com/features/actions',
    icon: 'https://cdn.simpleicons.org/githubactions',
    label: 'CI/CD',
    tooltip: 'Automated test, build, and deployment pipelines.',
  },
  {
    name: 'Teamwork',
    url: 'https://slack.com/',
    icon: 'https://cdn.simpleicons.org/slack',
    label: 'Teamwork',
  },
  {
    name: 'macOS',
    url: 'https://www.apple.com/macos/',
    icon: 'https://cdn.simpleicons.org/apple',
    label: 'macOS',
  },
  {
    name: 'Linux',
    url: 'https://www.linux.org/',
    icon: 'https://cdn.simpleicons.org/linux',
    label: 'Linux',
  },
  {
    name: 'Windows',
    url: 'https://www.microsoft.com/windows',
    icon: 'https://cdn.simpleicons.org/windows',
    label: 'Windows',
  },
  {
    name: 'Claude',
    url: 'https://claude.ai/',
    icon: 'https://cdn.simpleicons.org/claude',
    label: 'Claude',
  },
  {
    name: 'Cursor',
    url: 'https://cursor.com/',
    icon: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/cursor.png',
    label: 'Cursor',
  },
  {
    name: 'ChatGPT',
    url: 'https://openai.com/chatgpt/',
    icon: 'https://cdn.simpleicons.org/openai',
    label: 'ChatGPT',
  },
  {
    name: 'Figma',
    url: 'https://www.figma.com/',
    icon: 'https://cdn.simpleicons.org/figma',
    label: 'Figma',
  },
];

const capabilityOrder = [
  'Scalable Systems',
  'Next.js',
  'TypeScript',
  'React',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'Prisma',
  'Redis',
  'GraphQL',
  'AWS',
  'Cloudflare',
  'Docker',
  'CI/CD',
  'n8n',
  'Payload CMS',
  'Tailwind CSS',
  'Figma',
];

const orderedTechStack = [...techStack].sort((firstTech, secondTech) => {
  const firstIndex = capabilityOrder.indexOf(firstTech.name);
  const secondIndex = capabilityOrder.indexOf(secondTech.name);
  const safeFirstIndex = firstIndex === -1 ? capabilityOrder.length : firstIndex;
  const safeSecondIndex = secondIndex === -1 ? capabilityOrder.length : secondIndex;

  return safeFirstIndex - safeSecondIndex;
});

export function TechStackBadges() {
  return (
    <div>
      {/* HEADING */}
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <p className="tracking-[0.28em] text-[#F36639] text-xs font-bold uppercase">
          Product Engineering Stack
        </p>
        <h2 className="mt-5 mb-4 text-3xl font-extrabold md:text-4xl">Engineering Capabilities</h2>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-400">
          A practical stack for building production-ready software systems, from interface quality to backend workflows and deployment.
        </p>
      </div>

      <ul className="flex flex-wrap justify-center gap-2.5">
        {orderedTechStack.map((tech) => {
          const badge = (
            <a
              href={tech.url}
              target="_blank"
              rel="noopener"
              aria-label={tech.label}
              className="surface-panel flex items-center gap-1.5 rounded-full border border-zinc-700 px-2.5 py-1.5 text-xs tracking-wide text-zinc-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--accent-primary)]/50 hover:bg-zinc-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/60 [&_img]:size-3.5 [&_img]:select-none"
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
          );

          return (
            <li key={tech.name} className="flex">
              {tech.tooltip ? (
                <Tooltip content={tech.tooltip}>{badge}</Tooltip>
              ) : (
                badge
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
