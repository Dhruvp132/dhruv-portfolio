"use client";

import { motion } from "framer-motion";

export default function Education() {
  const education = {
    degree: "Bachelor of Technology (BTech)",
    field: "Computer Science Engineering",
    university: "Silver Oak University",
    location: "Ahmedabad, Gujarat",
    graduation: "2024",
    cgpa: "9.28",
    honors: "Top 5% of the class",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOPs)",
      "Software Engineering Principles",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "Engineering Mathematics",
    ],
  };

  return (
    <section className="section-surface w-full pb-24 text-white">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Education</h2>
          <div className="w-24 h-0.5 bg-[var(--accent-primary)] mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="surface-panel p-8 rounded-2xl border border-[var(--accent-primary)]/20"
        >
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-white mb-2">{education.degree}</h3>
            <p className="text-xl text-[var(--accent-primary)] font-semibold mb-1">
              {education.field}
            </p>
            <p className="text-gray-300">
              {education.university}, {education.location}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8 py-6 border-y border-white/10">
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--accent-primary)] mb-2">
                {education.cgpa}
              </div>
              <div className="text-sm text-gray-400">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--accent-primary)] mb-2">
                {education.graduation}
              </div>
              <div className="text-sm text-gray-400">Graduation Year</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-[var(--accent-primary)] mb-2">
                Top 5%
              </div>
              <div className="text-sm text-gray-400">Class Rank</div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-bold mb-4 text-white">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30
                  text-[var(--accent-primary)] text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-4 bg-[var(--accent-primary)]/5 rounded-lg border border-[var(--accent-primary)]/20"
          >
            <p className="text-[var(--accent-primary)] font-semibold text-sm">
              ✓ Honors: {education.honors}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
