"use client";

import { useState } from "react";
import {
  Check,
  Copy,
  ExternalLink,
  Info,
  Mail,
  Send,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { PROFILE, SOCIAL_LINKS } from "@/lib/portfolio-data";
import { RevealBlock, SectionHeader } from "@/components/MotionPrimitives";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [draftPrepared, setDraftPrepared] = useState(false);

  const hasEmail = !SOCIAL_LINKS.email.startsWith("[");
  const hasLinkedin = !SOCIAL_LINKS.linkedin.startsWith("[");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SOCIAL_LINKS.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard may be unavailable in restricted contexts
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDraftPrepared(true);
  };

  const mailtoHref = hasEmail
    ? `mailto:${SOCIAL_LINKS.email}?subject=${encodeURIComponent(
        subject || "Portfolio Inquiry"
      )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      )}`
    : undefined;

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-slate-800/70 bg-[#0A0E15]/60 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Have a Project in Mind? Let's Build Something."
          description="I'm open to software development opportunities, backend engineering roles, collaborations, and projects where technology can solve practical business problems."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Left Direct Channels */}
          <RevealBlock className="space-y-5 lg:col-span-5">
            <div className="surface-card rounded-2xl p-6 sm:p-7">
              <h3 className="text-lg font-semibold text-slate-100">
                Direct Channels
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Reach out directly via email, review my code on GitHub, or connect on LinkedIn.
              </p>

              <div className="mt-6 space-y-3">
                {/* Email Card / Button */}
                <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-[#0A0E14] p-3.5">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-sky-400/25 bg-sky-400/10 text-sky-300">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[11px] text-slate-400">Email</p>
                      {hasEmail ? (
                        <a
                          href={`mailto:${SOCIAL_LINKS.email}`}
                          className="block truncate text-sm font-medium text-slate-100 hover:text-sky-300"
                        >
                          {SOCIAL_LINKS.email}
                        </a>
                      ) : (
                        <p className="truncate font-mono text-xs text-amber-300/90">
                          {SOCIAL_LINKS.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-800 bg-[#101620] px-2.5 py-1.5 font-mono text-xs text-slate-300 transition-colors hover:border-sky-400/40 hover:text-sky-300"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* GitHub */}
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-[#0A0E14] p-3.5 transition-colors hover:border-sky-400/40"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-[#101620] text-slate-200">
                      <GitHubIcon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-[11px] text-slate-400">GitHub</p>
                      <p className="truncate text-sm font-medium text-slate-100">
                        {SOCIAL_LINKS.githubDisplay}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                </a>

                {/* LinkedIn */}
                {hasLinkedin ? (
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-[#0A0E14] p-3.5 transition-colors hover:border-sky-400/40"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-[#101620] text-sky-300">
                        <LinkedInIcon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-[11px] text-slate-400">LinkedIn</p>
                        <p className="truncate text-sm font-medium text-slate-100">
                          {PROFILE.fullName}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                  </a>
                ) : (
                  <div className="flex items-center justify-between gap-3 rounded-xl border border-dashed border-slate-700 bg-[#0A0E14] p-3.5">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-[#101620] text-slate-400">
                        <LinkedInIcon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-[11px] text-slate-400">LinkedIn</p>
                        <p className="truncate font-mono text-xs text-amber-300/90">
                          {SOCIAL_LINKS.linkedin}
                        </p>
                      </div>
                    </div>
                    <span className="rounded bg-slate-900 px-2 py-0.5 font-mono text-[10px] text-slate-400">
                      Placeholder
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-6 rounded-xl border border-slate-800/80 bg-[#0B1018] p-4 font-mono text-[11px] leading-relaxed text-slate-400">
                Update <code className="text-sky-300">SOCIAL_LINKS</code> inside{" "}
                <code className="text-slate-200">lib/portfolio-data.ts</code> to replace{" "}
                <code className="text-amber-300">[YOUR EMAIL]</code> and{" "}
                <code className="text-amber-300">[YOUR LINKEDIN URL]</code>.
              </div>
            </div>
          </RevealBlock>

          {/* Right Frontend-Ready Contact Form */}
          <RevealBlock delay={0.1} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="surface-card rounded-2xl p-6 sm:p-8"
            >
              <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-100">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400">
                    Frontend-ready form — wire an API route or email service before production deployment.
                  </p>
                </div>
                <span className="rounded-full border border-sky-400/25 bg-sky-400/10 px-2.5 py-1 font-mono text-[10px] text-sky-300">
                  Frontend Ready
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block font-mono text-xs text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-slate-800 bg-[#090D13] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-sky-400/60 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block font-mono text-xs text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-slate-800 bg-[#090D13] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-sky-400/60 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="contact-subject"
                  className="mb-1.5 block font-mono text-xs text-slate-300"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Backend Role / API Project / Collaboration"
                  className="w-full rounded-lg border border-slate-800 bg-[#090D13] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-sky-400/60 focus:outline-none"
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block font-mono text-xs text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about the system, role, or engineering challenge..."
                  className="w-full resize-y rounded-lg border border-slate-800 bg-[#090D13] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-sky-400/60 focus:outline-none"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-sky-300"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  <span>Send</span>
                </button>

                {mailtoHref ? (
                  <a
                    href={mailtoHref}
                    className="font-mono text-xs text-sky-300 underline-offset-4 hover:underline"
                  >
                    Or open in email client →
                  </a>
                ) : null}
              </div>

              {draftPrepared && (
                <div
                  role="status"
                  className="mt-5 rounded-xl border border-sky-400/30 bg-sky-400/10 p-4 text-xs leading-relaxed text-slate-200"
                >
                  <div className="flex items-start gap-2.5">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-sky-200">
                        Inquiry Payload Validated (Backend Delivery Not Configured)
                      </p>
                      <p className="mt-1 text-slate-300">
                        No message was transmitted to a server because this form is currently in frontend-ready mode. Connect a Next.js Route Handler (e.g.{" "}
                        <code className="rounded bg-slate-900 px-1 py-0.5">/api/contact</code>
                        ) with Resend, Nodemailer, or Formspree to deliver submissions.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
