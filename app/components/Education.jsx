"use client";

import { motion } from "framer-motion";

export default function Education2() {
  return (
    <section id="education" className="section-surface min-h-screen w-full text-white">
      <div className="section-inner relative py-24 md:py-32">
      {/* Heading */}
      <p className="text-sm tracking-[6px] text-[var(--accent-primary)] mb-4 text-center">
        WHAT I HAVE STUDIED SO FAR
      </p>

      <h2 className="text-3xl md:text-5xl font-extrabold mb-24 text-center">
        Education<span className="text-[var(--accent-primary)]">.</span>
      </h2>

      {/* Vertical Line */}
      <div className="absolute left-1/2 top-56 bottom-10 w-[2px] bg-[#F56639]/30"></div>

      <div className="relative flex flex-col gap-32">
        {/* Entry 1 - LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-start w-full"
        >
          <div
            className="surface-panel w-full border border-[#F56639]/30 
          md:w-1/2
          p-8 rounded-xl shadow-[0_0_25px_rgba(243,102,57,0.32)]"
          >
            <h3 className="text-2xl font-bold mb-2">
              Bachelor of Technology (BTech)
            </h3>

            <p className="text-gray-400 mb-2">
              Silver Oak University, Ahmedabad
            </p>

            <p className="text-[var(--accent-primary)] font-semibold mb-4">
              Computer Science Engineering | CGPA: 9.28
            </p>

            <p className="text-gray-300">
              Graduated 2024 | Top 5% of the Class
            </p>
          </div>
        </motion.div>

        {/* Center Dot 1 */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[260px] w-0 h-0 md:w-6 md:h-6 rounded-full bg-[var(--accent-primary)] shadow-[0_0_15px_rgba(243,102,57,0.4)]"
        ></div>

        {/* Entry 2 - RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-end w-full"
        >
          <div
            className="surface-panel w-full border border-[#F56639]/30 
          md:w-1/2
          p-8 rounded-xl shadow-[0_0_25px_rgba(243,102,57,0.32)]"
          >
            <h3 className="text-2xl font-bold mb-4">Academic Highlights</h3>

            <ul className="text-gray-300 space-y-3">
              <li>• Strong foundation in Data Structures & Algorithms</li>
              <li>• Advanced understanding of DBMS, OS & Computer Networks</li>
              <li>
                • Focused on scalable system design & backend architecture
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Center Dot 2 */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-[600px] w-0 h-0 md:w-6 md:h-6 rounded-full bg-[var(--accent-primary)] shadow-[0_0_15px_rgba(243,102,57,0.4)]"
        ></div>
      </div>
      </div>
    </section>
  );
}
