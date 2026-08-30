import type { Metadata } from "next";

const title = "Hizmetlerimiz";
const description =
  "Özel yazılım geliştirme, web & mobil uygulama, teknoloji danışmanlığı, entegrasyon ve ERP hizmetleri (ERP danışmanlığı, ERP seçim, proje yöneticiliği, canlı sonrası destek) — işletmenizin ihtiyaç duyduğu tüm hizmetler tek sayfada.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/hizmetler" },
  openGraph: {
    title: `${title} | Mizoye Yazılım Danışmanlık`,
    description,
    url: "/hizmetler",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
