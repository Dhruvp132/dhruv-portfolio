"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const proofPoints = [
  "5+ businesses supported",
  "10+ software systems shipped",
  "SaaS, commerce, automation, and real-time products",
  "Architecture, UX, backend workflows, and deployment",
];

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent("Product engineering inquiry");
    const body = encodeURIComponent(
      `Email: ${email || "Not provided"}\n\nProject brief:\n${message || "I want to discuss a software system."}`,
    );

    window.location.href = `mailto:dhruvpatel13210@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
   <section id="contact" className="section-surface relative w-full overflow-hidden py-20 text-white md:py-28">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[linear-gradient(rgba(243,102,57,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(243,102,57,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">

        {/* LEFT SIDE */}
        <form onSubmit={handleSubmit}>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 text-4xl font-light leading-none md:text-6xl lg:text-7xl"
          >
            BUILD SOFTWARE THAT SCALES
          </motion.h2>

          <p className="mb-10 max-w-xl text-sm leading-relaxed text-zinc-400 md:mb-12">
            Share the product, platform, or internal business system you want to build. I will route the message through email so the conversation starts directly.
          </p>

          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-10"
          >
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your business email"
              className="w-full border-b border-[var(--accent-primary)] bg-transparent py-4 outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[var(--accent-primary)] focus:ring-0"
            />
          </motion.div>

          {/* Message Input */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12 md:mb-14"
          >
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="What system are you building?"
              rows={2}
              className="w-full resize-none border-b border-[var(--accent-primary)] bg-transparent py-4 outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[var(--accent-primary)] focus:ring-0"
            />
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            data-oneko-dodge="true"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.button
              type="submit"
              aria-label="Send product engineering brief"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-[var(--accent-primary)] px-7 py-4 text-xs font-black uppercase tracking-[0.22em] text-white shadow-[0_0_24px_rgba(243,102,57,0.28)] transition-all duration-300 hover:bg-[var(--accent-secondary)] hover:shadow-[0_0_34px_rgba(243,102,57,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Send Product Brief
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

            <p className="max-w-xs text-xs leading-relaxed text-zinc-500">
              For SaaS platforms, business systems, automation workflows, and modern product builds.
            </p>
          </motion.div>
        </form>

        {/* RIGHT SIDE IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
          whileHover={{ y: -4 }}
        >
          <div className="overflow-hidden rounded-3xl border border-[var(--accent-primary)]/70 bg-black/45 p-7 shadow-[0_0_40px_rgba(243,102,57,0.22)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_0_54px_rgba(243,102,57,0.3)] md:p-8">
            <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--accent-primary)]">
              Product Engineering Partner
            </p>
            <h3 className="mb-6 text-2xl font-bold leading-tight text-white md:text-3xl">
              Scalable SaaS and business systems for ambitious teams.
            </h3>
            <div className="space-y-4">
              {proofPoints.map((point) => (
                <div key={point} className="flex items-center gap-3 border-b border-white/10 pb-3 text-sm text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <a
              href="mailto:dhruvpatel13210@gmail.com"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-primary)] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              dhruvpatel13210@gmail.com
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Floating glow card behind */}
          <div className="absolute -bottom-8 -left-8 w-full h-full border border-[var(--accent-primary)] rounded-3xl opacity-20" />
        </motion.div>
      </div>
    </section>
  );
}
