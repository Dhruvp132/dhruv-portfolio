"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp, Link2 } from "lucide-react";
import Tooltip from "./Tooltip";

export interface ProjectTag {
  label: string;
}

export interface ProjectFeature {
  text: string;
}

export interface Project {
  id: string;
  title: string;
  date: string;
  icon: ReactNode;
  description: string;
  liveUrl: string;
  features: ProjectFeature[];
  tags: ProjectTag[];
}

const projects = [
  {
    id: "weave",
    title: "Weave",
    date: "2025",
    icon: "01",
    liveUrl: "https://github.com/Dhruvp132/weave",
    description:
      "AI-powered product generation system that transforms prompts into structured application code, live previews, and browser-based editing workflows.",
    features: [
      { text: "Problem: Product ideas needed a faster path from prompt to inspectable application structure." },
      { text: "System: Combined LLM workflows, WebContainer execution, live preview, and an in-browser editing surface." },
      { text: "Architecture: Split generation, file rendering, execution, and preview feedback into clear product flows." },
      { text: "Impact: Created a founder-style prototyping system for validating software ideas quickly." },
    ],
    tags: [
      { label: "Next.js" },
      { label: "TypeScript" },
      { label: "AI" },
      { label: "WebContainer" },
    ],
  },
  {
    id: "checkmate",
    title: "CheckMate",
    date: "2025",
    icon: "02",
    liveUrl: "https://github.com/Dhruvp132/CheckMate",
    description:
      "Real-time chess and video communication system with multiplayer gameplay, peer media, and low-latency game-state synchronization.",
    features: [
      { text: "Problem: Players needed synchronized gameplay and communication inside one live session." },
      { text: "System: Built WebSocket game sync with WebRTC-powered video and voice communication." },
      { text: "Architecture: Separated board state, media connection flow, and room lifecycle for cleaner scaling." },
      { text: "Impact: Delivered a polished real-time product experience across gameplay and collaboration." },
    ],
    tags: [
      { label: "Next.js" },
      { label: "Socket.IO" },
      { label: "WebRTC" },
      { label: "TypeScript" },
    ],
  },
  {
    id: "metaverse-game",
    title: "Metaverse Game",
    date: "2024",
    icon: "03",
    liveUrl: "https://github.com/Dhruvp132/MetaverseGame",
    description:
      "Interactive multiplayer environment with real-time movement, shared rooms, and collaborative virtual-space mechanics.",
    features: [
      { text: "Problem: Multiplayer spaces require consistent movement, presence, and interaction state." },
      { text: "System: Built room synchronization, live player movement, and interactive environment flows." },
      { text: "Architecture: Organized state updates around rooms, players, and networked interaction events." },
      { text: "Impact: Established a foundation for scalable real-time collaborative experiences." },
    ],
    tags: [
      { label: "TypeScript" },
      { label: "WebSockets" },
      { label: "Game Development" },
      { label: "React" },
    ],
  },
  {
    id: "muzique",
    title: "Muzique",
    date: "2025",
    icon: "04",
    liveUrl: "https://github.com/Dhruvp132/muzique",
    description:
      "Collaborative SaaS music platform with shared listening, real-time queue management, monetization, and session-based product workflows.",
    features: [
      { text: "Problem: Shared music sessions need fair queue control, user identity, and instant feedback." },
      { text: "System: Built real-time voting, queue updates, authentication, playlist handling, and payment-ready flows." },
      { text: "Architecture: Designed backend workflows around sessions, users, votes, and track state." },
      { text: "Impact: Turned a music idea into a SaaS-style product with collaboration and monetization paths." },
    ],
    tags: [
      { label: "Next.js" },
      { label: "TypeScript" },
      { label: "PostgreSQL" },
      { label: "Prisma" },
    ],
  },
  {
    id: "algoviz",
    title: "AlgoViz",
    date: "2024",
    icon: "05",
    liveUrl: "https://github.com/Dhruvp132/algoviz",
    description:
      "Interactive algorithm learning system that explains data structures and algorithms through step-by-step animated simulations.",
    features: [
      { text: "Problem: Complex algorithms are difficult to understand from static explanations alone." },
      { text: "System: Built sorting and pathfinding visualizations with dynamic execution states." },
      { text: "Architecture: Mapped algorithm steps to UI state transitions for clear learning feedback." },
      { text: "Impact: Improved comprehension through interactive, product-grade educational UX." },
    ],
    tags: [
      { label: "React" },
      { label: "TypeScript" },
      { label: "Algorithms" },
      { label: "Visualization" },
    ],
  },
];

const tagTooltips: Record<string, string> = {
  AI: "AI-assisted product generation and structured app workflows.",
  WebContainer: "In-browser runtime for previewing generated app code.",
  "Socket.IO": "WebSocket-based real-time event communication.",
  WebRTC: "Peer-to-peer audio/video communication in live sessions.",
  Prisma: "Type-safe database ORM for app data workflows.",
  PostgreSQL: "Relational database for production product systems.",
};


export function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(
    new Set(),
  );

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);
  const hasMore = projects.length > 3;

  const toggleProjectExpand = (projectId: string) => {
    setExpandedProjects((prevExpandedProjects) => {
      const newExpandedProjects = new Set(prevExpandedProjects);
      if (newExpandedProjects.has(projectId)) {
        newExpandedProjects.delete(projectId);
      } else {
        newExpandedProjects.add(projectId);
      }
      return newExpandedProjects;
    });
  };

  return (
    <div
      id="case-files"
      className="surface-panel w-full overflow-hidden rounded-2xl border border-[#F56639]/20 text-white"
    >
      <div className="px-6 py-8 text-center md:py-10">
        <h2 className="text-3xl font-extrabold">System Case Files({projects.length})</h2>
      </div>

      <div className="divide-y divide-[#F56639]/15">
        {visibleProjects.map((project) => {
          const isExpanded = expandedProjects.has(project.id);

          return (
            <div
              key={project.id}
              className="border-l-4 border-l-[#F56639]/25 transition-colors duration-300 hover:border-l-[var(--accent-primary)] hover:bg-white/[0.02]"
            >
              <div className="px-6 py-6 md:px-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#F56639]/30 bg-[#F56639]/10 text-xs font-semibold text-[var(--accent-primary)]">
                    {project.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-medium text-white">{project.title}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{project.date}</p>
                  </div>

                  <div className="ml-4 flex shrink-0 gap-3">
                    {/* <Tooltip content={`Open ${project.title} repository`}> */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title} repository`}
                        className="rounded p-2 transition-colors hover:bg-[#F56639]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                      >
                        <Link2 size={18} className="text-[var(--accent-primary)]" />
                      </a>
                    {/* </Tooltip> */}

                    {/* <Tooltip content={`${isExpanded ? "Collapse" : "Expand"} ${project.title} details`}> */}
                      <button
                        type="button"
                        onClick={() => toggleProjectExpand(project.id)}
                        aria-label={`${isExpanded ? "Collapse" : "Expand"} ${project.title} details`}
                        aria-expanded={isExpanded}
                        className="rounded p-2 transition-colors hover:bg-[#F56639]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                      >
                        {isExpanded ? (
                          <ChevronUp size={18} className="text-zinc-300" />
                        ) : (
                          <ChevronDown size={18} className="text-zinc-300" />
                        )}
                      </button>
                    {/* </Tooltip> */}
                  </div>
                </div>

                {isExpanded && (
                  <div className="mt-6 space-y-4">
                    <p className="text-sm leading-relaxed text-zinc-300">
                      {project.description}
                    </p>

                    {project.features.length > 0 && (
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li
                            key={`${project.id}-feature-${index}`}
                            className="flex gap-3 text-sm text-zinc-300"
                          >
                            <span className="shrink-0 text-[var(--accent-primary)]">•</span>
                            <span>{feature.text}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag, index) => (
                          tagTooltips[tag.label] ? (
                            <Tooltip
                              key={`${project.id}-tag-${index}`}
                              content={tagTooltips[tag.label]}
                            >
                              <span className="rounded border border-[#F56639]/25 bg-[#F56639]/10 px-3 py-1 font-mono text-xs text-[var(--accent-primary)] transition-colors hover:bg-[#F36639]/20">
                                {tag.label}
                              </span>
                            </Tooltip>
                          ) : (
                            <span
                              key={`${project.id}-tag-${index}`}
                              className="rounded border border-[#F56639]/25 bg-[#F56639]/10 px-3 py-1 font-mono text-xs text-[var(--accent-primary)] transition-colors hover:bg-[#F36639]/20"
                            >
                              {tag.label}
                            </span>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {hasMore && (
        <div className="border-t border-[#F56639]/20 px-6 py-6 md:px-8">
          <button
            type="button"
            onClick={() => setShowAllProjects((prevShowAllProjects) => !prevShowAllProjects)}
            className="group flex items-center gap-2 rounded px-1 py-1 text-sm font-medium text-zinc-300 transition-colors hover:text-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/70"
          >
            {showAllProjects ? (
              <ChevronUp
                size={16}
                className="transition-transform group-hover:-translate-y-0.5"
              />
            ) : (
              <ChevronDown
                size={16}
                className="transition-transform group-hover:-translate-y-0.5"
              />
            )}
            {showAllProjects ? "Show Fewer Systems" : "Show More Systems"}
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectsSection;
