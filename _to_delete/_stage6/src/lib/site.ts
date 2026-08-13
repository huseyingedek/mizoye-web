import type { Lang, Translation } from "./translations";

// Merkezi site bilgileri — iletişim ve sosyal medya detaylarını buradan güncelleyebilirsiniz.
export const siteConfig = {
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

// Sayfa görselleri. Kendi fotoğraflarınızı kullanmak isterseniz bu URL'leri
// değiştirin ya da public/images altına dosya koyup yolu "/images/hero.jpg"
// şeklinde verin. (Unsplash — ücretsiz, ticari kullanıma uygun.)
const UNSPLASH = "?auto=format&fit=crop&w=1280&q=70";
export const images = {
  hero: `https://images.unsplash.com/photo-1522071820081-009f0129c71c${UNSPLASH}`,
  solutions: `https://images.unsplash.com/photo-1551288049-bebda4e38f71${UNSPLASH}`,
  about: `https://images.unsplash.com/photo-1521737604893-d14cc237f11d${UNSPLASH}`,
  mission: `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40${UNSPLASH}`,
  contact: `https://images.unsplash.com/photo-1497366754035-f200968a6e72${UNSPLASH}`,
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
