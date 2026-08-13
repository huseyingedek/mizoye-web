import Image from "next/image";
import Container from "./Container";
import HeroVisual from "./HeroVisual";

type Layout = "right" | "left" | "banner" | "center";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700 backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
      {children}
    </span>
  );
}

function Chip({ chip }: { chip: { value: string; label: string } }) {
  return (
    <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-xl border border-slate-200 bg-white/95 px-4 py-3 shadow-card backdrop-blur">
      <span className="text-xl font-extrabold text-gradient-gold">
        {chip.value}
      </span>
      <span className="max-w-[9rem] text-xs font-medium leading-tight text-slate-600">
        {chip.label}
      </span>
    </div>
  );
}

export default function PageHero({
  badge,
  title,
  lead,
  imageSrc,
  imageAlt,
  variant = "photo",
  chip,
  layout = "right",
}: {
  badge: string;
  title: string;
  lead: string;
  imageSrc?: string;
  imageAlt?: string;
  variant?: "photo" | "mockup";
  chip?: { value: string; label: string };
  layout?: Layout;
}) {
  // Görsel yoksa: yalnızca ortalanmış metin
  if (!imageSrc) {
    return (
      <section className="relative overflow-hidden bg-hero-mesh">
        <div className="pointer-events-none absolute -right-24 -top-16 h-72 w-72 rounded-full bg-accent-400/15 blur-3xl" />
        <Container className="relative py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Badge>{badge}</Badge>
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

  // BANNER — tam genişlik fotoğraf + renkli overlay, metin üstte
  if (layout === "banner") {
    return (
      <section className="relative isolate flex min-h-[58vh] items-center overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt ?? title}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-vivid opacity-85" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/80 via-transparent to-brand-900/40" />
        <div className="pointer-events-none absolute -right-24 top-8 -z-10 h-80 w-80 rounded-full bg-gold-400/25 blur-3xl animate-shine" />
        <div className="pointer-events-none absolute -left-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-accent-400/25 blur-3xl" />
        <Container className="relative py-20 sm:py-24">
          <div className="max-w-3xl">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              {badge}
            </span>
            <h1 className="animate-fade-up mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
            <p className="animate-fade-up mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              {lead}
            </p>
            {chip ? (
              <div className="animate-fade-up mt-8 inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
                <span className="text-2xl font-extrabold text-gold-300">
                  {chip.value}
                </span>
                <span className="max-w-[12rem] text-xs font-medium leading-tight text-slate-200">
                  {chip.label}
                </span>
              </div>
            ) : null}
          </div>
        </Container>
      </section>
    );
  }

  // CENTER — ortalanmış metin, altında geniş sinematik görsel
  if (layout === "center") {
    return (
      <section className="relative overflow-hidden bg-hero-mesh">
        <div className="pointer-events-none absolute -right-24 -top-16 h-72 w-72 rounded-full bg-accent-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 top-24 h-64 w-64 rounded-full bg-gold-300/15 blur-3xl" />
        <Container className="relative py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <Badge>{badge}</Badge>
            </div>
            <h1 className="animate-fade-up mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              {title}
            </h1>
            <p className="animate-fade-up mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {lead}
            </p>
          </div>
          <div className="animate-fade-up relative mx-auto mt-12 max-w-5xl">
            <div className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-brand-500/20 via-gold-300/15 to-accent-400/20 blur-2xl" />
            <div className="relative aspect-[16/7] overflow-hidden rounded-3xl shadow-card ring-1 ring-slate-900/10">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-800 to-navy-900" />
              <Image
                src={imageSrc}
                alt={imageAlt ?? title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="relative object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-300/70 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-900/45 to-transparent" />
            </div>
            {chip ? (
              <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-xl border border-slate-200 bg-white/95 px-4 py-3 shadow-card backdrop-blur">
                <span className="text-xl font-extrabold text-gradient-gold">
                  {chip.value}
                </span>
                <span className="max-w-[9rem] text-xs font-medium leading-tight text-slate-600">
                  {chip.label}
                </span>
              </div>
            ) : null}
          </div>
        </Container>
      </section>
    );
  }

  // RIGHT / LEFT — iki sütun; görsel sağda ya da solda
  const imageFirst = layout === "left";
  return (
    <section className="relative overflow-hidden bg-hero-mesh">
      <div className="pointer-events-none absolute -right-24 -top-16 h-72 w-72 rounded-full bg-accent-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-gold-300/15 blur-3xl" />
      <Container className="relative py-14 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className={imageFirst ? "lg:order-2" : ""}>
            <Badge>{badge}</Badge>
            <h1 className="animate-fade-up mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              {title}
            </h1>
            <p className="animate-fade-up mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {lead}
            </p>
          </div>
          <div className={`animate-fade-up ${imageFirst ? "lg:order-1" : ""}`}>
            <HeroVisual
              src={imageSrc}
              alt={imageAlt ?? title}
              variant={variant}
              badge={chip ? <Chip chip={chip} /> : undefined}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
