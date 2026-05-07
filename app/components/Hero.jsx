"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";

export default function Hero() {
  const containerRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      setPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // ✅ SCROLL FUNCTION
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="hero-surface relative flex max-width-2xl h-screen items-center justify-center overflow-hidden"
    >
      <Navbar />

      {/* Base Text */}
      <div className="absolute text-center leading-none select-none">
        <h1 className="text-[13vw] font-extrabold text-white/10 mb-10 md:mb-0 lg:mb-0">DHRUV</h1>
        <h1 className="text-[13vw] font-extrabold text-white/10 -mt-6">
          PATEL
        </h1>
      </div>

      {/* Glow Layer */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          maskImage: `radial-gradient(
            250px circle at ${pos.x}px ${pos.y}px,
            white,
            transparent 70%
          )`,
          WebkitMaskImage: `radial-gradient(
            250px circle at ${pos.x}px ${pos.y}px,
            white,
            transparent 70%
          )`,
        }}
      >
        <div className="text-center leading-none select-none">
          <h1 className="text-[13vw] font-extrabold text-[var(--accent-primary)] mb-10 md:mb-0 lg:mb-0">
            DHRUV
          </h1>
          <h1 className="text-[13vw] font-extrabold text-[var(--accent-primary)] -mt-6">
            PATEL
          </h1>
        </div>
      </div>

      {/* Blob */}
      {/* <div className="absolute z-20 w-[35vw] max-w-[500px] aspect-square">
        <Blob />
      </div> */}

      {/* ✅ GET IN TOUCH Button (WORKING) */}
      <div className="absolute bottom-16 w-full flex justify-center z-30">
        <button
          onClick={scrollToContact}
          className="group relative px-10 py-4 rounded-full bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(243,102,57,0.4)]"
        >
          <span
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(var(--accent-primary-rgb), 0.18), rgba(var(--accent-secondary-rgb), 0.24))",
            }}
          ></span>

          <span className="relative text-white tracking-widest font-semibold">
            GET IN TOUCH →
          </span>
        </button>
      </div>
    </section>
  );
}
