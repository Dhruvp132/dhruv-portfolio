"use client";

import { motion } from "framer-motion";

export default function Education2() {
  return (
    <section id="education" className="section-surface w-full py-20 text-white md:py-24">
      <div className="section-inner relative">
      {/* Heading */}
      <p className="mb-4 text-center text-xs tracking-[0.35em] text-[var(--accent-primary)]">
        WHAT I HAVE STUDIED SO FAR
      </p>

      <h2 className="mb-16 text-center text-3xl font-extrabold md:mb-20 md:text-5xl">
        Education<span className="text-[var(--accent-primary)]">.</span>
      </h2>

      {/* Vertical Line */}
      <div className="absolute bottom-4 left-1/2 top-48 hidden w-[2px] bg-[#F56639]/30 md:block"></div>

      <div className="relative flex flex-col gap-16 md:gap-24">
        {/* Entry 1 - LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ y: -4, borderColor: "rgba(var(--accent-primary-rgb), 0.42)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-start w-full"
        >
          <div
            className="surface-panel w-full border border-[#F56639]/30
          md:w-1/2
          rounded-xl p-6 shadow-[0_0_25px_rgba(243,102,57,0.22)] transition-[border-color,box-shadow,transform] duration-300 hover:shadow-[0_18px_54px_rgba(0,0,0,0.28)] md:p-8"
          >
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
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
          whileHover={{ y: -4, borderColor: "rgba(var(--accent-primary-rgb), 0.42)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-end w-full"
        >
          <div
            className="surface-panel w-full border border-[#F56639]/30
          md:w-1/2
          rounded-xl p-6 shadow-[0_0_25px_rgba(243,102,57,0.22)] transition-[border-color,box-shadow,transform] duration-300 hover:shadow-[0_18px_54px_rgba(0,0,0,0.28)] md:p-8"
          >
            <h3 className="mb-4 text-xl font-bold md:text-2xl">Academic Highlights</h3>

            <ul className="space-y-3 text-sm text-gray-300 md:text-base">
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
