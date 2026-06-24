"use client";

import { motion } from "framer-motion";

export default function EliteDiscipline() {
  return (
    <section id="discipline" className="py-24 md:py-36 bg-obsidian text-paper border-b border-stone/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center hover-target">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <div className="text-cyan-accent text-sm font-semibold tracking-[0.3em] uppercase mb-6">
              Elite Discipline
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] mb-8">
              The Grind to Greatness. <br />
              <span className="italic text-stone-muted">Precision Under Pressure.</span>
            </h2>

            <p className="text-stone-muted text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto">
              The DNA of Merit EQ is rooted in the high-performance discipline of an elite NCAA Division I and FEI International Equestrian athlete. Operating at this level teaches a singular lesson: <strong className="text-paper font-semibold">when the stakes are in the billions, the margin of error is zero.</strong>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
              <div className="border-l-2 border-stone-muted/30 pl-6 hover:border-cyan-accent transition-colors duration-500">
                <h3 className="font-semibold text-lg uppercase tracking-wider mb-2">Micro-Calibrations</h3>
                <p className="text-stone-muted text-sm font-light leading-relaxed">
                  Guiding an 1,100lb athlete over a 1.60m obstacle course requires instant pattern recognition, micro-second adjustments, and absolute composure under fire.
                </p>
              </div>

              <div className="border-l-2 border-stone-muted/30 pl-6 hover:border-cyan-accent transition-colors duration-500">
                <h3 className="font-semibold text-lg uppercase tracking-wider mb-2">High-Trust Partnerships</h3>
                <p className="text-stone-muted text-sm font-light leading-relaxed">
                  Whether leading a D1 team, steering international campaigns, or counseling Fortune 100 executives, sustainable success relies on mutual alignment and unwavering trust.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
