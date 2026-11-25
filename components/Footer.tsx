import Link from "next/link";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { PROFILE, SOCIAL_LINKS } from "@/lib/portfolio-data";

export function Footer() {
  const hasEmail = !SOCIAL_LINKS.email.startsWith("[");
  const hasLinkedin = !SOCIAL_LINKS.linkedin.startsWith("[");

  return (
    <footer className="border-t border-slate-800/80 bg-[#06090D]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-md border border-sky-400/30 bg-sky-400/10 font-mono text-xs font-semibold text-sky-300">
                {PROFILE.initials}
              </span>
              <span className="text-sm font-semibold text-slate-100">
                {PROFILE.fullName}
              </span>
            </div>
            <p className="mt-2 font-mono text-xs text-slate-400">
              {PROFILE.title} · {PROFILE.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400">
            <Link href="/#about" className="hover:text-slate-100">
              About
            </Link>
            <Link href="/#stack" className="hover:text-slate-100">
              Stack
            </Link>
            <Link href="/#projects" className="hover:text-slate-100">
              Projects
            </Link>
            <Link href="/#experience" className="hover:text-slate-100">
              Experience
            </Link>
            <Link href="/#playground" className="hover:text-slate-100">
              Terminal
            </Link>
            <Link href="/#contact" className="hover:text-slate-100">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-[#0D121A] text-slate-300 transition-colors hover:border-sky-400/40 hover:text-sky-300"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>

            {hasLinkedin ? (
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-[#0D121A] text-slate-300 transition-colors hover:border-sky-400/40 hover:text-sky-300"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            ) : (
              <Link
                href="/#contact"
                aria-label="LinkedIn placeholder in contact section"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-dashed border-slate-700 bg-[#0D121A] text-slate-500 transition-colors hover:text-slate-300"
              >
                <LinkedInIcon className="h-4 w-4" />
              </Link>
            )}

            {hasEmail ? (
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                aria-label="Email Jibrin"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-[#0D121A] text-slate-300 transition-colors hover:border-sky-400/40 hover:text-sky-300"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : (
              <Link
                href="/#contact"
                aria-label="Email placeholder in contact section"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-dashed border-slate-700 bg-[#0D121A] text-slate-500 transition-colors hover:text-slate-300"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-2 border-t border-slate-800/70 pt-6 font-mono text-[11px] text-slate-500 sm:flex-row sm:items-center">
          <span>
            © 2026 {PROFILE.fullName}. Crafted with Next.js, TypeScript &amp; Tailwind CSS.
          </span>
          <span>&ldquo;{PROFILE.tagline}&rdquo;</span>
        </div>
      </div>
    </footer>
  );
}
