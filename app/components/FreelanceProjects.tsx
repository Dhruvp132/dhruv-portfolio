"use client";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Tooltip from "./Tooltip";

type CategoryId = "all" | "automation-business" | "agri-export" | "e-commerce";

interface Project {
  id: string;
  title: string;
  filter: Exclude<CategoryId, "all">;
  category: string;
  description: string;
  casePoints: string[];
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Utsav International",
    filter: "agri-export",
    category: "Export Business System",
    description: "Engineered a credibility-first digital presence for an agri-export business with SEO-ready pages, fast responsive product presentation, and production deployment.",
    casePoints: [
      "Problem: Buyers needed a clearer way to evaluate products, trust signals, and company capability.",
      "System: Built a high-performance business website structured around product discovery and inquiry flow.",
      "Impact: Improved online credibility, search readiness, and mobile browsing quality for international prospects.",
    ],
    tags: ["Next.js", "TypeScript", "SEO", "Vercel"],
    image: "/freelance/utsav-international.png",
    link: "#contact",
  },
  {
    id: "02",
    title: "JD Lights & Automation",
    filter: "automation-business",
    category: "Automation Business System",
    description: "Built and maintain a scalable web system for a lights and automation business with fast-loading pages, responsive UX, and ongoing client-driven improvements.",
    casePoints: [
      "Problem: The business needed a polished product and service surface that could evolve with new offerings.",
      "System: Delivered a modular frontend architecture with clean content sections and production deployment.",
      "Impact: Created a maintainable digital system for sales conversations, updates, and long-term growth.",
    ],
    tags: ["TypeScript", "Next.js", "Vercel"],
    image: "/freelance/jd.png",
    link: "#contact",
  },
  {
    id: "03",
    title: "Colt & Co.",
    filter: "e-commerce",
    category: "Commerce Platform",
    description: "Developing a production-ready commerce platform with Razorpay payments, product and order management, delivery workflows, and modern deployment pipelines.",
    casePoints: [
      "Problem: The brand needs a commerce backend that supports selling, fulfillment, and operational visibility.",
      "System: Designing product, order, payment, and delivery flows around scalable admin workflows.",
      "Impact: Moving the business from a simple storefront toward a managed commerce operating system.",
    ],
    tags: ["Next.js", "TypeScript", "MongoDB", "Razorpay"],
    image: "/freelance/coltnco.png",
    link: "#contact",
  },
];

const CATEGORIES: Array<{ id: CategoryId; label: string }> = [
  { id: "all", label: "All" },
  { id: "automation-business", label: "Automation" },
  { id: "agri-export", label: "Agri Export" },
  { id: "e-commerce", label: "Commerce" },
];

export default function FreelanceProjects() {
  const [activeFilter, setActiveFilter] = useState<CategoryId>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [featuredId, setFeaturedId] = useState(PROJECTS[0].id);
  const [isCompactLayout, setIsCompactLayout] = useState(false);

  const cardSpring = {
    type: "spring" as const,
    stiffness: 105,
    damping: 22,
    mass: 0.92,
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const updateLayout = () => setIsCompactLayout(mediaQuery.matches);

    updateLayout();
    mediaQuery.addEventListener("change", updateLayout);

    return () => mediaQuery.removeEventListener("change", updateLayout);
  }, []);

  const handleCardClick = (projectId: string) => {
    if (isCompactLayout) {
      setExpandedId((currentExpandedId) => currentExpandedId === projectId ? null : projectId);
      return;
    }

    if (activeFilter === "all") {
      setFeaturedId(projectId);
    }
  };

  const handleFilterChange = (nextFilter: CategoryId) => {
    setActiveFilter(nextFilter);
    setExpandedId(null);

    if (nextFilter === "all") {
      return;
    }

    const nextFeaturedProject = PROJECTS.find((project) => project.filter === nextFilter);

    if (nextFeaturedProject) {
      setFeaturedId(nextFeaturedProject.id);
    }
  };

  const filteredProjects = PROJECTS.filter(project => {
    if (activeFilter === "all") return true;
    return project.filter === activeFilter;
  });

  const featuredProject = filteredProjects.find((project) => project.id === featuredId) ?? filteredProjects[0];
  const displayedProjects =
    !isCompactLayout && activeFilter === "all" && featuredProject
      ? [featuredProject, ...filteredProjects.filter((project) => project.id !== featuredProject.id)]
      : filteredProjects;

  return (
    <section id="projects" className="relative overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="section-inner">
        {/* Header */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 lg:mb-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[var(--accent-primary)] text-[10px] lg:text-xs font-bold uppercase tracking-[0.4em] mb-4 block"
            >
              Selected Case Studies
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[0.94]"
            >
              BUSINESS SYSTEMS <br />
              <span className="text-white/20">ENGINEERED TO SCALE</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/40 text-sm max-w-xs leading-relaxed"
          >
            Client work packaged as business problems, engineered systems, architecture decisions, and practical outcomes.
          </motion.p>
        </div>

        {/* Sub-Navbar (Filters) */}
        <div className="mb-10 flex flex-wrap items-center gap-4 overflow-x-auto border-b border-white/5 pb-6 lg:mb-12 lg:overflow-visible">
          <div className="flex shrink-0 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleFilterChange(cat.id)}
                aria-pressed={activeFilter === cat.id}
                className={`relative px-4 lg:px-6 py-2 rounded-full text-[9px] lg:text-[10px] font-bold uppercase tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/60 ${
                  activeFilter === cat.id ? "text-white" : "text-white/40 hover:text-white/60"
                }`}
              >
                {activeFilter === cat.id && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-[var(--accent-primary)] rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {cat.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:block h-px flex-grow bg-gradient-to-r from-white/10 to-transparent" />
          <span className="shrink-0 text-[10px] font-mono text-white/20 uppercase tracking-tighter">
            Case Studies: {filteredProjects.length}
          </span>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          transition={cardSpring}
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {displayedProjects.map((project, index) => {
              const isFeatured = !isCompactLayout && activeFilter === "all" && index === 0;
              const isExpanded = expandedId === project.id;
              const isInteractive = isCompactLayout || (activeFilter === "all" && index > 0);

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -4 }}
                  transition={cardSpring}
                  className={`${isFeatured ? "lg:col-span-8" : "lg:col-span-4"} group rounded-3xl ${isInteractive ? "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black" : ""}`}
                  onMouseDown={isInteractive ? (event) => event.preventDefault() : undefined}
                  onClick={isInteractive ? () => handleCardClick(project.id) : undefined}
                  onKeyDown={
                    isInteractive
                      ? (event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            handleCardClick(project.id);
                          }
                        }
                      : undefined
                  }
                  role={isInteractive ? "button" : undefined}
                  tabIndex={isInteractive ? 0 : undefined}
                >
                  {isCompactLayout ? (
                    <motion.div
                      layout
                      className="bento-card h-full rounded-3xl p-5 transition-colors duration-500"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="mb-1 text-[9px] font-bold uppercase tracking-widest text-[var(--accent-primary)]">
                            {project.category}
                          </span>
                          <h3 className="text-lg font-bold leading-tight text-white">
                            {project.title}
                          </h3>
                        </div>
                        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} className="text-white/20">
                          <ChevronDown size={20} />
                        </motion.div>
                      </div>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="flex h-full flex-col overflow-hidden"
                          >
                            <motion.div layout className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl">
                              <motion.img
                                layout
                                src={project.image}
                                alt={project.title}
                                className="h-full w-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />

                              <div className="absolute bottom-4 right-4 flex translate-y-0 gap-2 opacity-100 transition-all duration-300">
                                {project.github && (
                                  <Tooltip content={`Open ${project.title} repository`}>
                                    <a
                                      href={project.github}
                                      onClick={(event) => event.stopPropagation()}
                                      aria-label={`Open ${project.title} repository`}
                                      className="rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                                    >
                                      <Github size={18} />
                                    </a>
                                  </Tooltip>
                                )}
                                {project.link && (
                                  <Tooltip content={`Start a conversation about ${project.title}`}>
                                    <a
                                      href={project.link}
                                      onClick={(event) => event.stopPropagation()}
                                      aria-label={`Start a conversation about ${project.title}`}
                                      className="rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                                    >
                                      <ExternalLink size={18} />
                                    </a>
                                  </Tooltip>
                                )}
                              </div>
                            </motion.div>

                            <motion.div layout className="flex-grow">
                              <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-white/50">
                                {project.description}
                              </p>

                              <div className="mb-6 space-y-2">
                                {project.casePoints.map((point) => (
                                  <p key={point} className="text-xs leading-relaxed text-white/45">
                                    {point}
                                  </p>
                                ))}
                              </div>

                              <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                  <span key={tag} className="text-[9px] font-bold uppercase tracking-wider text-white/30 border border-white/5 px-2 py-0.5 rounded">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </motion.div>

                            <div className="mt-8 flex items-center gap-2 text-white/40 transition-colors">
                              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Explore Case Study</span>
                              <ArrowRight size={14} className="transition-transform" />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ) : (
                    <motion.div
                      layout
                      transition={cardSpring}
                      className={`bento-card h-full flex flex-col group/card transition-[border-color,box-shadow,background] duration-700 ${
                        isFeatured
                          ? "border-[var(--accent-primary)]/22 shadow-[0_24px_80px_rgba(var(--accent-primary-rgb),0.08)]"
                          : "hover:border-[var(--accent-primary)]/40"
                      }`}
                    >
                      <motion.div
                        layout
                        transition={cardSpring}
                        className={`relative overflow-hidden rounded-xl ${isFeatured ? "mb-8 aspect-[16/9]" : "mb-6 aspect-[16/9]"}`}
                      >
                        <motion.img
                          layout
                          transition={cardSpring}
                          src={project.image}
                          alt={project.title}
                          className={`w-full h-full object-cover transition-transform duration-1000 ${
                            isFeatured ? "group-hover/card:scale-[1.03]" : "group-hover/card:scale-110"
                          }`}
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-700 ${
                            isFeatured
                              ? "from-black/78 via-black/26 to-transparent opacity-80"
                              : "from-black/80 via-black/20 to-transparent opacity-60 group-hover/card:opacity-40"
                          }`}
                        />

                        <div className="absolute top-4 left-4">
                          <motion.span
                            layout
                            transition={cardSpring}
                            className={`rounded-full backdrop-blur-md text-[10px] font-bold uppercase tracking-widest ${
                              isFeatured
                                ? "border border-[var(--accent-primary)]/35 bg-[var(--accent-primary)]/12 px-4 py-1.5 text-[var(--accent-primary)]"
                                : "border border-white/10 bg-black/40 px-3 py-1 text-white/80"
                            }`}
                          >
                            {project.category}
                          </motion.span>
                        </div>

                        <motion.div
                          layout
                          transition={cardSpring}
                          className={`absolute bottom-4 right-4 flex gap-2 transition-all duration-500 ${
                            isFeatured
                              ? "translate-y-0 opacity-100"
                              : "translate-y-4 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100"
                          }`}
                        >
                          {project.github && (
                            <Tooltip content={`Open ${project.title} repository`}>
                              <a
                                href={project.github}
                                onClick={(event) => event.stopPropagation()}
                                aria-label={`Open ${project.title} repository`}
                                className="rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                              >
                                <Github size={18} />
                              </a>
                            </Tooltip>
                          )}
                          {project.link && (
                            <Tooltip content={`Start a conversation about ${project.title}`}>
                              <a
                                href={project.link}
                                onClick={(event) => event.stopPropagation()}
                                aria-label={`Start a conversation about ${project.title}`}
                                className="rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur-md transition-colors hover:bg-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
                              >
                                <ExternalLink size={18} />
                              </a>
                            </Tooltip>
                          )}
                        </motion.div>
                      </motion.div>

                      <motion.div layout transition={cardSpring} className="flex flex-grow flex-col">
                        <div className={`flex justify-between items-start ${isFeatured ? "mb-4" : "mb-3"}`}>
                          <motion.h3
                            layout
                            transition={cardSpring}
                            className={`font-bold tracking-tight transition-colors duration-500 ${
                              isFeatured
                                ? "text-4xl text-white md:text-5xl"
                                : "text-2xl text-white group-hover/card:text-[var(--accent-primary)]"
                            }`}
                          >
                            {project.title}
                          </motion.h3>
                          <motion.span
                            layout
                            transition={cardSpring}
                            className={`font-mono ${isFeatured ? "text-5xl font-black text-white/6" : "text-xl text-white/10"}`}
                          >
                            {project.id}
                          </motion.span>
                        </div>

                        <motion.p
                          layout
                          transition={cardSpring}
                          className={`text-white/50 leading-relaxed ${isFeatured ? "mb-8 max-w-2xl text-base text-white/60" : "mb-6 line-clamp-2 text-sm"}`}
                        >
                          {project.description}
                        </motion.p>

                        <motion.div
                          layout
                          transition={cardSpring}
                          className={`flex flex-wrap gap-2 ${isFeatured ? "mb-8" : ""}`}
                        >
                          {project.tags.map(tag => (
                            <motion.span
                              layout
                              transition={cardSpring}
                              key={tag}
                              className={`font-bold uppercase tracking-wider ${
                                isFeatured
                                  ? "rounded-md border border-[var(--accent-primary)]/18 bg-[var(--accent-primary)]/5 px-3 py-1 text-[10px] text-[var(--accent-primary)]"
                                  : "rounded border border-white/5 px-2 py-0.5 text-[9px] text-white/30"
                              }`}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </motion.div>

                        {isFeatured && (
                          <motion.div
                            layout
                            transition={cardSpring}
                            className="mb-8 grid gap-3 md:grid-cols-3"
                          >
                            {project.casePoints.map((point) => {
                              const [label, detail] = point.split(": ");

                              return (
                                <div
                                  key={point}
                                  className="rounded-xl border border-white/6 bg-white/[0.03] p-3 transition-colors duration-300 hover:border-[var(--accent-primary)]/25"
                                >
                                  <p className="mb-1 text-[9px] font-black uppercase tracking-[0.2em] text-[var(--accent-primary)]">
                                    {label}
                                  </p>
                                  <p className="text-xs leading-relaxed text-white/50">
                                    {detail}
                                  </p>
                                </div>
                              );
                            })}
                          </motion.div>
                        )}

                        <motion.div
                          layout
                          transition={cardSpring}
                          className={`mt-auto flex items-center gap-3 transition-colors duration-500 ${
                            isFeatured ? "text-white" : "text-white/40 group-hover/card:text-white"
                          }`}
                        >
                          <span className={`font-bold uppercase tracking-[0.2em] ${isFeatured ? "text-xs" : "text-[10px]"}`}>
                            Explore Case Study
                          </span>
                          <motion.div
                            layout
                            transition={cardSpring}
                            className={`flex items-center justify-center rounded-full transition-all duration-500 ${
                              isFeatured
                                ? "h-10 w-10 border border-white/18 bg-white/5"
                                : ""
                            }`}
                          >
                            <ArrowRight
                              size={isFeatured ? 18 : 14}
                              className={`transition-transform duration-500 ${isFeatured ? "group-hover/card:translate-x-1" : "group-hover/card:translate-x-2"}`}
                            />
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Call to action card */}
          {filteredProjects.length > 0 && (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-12"
            >
              <div className="mt-12 flex flex-col items-center justify-between gap-8 rounded-[2rem] border border-[var(--accent-primary)]/10 bg-gradient-to-br from-[var(--accent-primary)]/20 to-transparent px-6 py-8 lg:flex-row lg:px-8 lg:py-12">
                <div className="text-center lg:text-left">
                  <h4 className="mb-2 text-2xl lg:text-3xl font-bold text-white">Have a system or product to build?</h4>
                  <p className="text-white/60">Let&apos;s engineer a scalable product, platform, or business system around it.</p>
                </div>
                <a href="#contact" className="flex w-full items-center justify-center gap-3 rounded-full bg-[var(--accent-primary)] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(var(--accent-primary-rgb),0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black lg:w-auto lg:px-10 lg:py-5 lg:text-sm group">
                  Book a Build Call
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 h-[300px] w-[300px] rounded-full bg-[var(--accent-primary)]/5 blur-[100px] lg:h-[500px] lg:w-[500px] lg:blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 h-[250px] w-[250px] rounded-full bg-[var(--accent-primary)]/10 blur-[120px] lg:h-[400px] lg:w-[400px] lg:blur-[150px] -z-10 pointer-events-none" />
    </section>
  );
}
