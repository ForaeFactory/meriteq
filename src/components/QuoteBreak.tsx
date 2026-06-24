"use client";

import { motion } from "framer-motion";

export default function QuoteBreak() {
  return (
    <section className="py-24 md:py-48 bg-cyan-accent text-obsidian overflow-hidden relative cursor-none hover-target">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-serif tracking-tight leading-[1.1] mb-12">
            &ldquo;The organizations that survive the next decade won&apos;t just adapt to change&mdash;they will architect it.&rdquo;
          </h2>
          <div className="text-sm font-semibold tracking-[0.2em] uppercase">
            — The Merit EQ Philosophy
          </div>
        </motion.div>
      </div>
    </section>
  );
}
