"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, Terminal, X } from "lucide-react";
import { PROFILE, SOCIAL_LINKS } from "@/lib/portfolio-data";

const NAV_ITEMS = [
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Stack", href: "/#stack", sectionId: "stack" },
  { label: "Capabilities", href: "/#services", sectionId: "services" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "Experience", href: "/#experience", sectionId: "experience" },
  { label: "Terminal", href: "/#playground", sectionId: "playground" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const sectionIds = NAV_ITEMS.map((item) => item.sectionId);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  const currentSection = isHome ? activeSection : "projects";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-800/80 bg-[#080B10]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-[#080B10]/40 backdrop-blur-md"
      }`}
    >
      <nav
        aria-label="Primary Navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 rounded-lg py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-sky-400/30 bg-sky-400/10 font-mono text-xs font-semibold text-sky-300 transition-colors group-hover:border-sky-400/60 group-hover:bg-sky-400/15">
            {PROFILE.initials}
          </span>
          <div className="flex flex-col">
            <span className="font-mono text-xs font-medium tracking-tight text-slate-100">
              ~/jibrin-ahmed
            </span>
            <span className="hidden font-mono text-[10px] text-slate-400 sm:block">
              backend.engineer
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 rounded-full border border-slate-800/80 bg-[#0D121A]/80 p-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = currentSection === item.sectionId;
            return (
              <Link
                key={item.sectionId}
                href={item.href}
                className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-sky-400 ${
                  isActive
                    ? "text-sky-300"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 -z-10 rounded-full border border-sky-400/25 bg-sky-400/10"
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <Link
            href="/#playground"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-[#10151D] px-3 py-1.5 font-mono text-xs text-slate-300 transition-colors hover:border-sky-400/40 hover:text-sky-300 focus-visible:outline-2 focus-visible:outline-sky-400"
          >
            <Terminal className="h-3.5 w-3.5 text-sky-400" aria-hidden="true" />
            <span>CLI</span>
          </Link>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-lg bg-sky-400/10 px-3.5 py-1.5 text-xs font-medium text-sky-300 ring-1 ring-sky-400/30 transition-all hover:bg-sky-400/20 hover:ring-sky-400/50 focus-visible:outline-2 focus-visible:outline-sky-400"
          >
            <span>GitHub</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-[#10151D] text-slate-300 transition-colors hover:border-slate-700 hover:text-white lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-slate-800/80 bg-[#0A0E15]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.sectionId}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    currentSection === item.sectionId
                      ? "bg-sky-400/10 text-sky-300"
                      : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-slate-500">#{item.sectionId}</span>
                </Link>
              ))}
              <div className="mt-3 flex items-center gap-2 border-t border-slate-800/80 pt-3">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-sky-400/30 bg-sky-400/10 px-4 py-2.5 text-sm font-medium text-sky-300"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex flex-1 items-center justify-center rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-950"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
