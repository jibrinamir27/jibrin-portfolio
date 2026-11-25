"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  ExternalLink,
  FlaskConical,
  Layers,
  ShieldAlert,
} from "lucide-react";
import { GitHubIcon } from "@/components/SocialIcons";
import { PROJECTS, type ProjectItem } from "@/lib/portfolio-data";
import { SectionHeader } from "@/components/MotionPrimitives";

function ToneBadge({
  label,
  tone,
}: {
  label: string;
  tone: ProjectItem["statusTone"];
}) {
  const styles =
    tone === "cyan"
      ? "border-sky-400/30 bg-sky-400/10 text-sky-300"
      : tone === "emerald"
        ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
        : "border-violet-400/30 bg-violet-400/10 text-violet-300";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] font-medium ${styles}`}
    >
      {tone === "violet" ? (
        <FlaskConical className="h-3 w-3" aria-hidden="true" />
      ) : (
        <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      )}
      {label}
    </span>
  );
}

function FlagshipProjectCard({ project }: { project: ProjectItem }) {
  const prefersReduced = useReducedMotion();
  const [activeTab, setActiveTab] = useState<"architecture" | "endpoints" | "highlights">(
    "architecture"
  );

  return (
    <motion.article
      initial={prefersReduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="surface-card overflow-hidden rounded-2xl border-slate-800/90"
    >
      {/* Top accent bar */}
      <div
        aria-hidden="true"
        className="h-[2px] w-full bg-gradient-to-r from-sky-400/70 via-cyan-300/60 to-violet-400/70"
      />

      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:gap-10">
        {/* Left Info */}
        <div className="flex flex-col justify-between lg:col-span-6">
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <ToneBadge label={project.statusLabel} tone={project.statusTone} />
              <span className="rounded-full border border-slate-800 bg-[#0B1018] px-3 py-1 font-mono text-[11px] text-slate-400">
                {project.category}
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              {project.title}
            </h3>

            <p className="mt-3 text-base leading-relaxed text-slate-300">
              {project.summary}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {project.detailedOverview}
            </p>

            {/* Technology Badges */}
            <div className="mt-6">
              <p className="mb-2.5 font-mono text-[11px] tracking-wider text-slate-400 uppercase">
                Architecture & Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-slate-800 bg-[#0A0E14] px-2.5 py-1 font-mono text-[11px] text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-slate-800/80 pt-6">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-lg bg-sky-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-sky-300"
            >
              <span>Architecture & Details</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-[#0D131C] px-4 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-sky-400/50 hover:text-sky-300"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>View Source Code</span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>

        {/* Right Interactive Architecture Workbench */}
        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-xl border border-slate-800/90 bg-[#090D14]">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 bg-[#0E141E] px-4 py-2.5">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-300">
                <Layers className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
                ccms-system-blueprint
              </span>
              <div className="flex items-center gap-1" role="tablist" aria-label="CCMS blueprint views">
                {(
                  [
                    { id: "architecture", label: "Layers" },
                    { id: "endpoints", label: "REST API" },
                    { id: "highlights", label: "Highlights" },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-md px-2.5 py-1 font-mono text-[11px] transition-colors ${
                      activeTab === tab.id
                        ? "bg-sky-400/15 text-sky-300"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-5">
              {activeTab === "architecture" && (
                <div className="space-y-2.5">
                  {project.architectureLayers.map((layer) => (
                    <div
                      key={layer.layer}
                      className="rounded-lg border border-slate-800/80 bg-[#0D121B] p-3.5 transition-colors hover:border-sky-400/30"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-mono text-[11px] text-sky-300">
                          {layer.layer}
                        </span>
                        <span className="font-mono text-[11px] font-medium text-slate-200">
                          {layer.component}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                        {layer.responsibility}
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {layer.technologies.map((t) => (
                          <span
                            key={t}
                            className="rounded border border-slate-800 bg-[#080B10] px-2 py-0.5 font-mono text-[10px] text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "endpoints" && (
                <div className="space-y-2.5">
                  <p className="font-mono text-[11px] text-slate-400">
                    Illustrative domain resource routes documented via OpenAPI / Swagger:
                  </p>
                  {project.apiModules?.map((ep) => (
                    <div
                      key={ep.path}
                      className="flex flex-col gap-1.5 rounded-lg border border-slate-800/80 bg-[#0D121B] p-3.5 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-center gap-2.5 font-mono text-xs">
                        <span
                          className={`rounded px-2 py-0.5 text-[10px] font-semibold ${
                            ep.method === "GET"
                              ? "bg-sky-400/15 text-sky-300"
                              : "bg-emerald-400/15 text-emerald-300"
                          }`}
                        >
                          {ep.method}
                        </span>
                        <span className="text-slate-100">{ep.path}</span>
                      </div>
                      <span className="text-xs text-slate-400">{ep.summary}</span>
                    </div>
                  ))}
                  <div className="rounded-lg border border-slate-800/70 bg-[#0A0E14] p-3 font-mono text-[11px] text-slate-400">
                    Auth Guard: <span className="text-violet-300">Keycloak Bearer Token (OIDC)</span>
                  </div>
                </div>
              )}

              {activeTab === "highlights" && (
                <ul className="space-y-2.5">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-lg border border-slate-800/70 bg-[#0D121B] px-3.5 py-2.5 text-xs leading-relaxed text-slate-300"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-sky-400"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function SecondaryProjectCard({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.article
      initial={prefersReduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="surface-card flex flex-col justify-between rounded-2xl p-6 sm:p-7"
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <ToneBadge label={project.statusLabel} tone={project.statusTone} />
          {project.period ? (
            <span className="font-mono text-xs text-slate-400">
              {project.period}
            </span>
          ) : null}
        </div>

        <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          {project.summary}
        </p>

        {/* Architecture Mini-Stack */}
        <div className="mt-5 rounded-xl border border-slate-800/80 bg-[#0A0E14] p-4">
          <div className="mb-2.5 flex items-center justify-between font-mono text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <Code2 className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
              System Breakdown
            </span>
            <span>{project.architectureLayers.length} layers</span>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {project.architectureLayers.map((layer) => (
              <div
                key={layer.layer}
                className="rounded-lg border border-slate-800/70 bg-[#0F151E] px-3 py-2"
              >
                <p className="font-mono text-[10px] text-sky-300/90">
                  {layer.layer}
                </p>
                <p className="mt-0.5 text-xs font-medium text-slate-200">
                  {layer.component}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights */}
        <ul className="mt-5 space-y-2">
          {project.highlights.slice(0, 5).map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-xs leading-relaxed text-slate-300"
            >
              <CheckCircle2
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech Badges */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-slate-800 bg-[#0A0E14] px-2.5 py-1 font-mono text-[11px] text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Honest Framing Notice */}
        {project.disclaimer ? (
          <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-slate-800 bg-[#0B1018] p-3.5 text-xs leading-relaxed text-slate-400">
            <ShieldAlert
              className="mt-0.5 h-4 w-4 shrink-0 text-violet-400"
              aria-hidden="true"
            />
            <span>{project.disclaimer}</span>
          </div>
        ) : null}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-5">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 font-mono text-xs font-medium text-sky-300 transition-colors hover:text-sky-200"
        >
          <span>Inspect Architecture & Overview</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
        <span className="font-mono text-[11px] text-slate-500">
          /projects/{project.slug}
        </span>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const [flagship, ...secondary] = PROJECTS;

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-y border-slate-800/70 bg-[#0A0E15]/60 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Featured Work & Systems"
          title="Engineering Projects & Architecture"
          description="Real backend engineering work, structured onboarding experience, and active security integration exploration — presented accurately without inflated metrics."
        />

        <div className="mt-12 space-y-8">
          {flagship ? <FlagshipProjectCard project={flagship} /> : null}

          <div className="grid gap-8 lg:grid-cols-2">
            {secondary.map((project, idx) => (
              <SecondaryProjectCard
                key={project.slug}
                project={project}
                index={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
