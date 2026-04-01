import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
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
  title: "Maison de Lueur | Soft Luxury Beauty Studio",
  description:
    "A premium soft luxury beauty studio concept with signature treatments, refined specialists, and an editorial frontend experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} scroll-smooth`}
    >
      <body className="min-h-dvh bg-shell font-sans text-ink antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
