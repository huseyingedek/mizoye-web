"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/site";
import { accentOf } from "@/lib/accents";
import {
  BuildingIcon,
  CloudIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@/components/Icons";

export default function ErpConsultingPage() {
  const { t } = useLanguage();
  const e = t.erpConsulting;

  return (
    <>
      <PageHero
        badge={e.badge}
        title={e.title}
        lead={e.lead}
        imageSrc={images.erp}
        imageAlt={e.title}
        variant="photo"
        chip={e.stats[0]}
        layout="banner"
      />

      {/* Giriş + istatistikler */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                align="left"
                badge={e.badge}
                title={e.intro.title}
              />
              <div className="mt-6 space-y-4">
                {e.intro.paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 28)}
                    className="text-base leading-relaxed text-slate-600"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120} className="grid grid-cols-3 gap-4">
              {e.stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-card ${accentOf(i).bar}`}
                >
                  <div className="text-2xl font-extrabold text-gradient-gold sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1.5 text-xs font-medium leading-tight text-slate-600">
                    {s.label}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Tecrübemiz */}
      <section className="bg-hero-mesh py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading align="left" title={e.experience.title} />
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {e.experience.paragraphs.map((p, i) => (
              <Reveal
                key={p.slice(0, 28)}
                delay={i * 100}
                className="rounded-2xl border border-slate-200 bg-white/80 p-7 shadow-card backdrop-blur"
              >
                <p className="text-base leading-relaxed text-slate-600">{p}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Uzmanlık Alanlarımız */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              align="left"
              badge={e.expertise.platformsTitle}
              title={e.expertise.title}
              subtitle={e.expertise.subtitle}
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {e.expertise.platforms.map((p, i) => {
              const a = accentOf(i);
              return (
                <Reveal
                  key={p.name}
                  delay={(i % 4) * 90}
                  className={`card-hover flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card ${a.bar} ${a.hover}`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm ${a.icon}`}
                  >
                    <CloudIcon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {p.text}
                  </p>
                </Reveal>
              );
            })}
          </div>

          {/* Modül tecrübesi */}
          <Reveal className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 shadow-card sm:p-8">
            <h3 className="text-lg font-bold text-slate-900">
              {e.expertise.modulesTitle}
            </h3>
            <p className="mt-1.5 text-sm text-slate-600">
              {e.expertise.modulesIntro}
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {e.expertise.modules.map((m, i) => (
                <li
                  key={m}
                  className="flex items-center gap-2.5 text-sm text-slate-700"
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${accentOf(i).soft}`}
                  >
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>

        </Container>
      </section>

      {/* Çalışma Yaklaşımımız */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              align="left"
              title={e.approach.title}
              subtitle={e.approach.subtitle}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {e.approach.steps.map((s, i) => (
              <Reveal
                key={s.step}
                delay={(i % 4) * 90}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
              >
                <span className="text-3xl font-extrabold text-gradient-gold">
                  {s.step}
                </span>
                <h3 className="mt-3 text-base font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {s.text}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
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
