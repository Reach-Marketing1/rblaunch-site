# Research Summary: RBLaunch Landing Page

**Synthesized from:** STACK.md, FEATURES.md, ARCHITECTURE.md, PITFALLS.md
**Date:** 2026-04-12

---

## Executive Summary

RBLaunch is a greenfield marketing agency landing page with one conversion goal: get small business owners to book a free 30-minute strategy call. The central design challenge is credibility without existing client proof — solvable through founder credentials, specificity of copy, and risk-reversal framing on the CTA.

The stack is well-validated with no meaningful alternatives. The one non-obvious choice: the Cal.com React npm package is broken on Next.js 15 + React 19, so the vanilla JS embed is mandatory. This is a clean 2–3 day build if architecture constraints are followed.

---

## Stack Recommendations

### Use These

| Technology | Version | Why |
|------------|---------|-----|
| Next.js | 15.x | App Router maturity, RSC performance, Vercel native |
| TypeScript | 5.x | Greenfield — no reason to skip |
| Tailwind CSS | **v4** | CSS-first `@theme` config — do not use v3 on new projects |
| motion | **12.x** | Renamed from `framer-motion`. Import from `motion/react`. |
| next/font/google | built-in | Self-hosts Barlow Condensed + Inter — zero FOUT |
| @next/third-parties | built-in | GTM via `GoogleTagManager` component |
| Cal.com | **Vanilla JS embed only** | React package broken on Next.js 15/React 19 |
| Vercel | Free Hobby | Custom domains + SSL on free tier |

### Do NOT Install

| Package | Reason |
|---------|--------|
| `@calcom/embed-react` | Broken on Next.js 15 + React 19 |
| `framer-motion` | Replaced by `motion` package |
| `next-seo` | Superseded by Next.js 15 native Metadata API |
| Individual pixel scripts | Use GTM container instead |
| Google Fonts via `@import` or `<link>` | Use `next/font/google` only |

---

## Must-Have Features (Table Stakes)

### Page Sections (in order)

1. **Sticky Header** — Logo + "Book a Free Call" CTA accessible throughout scroll
2. **Hero** — Outcome-focused headline + CTA above the fold. No video background.
3. **Social Proof Strip** — Google Ads / Meta Blueprint badges + risk-reversal micro-copy ("Free call — no commitment"). Substitutes for missing client testimonials.
4. **Services** — Two cards: Paid Ads + SEO. Outcome-led: "[Result] through [Mechanism]".
5. **How It Works** — 3 steps: Book → Strategy → Launch. Step 1 IS the CTA action.
6. **About / Founder** — Photo + origin story. Primary trust mechanism for a new agency.
7. **FAQ** — 5–7 questions addressing small business objections (cost, timeline, account ownership).
8. **Booking Section** — Cal.com inline embed at `#book`.
9. **Footer** — Email + social links + cookie/privacy notice.

### Defer to v2+
Blog, testimonials carousel, contact form, live chat, pricing detail pages.

---

## Architecture Decisions

### Folder Structure
```
src/
├── app/
│   ├── layout.tsx          ← GTM + CalEmbed scripts live here
│   ├── globals.css         ← Tailwind v4 @theme brand tokens
│   ├── page.tsx            ← Section sequencer (server component)
│   ├── sitemap.ts          ← Native (no next-sitemap package)
│   ├── robots.ts
│   ├── opengraph-image.tsx ← next/og at 1200x630
│   └── book/page.tsx       ← /book route for ad campaign links
├── components/
│   ├── layout/             ← Header, Footer, StickyHeader
│   ├── sections/           ← One file per page section
│   ├── ui/                 ← Button, ServiceCard, StepCard, FAQItem
│   ├── motion/             ← FadeUp, StaggerChildren, ScrollReveal
│   ├── analytics/          ← GTM wrapper
│   └── booking/            ← CalEmbed vanilla script loader
└── lib/
    ├── fonts.ts
    └── metadata.ts
```

### Server vs Client
Default is server. 80–90% of each section is zero-JS. Only add `'use client'` for: StickyHeader (scroll state), FAQ (accordion), BookingSection (Cal.com window API), motion wrappers.

### Pixel Loading
One GTM script via `@next/third-parties/google` in `app/layout.tsx`. All 4 pixels (GA4, Meta, TikTok, LinkedIn) configured inside GTM — no hardcoded pixel scripts.

### Cal.com Pattern
- CTAs: `data-cal-link="rblaunch/strategy-call"` attribute on any button (works in server components)
- Booking section: inline embed div with `minHeight: 700px`
- Script: one `<CalEmbed />` in `app/layout.tsx` with `strategy="lazyOnload"`
- `/book` route: standalone page for ad campaign UTM links

---

## Critical Pitfalls

1. **Animate the hero headline → kills LCP.** Never use `initial={{ opacity: 0 }}` on the primary heading. Only animate below-fold elements with `whileInView`.
2. **Use `@calcom/embed-react` → build breaks.** Confirmed broken on React 19. Use vanilla JS embed only.
3. **Fire pixel conversions on calendar open → wrong data.** Use `Cal("on", { action: "bookingSuccessful" })` callback to fire all 4 pixel conversions.
4. **Load 4 pixel scripts separately → fragile.** Use GTM as the single container.
5. **Pixels fire on Vercel preview URLs → pollutes audiences.** Gate on `NEXT_PUBLIC_VERCEL_ENV === 'production'`.

**Also:** `next/font/google` only for fonts. LinkedIn domain verification required before running LinkedIn ads. Cookie consent layer before going live.

---

## Build Sequence

1. Bootstrap Next.js 15 + Tailwind v4, brand tokens in `globals.css`
2. Fonts (`lib/fonts.ts`), metadata factory, base UI primitives
3. Motion wrappers, CalEmbed, GTM wrapper
4. Root `app/layout.tsx` (wires fonts, GTM, CalEmbed)
5. Header + Footer + StickyHeader
6. Section UI primitives (ServiceCard, StepCard, FAQItem)
7. All page sections (Hero → Footer)
8. `app/page.tsx` + `app/book/page.tsx`
9. OG image, sitemap, robots
10. GTM pixel config, LinkedIn domain verify, Lighthouse audit, custom domain

---

## Open Dependencies (needed during build)

- Founder photo — needed for About section
- Cal.com username/event slug — needed before BookingSection wires up
- GTM container ID — needed before pixels go live
- Google Ads / Meta Blueprint certification badges — if not yet earned, ProofStrip needs fallback
