"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Agile Transformation",
    description: "Re-architecting legacy workflows into adaptive, high-velocity systems that respond to market shifts in real-time.",
    number: "01"
  },
  {
    title: "M&A Advisory",
    description: "Surgical precision in pre-deal due diligence and post-merger integration, ensuring exponential value creation.",
    number: "02"
  },
  {
    title: "RTM Optimization",
    description: "Route-to-market strategies that capture disproportionate share, aligning product, sales, and customer success.",
    number: "03"
  }
];

export default function ServicesGrid() {
  return (
    <section id="capabilities" className="relative bg-obsidian text-paper">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row relative">
        
        {/* Sticky Left Column */}
        <div className="md:w-1/2 md:h-screen md:sticky md:top-0 flex flex-col justify-center py-24 md:py-0 md:pr-24 z-10 hover-target">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-5xl md:text-7xl font-serif tracking-tight mb-8">Core<br/><span className="italic text-stone-muted">Capabilities</span></h2>
            <p className="text-xl text-stone-muted font-light leading-relaxed max-w-md">
              We operate exclusively at the intersection of strategy and execution. Our capabilities are focused on the strategic levers that drive outsized enterprise value.
            </p>
          </motion.div>
        </div>

        {/* Scrolling Right Column */}
        <div className="md:w-1/2 py-12 md:py-32 flex flex-col gap-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group hover-target border-t border-stone pt-12"
            >
              <div className="text-sm font-serif italic text-cyan-accent mb-8 text-2xl">
                {service.number}
              </div>
              <h3 className="text-4xl md:text-5xl font-medium mb-8 font-serif group-hover:text-cyan-accent transition-colors duration-500">{service.title}</h3>
              <p className="text-xl text-stone-muted font-light leading-relaxed mb-12 max-w-lg">
                {service.description}
              </p>
              
              <div className="flex items-center text-sm font-semibold tracking-widest uppercase text-paper">
                <span className="relative overflow-hidden cursor-none">
                  <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">Explore Practice</span>
                  <span className="absolute top-0 left-0 text-cyan-accent inline-block transition-transform duration-500 translate-y-full group-hover:translate-y-0">Explore Practice</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
