"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp, Link2 } from "lucide-react";

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

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
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
      id="projects"
      className="surface-panel w-full overflow-hidden rounded-2xl border border-[#F56639]/20 text-white"
    >
      <div className="text-center mt-6 mb-6">
        <h2 className="mt-10 mb-10 text-3xl font-extrabold">Projects({projects.length})</h2>
      </div>

      <div className="divide-y divide-[#F56639]/15">
        {visibleProjects.map((project) => {
          const isExpanded = expandedProjects.has(project.id);

          return (
            <div
              key={project.id}
              className="border-l-4 border-l-[#F56639]/25 transition-colors hover:border-l-[var(--accent-primary)]"
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
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} live project`}
                      className="rounded p-2 transition-colors hover:bg-[#F56639]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                    >
                      <Link2 size={18} className="text-[var(--accent-primary)]" />
                    </a>

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
                          <span
                            key={`${project.id}-tag-${index}`}
                            className="rounded border border-[#F56639]/25 bg-[#F56639]/10 px-3 py-1 font-mono text-xs text-[var(--accent-primary)] transition-colors hover:bg-[#F36639]/20"
                          >
                            {tag.label}
                          </span>
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
            className="group flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-[var(--accent-primary)]"
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
            {showAllProjects ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectsSection;
