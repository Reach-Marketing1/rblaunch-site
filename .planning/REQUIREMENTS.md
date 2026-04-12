# Requirements: RBLaunch Website v1

**Project:** RBLaunch Marketing Agency Landing Page
**Version:** 1.0 (Launch)
**Last updated:** 2026-04-12

---

## v1 Requirements

### Brand & Design

- [ ] **BRAND-01**: Site uses responsive mobile-first layout working correctly on phones (375px), tablets (768px), and desktop (1280px+)
- [ ] **BRAND-02**: All 3 logo variants are used in correct contexts (horizontal dark on dark backgrounds, horizontal light on light, square icon for favicons/social)
- [ ] **BRAND-03**: Brand token system (colors, fonts, spacing) defined once in `globals.css` and consumed via Tailwind utilities across all components

### Landing Page — Sections

- [ ] **PAGE-01**: Sticky header with RBLaunch logo and "Book a Free Call" CTA button visible at all scroll positions
- [ ] **PAGE-02**: Hero section with outcome-focused headline targeting small businesses, sub-headline, and primary CTA button above the fold
- [ ] **PAGE-03**: Proof strip with credibility signals (Google Ads / Meta Blueprint badges or equivalent) and risk-reversal micro-copy ("Free call — no commitment")
- [ ] **PAGE-04**: Services section with two cards: Paid Ads (Meta/Google) and SEO / Organic Growth — outcome-led format
- [ ] **PAGE-05**: How It Works section with 3-step process: Book Call → Strategy Session → Launch & Optimize
- [ ] **PAGE-06**: About / Founder section with photo, name, title, and origin story that establishes domain expertise
- [ ] **PAGE-07**: FAQ section with 5–7 questions addressing small business objections (cost, timeline, account ownership, results)
- [ ] **PAGE-08**: Booking section with Cal.com inline calendar embed at `#book`
- [ ] **PAGE-09**: Footer with logo, email, social links (Instagram, Facebook, TikTok, LinkedIn), and privacy/cookie notice

### Booking & Conversion

- [ ] **BOOK-01**: All CTA buttons throughout the page trigger Cal.com booking popup via `data-cal-link` attribute
- [ ] **BOOK-02**: Dedicated `/book` route with standalone Cal.com embed for ad campaign UTM links and social media bios
- [ ] **BOOK-03**: Booking completion fires conversion events to all 4 ad pixels via `Cal("on", { action: "bookingSuccessful" })` callback

### Analytics & Tracking

- [ ] **TRACK-01**: Google Tag Manager script loaded in `app/layout.tsx` via `@next/third-parties/google` with `strategy="afterInteractive"`
- [ ] **TRACK-02**: GA4, Meta Pixel, TikTok Pixel, and LinkedIn Insight Tag configured as tags inside GTM (not as hardcoded scripts)
- [ ] **TRACK-03**: Pixel loading gated to production environment only (`NEXT_PUBLIC_VERCEL_ENV === 'production'`)

### SEO & Metadata

- [ ] **SEO-01**: Page title, meta description, and canonical URL set via Next.js Metadata API
- [ ] **SEO-02**: Open Graph image generated at 1200x630px via `app/opengraph-image.tsx` for social sharing previews
- [ ] **SEO-03**: `sitemap.xml` and `robots.txt` auto-generated via native `app/sitemap.ts` and `app/robots.ts`

### Social Media Assets

- [ ] **SOCIAL-01**: Platform bio copy written for all 4 accounts (Instagram, Facebook, TikTok, LinkedIn) — consistent messaging, platform-appropriate length
- [ ] **SOCIAL-02**: Ad creative templates in 3 formats: Story 9:16, Square 1:1, Landscape 16:9 — branded with logo, colors, headline slot, CTA button

### Deployment

- [ ] **DEPLOY-01**: Site deployed to Vercel with a live preview URL
- [ ] **DEPLOY-02**: Custom domain connected to Vercel deployment with SSL

---

## v2 Requirements (deferred)

- Testimonials / case studies section — no clients yet; add when first results land
- Blog / content section — no content to populate at launch
- Cookie consent management platform — deferred (US-first launch, add before EU ad spend)
- Contact form — CTA focus is on booking; form splits conversion intent
- Lighthouse performance audit pass (≥90) — deferred; optimize after live if needed
- Cover/banner images for social — deferred; profile + templates sufficient for launch
- Profile photos for social platforms — deferred; square logo icon used directly

---

## Out of Scope

- Client portal / login — no existing clients
- E-commerce / payment processing — services sold via call, not self-serve
- Multi-page site structure — single landing page + /book route sufficient for launch
- Live chat — requires staffing
- Pricing page — handled via FAQ copy and strategy call

---

## Traceability

| REQ-ID | Phase | Status |
|--------|-------|--------|
| BRAND-01 | — | Pending |
| BRAND-02 | — | Pending |
| BRAND-03 | — | Pending |
| PAGE-01 | — | Pending |
| PAGE-02 | — | Pending |
| PAGE-03 | — | Pending |
| PAGE-04 | — | Pending |
| PAGE-05 | — | Pending |
| PAGE-06 | — | Pending |
| PAGE-07 | — | Pending |
| PAGE-08 | — | Pending |
| PAGE-09 | — | Pending |
| BOOK-01 | — | Pending |
| BOOK-02 | — | Pending |
| BOOK-03 | — | Pending |
| TRACK-01 | — | Pending |
| TRACK-02 | — | Pending |
| TRACK-03 | — | Pending |
| SEO-01 | — | Pending |
| SEO-02 | — | Pending |
| SEO-03 | — | Pending |
| SOCIAL-01 | — | Pending |
| SOCIAL-02 | — | Pending |
| DEPLOY-01 | — | Pending |
| DEPLOY-02 | — | Pending |
