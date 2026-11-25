"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CornerDownLeft, Terminal as TerminalIcon, Trash2 } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/portfolio-data";
import { RevealBlock, SectionHeader } from "@/components/MotionPrimitives";

interface HistoryEntry {
  id: number;
  command: string;
  lines: { text: string; tone?: "default" | "accent" | "muted" | "emerald" | "violet" }[];
}

const SAMPLE_COMMANDS = [
  "help",
  "about",
  "stack",
  "projects",
  "experience",
  "contact",
  "clear",
] as const;

function resolveCommand(raw: string): HistoryEntry["lines"] | "CLEAR" {
  const cmd = raw.trim().toLowerCase();

  switch (cmd) {
    case "help":
      return [
        { text: "Available commands:", tone: "accent" },
        { text: "  about       - Engineer overview & primary focus", tone: "default" },
        { text: "  stack       - Core backend & frontend technologies", tone: "default" },
        { text: "  projects    - Featured systems & engineering work", tone: "default" },
        { text: "  experience  - Onboarding programme & education", tone: "default" },
        { text: "  contact     - Direct links & placeholder coordinates", tone: "default" },
        { text: "  clear       - Reset terminal output", tone: "muted" },
      ];
    case "about":
    case "whoami":
      return [
        { text: "Jibrin Adamu Ahmed", tone: "accent" },
        { text: "Backend-focused Software Developer", tone: "emerald" },
        {
          text: "Building practical software systems with Java and Spring Boot.",
          tone: "default",
        },
        { text: "Education: Computer Science, Ahmadu Bello University, Zaria", tone: "muted" },
      ];
    case "stack":
      return [
        { text: "Core Stack & Ecosystem:", tone: "accent" },
        { text: "  Java", tone: "default" },
        { text: "  Spring Boot", tone: "emerald" },
        { text: "  PostgreSQL", tone: "default" },
        { text: "  Keycloak", tone: "violet" },
        { text: "  Next.js", tone: "default" },
        { text: "  Angular", tone: "default" },
        { text: "  TypeScript", tone: "default" },
      ];
    case "projects":
      return [
        { text: "Engineering Portfolio:", tone: "accent" },
        { text: "  CCMS - Construction Company Management System", tone: "emerald" },
        { text: "    -> github.com/jibrinamir27/CCMS", tone: "muted" },
        { text: "  ByteWorks - Backend Development Experience", tone: "default" },
        {
          text: "  Security Monitoring & Integration [Experimental / Exploration]",
          tone: "violet",
        },
      ];
    case "experience":
      return [
        { text: "ByteWorks Technology Solutions", tone: "accent" },
        { text: "Software Developer Onboarding Programme", tone: "default" },
        { text: "June 2025 – October 2025 · Abuja, Nigeria", tone: "emerald" },
        {
          text: "Worked with Java, Spring Boot, PostgreSQL, Angular, JPA/Hibernate, Keycloak, REST APIs",
          tone: "muted",
        },
      ];
    case "contact":
      return [
        { text: `Email:    ${SOCIAL_LINKS.email}`, tone: "default" },
        { text: `GitHub:   ${SOCIAL_LINKS.githubDisplay}`, tone: "accent" },
        { text: `LinkedIn: ${SOCIAL_LINKS.linkedin}`, tone: "default" },
      ];
    case "clear":
      return "CLEAR";
    default:
      return [
        {
          text: `Command not found: '${raw.trim()}'. Type 'help' or click a command chip above.`,
          tone: "muted",
        },
      ];
  }
}

export function PlaygroundTerminal() {
  const prefersReduced = useReducedMotion();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      id: 1,
      command: "about",
      lines: resolveCommand("about") as HistoryEntry["lines"],
    },
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>(["about"]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);

  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    const result = resolveCommand(trimmed);
    setCmdHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);

    if (result === "CLEAR") {
      setHistory([]);
      setInput("");
      return;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Date.now() + Math.floor(Math.random() * 1000),
        command: trimmed,
        lines: result,
      },
    ]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx =
        historyIdx === -1 ? cmdHistory.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(nextIdx);
      setInput(cmdHistory[nextIdx] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx === -1) return;
      const nextIdx = historyIdx + 1;
      if (nextIdx >= cmdHistory.length) {
        setHistoryIdx(-1);
        setInput("");
      } else {
        setHistoryIdx(nextIdx);
        setInput(cmdHistory[nextIdx] ?? "");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const val = input.trim().toLowerCase();
      if (!val) return;
      const match = SAMPLE_COMMANDS.find((c) => c.startsWith(val));
      if (match) setInput(match);
    }
  };

  return (
    <section
      id="playground"
      className="scroll-mt-20 border-y border-slate-800/70 bg-[#0A0E15]/60 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Interactive Shell"
          title="Explore My Engineering Environment"
          description="Click any command below or type directly into the terminal to inspect my profile, stack, projects, and experience."
          align="center"
        />

        <RevealBlock delay={0.08} className="mt-10">
          {/* Quick-Execute Command Chips */}
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
            {SAMPLE_COMMANDS.map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={() => {
                  executeCommand(cmd);
                  inputRef.current?.focus();
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-[#0E141D] px-3 py-1.5 font-mono text-xs text-slate-200 transition-colors hover:border-sky-400/50 hover:bg-sky-400/10 hover:text-sky-300 focus-visible:outline-2 focus-visible:outline-sky-400"
              >
                <span className="text-emerald-400">$</span>
                <span>{cmd}</span>
              </button>
            ))}
          </div>

          {/* Terminal Window */}
          <div
            onClick={() => inputRef.current?.focus()}
            className="overflow-hidden rounded-2xl border border-slate-800/90 bg-[#090D14] shadow-2xl"
          >
            {/* Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 bg-[#0F151F] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" aria-hidden="true" />
                <span className="ml-2 inline-flex items-center gap-1.5 font-mono text-xs text-slate-300">
                  <TerminalIcon className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
                  jibrin-cli — interactive-shell
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="hidden font-mono text-[10px] text-slate-500 sm:inline">
                  Frontend Simulation · ↑/↓ History · Tab Complete
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setHistory([]);
                  }}
                  aria-label="Clear terminal output"
                  className="inline-flex items-center gap-1 rounded border border-slate-800 bg-[#0A0E14] px-2 py-1 font-mono text-[11px] text-slate-400 transition-colors hover:border-slate-700 hover:text-slate-200"
                >
                  <Trash2 className="h-3 w-3" aria-hidden="true" />
                  <span>clear</span>
                </button>
              </div>
            </div>

            {/* Scrollable Output Area */}
            <div
              ref={outputRef}
              className="terminal-scroll max-h-[340px] min-h-[250px] space-y-4 overflow-y-auto p-4 font-mono text-xs leading-relaxed sm:p-6 sm:text-[13px]"
            >
              <p className="text-slate-500">
                Welcome to Jibrin&apos;s interactive developer shell. Type{" "}
                <span className="text-sky-300">help</span> or tap a command above.
              </p>

              {history.map((entry) => (
                <motion.div
                  key={entry.id}
                  initial={prefersReduced ? false : { opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18 }}
                  className="space-y-1.5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-emerald-400">jibrin@portfolio</span>
                    <span className="text-slate-600">:</span>
                    <span className="text-sky-400">~</span>
                    <span className="text-slate-500">$</span>
                    <span className="break-all text-slate-100">{entry.command}</span>
                  </div>

                  <div className="space-y-0.5 pl-3 sm:pl-4">
                    {entry.lines.map((line, i) => {
                      const toneCls =
                        line.tone === "accent"
                          ? "text-sky-300"
                          : line.tone === "emerald"
                            ? "text-emerald-300"
                            : line.tone === "violet"
                              ? "text-violet-300"
                              : line.tone === "muted"
                                ? "text-slate-400"
                                : "text-slate-200";
                      return (
                        <p key={i} className={`whitespace-pre-wrap break-words ${toneCls}`}>
                          {line.text}
                        </p>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Command Input Prompt */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                executeCommand(input);
              }}
              className="flex items-center gap-2 border-t border-slate-800/80 bg-[#0B1018] px-4 py-3 font-mono text-xs sm:px-6 sm:text-[13px]"
            >
              <span className="shrink-0 text-emerald-400">$</span>
              <div className="relative flex flex-1 items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command (e.g. help, stack, projects)..."
                  aria-label="Terminal command input"
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                  className="w-full bg-transparent text-slate-100 placeholder:text-slate-600 focus:outline-none"
                />
                {input.length === 0 && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 inline-block h-4 w-2 animate-pulse bg-sky-400/75"
                  />
                )}
              </div>
              <button
                type="submit"
                className="inline-flex shrink-0 items-center gap-1 rounded-md border border-slate-800 bg-[#101620] px-2.5 py-1 text-[11px] text-slate-300 transition-colors hover:border-sky-400/40 hover:text-sky-300"
              >
                <span>Run</span>
                <CornerDownLeft className="h-3 w-3" aria-hidden="true" />
              </button>
            </form>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
