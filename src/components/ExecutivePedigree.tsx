"use client";

import { motion } from "framer-motion";

export default function ExecutivePedigree() {
  return (
    <section className="py-32 lg:py-48 bg-obsidian text-paper border-b border-stone/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-center">
          
          <div className="md:col-span-5 hover-target">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-8xl md:text-[10rem] font-serif tracking-tighter leading-none mb-6">
                150<span className="text-cyan-accent italic">M</span>
              </div>
              <div className="font-medium text-xl mb-4 tracking-wide uppercase">Product Scaling</div>
              <div className="text-lg text-stone-muted leading-relaxed font-light max-w-sm">Scaled from inception to $150M ARR in under ten months through disciplined execution.</div>
            </motion.div>
          </div>

          <div className="md:col-span-4 hover-target">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-8xl md:text-[10rem] font-serif tracking-tighter leading-none mb-6 text-stone-muted">
                1.1<span className="text-paper italic">B</span>
              </div>
              <div className="font-medium text-xl mb-4 tracking-wide uppercase">Architecture Optimized</div>
              <div className="text-lg text-stone-muted leading-relaxed font-light max-w-sm">Restructured global operations and efficiency for a leading Fortune 100 enterprise.</div>
            </motion.div>
          </div>

          <div className="md:col-span-3 flex flex-col justify-center border-t md:border-t-0 md:border-l border-stone pt-12 md:pt-0 md:pl-12 hover-target">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-xs font-semibold text-stone-muted uppercase tracking-[0.2em] mb-12">Trusted By Partners At</div>
              <div className="flex flex-col gap-8">
                <div className="text-2xl font-serif italic text-paper/80 hover:text-cyan-accent transition-colors duration-500">Fortune 100 Corp</div>
                <div className="text-2xl font-serif italic text-paper/80 hover:text-cyan-accent transition-colors duration-500">Global Tech Partners</div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
