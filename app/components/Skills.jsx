"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import {
  FaPython,
  FaJava,
  FaDocker,
  FaReact,
  FaAws,
  FaLinux,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiNextdotjs,
  SiCisco,
  SiCloudflare,
  SiVirtualbox,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiBlender,
} from "react-icons/si";

const programming = [
  "python","java","cpp","js","ts","docker",
  "tailwind","react","postgres","mongodb","next"
];

const itTools = ["aws","linux","cisco","cloudflare","virtualbox"];

const contentProduction = ["photoshop","premiere","blender"];

// ✅ ICON MAP (Only addition)
const iconMap = {
  python: <FaPython />,
  java: <FaJava />,
  cpp: <SiCplusplus />,
  js: <SiJavascript />,
  ts: <SiTypescript />,
  docker: <FaDocker />,
  tailwind: <SiTailwindcss />,
  react: <FaReact />,
  postgres: <SiPostgresql />,
  mongodb: <SiMongodb />,
  next: <SiNextdotjs />,
  aws: <FaAws />,
  linux: <FaLinux />,
  cisco: <SiCisco />,
  cloudflare: <SiCloudflare />,
  virtualbox: <SiVirtualbox />,
  photoshop: <SiAdobephotoshop />,
  premiere: <SiAdobepremierepro />,
  blender: <SiBlender />,
};

const Hex = ({ name, active, setActive }) => {
  const isActive = active === name;

  return (
    <motion.div
      onClick={() => setActive(name)}
      whileHover={{ y: -6, scale: 1.08 }}
      className="relative w-24 h-24 flex items-center justify-center text-4xl clip-hex cursor-pointer transition duration-300 bg-[#1a1a2e]"
    >
      {/* ✨ BACK GLOW (Always subtle) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-16 h-16 rounded-full bg-[#39FF14] opacity-10 blur-xl" />
      </div>

      {/* 🔥 CLICK GLITTER GLOW */}
      {isActive && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.6, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute w-20 h-20 rounded-full bg-[#39FF14] blur-2xl pointer-events-none"
        />
      )}

      {/* 💎 ICON WITH DROP GLOW */}
      <div
        className={`relative z-10 transition duration-300 
        ${isActive ? "text-[#39FF14] drop-shadow-[0_0_12px_#39FF14]" : "text-white"}
        hover:text-[#39FF14] hover:drop-shadow-[0_0_8px_#39FF14]`}
      >
        {iconMap[name]}
      </div>
    </motion.div>
  );
};
const Tag = ({ text, align }) => (
  <p
    className={`text-[#39FF14] absolute ${align}
    transition duration-300
    hover:drop-shadow-[0_0_6px_#39FF14]
    hover:[text-shadow:0_0_8px_#39FF14,0_0_18px_#39FF14]`}
  >
    {text}
  </p>
);

export default function Skills() {
  const [active, setActive] = useState(null);

  return (
   <section id="skills" className="bg-black text-white py-32 pt-32 relative">

      {/* HEADING */}
      <div className="text-center mb-24">
        <p className="tracking-[0.4em] text-[#39FF14] text-sm">
          TECHNICAL PROFICIENCIES
        </p>
        <h2 className="text-6xl font-extrabold mt-4">Skills.</h2>
      </div>

      {/* PROGRAMMING TAGS */}
      <Tag text="<programming>" align="left-10 -top-2" />
      <Tag text="</programming>" align="right-10 bottom-[62%]" />

      <div className="flex flex-col items-center gap-6 mb-32">

        <div className="flex gap-6">
          {programming.slice(0,6).map((s,i)=>(
            <Hex key={i} name={s} active={active} setActive={setActive}/>
          ))}
        </div>

        <div className="flex gap-6 ml-14">
          {programming.slice(6).map((s,i)=>(
            <Hex key={i} name={s} active={active} setActive={setActive}/>
          ))}
        </div>

      </div>

      {/* IT TOOLS TAGS */}
      <Tag text="<itTools>" align="left-10 bottom-[38%]" />
      <Tag text="</itTools>" align="right-10 bottom-[18%]" />

      <div className="flex justify-center gap-6 mb-32">
        {itTools.map((s,i)=>(
          <Hex key={i} name={s} active={active} setActive={setActive}/>
        ))}
      </div>

      {/* CONTENT TAGS */}
      <Tag text="<contentProduction>" align="left-10 bottom-[10%]" />
      <Tag text="</contentProduction>" align="right-10 -bottom-2" />

      <div className="flex justify-center gap-6">
        {contentProduction.map((s,i)=>(
          <Hex key={i} name={s} active={active} setActive={setActive}/>
        ))}
      </div>

    </section>
  );
}