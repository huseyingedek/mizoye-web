"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/site";
import { productIcons, serviceIcons } from "@/components/solutionIcons";
import { accentOf, type Accent } from "@/lib/accents";
import {
  CheckIcon,
  ArrowRightIcon,
  BuildingIcon,
  CloudIcon,
  AiIcon,
} from "@/components/Icons";

const erpIcons = [BuildingIcon, CloudIcon];

type Item = { title: string; text: string; features: readonly string[] };

function OfferingCard({
  item,
  Icon,
  accent,
  featured = false,
  delay = 0,
}: {
  item: Item;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  accent: Accent;
  featured?: boolean;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className={`card-hover flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-card ${accent.bar} ${accent.hover}`}
    >
      <div
        className={`flex items-center justify-center rounded-xl text-white shadow-sm ${accent.icon} ${
          featured ? "h-14 w-14" : "h-12 w-12"
        }`}
      >
        <Icon className={featured ? "h-7 w-7" : "h-6 w-6"} />
      </div>
      <h3 className="mt-6 text-xl font-bold text-slate-900">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
      <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
        {item.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2.5 text-sm text-slate-700"
          >
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${accent.soft}`}
            >
              <CheckIcon className="h-3 w-3" />
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function SolutionsPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        badge={t.solutions.badge}
        title={t.solutions.title}
        lead={t.solutions.lead}
        imageSrc={images.solutions}
        imageAlt={t.solutions.title}
        variant="photo"
        chip={t.home.stats[0]}
        layout="banner"
      />

      {/* Yazılım ürünleri */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              align="left"
              title={t.solutions.productsTitle}
              subtitle={t.solutions.productsSubtitle}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {t.solutions.products.map((item, i) => (
              <OfferingCard
                key={item.title}
                item={item}
                Icon={productIcons[i] ?? productIcons[0]}
                accent={accentOf(i)}
                featured
                delay={i * 100}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Kurumsal ERP Çözümleri */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              align="left"
              badge={t.solutions.badge}
              title={t.solutions.erpTitle}
              subtitle={t.solutions.erpSubtitle}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {t.solutions.erp.map((item, i) => (
              <OfferingCard
                key={item.title}
                item={item}
                Icon={erpIcons[i] ?? erpIcons[0]}
                accent={accentOf(i + 4)}
                featured
                delay={i * 100}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Hizmetler */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              align="left"
              title={t.solutions.servicesTitle}
              subtitle={t.solutions.servicesSubtitle}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {t.solutions.services.map((item, i) => (
              <OfferingCard
                key={item.title}
                item={item}
                Icon={serviceIcons[i] ?? serviceIcons[0]}
                accent={accentOf(i + 2)}
                delay={(i % 2) * 100}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Sektörel Yazılım Çözümleri */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              align="left"
              title={t.solutions.sectoralTitle}
              subtitle={t.solutions.sectoralSubtitle}
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.solutions.sectoral.map((s, i) => {
              const a = accentOf(i);
              return (
                <Reveal
                  key={s.title}
                  delay={(i % 3) * 90}
                  className={`card-hover rounded-2xl border border-slate-200 bg-white p-6 shadow-card ${a.bar} ${a.hover}`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm ${a.icon}`}
                  >
                    <CheckIcon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {s.text}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* AI teaser */}
      <section className="py-8 sm:py-10">
        <Container>
          <Reveal>
            <Link
              href="/yapay-zeka"
              className="group card-hover relative flex flex-col items-start gap-5 overflow-hidden rounded-3xl bg-band-navy p-8 shadow-card sm:flex-row sm:items-center sm:justify-between sm:p-10"
            >
              <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-[0.12]" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold-400/20 blur-2xl" />
              <div className="relative flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-400 to-brand-600 text-white shadow-sm">
                  <AiIcon className="h-7 w-7" />
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-300">
                    {t.ai.badge}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                    {t.ai.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-300">
                    {t.ai.lead}
                  </p>
                </div>
              </div>
              <span className="relative inline-flex shrink-0 items-center gap-2 rounded-lg bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-950 shadow-lg transition-colors group-hover:bg-gold-400">
                {t.nav.ai}
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </Link>
          </Reveal>
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
