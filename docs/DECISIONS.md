# DECISIONS

## Decision Log

### D1
Project direction is a women-focused beauty salon / beauty studio website, not another barber site.

### D2
The chosen creative direction is Soft Luxury.

### D3
This version is frontend-only for speed and portfolio value.

### D4
Content will be hardcoded, not managed through CMS or admin.

### D5
Mobile responsiveness is mandatory from the beginning.

### D6
The website should be image-led, animation-aware, and visually rich, but still clean and premium.

### D7
The project should look sellable to real local beauty businesses, not only like a design exercise.

### D8
The homepage is the highest-priority page and should receive the strongest design effort.

### D9
Interactive elements should be limited to a few strong pieces, such as:
- signature services carousel
- before/after section
- testimonial slider
- swipe-friendly mobile cards

### D10
Avoid feature creep. No backend, auth, admin, CRM, analytics dashboard, or inventory system in this version.

### D11
The final aesthetic should avoid:
- childish pink styling
- generic cheap salon templates
- over-minimal empty layouts
- overly medical clinic styling
- dark glam as the main direction

### D12
The site structure should remain easy to convert into a future CMS/admin-backed product if needed.

### D13
The implementation foundation will use Next.js App Router with TypeScript and Tailwind CSS.

### D14
Phase 0 establishes a tokenized soft luxury design system with Cormorant Garamond for headings and Manrope for body and UI text.

### D15
Until real photography is added, imagery will use reusable editorial placeholder media frames so layouts can stay image-led without locking the project into temporary assets.

### D16
Phase 1: Adopted `embla-carousel-react` for interactive sections (Services, Testimonials) to keep performance high and allow headless styling that matches the soft luxury feel perfectly.

### D17
Phase 1: Added a `ComparisonSlider` component for Before/After treatment visual proof, prioritizing an interactive results-led experience within the homepage.

### D18
Phase 2: Combined FAQ with the Pricing Page structure instead of creating a standalone sparse FAQ page, ensuring that crucial commercial friction points (investment and policy questions) are handled gracefully within a single premium layout.

### D19
Phase 2: Added a dedicated, categorized FAQ page (`/faq`) to satisfy user intent and SEO needs, while maintaining the integrated FAQ snippets on the Pricing page to ensure friction reduction at the point of decision.

### D20
Phase 2: Introduced "Studio Memberships" to the pricing architecture to elevate the business model's perceived value and emphasize long-term client care over one-off transactions, in line with the "Soft Luxury" philosophy.

### D21
Phase 4: Standardized archive and utility page intros into a shared responsive pattern so the site feels more cohesive and editorial across homepage-adjacent pages without adding unnecessary new templates.

### D22
Phase 4: Replaced cross-page CTA anchors with route-safe links (`/services`, `/contact`, etc.) as the default pattern, preventing broken inner-page actions while keeping the homepage section anchors where they are explicitly needed.

### D23
Phase 4: Implemented the Journal reading experience with a custom editorial text flow in the existing global stylesheet instead of introducing an extra typography dependency, keeping scope tight while ensuring article pages still feel premium.

### D24
Phase 5: The repository presentation should carry the portfolio framing, while the live site copy should remain business-facing and believable as a real premium salon website.

### D25
Phase 5: Added environment-aware metadata helpers plus generated `robots.txt`, `sitemap.xml`, and social image routes so the project has a cleaner delivery baseline without introducing backend complexity.

### D26
Phase R1: The homepage should prioritize a stronger hero and fewer, more curated previews instead of stacking every content type at full density, so the page reads like a premium narrative rather than a long template.

### D27
Phase R1: Repetitive trust and philosophy messaging should be consolidated into fewer, higher-value sections, with stronger section contrast used to distinguish services, results, testimonials, and journal content.

### D28
Phase R1: Primary booking actions should route directly to `/contact` or `/services` instead of sending users deeper into another homepage CTA block, reducing friction and keeping conversion paths clearer.

### D29
Phase R2: The real-asset pass should use a small curated local image pack wired through the existing data model and shared media component, keeping the portfolio build stable and avoiding dependence on remote hotlinked assets.

### D30
Phase R2: Real photography should inherit the existing soft-luxury treatment through one shared `MediaFrame` pattern so overlays, crops, contrast, and responsive behavior stay consistent across hero, specialists, services, gallery, and journal content.

### D31
Phase R2A: Once real assets are in place, the homepage should favor fewer support blocks and lean more heavily on image-led cards and carousels so the page feels finished instead of over-explained.

### D32
Phase R2A: Any homepage section that does not materially improve narrative flow, such as a weak gallery preview, should be reduced or removed rather than kept for checklist completeness.

### D33
Phase R2B: Remaining asset work should use only a few supplemental local images, then redistribute them through the existing data layer to reduce visible repetition across results, specialists, services, and journal previews without redesigning layout.

### D34
Phase R2B: Once the site is largely image-led, journal content should surface real cover imagery both in the article hero and in compact homepage preview thumbnails instead of leaving secondary editorial links text-only.
