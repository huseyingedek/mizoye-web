import type { Metadata } from "next";

const title = "Çözümlerimiz";
const description =
  "E-Mutabakat ve Depo Yönetim Sistemi (WMS) yazılım ürünlerimiz ile özel yazılım geliştirme, web & mobil uygulama ve teknoloji danışmanlığı hizmetlerimizi keşfedin.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/cozumler" },
  openGraph: {
    title: `${title} | Mizoye Yazılım Danışmanlık`,
    description,
    url: "/cozumler",
    type: "website",
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
