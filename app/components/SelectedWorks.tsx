"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    tag: "AI PRODUCT SYSTEM",
    title: "Weave",
    desc: "Prompt-to-product engineering system that generates application structure, code files, live previews, and in-browser editing through WebContainer workflows.",
    link: "https://weave-dhruv.vercel.app/",
    image: "/weave.png"
  },
  {
    tag: "REAL-TIME PRODUCT SYSTEM",
    title: "CheckMate",
    desc: "Low-latency chess and video communication platform using WebRTC, WebSockets, game-state synchronization, and scalable live-session architecture.",
    link: "https://checkmate-dhruv.vercel.app/",
    image: "/checkmate.jpg"
  },
  {
    tag: "SAAS PRODUCT SYSTEM",
    title: "Muzique",
    desc: "Collaborative music SaaS platform with real-time queue voting, monetization workflows, authentication, and backend architecture designed for shared sessions.",
    link: "https://muzique.vercel.app/",
    image: "/music.jpg"
  },
  // {
  //   tag: "EDUCATIONAL TOOL",
  //   title: "AlgoViz",
  //   desc: "Interactive visualization tool for sorting & pathfinding algorithms with real-time feedback.",
  //   link: "https://algoviz-dhruv.vercel.app/",
  //   image: "/algo.jpg"
  // }


];

export default function SelectedWorks() {
  return (
   <section id="selectedworks" className="section-surface w-full text-white">
      <div className="section-inner py-16 md:py-24">

      {/* Section Title */}
      <div className="mb-12 text-center md:mb-14">
        <h2 className="text-3xl font-extrabold tracking-wide md:text-4xl">
          {/* SELECTED WORKS */}
          Product Systems
        </h2>
        <div className="mx-auto mt-5 h-0.5 w-24 bg-[var(--accent-primary)]"></div>
      </div>

      <div className="space-y-16 md:space-y-20">

        {projects.map((project, index) => {

          const isReversed = index % 2 !== 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-16"
            >

          {/* IMAGE */}
<div
  className={`relative flex justify-center ${
    isReversed ? "md:order-2" : ""
  }`}
>
  <div className="group relative h-[280px] w-[300px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_18px_54px_rgba(0,0,0,0.28)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--accent-primary)]/35 hover:shadow-[0_22px_70px_rgba(0,0,0,0.36)]">

    <Image
      src={project.image}
      alt={project.title}
      fill
      sizes="300px"
      className="object-cover transition duration-700 group-hover:scale-105"
    />

    <div className="absolute inset-0 rounded-2xl bg-transparent transition duration-500 group-hover:bg-[#F36639]/10"></div>

  </div>
</div>
              {/* TEXT */}
              <div className={`${isReversed ? "md:order-1 text-right" : ""}`}>
                <h4 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--accent-primary)]">
                  {project.tag}
                </h4>

                <h3 className="mb-5 text-3xl font-bold md:text-4xl">
                  {project.title}
                </h3>

              <p className="mb-7 text-sm leading-relaxed text-gray-400">
                  {project.desc}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-[var(--accent-primary)] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-primary)] shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-secondary)] hover:text-black hover:shadow-[0_0_30px_rgba(243,102,57,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  View System
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>

            </motion.div>
          );
        })}

      </div>

      </div>
    </section>
  );
}
