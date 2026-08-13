"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/site";
import AiModules from "@/components/AiModules";
import {
  AlertIcon,
  RouteIcon,
  ChartBarIcon,
  ShieldIcon,
  ArrowRightIcon,
} from "@/components/Icons";

const moduleIcons = [AlertIcon, RouteIcon, ChartBarIcon, ShieldIcon];

export default function AiPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        badge={t.ai.badge}
        title={t.ai.title}
        lead={t.ai.lead}
        imageSrc={images.ai}
        imageAlt={t.ai.title}
        variant="photo"
        layout="banner"
      />

      {/* Giriş */}
      <section className="pt-16 sm:pt-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading title={t.ai.introTitle} subtitle={t.ai.introText} />
          </div>
        </Container>
      </section>

      {/* AI Çözümleri — açılır modüller */}
      <section className="py-14 sm:py-16">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-600">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              {t.ai.modulesTitle}
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              <span className="relative inline-block">
                {t.ai.modulesTitle}
                <span className="absolute -bottom-2 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-orange-500" />
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              {t.ai.modulesSubtitle}
            </p>
          </div>
          <Reveal>
            <AiModules modules={t.ai.modules} icons={moduleIcons} />
          </Reveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <Reveal className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl bg-vivid px-8 py-10 text-center shadow-card sm:flex-row sm:text-left">
            <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-[0.1]" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gold-400/30 blur-2xl" />
            <div className="relative">
              <h3 className="text-xl font-bold text-white">
                {t.home.finalCtaTitle}
              </h3>
              <p className="mt-2 text-sm text-white/85">{t.home.finalCtaText}</p>
            </div>
            <Link
              href="/iletisim"
              className="relative inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 shadow-lg transition-colors hover:bg-gold-400"
            >
              {t.home.finalCtaButton}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
