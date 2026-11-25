"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  CORE_STACK_PILLARS,
  TECH_CATEGORIES,
  type TechItem,
} from "@/lib/portfolio-data";
import { TechLogo } from "@/components/TechLogo";
import { RevealBlock, SectionHeader } from "@/components/MotionPrimitives";

const ALL_FILTER = "All Categories";

export function TechStackSection() {
  const prefersReduced = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_FILTER);

  const filterTabs = [ALL_FILTER, ...TECH_CATEGORIES.map((c) => c.category)];

  const visibleCategories =
    selectedCategory === ALL_FILTER
      ? TECH_CATEGORIES
      : TECH_CATEGORIES.filter((c) => c.category === selectedCategory);

  const tickerItems: TechItem[] = TECH_CATEGORIES.flatMap((c) => c.items).filter(
    (item, idx, arr) => arr.findIndex((x) => x.name === item.name) === idx
  );

  return (
    <section
      id="stack"
      className="scroll-mt-20 border-y border-slate-800/70 bg-[#0A0E15]/60 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Technology Ecosystem"
          title="My Backend Engineering Environment"
          description="Java, Spring Boot, PostgreSQL, and Keycloak sit at the core of my work — supported by modern web tooling, API documentation, and security fundamentals."
        />

        {/* Tier 1: Core Pillars with Prominent Visual Hierarchy */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {CORE_STACK_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.name}
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group surface-card relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Brand-colored top hairline */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[2px] opacity-75 transition-opacity group-hover:opacity-100"
                style={{
                  background: `linear-gradient(90deg, transparent, ${pillar.accentHex}, transparent)`,
                }}
              />

              <div className="flex items-start justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-[#0A0E14] shadow-inner transition-transform duration-300 group-hover:scale-105">
                  <TechLogo logo={pillar.logo} size={26} />
                </div>
                <span className="rounded-full border border-sky-400/25 bg-sky-400/10 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-sky-300 uppercase">
                  Core Pillar
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-100">
                {pillar.name}
              </h3>
              <p className="mt-0.5 font-mono text-xs text-sky-300/90">
                {pillar.subtitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {pillar.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-800 bg-[#0A0E14] px-2 py-1 font-mono text-[11px] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Technology Ticker */}
        <RevealBlock delay={0.1} className="mt-10">
          <div className="marquee-wrapper relative overflow-hidden rounded-xl border border-slate-800/80 bg-[#0B1018] py-3.5">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-[#0B1018] to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-[#0B1018] to-transparent"
            />
            <div className="animate-marquee flex w-max items-center gap-6 px-4">
              {[...tickerItems, ...tickerItems].map((item, idx) => (
                <div
                  key={`${item.name}-${idx}`}
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-800/80 bg-[#101620] px-3 py-1.5"
                >
                  <TechLogo logo={item.logo} size={16} />
                  <span className="font-mono text-xs text-slate-200">{item.name}</span>
                  {item.badge ? (
                    <span className="rounded bg-violet-500/15 px-1.5 py-0.5 font-mono text-[9px] text-violet-300">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </RevealBlock>

        {/* Category Filter Bar */}
        <div className="mt-12 flex flex-wrap items-center gap-2" role="tablist" aria-label="Technology categories">
          {filterTabs.map((tab) => {
            const active = selectedCategory === tab;
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedCategory(tab)}
                className={`rounded-lg px-3.5 py-2 font-mono text-xs transition-all focus-visible:outline-2 focus-visible:outline-sky-400 ${
                  active
                    ? "border border-sky-400/40 bg-sky-400/15 text-sky-200"
                    : "border border-slate-800 bg-[#0E141D] text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Categorized Ecosystem Grid */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {visibleCategories.map((group) => (
            <div
              key={group.category}
              className="surface-card rounded-2xl p-6"
            >
              <div className="border-b border-slate-800/80 pb-4">
                <h3 className="text-lg font-semibold text-slate-100">
                  {group.category}
                </h3>
                <p className="mt-1 text-xs text-slate-400">{group.summary}</p>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {group.items.map((tech) => (
                  <div
                    key={tech.name}
                    className={`flex items-center justify-between gap-2 rounded-xl border px-3.5 py-2.5 transition-colors ${
                      tech.prominent
                        ? "border-sky-400/30 bg-sky-400/[0.06]"
                        : "border-slate-800/80 bg-[#0B1018]/90 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-[#080B10]">
                        <TechLogo logo={tech.logo} size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-slate-100">
                          {tech.name}
                        </p>
                        {tech.role ? (
                          <p className="truncate font-mono text-[10px] text-sky-300/90">
                            {tech.role}
                          </p>
                        ) : null}
                      </div>
                    </div>

                    {tech.badge ? (
                      <span className="shrink-0 rounded-md border border-violet-400/25 bg-violet-400/10 px-2 py-0.5 font-mono text-[10px] text-violet-300">
                        {tech.badge}
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
