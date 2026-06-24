"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useRef } from "react";

const phases = [
  {
    phase: "Phase 01",
    title: "Build & Integrate",
    subtitle: "Baseline Alignment & Operations",
    desc: "We lay down the structural foundation necessary for enterprise scalability, aligning regulatory compliance and systems integration with core strategy.",
    deliverables: [
      "Regulatory Compliance Audits",
      "Corporate Stakeholder Alignment",
      "Manufacturing & Supply Chain Architecture",
      "Baseline Systems Integration",
    ],
  },
  {
    phase: "Phase 02",
    title: "Test & Optimize",
    subtitle: "Performance Calibration",
    desc: "Rigorous stress testing and optimization of all newly integrated frameworks, preparing the enterprise infrastructure for market launch.",
    deliverables: [
      "System Performance & Stress Testing",
      "Strategic Partner Alignment",
      "Network & Route Efficiency Audits",
      "Market Entry Plan Refinement",
    ],
  },
  {
    phase: "Phase 03",
    title: "Growth & Execution",
    subtitle: "High-Velocity Scaling",
    desc: "Executing targeted market launch campaigns, capturing revenue streams, and accelerating customer acquisition footprints rapidly.",
    deliverables: [
      "Market Entry Strategy Execution",
      "High-Velocity Revenue Operations",
      "Client Footprint Expansion",
      "Agile Sales Playbook Integration",
    ],
  },
  {
    phase: "Phase 04",
    title: "Take Off & Expand",
    subtitle: "Global Dominance & Legacy",
    desc: "Securing long-term sustainable growth trajectories and expanding capabilities to capture international markets.",
    deliverables: [
      "Continuous Efficiency Modeling",
      "Global Brand Scale Expansion",
      "Long-term Optimization Retainers",
      "Capabilities & Portfolio Diversification",
    ],
  },
];

export default function StrategicJourney() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="journey" className="py-24 md:py-36 bg-obsidian text-paper border-b border-stone/30 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-24 hover-target">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-cyan-accent text-sm font-semibold tracking-[0.3em] uppercase mb-6">
              Our Strategic Journey
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight leading-[1.1] mb-8">
              Phase-Gate Deployment <br />
              <span className="italic text-stone-muted">Playbook.</span>
            </h2>
            <p className="text-stone-muted text-lg font-light leading-relaxed">
              We execute in sequential, measurable phases. Each gateway is heavily guarded by clear performance checkpoints to guarantee capital efficiency and flawless execution.
            </p>
          </motion.div>
        </div>

        {/* Phase Timeline Cards */}
        <div ref={containerRef} className="relative ml-4 md:ml-8 pl-8 md:pl-16 space-y-16">
          {/* Vertical connecting line background track */}
          <div className="absolute left-0 top-0 w-[2px] h-full bg-stone/20 pointer-events-none" />
          
          {/* Scroll-driven illuminating line overlay */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-0 top-0 w-[2px] h-full bg-cyan-accent pointer-events-none z-10"
          />

          {phases.map((phase, index) => (
            <div 
              key={index} 
              className="relative group hover-target"
              onMouseEnter={() => setActiveIdx(index)}
              onMouseLeave={() => setActiveIdx(null)}
            >
              {/* Stepper Dot */}
              <div className="absolute -left-[37px] md:-left-[69px] top-2 flex items-center justify-center">
                <motion.div 
                  animate={{
                    borderColor: activeIdx === index ? "#00E5FF" : "rgba(115, 115, 115, 0.3)",
                    backgroundColor: activeIdx === index ? "#00E5FF" : "#050505",
                    scale: activeIdx === index ? 1.25 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-4 h-4 rounded-full border-2 border-stone-muted/30 bg-obsidian z-10"
                />
              </div>

              {/* Phase Card Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-stone/10 last:border-0">
                
                {/* Left Meta info */}
                <div className="lg:col-span-4">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="text-xs font-serif italic text-cyan-accent mb-2">
                      {phase.phase}
                    </div>
                    <h3 className="text-3xl font-serif font-medium mb-2 group-hover:text-cyan-accent transition-colors duration-500">
                      {phase.title}
                    </h3>
                    <div className="text-xs font-semibold text-stone-muted uppercase tracking-widest">
                      {phase.subtitle}
                    </div>
                  </motion.div>
                </div>

                {/* Center Description */}
                <div className="lg:col-span-4">
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: index * 0.05 + 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-stone-muted text-base font-light leading-relaxed"
                  >
                    {phase.desc}
                  </motion.p>
                </div>

                {/* Right Deliverables List */}
                <div className="lg:col-span-4">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: index * 0.05 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="text-[10px] font-semibold text-stone-muted uppercase tracking-[0.2em] mb-4">
                      Core Operations
                    </div>
                    <ul className="space-y-3">
                      {phase.deliverables.map((item, itemIdx) => (
                        <li 
                          key={itemIdx} 
                          className="flex items-center gap-3 text-sm text-paper group-hover:text-cyan-accent/90 transition-colors duration-500"
                        >
                          <span className="text-[10px] font-serif italic text-stone-muted">
                            0{itemIdx + 1}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
