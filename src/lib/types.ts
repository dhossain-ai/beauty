export type ImageTone = "champagne" | "blush" | "taupe" | "mocha" | "pearl";

export type MediaAspect = "hero" | "portrait" | "landscape" | "square";

export interface MediaImage {
  src: string;
  alt: string;
  position?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TrustMetric {
  value: string;
  label: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
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
  image?: MediaImage;
  // Detail page additions
  overview?: string;
  benefits?: string[];
  process?: ServiceProcessStep[];
  recommendedSpecialists?: string[]; // specialist slugs
}

export interface Specialist {
  slug: string;
  name: string;
  role: string;
  experience: string;
  quote: string;
  specialties: string[];
  imageTone: ImageTone;
  image?: MediaImage;
  // Detail page additions
  bio?: string;
  signatureServices?: string[]; // service slugs
  recentWorkImages?: Array<{
    title: string;
    aspect: MediaAspect;
    tone: ImageTone;
    image?: MediaImage;
  }>;
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
  image?: MediaImage;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  imageTone: ImageTone;
  image?: MediaImage;
  // Detail page additions
  content?: string;
  contentBlocks?: Array<{
    type: "paragraph" | "quote" | "h2" | "h3" | "ul";
    value: string;
    items?: string[];
  }>;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface PricingPackage {
  title: string;
  description: string;
  price: string;
  items: string[];
  isPopular?: boolean;
}

export interface PricingCategory {
  title: string;
  description: string;
  packages: PricingPackage[];
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
