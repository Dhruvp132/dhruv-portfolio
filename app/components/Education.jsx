"use client"

import { motion } from "framer-motion"

export default function Education() {
  return (
   <section id="education" className="min-h-screen bg-black text-white px-6 md:px-20 py-28 pt-32 relative">

      {/* Heading */}
      <p className="text-sm tracking-[6px] text-lime-400 mb-4 text-center">
        WHAT I HAVE STUDIED SO FAR
      </p>

      <h2 className="text-5xl md:text-7xl font-extrabold mb-24 text-center">
        Education<span className="text-lime-400">.</span>
      </h2>

      {/* Vertical Line */}
      <div className="absolute left-1/2 top-56 bottom-10 w-[2px] bg-lime-400/30"></div>

      <div className="relative flex flex-col gap-32">

        {/* Entry 1 - LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-start w-full"
        >
          <div className="w-full md:w-1/2 bg-[#111] border border-lime-400/30 
          p-8 rounded-xl shadow-[0_0_25px_#84cc16]">

            <h3 className="text-2xl font-bold mb-2">
              Bachelor of Technology (BTech)
            </h3>

            <p className="text-gray-400 mb-2">
              Silver Oak University, Ahmedabad
            </p>

            <p className="text-lime-400 font-semibold mb-4">
              Computer Science Engineering | CGPA: 9.28
            </p>

            <p className="text-gray-300">
              Graduated 2024 | Top 5% of the Class
            </p>
          </div>
        </motion.div>

        {/* Center Dot 1 */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[260px] 
        w-6 h-6 rounded-full bg-lime-400 shadow-[0_0_15px_#84cc16]"></div>


        {/* Entry 2 - RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-end w-full"
        >
          <div className="w-full md:w-1/2 bg-[#111] border border-lime-400/30 
          p-8 rounded-xl shadow-[0_0_25px_#84cc16]">

            <h3 className="text-2xl font-bold mb-4">
              Academic Highlights
            </h3>

            <ul className="text-gray-300 space-y-3">
              <li>• Strong foundation in Data Structures & Algorithms</li>
              <li>• Advanced understanding of DBMS, OS & Computer Networks</li>
              <li>• Focused on scalable system design & backend architecture</li>
            </ul>
          </div>
        </motion.div>

        {/* Center Dot 2 */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[600px] 
        w-6 h-6 rounded-full bg-lime-400 shadow-[0_0_15px_#84cc16]"></div>

      </div>
    </section>
  )
}