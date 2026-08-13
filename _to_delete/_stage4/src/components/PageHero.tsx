import Container from "./Container";
import { DotGrid } from "./Illustrations";

export default function PageHero({
  badge,
  title,
  lead,
}: {
  badge: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="relative overflow-hidden bg-hero-mesh">
      <div className="pointer-events-none absolute -right-24 -top-16 h-72 w-72 rounded-full bg-accent-400/15 blur-3xl" />
      <DotGrid className="pointer-events-none absolute left-6 top-8 hidden text-brand-200/60 sm:block" />
      <DotGrid className="pointer-events-none absolute bottom-6 right-8 hidden text-brand-200/50 sm:block" />
      <Container className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="animate-fade-up inline-block rounded-full border border-brand-200 bg-white/70 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 backdrop-blur">
            {badge}
          </span>
          <h1 className="animate-fade-up mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            {title}
          </h1>
          <p className="animate-fade-up mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {lead}
          </p>
        </div>
      </Container>
    </section>
  );
}
