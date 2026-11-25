"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Terminal } from "lucide-react";
import { PROFILE } from "@/lib/portfolio-data";

interface ProfileFrameProps {
  hasProfileImage: boolean;
  compact?: boolean;
}

/**
 * Displays `/public/images/profile.jpg` when present.
 * When no photo exists yet, renders an intentional architectural monogram placeholder
 * without broken image states or fake portraits.
 */
export function ProfileFrame({ hasProfileImage, compact = false }: ProfileFrameProps) {
  const [imageError, setImageError] = useState(false);
  const showPhoto = hasProfileImage && !imageError;

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-slate-800/90 bg-[#0C1119] ${
        compact ? "p-3" : "p-4"
      }`}
    >
      {/* Subtle architectural corner markers */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-2 left-2 h-3 w-3 border-t border-l border-sky-400/50"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-2 right-2 h-3 w-3 border-t border-r border-sky-400/50"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 border-b border-l border-violet-400/50"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-2 bottom-2 h-3 w-3 border-r border-b border-violet-400/50"
      />

      <div className="relative aspect-[4/4.3] w-full overflow-hidden rounded-lg border border-slate-800/80 bg-[#080B10]">
        {showPhoto ? (
          <Image
            src={PROFILE.profileImagePath}
            alt={`${PROFILE.fullName} — ${PROFILE.shortRole}`}
            fill
            sizes="(max-width: 768px) 100vw, 340px"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
            priority
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="relative flex h-full w-full flex-col justify-between bg-engineering-dots p-5">
            {/* Soft radial accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(56,189,248,0.14),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.12),transparent_55%)]"
            />

            <div className="relative flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span className="inline-flex items-center gap-1.5 rounded border border-slate-800 bg-[#0D131C]/90 px-2 py-0.5 text-sky-300">
                <Terminal className="h-3 w-3" aria-hidden="true" />
                id::engineer
              </span>
              <span className="text-slate-500">v1.0</span>
            </div>

            <div className="relative my-auto flex flex-col items-center py-4 text-center">
              <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-sky-400/30 bg-[#0E1520] shadow-[0_0_40px_-12px_rgba(56,189,248,0.35)] sm:h-28 sm:w-28">
                <span className="font-mono text-3xl font-semibold tracking-wider text-slate-100 sm:text-4xl">
                  {PROFILE.initials}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute -right-1 -bottom-1 flex h-5 w-5 items-center justify-center rounded-full border border-[#0E1520] bg-emerald-500/20"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </span>
              </div>

              <p className="mt-4 font-mono text-xs tracking-widest text-sky-300/90 uppercase">
                {PROFILE.shortRole}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-200">
                {PROFILE.fullName}
              </p>
            </div>

            <div className="relative flex items-center justify-between border-t border-slate-800/80 pt-3 font-mono text-[11px] text-slate-400">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3 text-sky-400" aria-hidden="true" />
                {PROFILE.location}
              </span>
              <span className="text-slate-500">/images/profile.jpg</span>
            </div>
          </div>
        )}
      </div>

      {!compact && (
        <div className="mt-3 flex items-center justify-between px-1 font-mono text-xs text-slate-400">
          <span>Java · Spring Boot · PostgreSQL</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            Available
          </span>
        </div>
      )}
    </div>
  );
}
