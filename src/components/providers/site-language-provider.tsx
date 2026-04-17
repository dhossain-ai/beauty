"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  getNavigation,
  getSiteContent,
  type SiteContent,
} from "@/data/site";
import type { Locale, NavItem, StudioInfo } from "@/lib/types";

const STORAGE_KEY = "beauty-site-language";

interface SiteLanguageContextValue {
  locale: Locale;
  navigation: NavItem[];
  setLocale: (locale: Locale) => void;
  siteContent: SiteContent;
  studioInfo: StudioInfo;
}

const SiteLanguageContext = createContext<SiteLanguageContextValue | null>(null);

interface SiteLanguageProviderProps {
  children: ReactNode;
}

export function SiteLanguageProvider({
  children,
}: SiteLanguageProviderProps) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(() => {
    const siteContent = getSiteContent(locale);

    return {
      locale,
      navigation: getNavigation(locale),
      setLocale,
      siteContent,
      studioInfo: siteContent.studioInfo,
    };
  }, [locale]);

  return (
    <SiteLanguageContext.Provider value={value}>
      {children}
    </SiteLanguageContext.Provider>
  );
}

export function useSiteLanguage() {
  const context = useContext(SiteLanguageContext);

  if (!context) {
    throw new Error("useSiteLanguage must be used within SiteLanguageProvider");
  }

  return context;
}
