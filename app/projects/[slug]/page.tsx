import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  FlaskConical,
  Layers,
  ShieldAlert,
} from "lucide-react";
import { GitHubIcon } from "@/components/SocialIcons";
import { PROJECTS } from "@/lib/portfolio-data";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Jibrin Adamu Ahmed`,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage(
  props: PageProps<"/projects/[slug]">
) {
  const { slug } = await props.params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const toneStyle =
    project.statusTone === "cyan"
      ? "border-sky-400/30 bg-sky-400/10 text-sky-300"
      : project.statusTone === "emerald"
        ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
        : "border-violet-400/30 bg-violet-400/10 text-violet-300";

  return (
    <div className="bg-engineering-grid py-14 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-[#0D131C] px-3.5 py-2 font-mono text-xs text-slate-300 transition-colors hover:border-sky-400/40 hover:text-sky-300"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Back to Projects</span>
        </Link>

        {/* Header */}
        <header className="mt-8 surface-card rounded-2xl p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs font-medium ${toneStyle}`}
            >
              {project.statusTone === "violet" ? (
                <FlaskConical className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
              )}
              {project.statusLabel}
            </span>
            <span className="rounded-full border border-slate-800 bg-[#0A0E14] px-3 py-1 font-mono text-xs text-slate-400">
              {project.category}
            </span>
            {project.period ? (
              <span className="font-mono text-xs text-slate-400">
                {project.period}
              </span>
            ) : null}
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            {project.summary}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            {project.detailedOverview}
          </p>

          {project.githubUrl ? (
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-sky-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-300"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>View Source on GitHub</span>
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          ) : null}

          {project.disclaimer ? (
            <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-slate-800 bg-[#0A0E14] p-4 text-xs leading-relaxed text-slate-300">
              <ShieldAlert
                className="mt-0.5 h-4 w-4 shrink-0 text-violet-400"
                aria-hidden="true"
              />
              <span>{project.disclaimer}</span>
            </div>
          ) : null}
        </header>

        {/* Architecture Breakdown */}
        <section className="mt-8 surface-card rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 border-b border-slate-800/80 pb-4">
            <Layers className="h-5 w-5 text-sky-400" aria-hidden="true" />
            <h2 className="text-xl font-semibold text-slate-100">
              Layered Architecture Breakdown
            </h2>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.architectureLayers.map((layer) => (
              <div
                key={layer.layer}
                className="rounded-xl border border-slate-800/90 bg-[#0A0E14] p-5"
              >
                <p className="font-mono text-xs text-sky-300">{layer.layer}</p>
                <h3 className="mt-1 text-base font-semibold text-slate-100">
                  {layer.component}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {layer.responsibility}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {layer.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-slate-800 bg-[#101620] px-2 py-0.5 font-mono text-[11px] text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights + Stack */}
        <div className="mt-8 grid gap-8 md:grid-cols-12">
          <section className="surface-card rounded-2xl p-6 sm:p-7 md:col-span-7">
            <h2 className="text-lg font-semibold text-slate-100">
              Technical Highlights
            </h2>
            <ul className="mt-4 space-y-3">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-sky-400"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="surface-card rounded-2xl p-6 sm:p-7 md:col-span-5">
            <h2 className="text-lg font-semibold text-slate-100">
              Technologies Used
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-slate-800 bg-[#0A0E14] px-3 py-1.5 font-mono text-xs text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Optional API Modules */}
        {project.apiModules && project.apiModules.length > 0 ? (
          <section className="mt-8 surface-card rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-slate-100">
              Core Domain API Surface (Illustrative Overview)
            </h2>
            <div className="mt-4 space-y-2.5">
              {project.apiModules.map((ep) => (
                <div
                  key={ep.path}
                  className="flex flex-col gap-1.5 rounded-xl border border-slate-800/80 bg-[#0A0E14] p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span
                      className={`rounded px-2 py-0.5 text-[11px] font-semibold ${
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
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}
