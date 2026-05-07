"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
   <section id="contact" className="section-surface relative w-full overflow-hidden py-24 pt-32 text-white">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[linear-gradient(rgba(243,102,57,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(243,102,57,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl md:text-7xl font-light mb-16"
          >
            GET IN TOUCH
          </motion.h2>

          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-10"
          >
            <input
              type="email"
              placeholder="Your E-mail"
              className="w-full bg-transparent border-b border-[var(--accent-primary)] py-4 outline-none placeholder-gray-500 focus:border-[var(--accent-primary)] transition-all duration-300"
            />
          </motion.div>

          {/* Message Input */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <textarea
              placeholder="How can I help you?"
              rows={2}
              className="w-full bg-transparent border-b border-[var(--accent-primary)] py-4 outline-none resize-none placeholder-gray-500 focus:border-[var(--accent-primary)] transition-all duration-300"
            />
          </motion.div>

          {/* Circular Send Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="relative w-40 h-40 flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full border border-[var(--accent-primary)] animate-spin-slow" />

            <button className="w-20 h-20 rounded-full border border-[var(--accent-primary)] flex items-center justify-center hover:bg-[var(--accent-secondary)] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(243,102,57,0.3)]">
              <ArrowRight size={28} />
            </button>

            <p className="absolute text-xs tracking-widest text-[var(--accent-primary)] animate-rotateText">
              PRESS • HOLD • TO • SEND • PRESS • HOLD • TO • SEND •
            </p>
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden border border-[var(--accent-primary)] shadow-[0_0_40px_rgba(243,102,57,0.25)]">
            {/* Replace with your own image */}
            {/* <img
              src="/dhruvv.jpeg"
              alt="contact visual"
              className="w-full h-full object-cover"
            /> */}
          </div>

          {/* Floating glow card behind */}
          <div className="absolute -bottom-8 -left-8 w-full h-full border border-[var(--accent-primary)] rounded-3xl opacity-20" />
        </motion.div>
      </div>

      {/* Extra Animations */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }

        .animate-rotateText {
          width: 100%;
          text-align: center;
          animation: rotateText 12s linear infinite;
        }

        @keyframes rotateText {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
