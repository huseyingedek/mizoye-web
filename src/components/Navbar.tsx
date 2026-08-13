"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { navItems } from "@/lib/site";
import Container from "./Container";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";
import { ArrowRightIcon } from "./Icons";

export default function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-slate-200 bg-white/80 backdrop-blur-md"
          : "border-transparent bg-white/60 backdrop-blur-sm"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center" aria-label="Mizoye">
          <Logo className="h-12 w-auto sm:h-[52px]" />
        </Link>

        {/* Masaüstü menü */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-brand-700"
                    : "text-slate-600 hover:text-brand-700"
                }`}
              >
                {t.nav[item.key]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* Dil seçici (bayraklı) */}
          <LanguageSwitcher />

          <Link
            href="/iletisim"
            className="hidden items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 sm:inline-flex"
          >
            {t.nav.cta}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>

          {/* Mobil menü butonu */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobil menü paneli */}
      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? "bg-brand-50 text-brand-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {t.nav[item.key]}
                </Link>
              );
            })}
            <Link
              href="/iletisim"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white"
            >
              {t.nav.cta}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
