"use client";

import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";
import { productIcons, serviceIcons } from "@/components/solutionIcons";
import { CheckIcon } from "@/components/Icons";

type Item = { title: string; text: string; features: readonly string[] };

function OfferingCard({
  item,
  Icon,
  featured = false,
  delay = 0,
}: {
  item: Item;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  featured?: boolean;
  delay?: number;
}) {
  return (
    <Reveal
      delay={delay}
      className={`card-hover flex flex-col rounded-xl border bg-white p-8 ${
        featured ? "border-brand-200 shadow-card" : "border-slate-200"
      }`}
    >
      <div
        className={`flex items-center justify-center rounded-lg text-white ${
          featured ? "h-14 w-14 bg-brand-600" : "h-12 w-12 bg-slate-800"
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
        imageSrc="/images/cozumler.jpg"
        imageAlt={t.solutions.title}
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
                featured
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
              <OfferingCard
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
