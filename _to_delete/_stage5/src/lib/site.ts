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
