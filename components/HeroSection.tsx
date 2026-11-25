"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ExternalLink, Terminal } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { PROFILE, SOCIAL_LINKS } from "@/lib/portfolio-data";
import { HeroTerminal } from "@/components/HeroTerminal";

export function HeroSection() {
  const prefersReduced = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 50, y: 35 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPointer({ x, y });
  };

  const hasLinkedin = !SOCIAL_LINKS.linkedin.startsWith("[");

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden border-b border-slate-800/70 bg-engineering-grid"
    >
      {/* Cursor-responsive soft atmospheric spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(650px circle at ${pointer.x}% ${pointer.y}%, rgba(56, 189, 248, 0.08), transparent 60%), radial-gradient(520px circle at 85% 20%, rgba(139, 92, 246, 0.07), transparent 60%)`,
        }}
      />

      {/* Bottom fade into canvas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080B10] to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-24 lg:px-8 lg:pt-20 lg:pb-28">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Side: Identity, Headline & Actions */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span>{PROFILE.availability}</span>
            </div>

            <p className="mt-6 font-mono text-sm text-sky-300">
              Hello, I&apos;m {PROFILE.fullName}.
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08]">
              I Build the{" "}
              <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                Systems
              </span>{" "}
              Behind the Software.
            </h1>

            <p className="mt-4 font-mono text-sm text-slate-300 sm:text-base">
              &ldquo;{PROFILE.tagline}&rdquo;
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
              {PROFILE.supportingDescription}
            </p>

            {/* Primary & Secondary Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_25px_-5px_rgba(56,189,248,0.5)] transition-all hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                <span>Explore My Work</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700/90 bg-[#10151D] px-5 py-3 text-sm font-medium text-slate-100 transition-colors hover:border-sky-400/50 hover:bg-[#141B25] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                <span>Let&apos;s Talk</span>
              </Link>

              <Link
                href="/#playground"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800/90 bg-transparent px-4 py-3 font-mono text-xs text-slate-300 transition-colors hover:border-slate-700 hover:text-sky-300"
              >
                <Terminal className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
                <span>Interactive Shell</span>
              </Link>
            </div>

            {/* Social Links & Core Identity Bar */}
            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-slate-800/80 pt-6">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-[#0D121A] px-3.5 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-sky-400/40 hover:text-sky-300"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>GitHub</span>
                <ExternalLink className="h-3 w-3 text-slate-500" aria-hidden="true" />
              </a>

              {hasLinkedin ? (
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-[#0D121A] px-3.5 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-sky-400/40 hover:text-sky-300"
                >
                  <LinkedInIcon className="h-4 w-4" />
                  <span>LinkedIn</span>
                  <ExternalLink className="h-3 w-3 text-slate-500" aria-hidden="true" />
                </a>
              ) : (
                <Link
                  href="/#contact"
                  title="LinkedIn placeholder — update SOCIAL_LINKS.linkedin in lib/portfolio-data.ts"
                  className="inline-flex items-center gap-2 rounded-lg border border-dashed border-slate-700 bg-[#0D121A] px-3.5 py-2 text-xs font-medium text-slate-400 transition-colors hover:border-sky-400/40 hover:text-slate-200"
                >
                  <LinkedInIcon className="h-4 w-4 text-slate-500" />
                  <span>LinkedIn: {SOCIAL_LINKS.linkedin}</span>
                </Link>
              )}

              <span className="font-mono text-xs text-slate-500">
                {PROFILE.title}
              </span>
            </div>
          </motion.div>

          {/* Right Side: Interactive Workstation Terminal */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <HeroTerminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
