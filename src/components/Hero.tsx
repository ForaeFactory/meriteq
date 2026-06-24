"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-obsidian">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone/40 via-obsidian to-obsidian z-0" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="text-cyan-accent text-sm font-semibold tracking-[0.3em] uppercase mb-8 hover-target">
            Merit EQ
          </div>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[8rem] font-serif leading-[0.9] tracking-tight text-paper mb-4"
          >
            Enabling
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-[8rem] font-serif leading-[0.9] tracking-tight text-stone-muted mb-12 italic"
          >
            High-Stakes Growth.
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="max-w-xl mx-auto"
        >
          <p className="text-lg md:text-xl text-stone-muted font-light leading-relaxed mb-12">
            We fuse the ruthless operating discipline of the Fortune 100 with the profound empathy required to build enduring enterprise cultures.
          </p>

          <div className="flex justify-center hover-target">
            <button className="group relative overflow-hidden rounded-full border border-stone px-10 py-5 text-sm font-semibold tracking-widest uppercase text-paper transition-all duration-700 hover:border-cyan-accent hover:bg-cyan-accent hover:text-obsidian">
              <span className="relative z-10">Discover the Firm</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-stone-muted hover-target cursor-none"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-12 bg-stone-muted/30 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-cyan-accent"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
