import type { Metadata } from "next";

const title = "İletişim";
const description =
  "Mizoye Yazılım Danışmanlık ile iletişime geçin. Projeleriniz, sorularınız ve iş birliği talepleriniz için telefon, e-posta ve iletişim formu.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/iletisim" },
  openGraph: {
    title: `${title} | Mizoye Yazılım Danışmanlık`,
    description,
    url: "/iletisim",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
