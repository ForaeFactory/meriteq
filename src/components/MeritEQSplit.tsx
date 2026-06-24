"use client";

import { motion } from "framer-motion";

export default function MeritEQSplit() {
  return (
    <section id="approach" className="relative min-h-screen flex flex-col md:flex-row text-paper">
      
      {/* MERIT */}
      <div className="flex-1 p-12 md:p-24 lg:p-32 flex flex-col justify-center border-b md:border-b-0 md:border-r border-stone/20 relative group hover-target bg-midnight">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-sm font-semibold tracking-[0.2em] uppercase mb-12 text-stone-muted">The Discipline</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight mb-8">Merit</h2>
            <p className="text-stone-muted text-xl leading-relaxed mb-12 font-light max-w-lg">
              Data-driven strategy forged in the fires of Fortune 100 boardrooms. We bring rigorous operational discipline, scalable architectures, and an unrelenting focus on measurable outcomes.
            </p>
            <ul className="space-y-6">
              {['Data-Driven Architecture', 'Scalable Operations', 'Financial Modeling'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-paper font-medium hover:text-cyan-accent transition-colors duration-500 group/item cursor-none">
                  <span className="text-stone-muted text-xs font-serif italic group-hover/item:text-cyan-accent transition-colors duration-500">0{i+1}</span>
                  <span className="w-0 h-[1px] bg-cyan-accent transition-all duration-500 group-hover/item:w-6" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* EQ */}
      <div className="flex-1 p-12 md:p-24 lg:p-32 flex flex-col justify-center relative group hover-target bg-obsidian text-paper">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-sm font-semibold tracking-[0.2em] uppercase mb-12 text-stone-muted">The Empathy</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight mb-8">EQ</h2>
            <p className="text-stone-muted text-xl leading-relaxed mb-12 font-light max-w-lg">
              Businesses are built by people. We cultivate high-trust, high-performance cultures, aligning human capital with long-term vision to ensure transformations actually stick.
            </p>
            <ul className="space-y-6">
              {['Executive Coaching', 'Change Management', 'Cultural Alignment'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-paper font-medium hover:text-cyan-accent transition-colors duration-500 group/item cursor-none">
                  <span className="text-stone-muted text-xs font-serif italic group-hover/item:text-cyan-accent transition-colors duration-500">0{i+1}</span>
                  <span className="w-0 h-[1px] bg-cyan-accent transition-all duration-500 group-hover/item:w-6" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
