"use client";

import { motion } from "framer-motion";

export default function ExecutivePedigree() {
  const achievements = [
    {
      metric: "150M",
      label: "AB InBev (Michelob ULTRA)",
      desc: "Scaled Michelob ULTRA Pure Gold to $150M in 10 months. Managed $46M contract portfolios.",
    },
    {
      metric: "1.1B",
      label: "Kraft Heinz Company",
      desc: "Optimized $1.1B Global Marketing architecture. Spearheaded agile enterprise-wide transformation.",
    },
  ];

  const partners = [
    { name: "Kraft Heinz", detail: "Marketing Architecture & Supply Chain" },
    { name: "AB InBev", detail: "Product Scaling & Contract Advisory" },
    { name: "Stanley Black & Decker", detail: "Global SKU & Agile Manufacturing" },
    { name: "Nestlé", detail: "Enterprise Capability & Velocity Optimization" },
  ];

  return (
    <section id="pedigree" className="py-32 lg:py-48 bg-obsidian text-paper border-b border-stone/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Metrics Column */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            {achievements.map((item, idx) => (
              <div key={idx} className="hover-target group">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="text-8xl md:text-[8rem] font-serif tracking-tighter leading-none mb-6 text-stone-muted group-hover:text-paper transition-colors duration-700">
                    {item.metric.slice(0, -1)}
                    <span className="text-cyan-accent italic">
                      {item.metric.slice(-1)}
                    </span>
                  </div>
                  <div className="font-semibold text-lg mb-3 tracking-wider uppercase text-paper">
                    {item.label}
                  </div>
                  <div className="text-base text-stone-muted leading-relaxed font-light max-w-sm">
                    {item.desc}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Trusted Brand Partners List */}
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-stone/20 pt-12 lg:pt-0 lg:pl-12 hover-target">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col h-full justify-between"
            >
              <div>
                <div className="text-xs font-semibold text-stone-muted uppercase tracking-[0.2em] mb-10">
                  Strategic Advisor to Leadership
                </div>
                <div className="flex flex-col gap-8">
                  {partners.map((partner, i) => (
                    <div key={i} className="group border-b border-stone/10 pb-4 last:border-0">
                      <div className="text-xl font-serif italic text-paper group-hover:text-cyan-accent transition-colors duration-500 mb-1">
                        {partner.name}
                      </div>
                      <div className="text-xs text-stone-muted uppercase tracking-wider font-light">
                        {partner.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
