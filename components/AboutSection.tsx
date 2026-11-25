import { PROFILE } from "@/lib/portfolio-data";
import { ProfileFrame } from "@/components/ProfileFrame";
import { RevealBlock, SectionHeader } from "@/components/MotionPrimitives";
import { Cpu, GraduationCap, Layers } from "lucide-react";

export function AboutSection({ hasProfileImage }: { hasProfileImage: boolean }) {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About Me"
          title="Engineering Systems From Database to API Boundary"
          description="Computer Science graduate from Ahmadu Bello University, Zaria — focused on Java, Spring Boot, relational data, and secure enterprise software."
        />

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Narrative */}
          <RevealBlock className="space-y-5 lg:col-span-7">
            <div className="surface-card rounded-2xl p-6 sm:p-8">
              <div className="mb-5 flex flex-wrap items-center gap-3 border-b border-slate-800/80 pb-4">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-sky-400/20 bg-sky-400/10 px-2.5 py-1 font-mono text-xs text-sky-300">
                  <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
                  Backend-First Mindset
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-[#0C1119] px-2.5 py-1 font-mono text-xs text-slate-300">
                  <GraduationCap className="h-3.5 w-3.5 text-violet-400" aria-hidden="true" />
                  ABU Zaria · Computer Science
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-[#0C1119] px-2.5 py-1 font-mono text-xs text-slate-300">
                  <Layers className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                  Enterprise Architecture
                </span>
              </div>

              <div className="space-y-4 text-base leading-relaxed text-slate-300">
                {PROFILE.aboutParagraphs.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Structured Engineer Spec Panel */}
            <div className="surface-card overflow-hidden rounded-2xl">
              <div className="flex items-center justify-between border-b border-slate-800/80 bg-[#0C1119] px-5 py-3">
                <span className="font-mono text-xs font-medium text-slate-300">
                  engineer.profile.json
                </span>
                <span className="font-mono text-[11px] text-slate-500">
                  Core Specification
                </span>
              </div>
              <dl className="divide-y divide-slate-800/70">
                {PROFILE.specPanel.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-1 gap-1 px-5 py-3 sm:grid-cols-3 sm:gap-4"
                  >
                    <dt className="font-mono text-xs text-slate-400">{row.label}</dt>
                    <dd className="text-sm font-medium text-slate-100 sm:col-span-2">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </RevealBlock>

          {/* Right Profile Photo Provision */}
          <RevealBlock delay={0.1} className="lg:col-span-5">
            <ProfileFrame hasProfileImage={hasProfileImage} />
            <p className="mt-3 px-1 font-mono text-[11px] leading-relaxed text-slate-500">
              Profile media slot configured for{" "}
              <code className="rounded bg-slate-900 px-1.5 py-0.5 text-slate-300">
                /public/images/profile.jpg
              </code>
              . Automatically switches from monogram schematic to portrait once uploaded.
            </p>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
