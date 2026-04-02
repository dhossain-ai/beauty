import type { NavItem, StudioInfo, TrustMetric } from "@/lib/types";

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Specialists", href: "/specialists" },
  { label: "Gallery", href: "/gallery" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

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

export const studioInfo: StudioInfo = {
  name: "Maison de Lueur Beauty Studio",
  shortName: "Maison de Lueur",
  tagline: "Soft luxury beauty rituals for modern women.",
  city: "Vilnius, Lithuania",
  phone: "+370 612 48 820",
  email: "hello@maisondelueur.com",
  addressLines: ["Gedimino Ave 38", "Vilnius, LT-01110"],
  socialLinks: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
    { label: "WhatsApp", href: "https://whatsapp.com" },
  ],
  hours: [
    { day: "Tue - Thu", value: "10:00 - 19:00" },
    { day: "Friday", value: "10:00 - 18:00" },
    { day: "Saturday", value: "09:00 - 15:00" },
    { day: "Sunday - Monday", value: "Closed" },
  ],
};
