"use client";

import { motion } from "framer-motion";
import Tooltip from "./Tooltip";

export default function Overview2() {
  const roles = [
    {
      title: "Software Engineer, Product Systems",
      company: "Prime Apps",
      period: "Apr 2024 – Current",
      status: "Currently building",
      statusTone: "primary",
      description: "Engineering performance-critical application flows, AI-assisted n8n automation, production stability improvements, and scalable web/mobile product systems.",
    },
    {
      title: "Independent Product Engineer",
      company: "Client Systems",
      period: "Oct 2024 – Current",
      status: "Active client work",
      statusTone: "secondary",
      description: "Building production-ready business software for export, automation, and commerce clients with SEO, payments, product workflows, and deployment pipelines.",
    },
    {
      title: "Software Engineering & DSA Instructor",
      company: "Apna College",
      period: "Jun 2024 – Oct 2024",
      description: "Conducted 50+ live DSA sessions, mentored 200+ students, and strengthened algorithmic thinking, debugging discipline, and implementation quality.",
    },
  ];

  return (
    <section className="section-surface w-full py-20 md:py-24 text-white">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Product Engineering Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Building scalable software systems across SaaS, automation, commerce, and high-performance application workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
          {[
            { label: "Businesses Supported", value: "5+" },
            { label: "Systems Shipped", value: "10+" },
            { label: "Students Mentored", value: "200+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, borderColor: "rgba(var(--accent-primary-rgb), 0.36)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="surface-panel rounded-xl border border-white/5 p-5 text-center transition-[border-color,box-shadow,transform] duration-300 hover:shadow-[0_16px_44px_rgba(0,0,0,0.24)] md:p-6"
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
              whileHover={{
                x: 4,
                y: -2,
                borderColor: "rgba(var(--accent-primary-rgb), 0.28)",
                boxShadow: "0 18px 54px rgba(0,0,0,0.28)",
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="surface-panel rounded-xl border border-white/5 border-l-4 border-l-[var(--accent-primary)] p-5 transition-[border-color,box-shadow,transform] duration-300 md:p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-3">
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <h4 className="text-lg font-bold text-white md:text-xl">{role.title}</h4>
                    {role.status ? (
                      <Tooltip
                        content={
                          role.statusTone === "primary"
                            ? "Current product engineering role."
                            : "Active independent client systems."
                        }
                      >
                        <span
                          className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 ${
                            role.statusTone === "primary"
                              ? "border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] group-hover:border-[var(--accent-primary)]/50"
                              : "border-emerald-400/20 bg-emerald-400/10 text-emerald-300 group-hover:border-emerald-400/40"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              role.statusTone === "primary"
                                ? "bg-[var(--accent-primary)] shadow-[0_0_12px_rgba(var(--accent-primary-rgb),0.7)]"
                                : "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.55)]"
                            } animate-pulse`}
                          />
                          {role.status}
                        </span>
                      </Tooltip>
                    ) : null}
                  </div>
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
