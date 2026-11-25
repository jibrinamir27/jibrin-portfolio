"use client";

import { motion, useReducedMotion } from "motion/react";
import { Compass } from "lucide-react";
import { EXPLORING_AREAS } from "@/lib/portfolio-data";
import { SectionHeader } from "@/components/MotionPrimitives";

export function ExploringSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="exploring" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Engineering Focus"
          title="What I'm Exploring"
          description="Areas of active study, architectural curiosity, and continuous backend engineering growth."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EXPLORING_AREAS.map((area, idx) => (
            <motion.div
              key={area.title}
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="surface-card flex flex-col justify-between rounded-2xl p-5 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-violet-300">
                    <Compass className="h-3.5 w-3.5" aria-hidden="true" />
                    {area.tag}
                  </span>
                  <span className="rounded border border-slate-800 bg-[#0A0E14] px-2 py-0.5 font-mono text-[10px] text-slate-400">
                    Ongoing
                  </span>
                </div>

                <h3 className="mt-3 text-base font-semibold text-slate-100">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {area.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
