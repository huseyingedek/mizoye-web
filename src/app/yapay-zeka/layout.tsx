import type { Metadata } from "next";

const title = "AI Çözümleri — AI & Makine Öğrenmesi";
const description =
  "Tahmin, sınıflandırma ve karar desteği ile operasyonel veriyi işe dönüştürüyoruz: öngörü ve risk skorlama, otomasyon ve öneri sistemleri, yönetici panelleri.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/yapay-zeka" },
  openGraph: {
    title: `${title} | Mizoye Yazılım Danışmanlık`,
    description,
    url: "/yapay-zeka",
    type: "website",
  },
};

export default function AiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
