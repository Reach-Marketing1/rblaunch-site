# Architecture Patterns: RBLaunch Landing Page

**Domain:** Marketing & Ads Agency — Next.js App Router single landing page
**Researched:** 2026-04-10
**Confidence:** HIGH

---

## Recommended Folder Structure

```
src/
├── app/
│   ├── layout.tsx              ← Root layout: fonts, GTM, Cal.com script, metadata
│   ├── globals.css             ← Tailwind v4 @theme tokens (colors, fonts, spacing)
│   ├── page.tsx                ← Landing page: imports and sequences all sections
│   ├── sitemap.ts              ← Native App Router sitemap (no next-sitemap package)
│   ├── robots.ts               ← Native robots.txt generation
│   ├── opengraph-image.tsx     ← Auto-generated OG image via next/og
│   └── book/
│       └── page.tsx            ← /book route: dedicated booking page (Cal.com full embed)
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          ← SERVER: logo + "Book a Call" CTA button
│   │   ├── Footer.tsx          ← SERVER: logo, email, social links, cookie notice
│   │   └── StickyHeader.tsx    ← CLIENT: scroll-aware sticky behavior + shrink animation
│   │
│   ├── sections/
│   │   ├── Hero.tsx            ← SERVER: headline, subhead, CTA button, brand image
│   │   ├── ProofStrip.tsx      ← SERVER: certification badges, platform logos, micro-copy
│   │   ├── Services.tsx        ← SERVER: two service cards, outcome-led copy
│   │   ├── HowItWorks.tsx      ← SERVER: 3-step process illustration
│   │   ├── About.tsx           ← SERVER: founder photo + story
│   │   ├── FAQ.tsx             ← CLIENT: accordion expand/collapse requires interactivity
│   │   └── BookingSection.tsx  ← CLIENT: Cal.com inline embed (vanilla JS triggers)
│   │
│   ├── ui/
│   │   ├── Button.tsx          ← Reusable CTA button (server-safe, no state)
│   │   ├── SectionHeading.tsx  ← Consistent h2/subheading pattern
│   │   ├── ServiceCard.tsx     ← Individual service card (server)
│   │   ├── StepCard.tsx        ← How-it-works step (server)
│   │   └── FAQItem.tsx         ← CLIENT: single accordion item with open/close state
│   │
│   ├── motion/
│   │   ├── FadeUp.tsx          ← CLIENT: wraps children in motion.div whileInView
│   │   ├── StaggerChildren.tsx ← CLIENT: staggered reveal for lists/cards
│   │   └── ScrollReveal.tsx    ← CLIENT: generic scroll-triggered entrance wrapper
│   │
│   ├── analytics/
│   │   └── Pixels.tsx          ← CLIENT: next/script wrappers for GTM (single script)
│   │
│   └── booking/
│       └── CalEmbed.tsx        ← CLIENT: loads Cal.com vanilla script via next/script
│
├── lib/
│   ├── metadata.ts             ← Shared metadata factory (title template, OG defaults)
│   └── fonts.ts                ← next/font/google instances (Barlow Condensed + Inter)
│
└── public/
    └── images/
        ├── logo-horizontal-light.svg
        ├── logo-horizontal-dark.svg
        ├── logo-icon.svg
        └── founder-photo.jpg
```

---

## Server vs Client Component Decision Per Section

Default: server. Add `'use client'` only when the component requires onClick/onChange handlers, browser APIs, useState/useReducer, useEffect, or libraries that use any of these.

| Component | Server or Client | Reason |
|-----------|-----------------|--------|
| app/layout.tsx | SERVER | Root layout — client components (GTM, CalEmbed) are leaf nodes inside |
| app/page.tsx | SERVER | Section sequencer — no interactivity |
| Header.tsx | SERVER | Logo + link; wraps StickyHeader as client island |
| StickyHeader.tsx | CLIENT | Needs useEffect + useState for scroll position tracking |
| Footer.tsx | SERVER | Pure markup |
| Hero.tsx | SERVER | Headline, image, CTA button are pure markup. FadeUp wrapper is the client island. |
| ProofStrip.tsx | SERVER | Static images and text |
| Services.tsx | SERVER | Two static cards |
| HowItWorks.tsx | SERVER | Static 3-step content |
| About.tsx | SERVER | Founder photo + story — pure markup |
| FAQ.tsx | CLIENT | Accordion open/close requires useState per item |
| FAQItem.tsx | CLIENT | Holds isOpen state |
| BookingSection.tsx | CLIENT | Cal.com vanilla JS interacts with window |
| FadeUp.tsx | CLIENT | Uses motion/react |
| StaggerChildren.tsx | CLIENT | Uses motion/react |
| ScrollReveal.tsx | CLIENT | Uses motion/react |
| Pixels.tsx | CLIENT | next/script with afterInteractive must be client |
| CalEmbed.tsx | CLIENT | next/script with lazyOnload must be client |
| Button.tsx | SERVER | Pure button or a — accepts data-cal-link props passively |
| ServiceCard.tsx | SERVER | Static card layout |
| StepCard.tsx | SERVER | Static step layout |

**Rule:** Push `'use client'` as far down the tree as possible. 80–90% of each section renders as zero-JS server HTML.

---

## Pixel / Analytics Loading Strategy

**One GTM script, not four pixel scripts.**

Load GTM via `@next/third-parties/google` in `app/layout.tsx`. Configure GA4, Meta Pixel, TikTok Pixel, and LinkedIn Insight Tag as tags inside GTM — never as hardcoded separate scripts.

```tsx
// app/layout.tsx
import { GoogleTagManager } from '@next/third-parties/google'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <GoogleTagManager gtmId="GTM-XXXXXXX" />
        <CalEmbed />
      </body>
    </html>
  )
}
```

`GoogleTagManager` internally uses `strategy="afterInteractive"` — fires after hydration, not during render.

### next/script Strategy Reference

| Strategy | When it loads | Use for |
|----------|--------------|---------|
| beforeInteractive | Before hydration, blocks page | Critical polyfills only — NEVER for pixels |
| afterInteractive | After hydration | Analytics pixels via GTM |
| lazyOnload | After all resources, idle time | Cal.com embed script |

### Cal.com Script Loader

```tsx
// components/booking/CalEmbed.tsx
'use client'
import Script from 'next/script'

export function CalEmbed() {
  return (
    <Script
      src="https://app.cal.com/embed/embed.js"
      strategy="lazyOnload"
    />
  )
}
```

Place `<CalEmbed />` once in `app/layout.tsx`. The vanilla script registers `window.Cal` and activates any button with `data-cal-link` automatically — no per-component script tag.

### Core Web Vitals Protection

| Concern | Risk | Mitigation |
|---------|------|-----------|
| LCP delay from pixel scripts | HIGH if eager | afterInteractive / GTM defers all pixels past hydration |
| CLS from Cal.com inline embed | MEDIUM | Fixed-height container: `min-h-[700px]` placeholder |
| LCP from hero image | LOW | next/image with `priority` prop on above-fold images |
| Font layout shift (FOUT) | NONE | next/font/google eliminates this via self-hosted fonts |
| Animation jank | LOW | Motion uses only transform/opacity — hardware accelerated |

---

## Cal.com Embed Architecture

### Popup for CTAs, Inline for Booking Section

Primary CTAs (header, hero, how-it-works): popup via `data-cal-link` attribute.

```tsx
// Works in any server or client component
<button data-cal-link="rblaunch/strategy-call">
  Book Your Free Strategy Call
</button>
```

No `onClick`, no state, no client component needed.

Booking Section: inline embed.

```tsx
// components/sections/BookingSection.tsx
'use client'

export function BookingSection() {
  return (
    <section id="book" className="py-24 bg-black">
      <h2 className="text-white text-center mb-8">
        Book Your Free Strategy Call
      </h2>
      <div
        data-cal-link="rblaunch/strategy-call"
        data-cal-config='{"layout":"month_view"}'
        style={{ minHeight: '700px' }}
        className="w-full max-w-2xl mx-auto"
      />
    </section>
  )
}
```

### /book Route

`app/book/page.tsx` renders `BookingSection` standalone for:
- Direct ad campaign links (UTM tracking to a clean booking page)
- Email signature links
- Social media bio links

---

## next/image Strategy

```tsx
// Logo in header (dark background)
<Image
  src="/images/logo-horizontal-light.svg"
  alt="RBLaunch"
  width={160}
  height={40}
  priority
/>
```

OG image via built-in next/og:

```tsx
// app/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    <div style={{ background: '#000000', width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', padding: '60px' }}>
      <div style={{ color: '#FFFFFF', fontSize: 72, fontWeight: 900 }}>
        RBLaunch
      </div>
      <div style={{ color: '#E8232A', fontSize: 32, marginTop: 24 }}>
        More Customers. From Paid Ads & SEO.
      </div>
    </div>
  )
}
```

---

## Sitemap and Robots — Native App Router

No `next-sitemap` package needed.

```ts
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://rblaunch.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://rblaunch.com/book', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
```

```ts
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://rblaunch.com/sitemap.xml',
  }
}
```

---

## Build Order: Component Dependencies

### Tier 0 — Foundation (no dependencies)
1. `app/globals.css` — Tailwind v4 @theme with brand tokens
2. `lib/fonts.ts` — Barlow Condensed + Inter font instances
3. `lib/metadata.ts` — Default metadata object
4. `components/ui/Button.tsx`
5. `components/ui/SectionHeading.tsx`

### Tier 1 — Motion Wrappers
6. `components/motion/FadeUp.tsx`
7. `components/motion/StaggerChildren.tsx`
8. `components/motion/ScrollReveal.tsx`

### Tier 2 — Layout Shell
9. `components/booking/CalEmbed.tsx`
10. `components/analytics/Pixels.tsx`
11. `app/layout.tsx`
12. `components/layout/StickyHeader.tsx`
13. `components/layout/Header.tsx`
14. `components/layout/Footer.tsx`

### Tier 3 — Section UI Primitives
15. `components/ui/ServiceCard.tsx`
16. `components/ui/StepCard.tsx`
17. `components/ui/FAQItem.tsx`

### Tier 4 — Page Sections
18. `components/sections/Hero.tsx`
19. `components/sections/ProofStrip.tsx`
20. `components/sections/Services.tsx`
21. `components/sections/HowItWorks.tsx`
22. `components/sections/About.tsx`
23. `components/sections/FAQ.tsx`
24. `components/sections/BookingSection.tsx`

### Tier 5 — Pages
25. `app/page.tsx`
26. `app/book/page.tsx`
27. `app/opengraph-image.tsx`
28. `app/sitemap.ts` + `app/robots.ts`

---

## Anti-Patterns to Avoid

1. **Making section components client components** — kills FCP/LCP and SEO crawlability
2. **Importing motion/react in server components** — build error; motion uses browser APIs
3. **Multiple CalEmbed script tags** — double-initialization causes erratic behavior
4. **Four separate pixel scripts** — use GTM instead
5. **next/image without explicit dimensions** — causes CLS

---

## Confidence Assessment

| Area | Confidence | Basis |
|------|------------|-------|
| App Router folder structure | HIGH | Official Next.js conventions |
| Server vs client decisions | HIGH | RSC model stable and documented |
| next/script strategies | HIGH | Core Next.js API, stable since v11 |
| Cal.com vanilla embed | HIGH | Confirmed; React 19 npm package has known issues |
| @next/third-parties GTM | HIGH | Official Next.js package |
| Native sitemap/robots | HIGH | Stable since Next.js 13.3 |
| next/og for OG images | HIGH | Official Next.js API |
