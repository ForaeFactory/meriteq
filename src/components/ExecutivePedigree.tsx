"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1], // Weighted easing curve
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = latest.toFixed(decimals);
        }
      },
    });
    return () => controls.stop();
  }, [value, isInView, decimals]);

  return <span ref={ref}>0</span>;
}

export default function ExecutivePedigree() {
  const achievements = [
    {
      value: 150,
      decimals: 0,
      suffix: "M",
      label: "AB InBev Michelob ULTRA",
      desc: "Scaled Michelob ULTRA Pure Gold to $150M in topline revenue and expanded the Michelob ULTRA brand to nationally ranked #3 best-selling beer by volume in the US",
    },
    {
      value: 1.1,
      decimals: 1,
      suffix: "B",
      label: "Kraft Heinz",
      desc: "Optimized the resource allocation strategy to transform portfolio investments for future growth by diversifying the media mix model (MMM) to over-invest in the emergent brands across the company",
    },
  ];

  const partners = [
    { name: "Nestle", logo: "/images/nestle_logo.svg", detail: "Enterprise Selling & Velocity Optimization", heightClass: "h-16" },
    {
      name: "Stanley", logo: "/images/sbd_logo.svg", detail: "Innovation & Retail Relationships", heightClass: "h-30"
    },
    { name: "AB InBev", logo: "/images/inbev_logo.svg", detail: "Product Scale & Commercial Brand Building", heightClass: "h-20" },
    { name: "Kraft Heinz", logo: "/images/kraftheinz_logo.svg", detail: "Marketing Architecture & Commercial Strategy", heightClass: "h-20" },
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
                    <Counter value={item.value} decimals={item.decimals} />
                    <span className="text-cyan-accent italic">
                      {item.suffix}
                    </span>
                  </div>
                  <div className="font-semibold text-lg mb-3 tracking-wider uppercase text-paper">
                    {item.label}
                  </div>
                  <div className="text-lg text-stone-muted leading-relaxed font-light max-w-sm">
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
                      <div className={`${partner.heightClass} mb-3 flex items-center`}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="h-full w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      <div className="text-sm text-stone-muted uppercase tracking-wider font-light">
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
