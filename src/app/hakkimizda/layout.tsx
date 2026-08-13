import type { Metadata } from "next";

const title = "Hakkımızda";
const description =
  "Mizoye Yazılım Danışmanlık; deneyimli yazılım mühendisleri, tasarımcılar ve danışmanlardan oluşan, teknolojiyle değer üreten bir ekiptir. Değerlerimizi ve yaklaşımımızı tanıyın.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/hakkimizda" },
  openGraph: {
    title: `${title} | Mizoye Yazılım Danışmanlık`,
    description,
    url: "/hakkimizda",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
