import { defaultLocale, getSiteContent } from "@/data/site";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

const defaultSiteContent = getSiteContent(defaultLocale);

export const siteName = defaultSiteContent.studioInfo.name;

export const siteTitle = defaultSiteContent.seo.title;

export const siteDescription = defaultSiteContent.seo.description;

export function pageTitle(title: string) {
  return `${title} | ${siteName}`;
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
