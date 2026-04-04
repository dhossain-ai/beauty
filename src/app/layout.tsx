import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import { absoluteUrl, siteDescription, siteName, siteTitle, siteUrl } from "@/lib/seo";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "beauty studio website",
    "soft luxury salon",
    "beauty salon concept",
    "premium beauty website",
    "frontend portfolio project",
    "beauty business website",
  ],
  category: "beauty",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName,
    type: "website",
    images: [
      {
        url: absoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: "Maison de Lueur soft luxury beauty studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [absoluteUrl("/twitter-image")],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${headingFont.variable} ${bodyFont.variable} scroll-smooth`}
    >
      <body className="min-h-dvh bg-shell font-sans text-ink antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
