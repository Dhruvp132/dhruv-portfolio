"use client";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useState } from "react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Aura Luxury Real Estate",
    category: "Full Stack Development",
    description: "A high-end property discovery platform featuring real-time bidding, immersive 3D tours, and AI-driven valuation models.",
    tags: ["React", "Node.js", "Three.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1600585154340-be6199f7e009?q=80&w=2070&auto=format&fit=crop",
    link: "#",
    github: "#"
  },
  {
    id: "02",
    title: "Vanguard Trading Terminal",
    category: "Fintech Interface",
    description: "A sophisticated desktop-class web application for institutional traders with microsecond data precision and complex charting.",
    tags: ["TypeScript", "WebSockets", "D3.js", "Redis"],
    image: "https://images.unsplash.com/photo-1611974715853-26d30b65672a?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    id: "03",
    title: "Onyx E-commerce",
    category: "Modern Retail",
    description: "Minimalist fashion platform with seamless transitions and a heavy focus on cinematic storytelling through product photography.",
    tags: ["Next.js", "Framer Motion", "Stripe", "GraphQL"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  },
  {
    id: "04",
    title: "NeuroLink AI Dashboard",
    category: "Artificial Intelligence",
    description: "Visualizing complex neural networks and high-dimensional data in an interactive 3D space.",
    tags: ["Python", "TensorFlow", "React", "WebGL"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    link: "#"
  }
];

const CATEGORIES = ["All", "Full Stack", "Fintech", "Retail", "AI"];

export default function FreelanceProjects() {
  const [projects, setProjects] = useState<Project[]>(PROJECTS);
  const [activeFilter, setActiveFilter] = useState("All");

  const swapToFeatured = (projectId: string) => {
    setProjects((currentProjects) => {
      const index = currentProjects.findIndex((project) => project.id === projectId);

      if (index <= 0) {
        return currentProjects;
      }

      const nextProjects = [...currentProjects];
      const [selectedProject] = nextProjects.splice(index, 1);
      nextProjects.unshift(selectedProject);
      return nextProjects;
    });
  };

  const filteredProjects = projects.filter(project => {
    if (activeFilter === "All") return true;
    return project.category.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="section-inner">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[var(--accent-primary)] text-xs font-bold uppercase tracking-[0.4em] mb-4 block"
            >
              Selected Portfolio
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[0.9]"
            >
              FREELANCE <br />
              <span className="text-white/20">MASTERPIECES</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/40 text-sm max-w-xs leading-relaxed"
          >
            A collection of highly bespoke digital solutions crafted for ambitious clients across the globe.
          </motion.p>
        </div>

        {/* Sub-Navbar (Filters) */}
        <div className="mb-12 flex flex-wrap gap-4 items-center border-b border-white/5 pb-8">
          <div className="flex bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === cat ? "text-white" : "text-white/40 hover:text-white/60"
                }`}
              >
                {activeFilter === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-[var(--accent-primary)] rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
          
          <div className="hidden md:block h-px flex-grow bg-gradient-to-r from-white/10 to-transparent" />
          <span className="text-[10px] font-mono text-white/20 uppercase tracking-tighter">
            Total Projects: {filteredProjects.length}
          </span>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isFeatured = activeFilter === "All" && index === 0;
              const canSwap = activeFilter === "All" && index > 0;

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  className={`${isFeatured ? "md:col-span-8" : "md:col-span-4"} group ${canSwap ? "cursor-pointer" : ""}`}
                  onClick={canSwap ? () => swapToFeatured(project.id) : undefined}
                  onKeyDown={
                    canSwap
                      ? (event) => {
                          if (event.key === "Enter" || event.key === " ") {
                            event.preventDefault();
                            swapToFeatured(project.id);
                          }
                        }
                      : undefined
                  }
                  role={canSwap ? "button" : undefined}
                  tabIndex={canSwap ? 0 : undefined}
                >
                  <motion.div
                    layout
                    className="bento-card h-full flex flex-col group/card hover:border-[var(--accent-primary)]/40 transition-colors duration-500"
                  >
                    {/* Image Wrap */}
                    <motion.div layout className="relative aspect-[16/9] overflow-hidden rounded-xl mb-6">
                      <motion.img
                        layout
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity" />

                      {/* Category Tag (Floating) */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/80">
                          {project.category}
                        </span>
                      </div>

                      {/* Actions */}
                      <div className="absolute bottom-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300">
                        {project.github && (
                          <a
                            href={project.github}
                            onClick={(event) => event.stopPropagation()}
                            className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-[var(--accent-primary)] transition-colors text-white"
                          >
                            <Github size={18} />
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            onClick={(event) => event.stopPropagation()}
                            className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-[var(--accent-primary)] transition-colors text-white"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div layout className="flex-grow">
                      <div className="flex justify-between items-start mb-3">
                        <motion.h3 layout className="text-2xl font-bold tracking-tight text-white group-hover/card:text-[var(--accent-primary)] transition-colors">
                          {project.title}
                        </motion.h3>
                        <span className="text-white/10 font-mono text-xl">{project.id}</span>
                      </div>

                      <p className="text-white/50 text-sm leading-relaxed mb-6 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[9px] font-bold uppercase tracking-wider text-white/30 border border-white/5 px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* "View More" Arrow */}
                    <div className="mt-8 flex items-center gap-2 text-white/40 group-hover/card:text-white transition-colors">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Explore Case Study</span>
                      <ArrowRight size={14} className="group-hover/card:translate-x-2 transition-transform" />
                    </div>
                  </motion.div>
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
              className="md:col-span-12"
            >
              <div className="py-12 px-8 rounded-[2rem] bg-gradient-to-br from-[var(--accent-primary)]/20 to-transparent border border-[var(--accent-primary)]/10 flex flex-col md:flex-row items-center justify-between gap-8 mt-12">
                <div className="text-center md:text-left">
                  <h4 className="text-3xl font-bold text-white mb-2">Have a vision for your next project?</h4>
                  <p className="text-white/60">Let&apos;s build something that stands out from the noise.</p>
                </div>
                <button className="px-10 py-5 rounded-full bg-[var(--accent-primary)] text-white font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(var(--accent-primary-rgb),0.4)] transition-all duration-500 flex items-center gap-3 group">
                  Start a Conversation
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--accent-primary)]/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 w-[400px] h-[400px] bg-[var(--accent-primary)]/10 blur-[150px] rounded-full -z-10 pointer-events-none" />
    </section>
  );
}
