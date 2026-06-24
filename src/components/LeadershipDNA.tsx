"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const strengths = [
  {
    name: "Relator",
    number: "01",
    summary: "Deep High-Trust Partnerships",
    description: "Bypasses superficial advisory. Built to establish genuine, one-on-one relationships that anchor long-term organizational transformation.",
  },
  {
    name: "Strategic",
    number: "02",
    summary: "Pattern Recognition & Alternative Routing",
    description: "Quickly filters out corporate noise to spot patterns and hidden obstacles, mapping out alternative paths to select the most effective route instantly.",
  },
  {
    name: "Futuristic",
    number: "03",
    summary: "Vivid Vision & Aspirational Reality",
    description: "Visualizes exactly what is possible and transforms aspirations into vivid reality, inspiring teams to push past operational friction to new heights.",
  },
  {
    name: "Self-Assurance",
    number: "04",
    summary: "Absolute Decision Certainty",
    description: "Possesses a strong inner compass and complete confidence in strategic choices, offering a steady, leading hand in chaotic, high-stakes environments.",
  },
  {
    name: "Competition",
    number: "05",
    summary: "Relentless Benchmark to Win",
    description: "Measures success against the absolute best in class. Instills a relentless performance culture focused on securing the number one market position.",
  },
];

export default function LeadershipDNA() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="leadership" className="py-24 md:py-36 bg-midnight text-paper border-b border-stone/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Sticky Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 hover-target">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="text-cyan-accent text-sm font-semibold tracking-[0.3em] uppercase mb-6">
                Leadership DNA
              </div>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight leading-[1.1] mb-8">
                CliftonStrengths <br />
                <span className="italic text-stone-muted">Profile.</span>
              </h2>
              <p className="text-stone-muted text-lg font-light leading-relaxed mb-8 max-w-sm">
                The advisory framework of Merit EQ is anchored in a dominant <strong className="text-paper font-semibold">Influencing Profile</strong>, engineered to drive action and deliver high-stakes revenue growth.
              </p>

              {/* Influencing Indicators */}
              <div className="border border-stone/20 bg-obsidian/40 rounded-xl p-6 space-y-4 max-w-sm">
                <div className="text-xs font-semibold text-stone-muted uppercase tracking-[0.2em]">
                  Primary Domain: Influencing
                </div>
                <ul className="space-y-3">
                  {["Taking Charge", "Speaking Up", "Making Impact"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Strengths Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative p-8 rounded-xl border border-stone/20 bg-obsidian/20 overflow-hidden transition-all duration-700 hover:border-cyan-accent/30 hover-target ${
                  index === 4 ? "md:col-span-2" : ""
                }`}
              >
                {/* Background Hover Accent */}
                <div
                  className={`absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,229,255,0.04),transparent_50%)] transition-opacity duration-700 pointer-events-none ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="relative z-10 flex flex-col justify-between h-full min-h-[160px]">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xs font-serif italic text-cyan-accent">
                        {strength.number}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-stone-muted">
                        Signature Theme
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-serif font-medium mb-3 tracking-tight group-hover:text-cyan-accent transition-colors duration-500">
                      {strength.name}
                    </h3>
                    
                    <div className="text-sm font-semibold text-paper/95 mb-4 font-sans tracking-wide">
                      {strength.summary}
                    </div>
                  </div>
                  
                  <p className="text-stone-muted text-sm font-light leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
