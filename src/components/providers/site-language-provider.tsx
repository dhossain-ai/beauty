"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  defaultLocale,
  getNavigation,
  getSiteContent,
  isLocale,
  type SiteContent,
} from "@/data/site";
import type { Locale, NavItem, StudioInfo } from "@/lib/types";

const STORAGE_KEY = "beauty-site-language";
const STORAGE_EVENT = "beauty-site-language-change";

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

function subscribe(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const handleChange = () => onStoreChange();

  window.addEventListener("storage", handleChange);
  window.addEventListener(STORAGE_EVENT, handleChange);

  return () => {
    window.removeEventListener("storage", handleChange);
    window.removeEventListener(STORAGE_EVENT, handleChange);
  };
}

function getLocaleSnapshot() {
  if (typeof window === "undefined") {
    return defaultLocale;
  }

  const storedLocale = window.localStorage.getItem(STORAGE_KEY);

  return storedLocale && isLocale(storedLocale) ? storedLocale : defaultLocale;
}

export function SiteLanguageProvider({
  children,
}: SiteLanguageProviderProps) {
  const locale = useSyncExternalStore(
    subscribe,
    getLocaleSnapshot,
    () => defaultLocale,
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function setLocale(nextLocale: Locale) {
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
    window.dispatchEvent(new Event(STORAGE_EVENT));
  }

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
