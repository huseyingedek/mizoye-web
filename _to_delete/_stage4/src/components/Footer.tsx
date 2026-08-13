"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { navItems, siteConfig } from "@/lib/site";
import Container from "./Container";
import {
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
  GithubIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from "./Icons";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const offerings = [...t.solutions.products, ...t.solutions.services];

  const socials = [
    { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
    { href: siteConfig.social.twitter, label: "X", Icon: TwitterIcon },
    { href: siteConfig.social.instagram, label: "Instagram", Icon: InstagramIcon },
    { href: siteConfig.social.github, label: "GitHub", Icon: GithubIcon },
  ];

  return (
    <footer className="border-t border-navy-800 bg-navy-900 text-slate-300">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-black text-white">
                M
              </span>
              <span className="text-lg font-bold text-white">
                {t.brand.name}
                <span className="text-brand-300"> {t.brand.suffix}</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              {t.footer.tagline}
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-brand-400 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.quickLinks}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.solutions}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {offerings.slice(0, 5).map((item) => (
                <li key={item.title}>
                  <Link
                    href="/cozumler"
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.contact}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <PhoneIcon className="h-4 w-4 shrink-0 text-brand-300" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.emailHref}
                  className="flex items-center gap-2.5 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <MailIcon className="h-4 w-4 shrink-0 text-brand-300" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex gap-2.5 text-sm text-slate-400">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <span className="leading-relaxed">{t.contact.addressValue}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-1.5 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          <span>{t.company.legalName}</span>
          <span>
            © {year} {t.brand.name}. {t.footer.rights}
          </span>
        </div>
      </Container>
    </footer>
  );
}
