"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
      className="section-surface w-full overflow-hidden py-40 pt-32 text-white"
    >
      <div className="section-inner-wide">
      {/* Heading */}
      <div className="text-center mb-24">
        <p className="text-[var(--accent-primary)] tracking-[0.4em] mb-6 text-sm">
          CONTINUOUS LEARNING
        </p>
        <h2 className="text-4xl md:text-8xl font-extrabold">
          Certifications
        </h2>
      </div>

      {/* Cards */}
      <div className="relative flex justify-center items-center h-[200px] perspective-[1200px]">
        {certifications.map((cert, index) => {
          const position = getPosition(index);

          return (
            <motion.div
              key={cert.id}
              className="absolute w-[330px] md:w-[360px] h-[350px] 
              rounded-3xl overflow-hidden"
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
              <img
                src={cert.image}
                alt={cert.org}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* LIGHT GRADIENT FOR TEXT READABILITY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* CONTENT */}
              <div className="relative z-10 p-10 flex flex-col justify-end h-full">

                <p className="text-[var(--accent-primary)] text-md font-semibold mb-2">
                  {cert.org}
                </p>

                <h3 className="text-2xl md:text-xl font-bold mb-4">
                  {cert.title}
                </h3>

                {/* <p className="text-gray-200 text-xs leading-relaxed mb-6">
                  {cert.desc}
                </p> */}

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 border bg-white border-[var(--accent-primary)] 
                  rounded-full text-[var(--accent-primary)] 
                  hover:bg-[var(--accent-secondary)] hover:text-black 
                  transition duration-300 w-fit"
                >
                  View Credential →
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-20">
        {certifications.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              active === index
                ? "w-6 bg-[var(--accent-primary)]"
                : "w-2 bg-neutral-600"
            }`}
          />
        ))}
      </div>
      </div>
    </section>
  );
}
