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
import { CheckIcon, ArrowRightIcon } from "@/components/Icons";

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
