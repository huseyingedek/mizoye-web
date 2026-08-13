"use client";

import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";

export default function MissionPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        badge={t.mission.badge}
        title={t.mission.title}
        lead={t.mission.lead}
        imageSrc="/images/misyon-vizyon.jpg"
        imageAlt={t.mission.title}
      />

      {/* Ana slogan */}
      <section className="border-b border-slate-100 py-10">
        <Container>
          <p className="text-center text-xl font-bold italic tracking-tight sm:text-2xl">
            <span className="text-brand-300">“</span>
            <span className="text-gradient">{t.mission.motto}</span>
            <span className="text-brand-300">”</span>
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal className="relative overflow-hidden rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-9">
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-brand-200/40 blur-2xl" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-sm">
                  <ArrowRightIcon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-slate-900">
                  {t.mission.missionTitle}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {t.mission.missionText}
                </p>
              </div>
            </Reveal>

            <Reveal delay={120} className="relative overflow-hidden rounded-2xl border border-accent-500/20 bg-gradient-to-br from-accent-400/10 to-white p-9">
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-accent-400/20 blur-2xl" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent-500 to-brand-600 text-white shadow-sm">
                  <CheckIcon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-slate-900">
                  {t.mission.visionTitle}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {t.mission.visionText}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <SectionHeading title={t.mission.goalsTitle} />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {t.mission.goals.map((goal, i) => (
              <Reveal
                key={goal.title}
                delay={i * 100}
                className="rounded-2xl border border-slate-200 bg-white p-7 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-lg font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {goal.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {goal.text}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Bizi anlatan sözler */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            title={t.mission.slogansTitle}
            subtitle={t.mission.slogansSubtitle}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {t.mission.slogans.map((slogan, i) => (
              <Reveal
                key={i}
                delay={i * 100}
                className="card-hover relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8"
              >
                <span className="absolute -top-2 left-5 font-serif text-6xl leading-none text-brand-100">
                  &ldquo;
                </span>
                <p className="relative mt-6 text-lg font-semibold leading-relaxed text-slate-800">
                  {slogan}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
