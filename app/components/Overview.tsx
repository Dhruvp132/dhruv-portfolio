"use client";

import { motion } from "framer-motion";

export default function Overview2() {
  const roles = [
    {
      title: "Software Development Engineer",
      company: "Prime Apps",
      period: "Apr 2024 – Current",
      description: "Developing efficient algorithms for applications, implementing AI-driven n8n automation workflows, and optimizing production systems.",
    },
    // {
    //   title: "Independent Software Developer",
    //   company: "Self-Employed",
    //   period: "Oct 2024 – Current",
    //   description: "Building production-grade web applications including UtsavInternational.com, JD Lights automation platform, and a full-stack e-commerce solution.",
    // },
    {
      title: "Software Engineering & DSA Instructor",
      company: "Apna College",
      period: "Jun 2024 – Oct 2024",
      description: "Conducted 50+ live DSA sessions, mentored 200+ students, and guided them through advanced algorithms and interview preparation.",
    },
  ];

  return (
    <section className="section-surface w-full py-24 text-white">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-2"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Work Experience</h2>
          {/* <p className="text-gray-300 max-w-2xl mx-auto">
            Full Stack Developer with expertise in modern web technologies, AI integration, and scalable system design.
            Currently building innovative solutions at Prime Apps while maintaining independent projects.
          </p> */}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { label: "Years of Experience", value: "1.5+" },
            { label: "Projects", value: "10+" },
            { label: "Students Mentored", value: "200+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="surface-panel p-6 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-[var(--accent-primary)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6">
          {/* <h3 className="text-2xl font-bold mb-8">Professional Experience</h3> */}
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="surface-panel p-6 rounded-xl border-l-4 border-l-[var(--accent-primary)]"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-xl font-bold text-white">{role.title}</h4>
                  <p className="text-[var(--accent-primary)] text-sm font-semibold">{role.company}</p>
                </div>
                <span className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                  {role.period}
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{role.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
