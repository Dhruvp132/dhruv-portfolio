import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";

const NAV_ITEMS = [
  { name: "About", href: "#overview" },
  // { name: "Education", href: "#education" },
  { name: "Work", href: "#selectedworks" },
  { name: "Experience", href: "#selectedworks" },
  // { name: "Certifications", href: "#certifications" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },

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
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl px-6 py-4 transition-all duration-500 rounded-full border border-white/5 ${
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
              Full Stack
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="nav-link text-white/70 hover:text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
              >
                {item.name}
              </motion.a>
            ))}
            
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="px-5 py-2 rounded-full bg-[var(--accent-primary)] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#ff7b52] transition-colors flex items-center gap-2 group"
            >
              Resume
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-[#F56639] hover:text-white transition-all shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
                id="nav-cta"
              >
                Let&apos;s Talk
              </motion.button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[var(--accent-primary)] transition-colors p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
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
            <button 
              onClick={closeMenu}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-3xl font-light tracking-widest text-white/60 hover:text-[var(--accent-primary)] hover:tracking-[0.2em] transition-all duration-300"
                >
                  {item.name}
                </motion.a>
              ))}
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.1 }}
                className="mt-8 px-8 py-3 rounded-full border border-[var(--accent-primary)] text-[var(--accent-primary)] text-sm font-bold uppercase tracking-[0.2em] hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-300"
              >
                Get In Touch
              </motion.button>

               

            </div>

            {/* Decorative background numbers or words */}
            <div className="absolute bottom-10 left-10 text-white/5 font-bold text-9xl pointer-events-none select-none">
              MENU
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
