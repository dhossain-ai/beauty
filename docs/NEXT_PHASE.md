# NEXT_PHASE

## Phase 3 — Rich Visual Content and Editorial Polish

## Goal
Build the final core content areas focused on rich media: the Gallery Index, the Journal Archive, and the Journal Detail pages. This completes the full marketing funnel of the studio concept.

## Scope
Continue using hardcoded data.
Build visually engaging layout structures for images and editorial text.

## Tasks
1. Build Gallery Index
   - `app/gallery/page.tsx`
   - explore a layout system (masonry, elegant grid) that can be filtered loosely by service type if needed
   - implement high-end image modals or simple full-screen focus states

2. Build Journal Archive
   - `app/journal/page.tsx`
   - grid of `BlogCard` components 
   - feature area for the newest or most important post

3. Build Journal Detail layout
   - `app/journal/[slug]/page.tsx`
   - elegant editorial reading experience
   - support for text, blockquotes, and embedded imagery
   - focus on large typography and whitespace

## Acceptance Criteria
- Gallery visually proves the studio's high quality
- Journal pages feel like a premium lifestyle magazine, not a standard blog
- Layout gracefully degrades on mobile devices
- Full project structure is finally connected and navigable

## Do Not Do
- no CMS integration
- no backend wiring
- stay within the existing token system

