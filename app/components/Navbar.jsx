"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 lg:px-10 py-5 text-white bg-black/80 backdrop-blur-md">

      <div className="flex items-center">

        {/* LEFT */}
        <div className="flex flex-col leading-none">
          <h1 className="text-4xl lg:text-5xl font-signature text-white whitespace-nowrap">
            Dhruv Patel
          </h1>
          <p className="mt-1 text-sm tracking-widest text-[#39FF14]">
            Full Stack Developer
          </p>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex gap-10 text-lg font-medium mx-auto">
          <a href="#hero" className="hover:text-green-400 transition">About</a>
          <a href="#education" className="hover:text-green-400 transition">Education</a>
          <a href="#selectedworks" className="hover:text-green-400 transition">Work</a>
          <a href="#certifications" className="hover:text-green-400 transition">Certifications</a>
          <a href="#skills" className="hover:text-green-400 transition">Skills</a>
          <a href="#projects" className="hover:text-green-400 transition">Projects</a>
          <a href="#contact" className="hover:text-green-400 transition">Contact</a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden ml-auto">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="lg:hidden mt-6 flex flex-col gap-6 text-center text-lg font-medium bg-black/95 py-8 rounded-xl border border-green-500/20">
          <a href="#hero" onClick={closeMenu} className="hover:text-green-400 transition">About</a>
          <a href="#education" onClick={closeMenu} className="hover:text-green-400 transition">Education</a>
          <a href="#selectedworks" onClick={closeMenu} className="hover:text-green-400 transition">Work</a>
          <a href="#certifications" onClick={closeMenu} className="hover:text-green-400 transition">Certifications</a>
          <a href="#skills" onClick={closeMenu} className="hover:text-green-400 transition">Skills</a>
          <a href="#projects" onClick={closeMenu} className="hover:text-green-400 transition">Projects</a>
          <a href="#contact" onClick={closeMenu} className="hover:text-green-400 transition">Contact</a>
        </div>
      )}

    </nav>
  );
}