"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Activity, RotateCcw, Server, ShieldCheck } from "lucide-react";
import {
  HERO_TERMINAL_LINES,
  SIMULATED_SYSTEM_STATUS,
} from "@/lib/portfolio-data";

export function HeroTerminal() {
  const prefersReduced = useReducedMotion();
  const [completedCount, setCompletedCount] = useState<number>(0);
  const [typedCmd, setTypedCmd] = useState<string>("");
  const [runId, setRunId] = useState<number>(0);

  useEffect(() => {
    if (prefersReduced) return;

    let cancelled = false;

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        setTimeout(resolve, ms);
      });

    async function runSequence() {
      await sleep(320);
      for (let i = 0; i < HERO_TERMINAL_LINES.length; i++) {
        if (cancelled) return;
        const cmd = HERO_TERMINAL_LINES[i].command;
        for (let c = 1; c <= cmd.length; c++) {
          if (cancelled) return;
          setTypedCmd(cmd.slice(0, c));
          await sleep(38);
        }
        await sleep(160);
        if (cancelled) return;
        setTypedCmd("");
        setCompletedCount(i + 1);
        await sleep(240);
      }
    }

    runSequence();

    return () => {
      cancelled = true;
    };
  }, [prefersReduced, runId]);

  const handleReplay = () => {
    setCompletedCount(0);
    setTypedCmd("");
    setRunId((n) => n + 1);
  };

  const displayCompletedCount = prefersReduced
    ? HERO_TERMINAL_LINES.length
    : completedCount;
  const displayTypedCmd = prefersReduced ? "" : typedCmd;
  const isFinished = displayCompletedCount >= HERO_TERMINAL_LINES.length;

  return (
    <div className="relative">
      {/* Subtle perimeter glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-sky-400/20 via-transparent to-violet-500/20 blur-sm"
      />

      <div className="relative overflow-hidden rounded-2xl border border-slate-800/90 bg-[#0A0E14]/95 shadow-2xl">
        {/* Window Top Chrome */}
        <div className="flex items-center justify-between border-b border-slate-800/80 bg-[#0F151F] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" aria-hidden="true" />
            <span className="ml-2 font-mono text-xs text-slate-400">
              jibrin@backend-ws: ~/systems
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-1.5 rounded border border-emerald-500/25 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-300 sm:inline-flex">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              session: active
            </span>
            <button
              type="button"
              onClick={handleReplay}
              title="Replay terminal sequence"
              aria-label="Replay terminal typing sequence"
              className="inline-flex h-7 w-7 items-center justify-center rounded border border-slate-800 bg-[#0A0E14] text-slate-400 transition-colors hover:border-sky-400/40 hover:text-sky-300"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          className="min-h-[296px] space-y-3 p-5 font-mono text-xs leading-relaxed sm:min-h-[320px] sm:p-6 sm:text-[13px]"
          aria-live="polite"
        >
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-2.5 text-[11px] text-slate-500">
            <span>Spring Boot · PostgreSQL · Keycloak Workstation</span>
            <span className="text-sky-400/80">bash 5.2</span>
          </div>

          {HERO_TERMINAL_LINES.slice(0, displayCompletedCount).map((line) => (
            <motion.div
              key={`${runId}-${line.command}`}
              initial={prefersReduced ? false : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-1"
            >
              <div className="flex items-center gap-2">
                <span className="select-none text-emerald-400">$</span>
                <span className="text-sky-300">{line.command}</span>
              </div>
              <div className="pl-4 text-slate-200">
                {line.command === "primary_stack" ? (
                  <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-amber-300">Java</span>
                    <span className="text-slate-600">|</span>
                    <span className="text-emerald-300">Spring Boot</span>
                    <span className="text-slate-600">|</span>
                    <span className="text-sky-300">PostgreSQL</span>
                  </span>
                ) : line.command === "authentication" ? (
                  <span className="text-violet-300">{line.output}</span>
                ) : line.command === "status" ? (
                  <span className="inline-flex items-center gap-2 text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {line.output}
                  </span>
                ) : (
                  line.output
                )}
              </div>
            </motion.div>
          ))}

          {/* Active Typing Prompt */}
          {!isFinished && (
            <div className="flex items-center gap-2">
              <span className="select-none text-emerald-400">$</span>
              <span className="text-sky-300">{displayTypedCmd}</span>
              <span
                aria-hidden="true"
                className="inline-block h-4 w-2 animate-pulse bg-sky-400 align-middle"
              />
            </div>
          )}

          {/* Idle Prompt after completion */}
          {isFinished && (
            <div className="flex items-center gap-2 pt-1">
              <span className="select-none text-emerald-400">$</span>
              <span
                aria-hidden="true"
                className="inline-block h-4 w-2 animate-pulse bg-sky-400 align-middle"
              />
              <span className="text-[11px] text-slate-500">
                Ready — scroll to Playground for interactive shell
              </span>
            </div>
          )}
        </div>

        {/* Visual Simulation System Status Strip */}
        <div className="border-t border-slate-800/80 bg-[#0D131C] px-4 py-3 sm:px-5">
          <div className="mb-2 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-slate-400 uppercase">
              <Activity className="h-3 w-3 text-sky-400" aria-hidden="true" />
              System Status Panel
            </span>
            <span className="font-mono text-[10px] text-slate-500">
              Visual Simulation · Demo Telemetry
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {SIMULATED_SYSTEM_STATUS.map((item) => {
              const dotClass =
                item.tone === "emerald"
                  ? "bg-emerald-400"
                  : item.tone === "cyan"
                    ? "bg-sky-400"
                    : "bg-violet-400";
              const textClass =
                item.tone === "emerald"
                  ? "text-emerald-300"
                  : item.tone === "cyan"
                    ? "text-sky-300"
                    : "text-violet-300";

              return (
                <div
                  key={item.label}
                  className="rounded-lg border border-slate-800/90 bg-[#090D13] px-2.5 py-2"
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="truncate font-mono text-[10px] text-slate-400">
                      {item.label}
                    </span>
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotClass}`} />
                  </div>
                  <p className={`mt-0.5 truncate font-mono text-[11px] font-medium ${textClass}`}>
                    {item.status}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Subtle floating engineering badge on larger screens */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1 font-mono text-[11px] text-slate-500">
        <span className="inline-flex items-center gap-1.5">
          <Server className="h-3.5 w-3.5 text-sky-400/80" aria-hidden="true" />
          Layered Architecture: Controller → Service → DAO → PostgreSQL
        </span>
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-violet-400/80" aria-hidden="true" />
          OIDC / RBAC Ready
        </span>
      </div>
    </div>
  );
}
