"use client"

import { motion } from "framer-motion"

export default function Overview() {
  return (
   <section id="hero" className="min-h-screen bg-black text-white px-6 md:px-20 py-28 pt-32">

      <p className="text-sm tracking-[6px] text-lime-400 mb-4">
        INTRODUCTION
      </p>

      <h2 className="text-5xl md:text-7xl font-extrabold mb-20">
        Overview<span className="text-lime-400">.</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* IMAGE */}
          <div className="relative mb-10">
            {/* Neon Glow */}
            <div className="absolute inset-0 rounded-full blur-3xl bg-lime-500/40"></div>

            <img
              src="/dhruv.jpeg"
              alt="Profile"
              className="relative w-80 h-80 rounded-full object-cover border-4 border-lime-400 shadow-[0_0_40px_#84cc16]"
            />
          </div>

          {/* BUTTON ROW 1 */}
          <div className="flex gap-6 mb-6">
            <a
              href="https://drive.google.com/drive/folders/1eU1fxSiCbVIQ_mXvJB2Z3Up-BZsiD1h1"
              className="px-6 py-3 rounded-lg border border-lime-400 text-lime-400 
              shadow-[0_0_15px_#84cc16] hover:bg-lime-400 hover:text-black 
              hover:shadow-[0_0_25px_#84cc16] transition duration-300"
            >
              Resume
            </a>

            <a
              href="https://www.linkedin.com/in/dhruvpatel1310/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-lime-400 text-lime-400 
              shadow-[0_0_15px_#84cc16] hover:bg-lime-400 hover:text-black 
              hover:shadow-[0_0_25px_#84cc16] transition duration-300"
            >
              LinkedIn
            </a>
          </div>

          {/* GITHUB BUTTON */}
          <a
            href="https://github.com/Dhruvp132"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-3 rounded-lg border border-lime-400 text-lime-400 
            shadow-[0_0_15px_#84cc16] hover:bg-lime-400 hover:text-black 
            hover:shadow-[0_0_25px_#84cc16] transition duration-300"
          >
            GitHub
          </a>

        </motion.div>

        {/* RIGHT SIDE TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8 text-lg text-gray-300 leading-relaxed"
        >
          <p>
            👨‍💻 I'm a Software Engineer passionate about building scalable web
            applications and cloud-based solutions.
          </p>

          <p>
            🎓 Final year Computer Science student focused on clean architecture
            and performance-driven development.
          </p>

          <p>
            🚀 Skilled in full-stack development, problem-solving, and modern
            tech stacks.
          </p>

          <p>
            ⚡ Always learning. Always building.
          </p>
        </motion.div>

      </div>
    </section>
  )
}