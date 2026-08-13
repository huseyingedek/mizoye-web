export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`${alignment} max-w-2xl`}>
      {badge ? (
        <span className="inline-block rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
          {badge}
        </span>
      ) : null}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
