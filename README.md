# Soft Luxury Beauty Studio

Premium frontend-only beauty studio website concept designed as a portfolio-ready marketing site for a modern women-focused salon or boutique beauty business.

## Overview

Soft Luxury Beauty Studio is a high-end website concept built around the fictional brand **Maison de Lueur**. The project focuses on premium visual presentation, strong responsive execution, and a polished marketing flow that could be adapted for real-world beauty businesses such as lash studios, brow artists, facial specialists, or boutique salons.

This version is intentionally **frontend-only**. All content is hardcoded, the booking flow is presentational, and the codebase is structured to stay clean, reusable, and easy to evolve later into a CMS-backed or service-integrated build if needed.

## Highlights

- Soft luxury visual direction with serif-led editorial typography and warm neutral surfaces
- Responsive homepage with strong hero composition, trust layer, service highlights, and booking CTA flow
- Reusable archive and detail layouts for services, specialists, gallery, and journal content
- Premium interaction layer using subtle hover lift, image motion, and headless carousel components
- Static marketing content designed to feel sellable to real local beauty businesses
- Clean App Router structure with modular data files and reusable UI primitives

## Feature Summary

- Responsive marketing homepage
- Services archive and service detail pages
- Specialists archive and specialist detail pages
- Gallery page with curated visual portfolio rhythm
- Journal archive and editorial article detail pages
- Pricing and memberships page
- FAQ page
- Contact / booking request page
- Reusable header, footer, CTA blocks, cards, and media frames
- Static SEO primitives including metadata, `robots.txt`, and `sitemap.xml`

## Page Map

- `/`
- `/services`
- `/services/[slug]`
- `/specialists`
- `/specialists/[slug]`
- `/gallery`
- `/journal`
- `/journal/[slug]`
- `/about`
- `/pricing`
- `/faq`
- `/contact`

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- `embla-carousel-react`
- `lucide-react`

## Local Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Optional for deployed metadata and sitemap URLs:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

## Project Positioning

This repository is not a backend product or booking system. It is a **premium business website concept** intended to demonstrate:

- strong frontend craft
- responsive marketing design
- reusable component thinking
- portfolio-quality visual polish
- realistic adaptation potential for beauty and wellness businesses

## Scope Notes

- No backend
- No admin
- No auth
- No database
- No CMS
- No live booking integration

## Adaptation Potential

The current structure is suitable for adaptation into:

- beauty salons
- lash studios
- brow studios
- makeup studios
- nail studios
- skin treatment studios
- premium local service businesses with image-led marketing needs
