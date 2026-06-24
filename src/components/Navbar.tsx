"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Pedigree", href: "#pedigree" },
    { name: "Discipline", href: "#discipline" },
    { name: "Approach", href: "#approach" },
    { name: "Leadership", href: "#leadership" },
    { name: "Journey", href: "#journey" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Contact", href: "#contact" },
  ];

  const menuContainerVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const linkItemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <>
      {/* HEADER BAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-obsidian/75 backdrop-blur-md border-b border-stone/10 py-5"
            : "bg-transparent py-8"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-serif tracking-wide text-paper flex items-center hover-target"
            onClick={() => setIsOpen(false)}
          >
            Merit EQ<span className="text-cyan-accent font-sans ml-0.5">.</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-sm font-medium uppercase tracking-[0.2em] text-stone-muted hover:text-cyan-accent transition-colors duration-300 relative group hover-target"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-accent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Hamburger / Close Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 w-10 h-10 flex items-center justify-center rounded-full border border-stone/20 bg-stone/5 hover:border-cyan-accent/50 hover:bg-cyan-accent/5 transition-all duration-300 focus:outline-none hover-target"
            aria-label="Toggle Navigation Menu"
          >
            <div className="w-5 h-3 flex flex-col justify-between relative">
              <motion.span
                style={{ top: 0, left: 0, position: "absolute" }}
                variants={{
                  closed: { rotate: 0, y: 0, backgroundColor: "#ffffff" },
                  open: { rotate: 45, y: 5, backgroundColor: "#00E5FF" },
                }}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
                className="w-full h-[1.5px] rounded-full"
              />
              <motion.span
                style={{ top: "5px", left: 0, position: "absolute" }}
                variants={{
                  closed: { opacity: 1, scaleX: 1, backgroundColor: "#ffffff" },
                  open: { opacity: 0, scaleX: 0 },
                }}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.2 }}
                className="w-full h-[1.5px] rounded-full origin-center"
              />
              <motion.span
                style={{ top: "10px", left: 0, position: "absolute" }}
                variants={{
                  closed: { rotate: 0, y: 0, backgroundColor: "#ffffff" },
                  open: { rotate: -45, y: -5, backgroundColor: "#00E5FF" },
                }}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
                className="w-full h-[1.5px] rounded-full"
              />
            </div>
          </button>
        </div>
      </header>

      {/* FULLSCREEN MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 w-full h-screen bg-obsidian z-40 flex flex-col justify-between p-8 md:p-24 overflow-hidden"
          >
            {/* Background Aesthetics */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,229,255,0.06),_transparent_45%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(11,16,33,0.8),_transparent_60%)] pointer-events-none" />

            {/* Menu Header Buffer */}
            <div className="h-16" />

            {/* Links Section */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center flex-grow">
              <nav className="md:col-span-8 flex flex-col gap-6 md:gap-8 align-start">
                {navLinks.map((link, idx) => (
                  <div key={idx} className="overflow-hidden">
                    <motion.div variants={linkItemVariants}>
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="inline-block text-5xl md:text-7xl lg:text-8xl font-serif font-light text-paper/80 hover:text-cyan-accent hover:italic hover:translate-x-4 transition-all duration-500 hover-target"
                      >
                        {link.name}
                      </a>
                    </motion.div>
                  </div>
                ))}
              </nav>

              {/* Extra content / contact info in the menu */}
              <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-stone/20 pt-8 md:pt-0 md:pl-12 flex flex-col gap-12">
                <div className="overflow-hidden">
                  <motion.div
                    variants={linkItemVariants}
                    className="flex flex-col gap-4"
                  >
                    <div className="text-xs font-semibold text-stone-muted uppercase tracking-[0.2em]">
                      Contact Inquiry
                    </div>
                    <a
                      href="mailto:Christina@Merit-EQ.com"
                      className="text-lg text-paper hover:text-cyan-accent transition-colors duration-300 hover-target"
                    >
                      Christina@Merit-EQ.com
                    </a>
                  </motion.div>
                </div>

                <div className="overflow-hidden">
                  <motion.div
                    variants={linkItemVariants}
                    className="flex flex-col gap-4"
                  >
                    <div className="text-xs font-semibold text-stone-muted uppercase tracking-[0.2em]">
                      Global Headquarters
                    </div>
                    <p className="text-stone-muted font-light leading-relaxed text-sm">
                      Austin, Texas, USA <br />
                      Serving clients worldwide.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Menu Footer */}
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone/10 text-stone-muted text-xs font-semibold tracking-widest uppercase">
              <div>&copy; {new Date().getFullYear()} Merit EQ.</div>
              <div className="flex gap-8 mt-4 md:mt-0">
                <a href="#" className="hover:text-cyan-accent transition-colors duration-300 hover-target">
                  Twitter
                </a>
                <a href="#" className="hover:text-cyan-accent transition-colors duration-300 hover-target">
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
