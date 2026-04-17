import type { Locale, NavItem, StudioInfo, TrustMetric } from "@/lib/types";

type NavigationKey =
  | "home"
  | "services"
  | "specialists"
  | "gallery"
  | "journal"
  | "about"
  | "pricing"
  | "faq"
  | "contact";

export interface SiteContent {
  common: {
    languageSwitcher: string;
    readMore: string;
  };
  cta: {
    book: string;
    footerBook: string;
    footerJournal: string;
    exploreServices: string;
    startConsultation: string;
  };
  footer: {
    contactHeading: string;
    copyright: string;
    description: string;
    hoursHeading: string;
    navigationHeading: string;
  };
  header: {
    brandPrefix: string;
    mobileNavigationLabel: string;
    navigationToggleLabel: string;
  };
  navigationLabels: Record<NavigationKey, string>;
  seo: {
    description: string;
    title: string;
  };
  studioInfo: StudioInfo;
}

export const defaultLocale: Locale = "lt";

export const localeOptions: Array<{ code: Locale; label: string }> = [
  { code: "lt", label: "LT" },
  { code: "en", label: "EN" },
];

const navigationItems: Array<{ href: string; key: NavigationKey }> = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "specialists", href: "/specialists" },
  { key: "gallery", href: "/gallery" },
  { key: "journal", href: "/journal" },
  { key: "about", href: "/about" },
  { key: "pricing", href: "/pricing" },
  { key: "faq", href: "/faq" },
  { key: "contact", href: "/contact" },
];

const sharedBusinessDetails = {
  addressLines: ["Gedimino pr. 38", "Vilnius, LT-01110"],
  email: "info@lauryta.lt",
  name: "Grožio studija Lauryta",
  phone: "+370 612 48 820",
  shortName: "Lauryta",
  socialLinks: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "TikTok", href: "https://tiktok.com" },
  ],
} satisfies Omit<StudioInfo, "city" | "hours" | "tagline">;

const siteContent: Record<Locale, SiteContent> = {
  lt: {
    common: {
      languageSwitcher: "Kalba",
      readMore: "Skaityti daugiau",
    },
    cta: {
      book: "Registruotis",
      footerBook: "Rezervuoti laiką",
      footerJournal: "Skaityti daugiau",
      exploreServices: "Peržiūrėti paslaugas",
      startConsultation: "Pradėti konsultaciją",
    },
    footer: {
      contactHeading: "Kontaktai",
      copyright: "© 2026 Grožio studija Lauryta. Rami grožio priežiūra Vilniuje.",
      description:
        "Švelnios prabangos studija Vilniuje, kur veido, antakių ir blakstienų procedūros planuojamos ramiai, aiškiai ir pagal jūsų poreikius.",
      hoursHeading: "Darbo laikas",
      navigationHeading: "Naršyti",
    },
    header: {
      brandPrefix: "Grožio studija",
      mobileNavigationLabel: "Navigacija",
      navigationToggleLabel: "Atverti navigaciją",
    },
    navigationLabels: {
      about: "Apie",
      contact: "Kontaktai",
      faq: "DUK",
      gallery: "Galerija",
      home: "Pradžia",
      journal: "Naujienos",
      pricing: "Kainos",
      services: "Paslaugos",
      specialists: "Specialistės",
    },
    seo: {
      description:
        "Grožio studija Lauryta Vilniuje: estetinės veido, antakių ir blakstienų procedūros, aiškios kainos, specialistės ir patogus registracijos kelias.",
      title: "Grožio studija Lauryta | Estetinės grožio procedūros Vilniuje",
    },
    studioInfo: {
      ...sharedBusinessDetails,
      city: "Vilnius, Lietuva",
      hours: [
        { day: "Pirmadienis - Penktadienis", value: "10:00 - 19:00" },
        { day: "Šeštadienis", value: "09:00 - 15:00" },
        { day: "Sekmadienis", value: "Uždaryta" },
      ],
      tagline:
        "Švelnios prabangos grožio ritualai, sukurti ramiam ir užtikrintam apsilankymui.",
    },
  },
  en: {
    common: {
      languageSwitcher: "Language",
      readMore: "Read more",
    },
    cta: {
      book: "Book",
      footerBook: "Book a visit",
      footerJournal: "Read more",
      exploreServices: "Explore services",
      startConsultation: "Start a consultation",
    },
    footer: {
      contactHeading: "Contact",
      copyright: "© 2026 Grožio studija Lauryta. Calm beauty care in Vilnius.",
      description:
        "A soft luxury beauty studio in Vilnius for calm facial, brow, and lash appointments shaped around real client needs.",
      hoursHeading: "Hours",
      navigationHeading: "Navigate",
    },
    header: {
      brandPrefix: "Grožio studija",
      mobileNavigationLabel: "Navigation",
      navigationToggleLabel: "Toggle navigation",
    },
    navigationLabels: {
      about: "About",
      contact: "Contact",
      faq: "FAQ",
      gallery: "Gallery",
      home: "Home",
      journal: "Journal",
      pricing: "Pricing",
      services: "Services",
      specialists: "Specialists",
    },
    seo: {
      description:
        "Grožio studija Lauryta in Vilnius for refined facial, brow, and lash appointments, specialist care, transparent pricing, and direct booking.",
      title: "Grožio studija Lauryta | Beauty Studio in Vilnius",
    },
    studioInfo: {
      ...sharedBusinessDetails,
      city: "Vilnius, Lithuania",
      hours: [
        { day: "Monday - Friday", value: "10:00 - 19:00" },
        { day: "Saturday", value: "09:00 - 15:00" },
        { day: "Sunday", value: "Closed" },
      ],
      tagline:
        "Soft luxury beauty rituals designed for calm, polished appointments.",
    },
  },
};

export function isLocale(value: string): value is Locale {
  return localeOptions.some((option) => option.code === value);
}

export function getSiteContent(locale: Locale) {
  return siteContent[locale];
}

export function getNavigation(locale: Locale): NavItem[] {
  const labels = siteContent[locale].navigationLabels;

  return navigationItems.map((item) => ({
    href: item.href,
    label: labels[item.key],
  }));
}

export const navigation: NavItem[] = getNavigation(defaultLocale);

export const trustMetrics: TrustMetric[] = [
  { value: "4.9/5", label: "average studio rating" },
  { value: "900+", label: "premium appointments delivered" },
  { value: "6", label: "signature rituals curated in-house" },
];

export const philosophyPillars = [
  "Refined treatments with calm, one-to-one care.",
  "Natural-looking results shaped around your features.",
  "A soft luxury atmosphere designed to feel restorative.",
];

export const studioInfo: StudioInfo = getSiteContent(defaultLocale).studioInfo;
