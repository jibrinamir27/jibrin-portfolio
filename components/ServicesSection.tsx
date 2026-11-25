"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Building2,
  Database,
  Network,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { SERVICES, type ServiceItem } from "@/lib/portfolio-data";
import { SectionHeader } from "@/components/MotionPrimitives";

function ServiceIcon({ icon }: { icon: ServiceItem["icon"] }) {
  const cls = "h-5 w-5 text-sky-300";
  switch (icon) {
    case "server":
      return <Server className={cls} aria-hidden="true" />;
    case "network":
      return <Network className={cls} aria-hidden="true" />;
    case "database":
      return <Database className={cls} aria-hidden="true" />;
    case "shield":
      return <ShieldCheck className="h-5 w-5 text-violet-300" aria-hidden="true" />;
    case "building":
      return <Building2 className={cls} aria-hidden="true" />;
    case "workflow":
      return <Workflow className="h-5 w-5 text-emerald-300" aria-hidden="true" />;
  }
}

export function ServicesSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="services" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Capabilities"
          title="What I Bring to the Table"
          description="Practical backend engineering focused on clarity, security, relational data integrity, and dependable integration."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, idx) => (
            <motion.article
              key={service.id}
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="group surface-card flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-[#0B1018] transition-colors group-hover:border-sky-400/35">
                    <ServiceIcon icon={service.icon} />
                  </div>
                  <span className="font-mono text-xs text-slate-600">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-100">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5 border-t border-slate-800/70 pt-4">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-800/90 bg-[#0B1018] px-2.5 py-1 font-mono text-[11px] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
