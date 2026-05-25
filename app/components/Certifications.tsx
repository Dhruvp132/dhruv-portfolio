"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tooltip from "./Tooltip";

const certifications = [
  {
    id: 1,
    title: "Data Structures & Algorithms",
    org: "Apna College",
    image: "/apnaclg.svg",
    desc: "Intensive DSA curriculum with hands-on Java implementation and advanced algorithm strategies.",
    link: "https://drive.google.com/file/d/1iu4QYblwrLj05nUyy-CCRHE6NYoGs1EH/view",
  },
  {
    id: 2,
    title: "Python for Data Science",
    org: "IBM Cognitive Class",
    image: "/ibm.jpg",
    desc: "Specialized training in statistical analysis and machine learning foundations.",
    link: "https://drive.google.com/file/d/13AitOLtQD2CELqrOzGF9n0Pp79dB7ZE8/view",
  },
  {
    id: 3,
    title: "450+ DSA Problems Solved",
    org: "LeetCode",
    image: "/leetcode.jpg",
    desc: "Strong analytical thinking with consistent competitive programming practice.",
    link: "https://leetcode.com/u/Dhruvp13/",
  },
];

export default function Certifications() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % certifications.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getPosition = (index: number) => {
    const diff = index - active;
    if (diff === 0) return "center";
    if (diff === -1 || diff === certifications.length - 1) return "left";
    return "right";
  };

  return (
    <section
      id="certifications"
      className="section-surface w-full overflow-hidden py-24 text-white md:py-32"
    >
      <div className="section-inner-wide">
      {/* Heading */}
      <div className="mb-16 text-center md:mb-20">
        <p className="mb-5 text-xs tracking-[0.4em] text-[var(--accent-primary)]">
          CONTINUOUS LEARNING
        </p>
        <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
          Certifications
        </h2>
      </div>

      {/* Cards */}
      <div className="relative flex h-[200px] items-center justify-center perspective-[1200px]">
        {certifications.map((cert, index) => {
          const position = getPosition(index);

          return (
            <motion.div
              key={cert.id}
              className="absolute h-[350px] w-[330px] overflow-hidden rounded-3xl border border-white/10 md:w-[360px]"
              animate={
                position === "center"
                  ? {
                      x: 0,
                      scale: 1,
                      rotateY: 0,
                      opacity: 1,
                      zIndex: 3,
                      boxShadow: "0px 0px 70px rgba(var(--accent-secondary-rgb), 0.4)",
                    }
                  : position === "left"
                  ? {
                      x: -420,
                      scale: 0.9,
                      rotateY: 20,
                      opacity: 0.6,
                      zIndex: 2,
                    }
                  : {
                      x: 420,
                      scale: 0.9,
                      rotateY: -20,
                      opacity: 0.6,
                      zIndex: 2,
                    }
              }
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* FULL CLEAR BACKGROUND IMAGE */}
              <Image
                src={cert.image}
                alt={cert.org}
                fill
                sizes="(min-width: 768px) 360px, 330px"
                className="object-cover"
              />

              {/* LIGHT GRADIENT FOR TEXT READABILITY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* CONTENT */}
              <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">

                <p className="mb-2 text-sm font-semibold text-[var(--accent-primary)]">
                  {cert.org}
                </p>

                <h3 className="mb-4 text-xl font-bold md:text-xl">
                  {cert.title}
                </h3>

                {/* <p className="text-gray-200 text-xs leading-relaxed mb-6">
                  {cert.desc}
                </p> */}

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-fit items-center gap-2 rounded-full border border-[var(--accent-primary)] bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent-primary)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--accent-secondary)] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  View Credential
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="mt-16 flex justify-center gap-3">
        {certifications.map((cert, index) => (
          <Tooltip key={cert.id} content={`Show ${cert.title}`}>
            <button
              onClick={() => setActive(index)}
              aria-label={`Show ${cert.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === index
                  ? "w-6 bg-[var(--accent-primary)]"
                  : "w-2 bg-neutral-600 hover:bg-neutral-400"
              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black`}
            />
          </Tooltip>
        ))}
      </div>
      </div>
    </section>
  );
}
