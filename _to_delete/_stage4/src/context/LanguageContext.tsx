"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { translations, type Lang, type Translation } from "@/lib/translations";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "mizoye-lang";

function isLang(value: string | null): value is Lang {
  return value === "tr" || value === "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");

  // Kullanıcının önceki dil tercihini yükle (yalnızca istemcide).
  // Sunucu her zaman "tr" render eder; hydration uyumsuzluğunu önlemek için
  // tercih, bileşen bağlandıktan sonra tek seferlik olarak uygulanır.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isLang(stored)) {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- kalıcı tercihi mount sonrası uygula (hydration güvenli)
        setLangState(stored);
      }
    } catch {
      // localStorage erişilemezse varsayılan dil kullanılır.
    }
  }, []);

  // Seçilen dili <html lang> özniteliğine ve depolamaya yansıt.
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Sessizce geç.
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggleLang = useCallback(
    () => setLangState((prev) => (prev === "tr" ? "en" : "tr")),
    [],
  );

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggleLang, t: translations[lang] }),
    [lang, setLang, toggleLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage, LanguageProvider içinde kullanılmalıdır.");
  }
  return context;
}
