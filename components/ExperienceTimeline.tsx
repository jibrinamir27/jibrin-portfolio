"use client";

import { motion, useReducedMotion } from "motion/react";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { EXPERIENCE_TIMELINE } from "@/lib/portfolio-data";
import { SectionHeader } from "@/components/MotionPrimitives";

export function ExperienceTimeline() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experience & Education"
          title="Engineering Path & Background"
          description="Structured enterprise software onboarding alongside a formal foundation in Computer Science."
        />

        <div className="relative mt-12">
          {/* Vertical Spine */}
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-4 w-px bg-gradient-to-b from-sky-400/60 via-violet-400/40 to-transparent sm:left-6"
          />

          <div className="space-y-8">
            {EXPERIENCE_TIMELINE.map((item, idx) => {
              const isExperience = item.type === "Experience";
              return (
                <motion.article
                  key={item.id}
                  initial={prefersReduced ? false : { opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.48, delay: idx * 0.1 }}
                  className="relative pl-12 sm:pl-16"
                >
                  {/* Timeline Node */}
                  <div
                    className={`absolute top-6 left-0 flex h-8 w-8 items-center justify-center rounded-full border sm:left-2 ${
                      isExperience
                        ? "border-sky-400/50 bg-[#0B1420] text-sky-300 shadow-[0_0_20px_-4px_rgba(56,189,248,0.6)]"
                        : "border-violet-400/50 bg-[#121020] text-violet-300 shadow-[0_0_20px_-4px_rgba(139,92,246,0.5)]"
                    }`}
                  >
                    {isExperience ? (
                      <Briefcase className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <GraduationCap className="h-4 w-4" aria-hidden="true" />
                    )}
                  </div>

                  <div className="surface-card rounded-2xl p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span
                        className={`rounded-full border px-3 py-1 font-mono text-xs font-medium ${
                          isExperience
                            ? "border-sky-400/25 bg-sky-400/10 text-sky-300"
                            : "border-violet-400/25 bg-violet-400/10 text-violet-300"
                        }`}
                      >
                        {item.period}
                      </span>

                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-400">
                        <MapPin className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
                        {item.location}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-semibold text-slate-50 sm:text-2xl">
                      {item.role}
                    </h3>
                    <p className="mt-1 font-mono text-sm text-sky-300/90">
                      {item.organization}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                      {item.description}
                    </p>

                    <ul className="mt-4 space-y-2 border-t border-slate-800/70 pt-4">
                      {item.highlights.map((hl) => (
                        <li
                          key={hl}
                          className="flex items-start gap-2.5 text-sm text-slate-300"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400"
                          />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-slate-800 bg-[#0A0E14] px-2.5 py-1 font-mono text-[11px] text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
