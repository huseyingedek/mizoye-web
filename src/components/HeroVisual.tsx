"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

type Variant = "photo" | "mockup";

/**
 * Tüm sayfalarda TUTARLI, premium kahraman görseli çerçevesi.
 *  - variant="photo"  → fotoğraf, açık çerçevede kırpılarak gösterilir
 *  - variant="mockup" → şeffaf PNG mockup, lacivert panelde yüzerek gösterilir
 * Görsel yüklenemezse markalı bir yedek panele düşer; site her zaman tam görünür.
 */
export default function HeroVisual({
  src,
  alt,
  variant = "photo",
  badge,
  float = true,
  className = "",
}: {
  src: string;
  alt: string;
  variant?: Variant;
  badge?: ReactNode;
  float?: boolean;
  className?: string;
}) {
  const [ok, setOk] = useState(true);

  if (variant === "mockup") {
    return (
      <div className={`relative ${className}`}>
        {/* dış parıltı */}
        <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand-500/25 via-gold-300/15 to-accent-400/20 blur-3xl" />
        <div className="relative flex aspect-[5/4] items-center justify-center overflow-hidden rounded-2xl bg-navy-mesh p-6 shadow-card ring-1 ring-white/10 glow-brand sm:p-9">
          <div className="absolute inset-0 bg-dotgrid opacity-[0.14]" />
          <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gold-400/25 blur-2xl animate-shine" />
          <div className="pointer-events-none absolute -bottom-14 -left-12 h-48 w-48 rounded-full bg-brand-400/25 blur-2xl" />
          <div className="relative h-full w-full">
            {ok ? (
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 1024px) 90vw, 46vw"
                className={`relative object-contain drop-shadow-2xl ${
                  float ? "animate-float-slow" : ""
                }`}
                onError={() => setOk(false)}
                priority
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-white/85">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-2xl font-black ring-1 ring-white/15">
                  M
                </span>
                <span className="text-sm font-semibold tracking-wide">{alt}</span>
              </div>
            )}
          </div>
        </div>
        {badge}
      </div>
    );
  }

  // variant === "photo"
  return (
    <div className={`relative ${className}`}>
      <div className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-brand-500/20 via-gold-300/15 to-accent-400/20 blur-2xl" />
      <div className="relative aspect-[5/4] overflow-hidden rounded-2xl shadow-card ring-1 ring-slate-900/10">
        {/* markalı yedek zemin */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-800 to-navy-900" />
        {ok ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 90vw, 46vw"
            className="relative object-cover"
            onError={() => setOk(false)}
            priority
          />
        ) : null}
        {/* alt köşe yumuşak lacivert geçiş */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-900/45 to-transparent" />
        {/* ince altın üst çizgi */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/70 to-transparent" />
      </div>
      {badge}
    </div>
  );
}
