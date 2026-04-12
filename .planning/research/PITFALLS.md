# Domain Pitfalls

**Domain:** Marketing agency landing page — Next.js App Router, 4 ad pixels, Cal.com booking
**Researched:** 2026-04-10
**Confidence:** HIGH (Next.js/pixel mechanics), MEDIUM (Cal.com edge cases, brand consistency)

---

## Critical Pitfalls

### Pitfall 1: Meta Pixel Fires Once on Hard Load, Then Goes Silent on SPA Navigation

**What goes wrong:**
Next.js App Router does client-side navigation — the browser never does a full page reload. `fbq('track', 'PageView')` fires exactly once on initial hard load and never again. Same issue affects TikTok Pixel and LinkedIn Insight Tag.

**Consequences:** Retargeting audiences build slowly, attribution breaks, ad platform optimization signals are degraded.

**Prevention:**
1. Place all pixel `<Script>` tags in `app/layout.tsx` using `strategy="afterInteractive"`
2. Never use `strategy="beforeInteractive"` for pixels — blocks rendering
3. If multi-page routing is added, wrap `PageView` in `usePathname()` + `useEffect()` hook
4. For booking conversion events, use Cal.com `onBookingSuccessful` callback — do not rely on page redirect

**Warning signs:** Pixel helper shows "Active" but `PageView` count in Meta Events Manager is much lower than GA4 session count.

**Phase:** Pixel/Analytics setup phase

---

### Pitfall 2: Cal.com Embed Fires Conversion Events You Cannot Intercept Without the JavaScript API

**What goes wrong:**
Cal.com is an iframe — the booking confirmation happens inside it. There is no URL change to detect. Firing `fbq('track', 'Schedule')` on calendar open fires for everyone who opens it, not those who complete a booking.

**Consequences:** Inflated or missing conversion data, broken ROAS, lookalike audiences built on wrong signals.

**Prevention:**
1. Use `Cal("on", { action: "bookingSuccessful", callback })` event listener
2. In the callback, fire all four pixel conversions: `fbq('track', 'Schedule')`, GA4 `generate_lead`, TikTok `SubmitForm`, LinkedIn conversion
3. Test with Meta Pixel Helper and GA4 DebugView before launch

**Warning signs:** Booking conversion count in Meta significantly higher than actual bookings in Cal.com dashboard.

**Phase:** Booking integration phase

---

### Pitfall 3: No Cookie Consent Banner — Pixels Fire Illegally for EU/UK Visitors

**What goes wrong:**
Meta, TikTok, and LinkedIn pixels set tracking cookies. GDPR requires prior informed consent. The law applies to the visitor's location, not the business's.

**Prevention:**
1. Install a lightweight CMP (`react-cookie-consent` or CookieYes free tier)
2. Load pixel scripts conditionally — only after user accepts
3. Implement Google Consent Mode v2 for GA4 to model conversions for non-consenting users
4. Build the consent layer before going live — retrofitting is harder

**Warning signs:** No cookie banner visible; pixels fire immediately on page load before any user interaction.

**Phase:** Foundation/infrastructure phase (before going live)

---

### Pitfall 4: Framer Motion Animations Kill LCP and CLS on First Load

**What goes wrong:**
`initial={{ opacity: 0, y: 40 }}` on hero sections makes the hero headline invisible during LCP measurement. A marketing agency with poor Core Web Vitals scores undermines credibility with clients who know SEO.

**Prevention:**
1. Never animate the LCP element (primary hero headline or hero image)
2. Apply entrance animations only to below-fold or secondary elements
3. Use `whileInView` for scroll-triggered animations
4. Animate only `transform` and `opacity` — never `width`, `height`, `padding`, `margin`
5. Test with Lighthouse before launch. Target LCP < 2.5s and CLS < 0.1

**Warning signs:** Hero section fades in visibly; Lighthouse LCP flags the hero headline.

**Phase:** UI/component build phase

---

### Pitfall 5: Google Fonts Loaded Via @import Blocks Rendering

**What goes wrong:**
CSS `@import url("https://fonts.googleapis.com/...")` is render-blocking — the browser cannot render text until fonts arrive. Causes FOUT and delayed LCP.

**Prevention:**
1. Use `next/font/google` exclusively — self-hosts fonts on Vercel's CDN at build time
2. Never add any Google Fonts `<link>` tags or `@import` statements
3. Define fonts as CSS variables in root layout, reference in `tailwind.config.ts`

**Warning signs:** Chrome DevTools Network tab shows request to `fonts.googleapis.com`; visible text swap on load.

**Phase:** Foundation/layout phase

---

## Moderate Pitfalls

### Pitfall 6: Single OG Image Breaks Social Previews Across All Four Platforms

**Prevention:**
1. Generate via `app/opengraph-image.tsx` using Next.js `ImageResponse` API at 1200x630px
2. Include brand mark, agency name, and one tagline — not a screenshot
3. Validate with Facebook Sharing Debugger and LinkedIn Post Inspector before launch

**Phase:** SEO/metadata phase

---

### Pitfall 7: Cal.com Embed Script Loads on Page Init and Hurts LCP

**Prevention:**
1. Load with `strategy="lazyOnload"`
2. Consider initializing only when booking section scrolls into view via IntersectionObserver

**Phase:** Booking integration phase

---

### Pitfall 8: Four Social Accounts Launched With Inconsistent Visual Identity

**Prevention:**
1. Create brand asset kit before creating any account: 400x400px profile image, platform-specific covers, pre-written bio variants
2. Use identical handle/username across all four platforms
3. Write bio from client perspective: "We help small businesses get found online" not "Full-service digital marketing agency"

**Phase:** Brand/social asset phase

---

### Pitfall 9: No Testimonials or Social Proof Creates a Conversion Cliff on Cold Traffic

**Prevention:**
1. Substitute with founder credibility: photo, name, title, "why I started this" narrative
2. Use specificity: "Most small businesses we talk to spend $0 on ads and rely entirely on word of mouth"
3. Add risk-reversal on CTA: "Free 30-minute call — no commitment, no sales pressure"
4. Get first client testimonials immediately after first clients and add within month 1

**Phase:** Copywriting/content phase

---

### Pitfall 10: Booking CTA Buried Below the Fold With No Repeat

**Prevention:**
1. Place CTAs in at least three locations: hero, after services section, bottom of page
2. Sticky "Book a Free Call" button in mobile nav
3. CTA text: "Book My Free Strategy Call" not "Learn More" or "Get Started"

**Phase:** UI/component build phase

---

### Pitfall 11: LinkedIn Insight Tag Requires Domain Verification Before Conversion Tracking Works

**Prevention:**
1. Complete domain verification in LinkedIn Campaign Manager immediately after installing the tag
2. Add verification meta tag via Next.js root layout `metadata` export
3. Test in LinkedIn's Insight Tag diagnostic tool before running any LinkedIn ads

**Warning signs:** Campaign Manager shows "Domain not verified" warning.

**Phase:** Pixel/Analytics setup phase

---

## Minor Pitfalls

### Pitfall 12: Raw `<img>` Tag for Hero/Founder Photo Causes LCP Failure
Use `next/image` with explicit `width`, `height`, and `priority={true}` for above-fold images.

### Pitfall 13: Vercel Preview Deployments Trigger Real Pixel Events
Gate all pixel loading: `process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'`.

### Pitfall 14: Missing `robots.txt` and `sitemap.xml` Delays Google Indexing
Use native `app/sitemap.ts` and `app/robots.ts`. Submit sitemap to Google Search Console on launch day.

---

## Phase-Specific Quick Reference

| Phase | Pitfall | Fix |
|-------|---------|-----|
| Foundation | Font FOUT | `next/font/google` only |
| Foundation | LCP element animated | No Framer Motion on hero headline |
| Pixel setup | Dev traffic in pixel data | Gate on `VERCEL_ENV === 'production'` |
| Pixel setup | LinkedIn not verified | Domain verify in Campaign Manager first |
| Booking | Conversion fires on open not completion | Use `Cal("on", { action: "bookingSuccessful" })` |
| Booking | Cal.com hurts LCP | `strategy="lazyOnload"` |
| Cookie | Pixels fire without consent | Build consent layer before going live |
| SEO | OG image missing | `app/opengraph-image.tsx` at 1200x630px |
| SEO | No sitemap | `app/sitemap.ts` + submit to GSC |
| Brand | Inconsistent social profiles | Full asset kit before creating accounts |
| Copy | Zero social proof | Founder credibility + risk-reversal copy |
| Conversion | Single CTA | Three placements minimum |
