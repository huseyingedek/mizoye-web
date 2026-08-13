import type { Lang, Translation } from "./translations";

// Merkezi site bilgileri — iletişim ve sosyal medya detaylarını buradan güncelleyebilirsiniz.
export const siteConfig = {
  // Yayına aldığınızda alan adınızı buraya yazın (SEO/sitemap/OG için kullanılır).
  // İsterseniz .env dosyasında NEXT_PUBLIC_SITE_URL tanımlayarak da geçebilirsiniz.
  name: "Mizoye Yazılım Danışmanlık",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mizoye.com",
  phone: "+90 212 000 00 00",
  phoneHref: "tel:+902120000000",
  email: "info@mizoye.com",
  emailHref: "mailto:info@mizoye.com",
  social: {
    linkedin: "https://www.linkedin.com/company/mizoye",
    twitter: "https://twitter.com/mizoye",
    instagram: "https://www.instagram.com/mizoye",
    github: "https://github.com/mizoye",
  },
};

// Sayfa görselleri — yüksek kaliteli gerçek fotoğraflar (Unsplash, ticari
// kullanıma uygun). Kendi fotoğrafınızı kullanmak isterseniz URL'yi değiştirin
// ya da public/ altına dosya koyup yolu "/dosya-adi.jpg" olarak verin.
const U = "?auto=format&fit=crop&q=80";
export const images = {
  // Ana sayfa — tam ekran kahraman (modern teknoloji ofisi / ekip)
  hero: `https://images.unsplash.com/photo-1519389950473-47ba0277781c${U}&w=2000`,
  // Çözümler — yazılım geliştirme / kod
  solutions: `https://images.unsplash.com/photo-1517180102446-f3ece451e9d8${U}&w=1400`,
  // Hakkımızda — ekip / iş birliği
  about: `https://images.unsplash.com/photo-1522071820081-009f0129c71c${U}&w=1400`,
  // Misyon & Vizyon — küresel / teknoloji vizyonu
  mission: `https://images.unsplash.com/photo-1451187580459-43490279c0fa${U}&w=1400`,
  // İletişim — modern ofis
  contact: `https://images.unsplash.com/photo-1497366754035-f200968a6e72${U}&w=1400`,
  // Ürün vitrini fotoğrafları
  emutabakat: `https://images.unsplash.com/photo-1460925895917-afdab827c52f${U}&w=1200`,
  wms: `https://images.unsplash.com/photo-1498050108023-c5249f4df085${U}&w=1200`,
};

export type NavItem = { href: string; key: keyof Translation["nav"] };

export const navItems: NavItem[] = [
  { href: "/", key: "home" },
  { href: "/hakkimizda", key: "about" },
  { href: "/cozumler", key: "solutions" },
  { href: "/misyon-vizyon", key: "mission" },
  { href: "/iletisim", key: "contact" },
];

export const languages: { code: Lang; label: string; name: string }[] = [
  { code: "tr", label: "TR", name: "Türkçe" },
  { code: "en", label: "EN", name: "English" },
];
