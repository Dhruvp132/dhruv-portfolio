"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "CheckMate ♟️",
    description:
      "Real-time chess platform with live WebRTC video chat and WebSocket-based game state sync. Built for high concurrency and ultra-low latency gameplay.",
    tech: ["React", "WebRTC", "WebSockets", "Node.js"],
    live: "https://checkmate-dhruv.vercel.app/",
    code: "https://github.com/Dhruvp132",
  },
  {
    title: "Muzique 🎵",
    description:
      "Collaborative SaaS music platform with real-time playlist voting, Stripe payments, and scalable architecture for hundreds to thousands of users.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    live: "https://github.com/Dhruvp132/Muzique",
    code: "https://github.com/Dhruvp132/Muzique",
  },
  {
    title: "AlgoViz 📊",
    description:
      "Interactive algorithm visualizer supporting Dijkstra, DFS, BFS, Merge Sort, Quick Sort & Bubble Sort for real-time educational feedback.",
    tech: ["React", "JavaScript", "Algorithms", "Visualization"],
    live: "https://algoviz-dhruv.vercel.app/",
    code: "https://github.com/Dhruvp132",
  },
];

export default function CVProjects() {
  return (
   <section id="projects" className="relative bg-black py-24 pt-32 text-white overflow-hidden">
      {/* Neon radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.08),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-green-400 uppercase tracking-widest text-sm">
            Featured Work
          </p>
          <h2 className="text-5xl font-bold mt-4">
            Projects<span className="text-green-400">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative bg-zinc-900/60 backdrop-blur-xl border border-green-500/20 rounded-2xl p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(57,255,20,0.2)]"
            >
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl border border-green-400/0 group-hover:border-green-400/60 transition-all duration-500 pointer-events-none" />

              <h3 className="text-xl font-semibold group-hover:text-green-400 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed mt-4">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-6">
                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-green-500 text-black font-medium hover:bg-green-400 transition-all duration-300 shadow-lg shadow-green-500/30"
                >
                  Live <ExternalLink size={16} />
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-green-500/30 hover:border-green-400 hover:text-green-400 transition-all duration-300"
                >
                  Code <Github size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}