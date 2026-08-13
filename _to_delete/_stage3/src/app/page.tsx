"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CtaButton from "@/components/CtaButton";
import { solutionIcons } from "@/components/solutionIcons";
import { CheckIcon, ArrowRightIcon } from "@/components/Icons";

export default function HomePage() {
  const { t } = useLanguage();
  const offerings = [...t.solutions.products, ...t.solutions.services];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-mesh">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/60 to-transparent" />
        <Container className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-xs font-semibold text-brand-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {t.home.badge}
            </span>
            <h1 className="animate-fade-up mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              {t.home.heroTitle.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="text-gradient">
                {t.home.heroTitle.split(" ").slice(-2).join(" ")}
              </span>
            </h1>
            <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {t.home.heroSubtitle}
            </p>
            <div className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CtaButton href="/iletisim" withArrow>
                {t.home.ctaPrimary}
              </CtaButton>
              <CtaButton href="/cozumler" variant="secondary">
                {t.home.ctaSecondary}
              </CtaButton>
            </div>
          </div>

          {/* İstatistikler */}
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:mt-20 lg:grid-cols-4">
            {t.home.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-card"
              >
                <div className="text-3xl font-extrabold text-brand-700 sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Slogan bandı */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mx-auto block font-serif text-5xl leading-none text-brand-300">
              &ldquo;
            </span>
            <p className="-mt-3 text-2xl font-bold italic tracking-tight sm:text-3xl">
              <span className="text-gradient">{t.home.slogan.quote}</span>
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600">
              {t.home.slogan.text}
            </p>
          </div>
        </Container>
      </section>

      {/* Yazılımlar & Hizmetler */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            badge={t.solutions.badge}
            title={t.home.solutionsTitle}
            subtitle={t.home.solutionsSubtitle}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((item, i) => {
              const Icon = solutionIcons[i] ?? solutionIcons[0];
              return (
                <div
                  key={item.title}
                  className="card-hover rounded-xl border border-slate-200 bg-white p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-600 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/cozumler"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              {t.home.ctaSecondary}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Neden biz */}
      <section className="border-t border-slate-200 bg-slate-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            badge={t.home.whyTitle}
            title={t.home.whyTitle}
            subtitle={t.home.whySubtitle}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.why.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-card"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <CheckIcon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Süreç */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            badge={t.home.processTitle}
            title={t.home.processTitle}
            subtitle={t.home.processSubtitle}
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {t.home.process.map((step) => (
              <div key={step.step}>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
                    {step.step}
                  </span>
                  <span className="hidden h-px flex-1 bg-slate-200 lg:block" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Son CTA */}
      <section className="pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-700 to-navy-900 px-8 py-14 text-center sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand-500/20 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-accent-500/10 blur-2xl" />
            <h2 className="relative text-3xl font-bold text-white sm:text-4xl">
              {t.home.finalCtaTitle}
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-base text-brand-100">
              {t.home.finalCtaText}
            </p>
            <div className="relative mt-8 flex justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-brand-700 shadow-sm transition-colors hover:bg-brand-50"
              >
                {t.home.finalCtaButton}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
