"use client";

import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaButton from "@/components/CtaButton";
import { CheckIcon } from "@/components/Icons";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero badge={t.about.badge} title={t.about.title} lead={t.about.lead} />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-5 lg:items-center">
            <div className="space-y-5 lg:col-span-3">
              {t.about.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-slate-600">
                  {p}
                </p>
              ))}
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                {t.home.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
                  >
                    <div className="text-3xl font-extrabold text-gradient">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-slate-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <SectionHeading
            badge={t.about.valuesTitle}
            title={t.about.valuesTitle}
            subtitle={t.about.valuesSubtitle}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.about.values.map((value) => (
              <div
                key={value.title}
                className="card-hover rounded-2xl border border-slate-200 bg-white p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-brand-800 text-white">
                  <CheckIcon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {value.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-brand-100 bg-brand-50/60 px-8 py-10 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {t.home.finalCtaTitle}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {t.home.finalCtaText}
              </p>
            </div>
            <CtaButton href="/iletisim" withArrow>
              {t.home.finalCtaButton}
            </CtaButton>
          </div>
        </Container>
      </section>
    </>
  );
}
