import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Mizoye Yazılım Danışmanlık | Yazılım Ürünleri ve Danışmanlık",
    template: "%s | Mizoye Yazılım Danışmanlık",
  },
  description:
    "Mizoye Yazılım Danışmanlık; E-Mutabakat ve Depo Yönetim Sistemi gibi kendi yazılım ürünleri ile özel yazılım geliştirme ve danışmanlık hizmetleri sunan bir teknoloji şirketidir.",
  keywords: [
    "yazılım şirketi",
    "web geliştirme",
    "mobil uygulama",
    "yapay zeka",
    "dijital dönüşüm",
    "kurumsal yazılım",
    "Mizoye",
  ],
  openGraph: {
    title: "Mizoye Yazılım Danışmanlık | Yazılım Ürünleri ve Danışmanlık",
    description:
      "E-Mutabakat, Depo Yönetim Sistemi ve özel yazılım & danışmanlık hizmetleriyle işletmenizin çözüm ortağı.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={GeistSans.variable}>
      <body className="antialiased">
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
