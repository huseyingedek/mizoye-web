"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";
import { images } from "@/lib/site";
import { solutionIcons, productIcons } from "@/components/solutionIcons";
import { accentOf } from "@/lib/accents";
import { CheckIcon, ArrowRightIcon } from "@/components/Icons";

export default function HomePage() {
  const { t } = useLanguage();
  const offerings = [...t.solutions.products, ...t.solutions.services];
  const productPhotos = [images.emutabakat, images.wms];

  return (
    <>
      {/* Hero — tam ekran fotoğraf + overlay */}
      <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden">
        {/* arka plan fotoğrafı */}
        <Image
          src={images.hero}
          alt="Mizoye Yazılım Danışmanlık ekibi"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        {/* canlı renkli overlay */}
        <div className="absolute inset-0 -z-10 bg-vivid opacity-85" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/85 via-transparent to-brand-900/40" />
        <div className="pointer-events-none absolute -right-24 top-10 -z-10 h-96 w-96 rounded-full bg-gold-400/30 blur-3xl animate-shine" />
        <div className="pointer-events-none absolute -left-20 bottom-0 -z-10 h-96 w-96 rounded-full bg-accent-400/30 blur-3xl" />
        <div className="pointer-events-none absolute right-1/3 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <Container className="relative py-24 sm:py-28">
          <div className="max-w-3xl">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              {t.home.badge}
            </span>
            <h1 className="animate-fade-up mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl">
              {t.home.heroTitle.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
                {t.home.heroTitle.split(" ").slice(-2).join(" ")}
              </span>
            </h1>
            <p className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              {t.home.heroSubtitle}
            </p>
            <div className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-lg transition-colors hover:bg-gold-400"
              >
                {t.home.ctaPrimary}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/cozumler"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                {t.home.ctaSecondary}
              </Link>
            </div>

            {/* Ürün rozetleri */}
            <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-2.5">
              {t.solutions.products.map((p) => (
                <span
                  key={p.title}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur"
                >
                  <CheckIcon className="h-3.5 w-3.5 text-gold-300" />
                  {p.title}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* İstatistik şeridi */}
      <section className="relative">
        <Container>
          <div className="relative z-10 -mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {t.home.stats.map((stat, i) => {
              const a = accentOf(i);
              return (
                <div
                  key={stat.label}
                  className={`rounded-2xl bg-white p-6 text-center shadow-card ${a.bar}`}
                >
                  <div className="text-3xl font-extrabold sm:text-4xl">
                    <span className="text-gradient-vivid">{stat.value}</span>
                  </div>
                  <div className="mt-1.5 text-sm font-medium text-slate-600">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="h-16" />
        </Container>
      </section>

      {/* Slogan bandı — koyu renk bloğu */}
      <section className="relative overflow-hidden bg-band-navy py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-[0.12]" />
        <div className="pointer-events-none absolute -left-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gold-400/20 blur-3xl" />
        <Container className="relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="mx-auto block font-serif text-6xl leading-none text-gold-400/70">
              &ldquo;
            </span>
            <p className="-mt-4 text-2xl font-bold italic tracking-tight sm:text-3xl">
              <span className="bg-gradient-to-r from-accent-300 via-white to-gold-300 bg-clip-text text-transparent">
                {t.home.slogan.quote}
              </span>
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
              {t.home.slogan.text}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Öne çıkan ürünler — vitrin */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              badge={t.solutions.badge}
              title={t.solutions.productsTitle}
              subtitle={t.solutions.productsSubtitle}
            />
          </Reveal>

          <div className="mt-16 space-y-16 lg:space-y-24">
            {t.solutions.products.map((product, i) => {
              const photo = productPhotos[i] ?? productPhotos[0];
              const Icon = productIcons[i] ?? productIcons[0];
              const reversed = i % 2 === 1;
              return (
                <Reveal
                  key={product.title}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
                >
                  {/* Görsel */}
                  <div className={reversed ? "lg:order-2" : ""}>
                    <div className="relative">
                      <div className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-brand-500/15 via-gold-300/15 to-accent-400/15 blur-2xl" />
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card ring-1 ring-slate-900/10">
                        <Image
                          src={photo}
                          alt={product.title}
                          fill
                          sizes="(max-width: 1024px) 90vw, 46vw"
                          className="object-cover"
                        />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-900/50 to-transparent" />
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/70 to-transparent" />
                      </div>
                    </div>
                  </div>

                  {/* Metin */}
                  <div className={reversed ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-sm ${accentOf(i).icon}`}
                      >
                        <Icon className="h-6 w-6" />
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${accentOf(i).soft}`}
                      >
                        {String(i + 1).padStart(2, "0")} / {t.solutions.badge}
                      </span>
                    </div>
                    <h3 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">
                      {product.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">
                      {product.text}
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-1">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm font-medium text-slate-700"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                            <CheckIcon className="h-3.5 w-3.5" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link
                        href="/cozumler"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                      >
                        {t.home.ctaSecondary}
                        <ArrowRightIcon className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Çözümler */}
      <section className="border-t border-slate-200 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              badge={t.solutions.badge}
              title={t.home.solutionsTitle}
              subtitle={t.home.solutionsSubtitle}
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((item, i) => {
              const Icon = solutionIcons[i] ?? solutionIcons[0];
              const a = accentOf(i);
              return (
                <Reveal
                  key={item.title}
                  delay={(i % 3) * 90}
                  className={`card-hover rounded-2xl border border-slate-200 bg-white p-7 shadow-card ${a.bar} ${a.hover}`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-sm ${a.icon}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </Reveal>
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

      {/* Sektörler */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              title={t.home.sectorsTitle}
              subtitle={t.home.sectorsSubtitle}
            />
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
            {t.home.sectors.map((sector, i) => {
              const a = accentOf(i);
              return (
                <Reveal
                  key={sector}
                  delay={(i % 3) * 80}
                  className={`card-hover flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-card ${a.hover}`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white shadow-sm ${a.icon}`}
                  >
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold text-slate-800">
                    {sector}
                  </span>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Neden biz */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              badge={t.home.whyTitle}
              title={t.home.whyTitle}
              subtitle={t.home.whySubtitle}
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.why.map((item, i) => {
              const a = accentOf(i);
              return (
                <Reveal
                  key={item.title}
                  delay={(i % 4) * 80}
                  className={`card-hover rounded-2xl border border-slate-200 bg-white p-6 shadow-card ${a.bar} ${a.hover}`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm ${a.icon}`}
                  >
                    <CheckIcon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.text}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Süreç — koyu renk bloğu */}
      <section className="relative overflow-hidden bg-band-navy py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-[0.1]" />
        <div className="pointer-events-none absolute -right-20 -top-16 h-80 w-80 rounded-full bg-gold-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl" />
        <Container className="relative">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-gold-300 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                {t.home.processTitle}
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t.home.processTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                {t.home.processSubtitle}
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {t.home.process.map((step, i) => {
              const a = accentOf(i);
              return (
                <Reveal
                  key={step.step}
                  delay={(i % 4) * 90}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-base font-bold text-white shadow-sm ${a.icon}`}
                    >
                      {step.step}
                    </span>
                    <span className="hidden h-px flex-1 bg-white/15 lg:block" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {step.text}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* SSS */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              title={t.home.faqTitle}
              subtitle={t.home.faqSubtitle}
            />
          </Reveal>
          <Reveal className="mx-auto mt-12 max-w-3xl space-y-3">
            {t.home.faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-xl border border-slate-200 bg-white p-5 transition-colors open:border-brand-200"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600 transition-transform group-open:rotate-45">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.a}
                </p>
              </details>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Son CTA */}
      <section className="pb-24">
        <Container>
          <Reveal className="relative overflow-hidden rounded-3xl bg-vivid px-8 py-14 text-center shadow-card sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0 bg-dotgrid opacity-[0.1]" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-56 w-56 rounded-full bg-gold-400/30 blur-2xl animate-shine" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-accent-400/30 blur-2xl" />
            <h2 className="relative text-3xl font-bold text-white sm:text-4xl">
              {t.home.finalCtaTitle}
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-base text-white/85">
              {t.home.finalCtaText}
            </p>
            <div className="relative mt-8 flex justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-lg transition-colors hover:bg-gold-400"
              >
                {t.home.finalCtaButton}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
