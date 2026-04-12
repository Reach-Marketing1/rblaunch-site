# Roadmap: RBLaunch Website v1

**Project:** RBLaunch Marketing Agency Landing Page
**Milestone:** v1 Launch
**Granularity:** Standard
**Total Phases:** 6
**Requirements Mapped:** 25/25
**Last updated:** 2026-04-10

---

## Phases

- [ ] **Phase 1: Project Foundation** — Bootstrap Next.js 15, Tailwind v4 brand tokens, logo system, and font setup so every downstream phase has a consistent visual foundation
- [ ] **Phase 2: Landing Page Sections** — Build and render all nine page sections from sticky header to footer so the full single-page layout exists as a human-viewable website
- [ ] **Phase 3: Booking Integration** — Wire Cal.com popup CTAs, the standalone /book route, and the bookingSuccessful conversion callback so visitors can complete a booking end-to-end
- [ ] **Phase 4: Analytics & SEO** — Instrument GTM + all four ad pixels, write full page metadata, generate the OG image, and produce sitemap/robots.txt so the site is measurable and search-ready
- [ ] **Phase 5: Social Media Assets** — Write platform bio copy and produce branded ad creative templates so RBLaunch can launch social profiles and run its first ad campaigns immediately after go-live
- [ ] **Phase 6: Deployment** — Deploy to Vercel and connect the custom domain with SSL so the site is publicly live at the production URL

---

## Phase Details

### Phase 1: Project Foundation
**Goal**: A working Next.js 15 codebase exists with brand tokens, logo variants, and font system wired up — ready to receive page sections
**Depends on**: Nothing (first phase)
**Requirements**: BRAND-01, BRAND-02, BRAND-03
**Success Criteria** (what must be TRUE):
  1. `npm run dev` starts without errors and renders a blank page at localhost
  2. All brand color tokens (`--color-black`, `--color-white`, `--color-red`, `--color-dark-grey`, `--color-muted`) are defined once in `globals.css` and usable as Tailwind utilities
  3. Barlow Condensed and Inter load via `next/font/google` with no flash of unstyled text
  4. All three logo variants (horizontal dark, horizontal light, square icon) are importable as image assets and display correctly on both dark and light backgrounds
  5. The layout renders correctly at 375px, 768px, and 1280px viewport widths
**Plans**: TBD
**UI hint**: yes

### Phase 2: Landing Page Sections
**Goal**: All nine page sections are built and visually complete so the full landing page can be reviewed and approved as a whole
**Depends on**: Phase 1
**Requirements**: PAGE-01, PAGE-02, PAGE-03, PAGE-04, PAGE-05, PAGE-06, PAGE-07, PAGE-08, PAGE-09
**Success Criteria** (what must be TRUE):
  1. Sticky header with RBLaunch logo and "Book a Free Call" button remains visible at all scroll positions on mobile and desktop
  2. Hero section headline, sub-headline, and primary CTA button are all visible above the fold on a 375px mobile viewport without scrolling
  3. Services section shows two distinct cards — Paid Ads (Meta/Google) and SEO / Organic Growth — each with an outcome-led description
  4. How It Works, About/Founder, FAQ (with working accordion), and Booking section all render in correct page order with no layout overflow
  5. Footer displays the RBLaunch logo, email address, all four social platform links, and privacy/cookie notice text
**Plans**: TBD
**UI hint**: yes

### Phase 3: Booking Integration
**Goal**: A visitor can book a free strategy call from any CTA on the page, or from a direct /book URL, and the system correctly fires conversion events when a booking is completed
**Depends on**: Phase 2
**Requirements**: BOOK-01, BOOK-02, BOOK-03
**Success Criteria** (what must be TRUE):
  1. Clicking any "Book a Free Call" button on the landing page opens the Cal.com booking popup without a page navigation
  2. Visiting `/book` renders a standalone page with a full-height inline Cal.com calendar embed that works independently of the main landing page
  3. Completing a test booking in the Cal.com embed triggers the `bookingSuccessful` callback (verifiable via browser console log before pixels are live)
**Plans**: TBD
**UI hint**: yes

### Phase 4: Analytics & SEO
**Goal**: The site is fully instrumented for ad attribution and search visibility — GTM fires all four pixels in production, metadata is complete, and crawlers receive a proper sitemap
**Depends on**: Phase 2
**Requirements**: TRACK-01, TRACK-02, TRACK-03, SEO-01, SEO-02, SEO-03
**Success Criteria** (what must be TRUE):
  1. GTM script loads on every page in production and the GTM container ID is confirmed active in the browser's network tab
  2. GA4, Meta Pixel, TikTok Pixel, and LinkedIn Insight Tag all fire via GTM tags — zero hardcoded pixel scripts exist in the codebase
  3. On Vercel preview deployments, no pixel network requests are made (production-gate is confirmed)
  4. Browser tab shows the correct page title; sharing the URL on iMessage or Slack renders the 1200x630 OG image with RBLaunch branding
  5. `GET /sitemap.xml` and `GET /robots.txt` both return valid responses with correct content
**Plans**: TBD
**UI hint**: no

### Phase 5: Social Media Assets
**Goal**: RBLaunch has ready-to-publish bio copy for all four social platforms and a set of branded ad creative templates that can be used for the first paid campaigns immediately after launch
**Depends on**: Phase 1
**Requirements**: SOCIAL-01, SOCIAL-02
**Success Criteria** (what must be TRUE):
  1. Bio copy exists for Instagram, Facebook, TikTok, and LinkedIn — each is platform-appropriate in length, uses consistent brand messaging, and includes the booking link
  2. Ad creative templates exist in Story (9:16), Square (1:1), and Landscape (16:9) formats — each shows the RBLaunch logo, uses the brand color palette, has a headline placeholder, and has a visible CTA button
**Plans**: TBD
**UI hint**: no

### Phase 6: Deployment
**Goal**: The site is publicly live at the production domain with SSL, and Vercel deployment is confirmed working end-to-end
**Depends on**: Phase 3, Phase 4
**Requirements**: DEPLOY-01, DEPLOY-02
**Success Criteria** (what must be TRUE):
  1. The Vercel project has a live preview URL where the full landing page is accessible to anyone without authentication
  2. The custom domain resolves to the Vercel deployment over HTTPS with a valid SSL certificate and no browser security warnings
**Plans**: TBD
**UI hint**: no

---

## Progress Table

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Project Foundation | 0/? | Not started | - |
| 2. Landing Page Sections | 0/? | Not started | - |
| 3. Booking Integration | 0/? | Not started | - |
| 4. Analytics & SEO | 0/? | Not started | - |
| 5. Social Media Assets | 0/? | Not started | - |
| 6. Deployment | 0/? | Not started | - |
