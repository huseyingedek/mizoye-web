// Kartlarda dönüşümlü kullanılan canlı renk aksanları.
// Sınıflar birebir (literal) yazılı — Tailwind tarama için gereklidir.
export type Accent = {
  icon: string; // ikon kutusu degrade zemini
  bar: string; // üst renk çizgisi
  soft: string; // yumuşak zemin + metin
  hover: string; // hover kenarlık
  ring: string; // ince halka
};

export const cardAccents: Accent[] = [
  {
    icon: "bg-gradient-to-br from-brand-500 to-brand-700",
    bar: "border-t-4 border-brand-500",
    soft: "bg-brand-50 text-brand-600",
    hover: "hover:border-brand-300",
    ring: "ring-brand-100",
  },
  {
    icon: "bg-gradient-to-br from-accent-400 to-accent-600",
    bar: "border-t-4 border-accent-500",
    soft: "bg-accent-50 text-accent-600",
    hover: "hover:border-accent-300",
    ring: "ring-accent-100",
  },
  {
    icon: "bg-gradient-to-br from-gold-400 to-gold-600",
    bar: "border-t-4 border-gold-500",
    soft: "bg-gold-50 text-gold-600",
    hover: "hover:border-gold-300",
    ring: "ring-gold-100",
  },
  {
    icon: "bg-gradient-to-br from-violet-400 to-violet-600",
    bar: "border-t-4 border-violet-500",
    soft: "bg-violet-50 text-violet-600",
    hover: "hover:border-violet-400",
    ring: "ring-violet-100",
  },
  {
    icon: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    bar: "border-t-4 border-emerald-500",
    soft: "bg-emerald-50 text-emerald-600",
    hover: "hover:border-emerald-500",
    ring: "ring-emerald-100",
  },
  {
    icon: "bg-gradient-to-br from-accent-500 to-brand-700",
    bar: "border-t-4 border-accent-400",
    soft: "bg-accent-50 text-brand-600",
    hover: "hover:border-accent-300",
    ring: "ring-accent-100",
  },
];

export const accentOf = (i: number): Accent =>
  cardAccents[i % cardAccents.length];
