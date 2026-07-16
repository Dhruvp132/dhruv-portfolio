"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Menu, X, ChevronRight, Download } from "lucide-react";
// import Tooltip from "./Tooltip";

const NAV_ITEMS = [
  { name: "About", href: "#overview" },
  { name: "Case Studies", href: "#projects" },
  { name: "Systems", href: "#selectedworks" },
  { name: "Capabilities", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 0.001, easeOut: [0.16, 1, 0.9, 1] }}
        className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl px-6 py-4 transition-all duration-500 rounded-full border border-white/5 ${
          isScrolled
            ? "bg-transparent backdrop-blur-xl border-white/10 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            : "bg-transparent backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between relative">
          {/* Logo / Name */}
          <div className="flex flex-col group cursor-pointer">
            <span className="text-lg font-bold tracking-tighter text-white transition-colors group-hover:text-[var(--accent-primary)]">
              DHRUV PATEL
            </span>
            <div className="h-px w-0 group-hover:w-full bg-[var(--accent-primary)] transition-all duration-300" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/40 mt-0.5">
              Product Engineer
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="nav-link rounded text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/70"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
              >
                {item.name}
              </motion.a>
            ))}

            <div data-oneko-dodge="true" className="flex items-center gap-3">
              <motion.a
                href="/resume/Dhruv_Patel_Resume.pdf"
                download
                aria-label="Download resume"
                title="Download resume"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: 0.45 }}
                className="rounded-full border border-white/15 p-2.5 text-white/70 transition-colors hover:text-white hover:border-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <Download size={16} />
              </motion.a>
              <motion.a
                href="#projects"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="group flex items-center gap-2 rounded-full bg-[var(--accent-primary)] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#ff7b52] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                View Case Studies
                <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-white px-6 py-2.5 text-[10px] font-black uppercase tracking-widest text-black shadow-[0_4px_20px_rgba(255,255,255,0.1)] transition-all hover:bg-[#F56639] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                id="nav-cta"
              >
                Book a Call
              </motion.a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            {/* <Tooltip content={isOpen ? "Close menu" : "Open menu"} side="left"> */}
              <button
                type="button"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                onClick={() => setIsOpen(!isOpen)}
                className="rounded p-2 text-white transition-colors hover:text-[var(--accent-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/70"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            {/* </Tooltip> */}
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-6 right-6 h-[1px] bg-[var(--accent-primary)] origin-left"
          style={{ scaleX }}
        />
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-2xl flex flex-col items-center justify-center lg:hidden"
          >
            {/* <Tooltip content="Close menu" side="left" className="absolute right-[35px] top-8"> */}
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={closeMenu}
                className="absolute right-[35px] top-8 rounded p-2 text-white/50 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/70"
              >
                <X size={32} />
              </button>
            {/* </Tooltip> */}

            <div className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded text-xl font-light tracking-widest text-white/60 transition-all duration-300 hover:text-[var(--accent-primary)] hover:tracking-[0.2em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/70 md:text-3xl lg:text-3xl"
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={closeMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.1 }}
                className="mt-8 rounded-full border border-[var(--accent-primary)] px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent-primary)] transition-all duration-300 hover:bg-[var(--accent-primary)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/70"
              >
                Book a Call
              </motion.a>

              <motion.a
                href="/resume/Dhruv_Patel_Resume.pdf"
                download
                onClick={closeMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (NAV_ITEMS.length + 1) * 0.1 }}
                className="mt-4 flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white/70 transition-all duration-300 hover:border-white hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]/70"
              >
                <Download size={16} />
                Resume
              </motion.a>

            </div>

            {/* Decorative background numbers or words */}
            {/* <div className="absolute bottom-10 left-10 text-white/5 font-bold text-9xl pointer-events-none select-none">
              MENU
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
