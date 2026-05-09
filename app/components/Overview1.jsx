"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Link2, ArrowUpRight } from "lucide-react";

const infoItems = [
  { icon: MapPin, label: "Ahmedabad, India", sublabel: "Location" },
  { icon: Phone, label: "+91-958 948 2345", sublabel: "Mobile" },
  {
    icon: Mail,
    label: "dhruvpatel13210@gmail.com",
    sublabel: "Email",
    valueClassName: "break-words",
  },
  {
    icon: Link2,
    label: "dhruvpatel1310",
    sublabel: "Linkedin",
    color: "text-[var(--accent-primary)]",
  },
];

const socialLinks = [
  { name: "GitHub", url: "https://github.com/Dhruvp132" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/dhruvpatel1310/" },
  { name: "X (Twitter)", url: "#" },
  { name: "Discord", url: "#" },
];

const stats = [
  { value: "1.5+", label: "Years of Experience" },
  { value: "400+", label: "LeetCode" },
  { value: "9.28", label: "CGPA" },
];

// const skills = ["React", "Node", "AWS", "SQL"];
const skills =[]


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function Overview() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    });

    const updateTime = () => setCurrentTime(formatter.format(new Date()));

    updateTime();

    const intervalId = window.setInterval(updateTime, 60_000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section id="overview" className="z-5 section-surface w-full text-white">
      <div className="section-inner pb-16 md:pb-24">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 flex items-center justify-between px-1"
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[var(--accent-primary)]" />
            <span className="whitespace-nowrap font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">
              Portfolio // 2026
            </span>
          </div>
          <div className="font-mono text-[9px] tracking-wider text-zinc-500 tabular-nums">
            AHMEDABAD • {currentTime || "--:--"}
          </div>
        </motion.nav>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-12"
        >
          <motion.div
            variants={item}
            className="bento-card group relative flex min-h-[340px] flex-col justify-between overflow-hidden md:col-span-5 md:row-span-4"
          >
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[rgba(245,102,57,0.1)] blur-[60px] transition-all duration-500 group-hover:bg-[rgba(245,102,57,0.2)]" />

            <div className="relative">
              <div className="mb-6 h-24 w-24 rounded-full border-4 border-[var(--accent-primary)] p-1 shadow-[0_0_20px_rgba(243,102,57,0.15)]">
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-zinc-800">
                  <Image
                    src="/dhruv.jpeg"
                    alt="Dhruv Patel"
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
              </div>

              <h1 className="mb-3 text-3xl font-black leading-tight tracking-tighter md:text-4xl lg:text-5xl">
                Dhruv
                <br />
                Patel<span className="text-[var(--accent-primary)]">.</span>
              </h1>

              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-primary)]">
                Software Dev Engineer
              </p>
            </div>

            <div className="mt-6">
              <div className="inline-flex items-center gap-3 rounded-xl border border-zinc-800 bg-black/40 px-4 py-2">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-400">
                  Available now
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="bento-card md:col-span-12 lg:col-span-7 lg:row-span-3"
          >
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                System Information
              </h2>
              <span className="font-mono text-[9px] font-bold text-[var(--accent-primary)]">
                v1.2.0
              </span>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
              {infoItems.map((info) => (
                <div key={info.sublabel} className="group flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-800/50 text-zinc-400 transition-all duration-300 group-hover:bg-zinc-800 group-hover:text-[var(--accent-primary)]">
                    <info.icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="mb-0.5 text-[8px] font-bold uppercase tracking-widest text-zinc-500">
                      {info.sublabel}
                    </p>
                    <p
                      className={`min-w-0 text-xs font-semibold ${info.color || "text-white"} ${info.valueClassName || ""}`}
                    >
                      {info.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="bento-card flex flex-col justify-between md:col-span-7 lg:col-span-4 lg:row-span-3"
          >
            <div>
              <h2 className="mb-6 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                About
              </h2>
              <div className="space-y-3">
                <p className="text-xs leading-relaxed text-zinc-400">
                  Software Developer specializing in{" "}
                  <span className="font-medium text-white">
                    full-stack architectures
                  </span>{" "}
                  and high-performance cloud solutions.
                </p>
                <p className="border-l-2 border-[var(--accent-primary)] pl-3 text-xs leading-relaxed text-zinc-400 italic">
                  Focusing on clean code, product thinking, and user-centric design.
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {skills?.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-zinc-700/50 bg-zinc-800/50 px-2.5 py-1 text-center text-[8px] font-bold uppercase tracking-wider text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="group relative flex flex-col overflow-hidden border-none bg-[var(--accent-primary)] p-0 text-black md:col-span-5 lg:col-span-3 lg:row-span-3"
          >
            <div className="pointer-events-none absolute -right-4 -bottom-4 select-none text-[9rem] leading-none font-black opacity-10 transition-transform duration-700 group-hover:scale-110">
              D
            </div>

            <div className="flex h-full flex-col p-6">
              <h2 className="mb-6 text-[10px] font-bold uppercase tracking-widest text-black/60">
                Connect
              </h2>
              <div className="flex flex-grow flex-col gap-0.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between border-b border-black/10 py-2.5 transition-all duration-300 hover:px-1"
                  >
                    <span className="text-xs font-black uppercase tracking-tighter">
                      {social.name}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="bento-card flex items-center md:col-span-12 lg:col-span-5 lg:row-span-2"
          >
            <div className="grid w-full grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl leading-tight font-black text-white">
                    {stat.value}
                  </p>
                  <p className="text-[8px] font-bold uppercase tracking-widest text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
