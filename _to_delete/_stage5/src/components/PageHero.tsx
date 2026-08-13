import Container from "./Container";
import SmartImage from "./SmartImage";

export default function PageHero({
  badge,
  title,
  lead,
  imageSrc,
  imageAlt,
}: {
  badge: string;
  title: string;
  lead: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  if (imageSrc) {
    return (
      <section className="relative overflow-hidden bg-hero-mesh">
        <div className="pointer-events-none absolute -right-24 -top-16 h-72 w-72 rounded-full bg-accent-400/15 blur-3xl" />
        <Container className="relative py-14 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="animate-fade-up inline-block rounded-full border border-brand-200 bg-white/70 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 backdrop-blur">
                {badge}
              </span>
              <h1 className="animate-fade-up mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                {title}
              </h1>
              <p className="animate-fade-up mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                {lead}
              </p>
            </div>
            <div className="animate-fade-up">
              <SmartImage
                src={imageSrc}
                alt={imageAlt ?? title}
                className="aspect-[5/3] w-full shadow-card ring-1 ring-slate-200"
              />
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-hero-mesh">
      <div className="pointer-events-none absolute -right-24 -top-16 h-72 w-72 rounded-full bg-accent-400/15 blur-3xl" />
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
