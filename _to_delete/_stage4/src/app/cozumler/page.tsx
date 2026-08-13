"use client";

import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";
import { ReconArt, WarehouseArt } from "@/components/Illustrations";
import { productIcons, serviceIcons } from "@/components/solutionIcons";
import { CheckIcon } from "@/components/Icons";

type Item = { title: string; text: string; features: readonly string[] };

const productArt = [ReconArt, WarehouseArt];

function ProductCard({
  item,
  Icon,
  Art,
  delay = 0,
}: {
  item: Item;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  Art: React.ComponentType<{ className?: string }>;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className="card-hover flex flex-col overflow-hidden rounded-2xl border border-brand-200 bg-white shadow-card"
    >
      <div className="border-b border-slate-100 bg-gradient-to-br from-brand-50 to-slate-50 px-6 pt-6">
        <Art className="mx-auto block w-full max-w-sm" />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-600 text-white">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
        <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
          {item.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2.5 text-sm text-slate-700"
            >
              <CheckIcon className="h-4 w-4 shrink-0 text-brand-600" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

function ServiceCard({
  item,
  Icon,
  delay = 0,
}: {
  item: Item;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className="card-hover flex flex-col rounded-xl border border-slate-200 bg-white p-8"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-xl font-bold text-slate-900">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
      <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
        {item.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2.5 text-sm text-slate-700"
          >
            <CheckIcon className="h-4 w-4 shrink-0 text-brand-600" />
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
              <ProductCard
                key={item.title}
                item={item}
                Icon={productIcons[i] ?? productIcons[0]}
                Art={productArt[i] ?? productArt[0]}
                delay={i * 100}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Hizmetler */}
      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
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
              <ServiceCard
                key={item.title}
                item={item}
                Icon={serviceIcons[i] ?? serviceIcons[0]}
                delay={(i % 2) * 100}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <Reveal className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-brand-100 bg-brand-50 px-8 py-10 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {t.home.finalCtaTitle}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{t.home.finalCtaText}</p>
            </div>
            <CtaButton href="/iletisim" withArrow>
              {t.home.finalCtaButton}
            </CtaButton>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
