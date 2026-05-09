"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Software Development Engineer",
      company: "Prime Apps",
      location: "Ahmedabad, India",
      period: "Apr 2024 – Current",
      highlights: [
        "Developed efficient algorithms for betting application, handling spin draws, mystery box game logic, and performance-critical flows",
        "Designed and implemented AI-driven n8n automation workflow: integrated Slack alerts, RAG, error logs with Claude Code on dedicated server for self-healing systems",
        "Worked on Sportsgrid.com (Web + Mobile), contributing to SSR optimization, site ranking improvements, and production stability",
        "Resolved critical crashes in React Native apps (Android & iOS) and implemented push notifications",
      ],
    },
    {
      id: 2,
      role: "Independent Software Development Engineer",
      company: "Self-Employed",
      location: "Remote",
      period: "Oct 2024 – Current",
      highlights: [
        "Developed UtsavInternational.com, a production-grade business website with SEO optimization, responsive UI, and cloud deployment",
        "Built JD Lights & Automation, a lights and automation business website live on Vercel with scalable frontend architecture",
        "Developing a full-stack e-commerce platform with Razorpay payment integration, product management, order workflows and delivery dashboard",
      ],
    },
    {
      id: 3,
      role: "Software Engineering & DSA Instructor (TA Intern)",
      company: "Apna College",
      location: "Delhi, India",
      period: "Jun 2024 – Oct 2024",
      highlights: [
        "Conducted 50+ live DSA sessions mentoring 200+ students, strengthening problem-solving and interview readiness",
        "Debugged and optimized multiple student projects, improving runtime efficiency (~10%) and deployment stability",
        "Guided students on advanced algorithms and CI/CD practices, resulting in measurable improvement in assessments and technical interviews",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section-surface w-full py-24 text-white">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Professional Experience</h2>
          <div className="w-24 h-0.5 bg-[var(--accent-primary)] mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="surface-panel p-8 rounded-2xl border-l-4 border-l-[var(--accent-primary)] hover:border-l-[var(--accent-secondary)] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-[var(--accent-primary)] font-semibold mb-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-400">{exp.location}</p>
                </div>
                <span className="text-xs bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] px-4 py-2 rounded-full font-semibold whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <div className="space-y-3">
                {exp.highlights.map((highlight, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-3"
                  >
                    <span className="text-[var(--accent-primary)] font-bold text-lg mt-0.5">•</span>
                    <p className="text-gray-300 text-sm leading-relaxed">{highlight}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-xs text-gray-500">
                  {index === 0 && "Current Role"}
                  {index === 1 && "Concurrent with Primary Role"}
                  {index === 2 && "Previous Experience"}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 p-6 bg-[var(--accent-primary)]/5 rounded-xl border border-[var(--accent-primary)]/20"
        >
          <p className="text-sm text-gray-300">
            <span className="text-[var(--accent-primary)] font-bold">Total Experience: </span>
            3+ years of full-stack development, with expertise in scalable architectures,
            real-time systems, and AI integration.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
