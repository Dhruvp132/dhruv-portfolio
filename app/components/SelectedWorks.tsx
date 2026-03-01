"use client";

import { motion } from "framer-motion";

const projects = [
  {
    tag: "REAL-TIME APPLICATION",
    title: "CheckMate",
    desc: "Real-time chess + video chat platform using WebRTC & WebSockets supporting thousands of concurrent users.",
    link: "https://checkmate-dhruv.vercel.app/",
    image: "/checkmate.jpg"
  },
  {
    tag: "SAAS PLATFORM",
    title: "Muzique",
    desc: "Collaborative music SaaS with real-time voting, Stripe monetization & scalable architecture.",
    link: "https://github.com/Dhruvp132/Muzique",
    image: "/music.jpg"
  },
  {
    tag: "EDUCATIONAL TOOL",
    title: "AlgoViz",
    desc: "Interactive visualization tool for sorting & pathfinding algorithms with real-time feedback.",
    link: "https://algoviz-dhruv.vercel.app/",
    image: "/algo.jpg"
  }
];

export default function SelectedWorks() {
  return (
   <section id="selectedworks" className="min-h-screen pt-32">

      {/* Section Title */}
      <div className="text-center mb-32">
        <h2 className="text-5xl md:text-7xl font-bold tracking-wide">
          SELECTED WORKS
        </h2>
        <div className="w-24 h-[2px] bg-[#39FF14] mx-auto mt-6"></div>
      </div>

      <div className="space-y-40">

        {projects.map((project, index) => {

          const isReversed = index % 2 !== 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-16 items-center`}
            >

          {/* IMAGE */}
<div
  className={`relative flex justify-center ${
    isReversed ? "md:order-2" : ""
  }`}
>
  <div className="w-[420px] h-[280px] overflow-hidden rounded-2xl group relative">
    
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
    />

    <div className="absolute inset-0 bg-[#39FF14]/0 group-hover:bg-[#39FF14]/10 transition duration-500 rounded-2xl"></div>
  
  </div>
</div>
              {/* TEXT */}
              <div className={`${isReversed ? "md:order-1 text-right" : ""}`}>
                <h4 className="text-[#39FF14] font-semibold mb-3 tracking-widest">
                  {project.tag}
                </h4>

                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  {project.title}
                </h3>

              <p className="text-gray-400 leading-relaxed mb-8 font-[var(--body-font)]">
                  {project.desc}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block border border-[#39FF14] text-[#39FF14] px-8 py-3 rounded-full 
                  hover:bg-[#39FF14] hover:text-black transition duration-300 shadow-md hover:shadow-[#39FF14]/50"
                >
                  View Project →
                </a>
              </div>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}