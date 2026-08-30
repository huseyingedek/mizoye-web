import type { Metadata } from "next";

const title = "ERP Danışmanlığı";
const description =
  "20+ yıllık ve 20 sektörlük tecrübemizle ERP seçim danışmanlığı, ERP danışmanlığı, proje yöneticiliği ve canlı sonrası destek. Canias, Odoo, Liox ve IFS platformlarında uçtan uca ERP çözüm ortaklığı.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/erp-danismanligi" },
  openGraph: {
    title: `${title} | Mizoye Yazılım Danışmanlık`,
    description,
    url: "/erp-danismanligi",
    type: "website",
  },
};

export default function ErpConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
