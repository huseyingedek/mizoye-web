import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";

const description =
  "Mizoye Yazılım Danışmanlık; E-Mutabakat ve Depo Yönetim Sistemi (WMS) gibi kendi yazılım ürünleri ile özel yazılım geliştirme ve teknoloji danışmanlığı hizmetleri sunan bir yazılım şirketidir.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Mizoye Yazılım Danışmanlık | Yazılım Ürünleri ve Danışmanlık",
    template: "%s | Mizoye Yazılım Danışmanlık",
  },
  description,
  applicationName: "Mizoye Yazılım Danışmanlık",
  authors: [{ name: "Mizoye Yazılım Danışmanlık", url: siteConfig.url }],
  creator: "Mizoye Yazılım Danışmanlık",
  publisher: "Mizoye Yazılım Danışmanlık",
  keywords: [
    "Mizoye",
    "yazılım şirketi",
    "yazılım danışmanlık",
    "E-Mutabakat",
    "mutabakat programı",
    "depo yönetim sistemi",
    "WMS",
    "özel yazılım geliştirme",
    "web geliştirme",
    "mobil uygulama",
    "dijital dönüşüm",
    "kurumsal yazılım",
    "Yalova yazılım",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    siteName: "Mizoye Yazılım Danışmanlık",
    title: "Mizoye Yazılım Danışmanlık | Yazılım Ürünleri ve Danışmanlık",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mizoye Yazılım Danışmanlık",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#1f478d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: "Mizoye Yazılım Danışmanlık",
        legalName: "Mizoye Yazılım Danışmanlık Limited Şirketi",
        url: siteConfig.url,
        description,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        foundingDate: "2025-12-16",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Yalova",
          addressCountry: "TR",
          postalCode: "77202",
        },
        sameAs: [
          siteConfig.social.linkedin,
          siteConfig.social.twitter,
          siteConfig.social.instagram,
          siteConfig.social.github,
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: "Mizoye Yazılım Danışmanlık",
        inLanguage: "tr-TR",
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };

  return (
    <html lang="tr" className={GeistSans.variable} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
