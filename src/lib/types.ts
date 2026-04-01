export type ImageTone = "champagne" | "blush" | "taupe" | "mocha" | "pearl";

export type MediaAspect = "hero" | "portrait" | "landscape" | "square";

export interface NavItem {
  label: string;
  href: string;
}

export interface TrustMetric {
  value: string;
  label: string;
}

export interface Service {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  duration: string;
  priceFrom: string;
  highlight: string;
  imageTone: ImageTone;
}

export interface Specialist {
  slug: string;
  name: string;
  role: string;
  experience: string;
  quote: string;
  specialties: string[];
  imageTone: ImageTone;
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  result: string;
  quote: string;
  rating: number;
}

export interface GalleryItem {
  slug: string;
  title: string;
  service: string;
  imageTone: ImageTone;
  aspect: Extract<MediaAspect, "portrait" | "landscape" | "square">;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  imageTone: ImageTone;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingSnippet {
  title: string;
  price: string;
  note: string;
}

export interface StudioInfo {
  name: string;
  shortName: string;
  tagline: string;
  city: string;
  phone: string;
  email: string;
  addressLines: string[];
  socialLinks: Array<{
    label: string;
    href: string;
  }>;
  hours: Array<{
    day: string;
    value: string;
  }>;
}
