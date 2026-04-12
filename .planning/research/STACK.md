# Technology Stack

**Project:** RBLaunch — Marketing Agency Landing Page
**Researched:** 2026-04-10
**Overall confidence:** HIGH (all major choices verified against current docs and community usage)

---

## Recommended Stack

### Core Framework

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Next.js | 15.x | Framework | App Router is mature, first-class Vercel integration, RSC for performance |
| TypeScript | 5.x | Type safety | No reason to skip on a greenfield project |
| React | 19.x | UI runtime | Bundled with Next.js 15 — no separate install needed |

### Styling

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Tailwind CSS | **v4** | Utility-first CSS | CSS-first config via `@theme`, 5x faster builds, no `tailwind.config.js` needed |

**Tailwind v4 note:** New projects started in 2025/2026 should use v4. It replaces the JS config file with a `@theme` directive in `globals.css`. Browser support floor is Safari 16.4 / Chrome 111 / Firefox 128 — this covers 96%+ of real-world traffic and all small business audiences. There is no reason to use v3 on a new project.

Brand tokens (`#E8232A` red, `#000000`, `#FFFFFF`, etc.) are defined once in `globals.css` using `@theme` and become Tailwind utilities automatically (e.g., `bg-brand-red`, `text-brand-red`).

### Typography / Fonts

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| next/font/google | (built-in) | Font loading | Self-hosts Google Fonts at build time — zero external network requests, zero layout shift |

**Approach:** Import `Barlow_Condensed` (weights 700, 800, 900) and `Inter` (weights 400, 500, 600) in `app/layout.tsx` using `next/font/google`. Apply via CSS variables so Tailwind v4 can reference them.

```typescript
// app/layout.tsx
import { Barlow_Condensed, Inter } from 'next/font/google'

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-barlow',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
})
```

Then in `globals.css`:
```css
@theme {
  --font-heading: var(--font-barlow);
  --font-body: var(--font-inter);
}
```

Do NOT use `<link>` tags to Google Fonts. Do NOT use `@import url(...)` in CSS. Both cause render-blocking network requests and are strictly worse than `next/font`.

### Animation

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| motion | 12.x | Scroll animations, transitions | Formerly Framer Motion, now independent MIT library. 16M+ downloads/month. Native ScrollTimeline for hardware-accelerated scroll-linked animations. |

**Package name changed:** The package is now `motion`, not `framer-motion`. Import from `motion/react`.

```bash
npm install motion
```

```typescript
import { motion } from 'motion/react'
```

All components using Motion require `'use client'` in Next.js App Router. Structure: server components hold layout/content, wrap animated elements in thin client components.

**Why not GSAP:** GSAP is owned by Webflow and its license prohibits use in tools that compete with Webflow. It also has a heavier API surface for what this project needs. Motion provides everything required — scroll triggers, `whileInView`, parallax — with a simpler React-native API and smaller bundle.

**Why not CSS animations alone:** Scroll-triggered entrance animations require JS for viewport detection. CSS alone cannot produce the `whileInView` fade-up effects that signal "premium agency" quality.

### Booking / Scheduling

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Cal.com | Vanilla embed | Strategy call booking | Free tier, no third-party branding, owner's preference |

**Critical warning:** `@calcom/embed-react` (the npm package) is broken on Next.js 15 / React 19 as of early 2026. It throws `TypeError: Cannot read properties of undefined (reading 'ReactCurrentDispatcher')`. This is a known open issue tracked in both the Cal.com and Next.js repos.

**Use the vanilla JS embed instead.** Cal.com's embed system is built on a vanilla JS core that works without React dependency issues.

**Recommended integration pattern — popup on CTA click:**

```html
<!-- In your HTML -->
<button data-cal-link="your-username/strategy-call" data-cal-config='{"layout":"popup"}'>
  Book Free Strategy Call
</button>
```

```typescript
// In a Client Component, load the Cal embed script once
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

Place `<CalEmbed />` in the root layout. Any button anywhere on the page can then use `data-cal-link` to trigger the popup. No React wrapper component needed.

**Popup vs Inline vs Redirect:**
- **Popup (recommended):** User stays on the landing page, modal appears. No navigation away = no exit from conversion funnel.
- **Inline:** Embeds the calendar directly in the page. Works but takes up large vertical space and looks heavy on a landing page.
- **Redirect:** Sends user to cal.com. Loses the branded experience entirely. Avoid.

### Analytics & Tracking

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Google Tag Manager | N/A | Tag container | Single script manages GA4, Meta Pixel, TikTok Pixel, LinkedIn Insight Tag — all from one dashboard without code deploys |
| @next/third-parties | (built-in) | GTM loading | Official Next.js package, loads GTM with correct hydration timing |

**Approach:** Load GTM via `@next/third-parties/google` in `app/layout.tsx`. Configure GA4, Meta Pixel, TikTok Pixel, and LinkedIn Insight Tag as tags inside GTM — never as separate hardcoded scripts.

```typescript
import { GoogleTagManager } from '@next/third-parties/google'

// In layout.tsx <head>:
<GoogleTagManager gtmId="GTM-XXXXXXX" />
```

**Why GTM over individual pixels:** Adding or updating any pixel later (e.g., switching Meta Pixel IDs, adding LinkedIn) requires no code change — just a GTM publish. This matters for an ads agency that will iterate on tracking constantly.

### Form Handling (for any contact/lead form)

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| react-hook-form | 7.x | Form state | Minimal re-renders, TypeScript-native, pairs perfectly with Zod |
| zod | 3.x | Schema validation | Validate same schema on client and server action — no duplication |
| @hookform/resolvers | 3.x | Bridge | Connects Zod schema to react-hook-form |
| Resend | 4.x | Email delivery | Developer-friendly API, 3,000 free emails/month, works cleanly with Next.js Server Actions |

**Note for RBLaunch v1:** The primary CTA is the Cal.com booking button, not a traditional contact form. The form stack above is included for any secondary "send us a message" form if added. If v1 has no contact form, skip Resend until needed.

### Deployment

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Vercel | Free (Hobby) | Hosting | Zero-config Next.js deployment, automatic preview URLs, custom domain with free HTTPS |

**Custom domain setup (Vercel free tier):**
1. Deploy project to Vercel — get `*.vercel.app` URL
2. In Vercel project settings > Domains, add your domain (e.g., `rblaunch.com` + `www.rblaunch.com`)
3. Add DNS records at registrar: A record for apex, CNAME for `www`
4. Vercel auto-provisions SSL via Let's Encrypt

Free tier supports custom domains. There is no charge for this.

---

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| Animation | motion (v12) | GSAP | GSAP owned by Webflow, restrictive license, heavier API |
| Animation | motion (v12) | react-spring | Lower-level, physics-based — overkill for scroll entrances |
| Animation | motion (v12) | AOS (Animate on Scroll) | CSS-class-based, no React integration, feels dated |
| Cal.com embed | Vanilla JS embed | @calcom/embed-react | Broken on Next.js 15 / React 19, open bug as of early 2026 |
| Cal.com embed | Popup | Inline | Consumes too much vertical space, no UX benefit on landing page |
| Cal.com embed | Cal.com | Calendly | Calendly branding on free tier, owner explicitly chose Cal.com |
| Analytics | GTM container | Individual pixel scripts | Separate scripts = messy codebase, every pixel change needs a deploy |
| Tailwind | v4 | v3 | No reason to use v3 on new project; v3 is in maintenance mode |
| Email | Resend | SendGrid / Mailgun | Resend has cleaner DX, React Email support, generous free tier |
| Font loading | next/font/google | @import / `<link>` | Network requests to Google, potential layout shift, privacy issue |
| UI component library | None (custom) | shadcn/ui | Shadcn is excellent but adds complexity for a single landing page with a strong brand; hand-rolled components give full brand control |

---

## Installation

```bash
# Bootstrap (includes Next.js 15, TypeScript, Tailwind v4, ESLint, App Router)
npx create-next-app@latest rblaunch --ts --tailwind --eslint --app --src-dir

# Animation
npm install motion

# Cal.com — NO npm package needed. Use vanilla script embed only.

# Form validation (add if contact form is in scope)
npm install react-hook-form zod @hookform/resolvers

# Email (add if contact form is in scope)
npm install resend react-email @react-email/components

# Dev tooling
npm install -D prettier prettier-plugin-tailwindcss
```

---

## What NOT to Install

| Package | Reason |
|---------|--------|
| `@calcom/embed-react` | Broken on Next.js 15 + React 19 as of early 2026 |
| `framer-motion` | Renamed to `motion` — old package name still works but is legacy |
| `gsap` | Webflow-owned, restrictive license for competing tools |
| `aos` | Outdated pattern, not React-native |
| `tailwind-merge` + `clsx` | Only needed if building a component library. Single landing page doesn't warrant the abstraction layer; skip unless component reuse becomes complex. |
| `next-seo` | `next-seo` is largely superseded by Next.js 15's native Metadata API (`export const metadata`) in App Router. Use native. |

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Tailwind v4 for new projects | HIGH | Official docs confirm v4 is stable and recommended for new projects |
| next/font/google approach | HIGH | Official Next.js docs, well-established pattern |
| motion (v12) for animations | HIGH | Verified on motion.dev official docs; 16M downloads/month confirms adoption |
| Cal.com vanilla embed | HIGH | Known React package incompatibility verified in open GitHub issues; vanilla workaround confirmed in Cal.com docs |
| GTM over individual pixels | HIGH | Verified via Next.js @next/third-parties docs and multiple sources |
| Vercel free tier custom domains | HIGH | Official Vercel docs confirm free tier includes custom domains + SSL |
| react-hook-form + zod | HIGH | Established, heavily-used pattern throughout the Next.js ecosystem |

---

## Sources

- Motion official docs: https://motion.dev/docs/react
- Motion scroll animations: https://motion.dev/docs/react-scroll-animations
- Cal.com embed vanilla docs: https://cal.com/help/embedding/embed-instructions
- Cal.com Next.js 15 compatibility issue: https://github.com/vercel/next.js/discussions/71995
- Tailwind v4 announcement: https://tailwindcss.com/blog/tailwindcss-v4
- Tailwind upgrade guide: https://tailwindcss.com/docs/upgrade-guide
- Next.js font optimization: https://nextjs.org/docs/app/getting-started/fonts
- Next.js third-party libraries (GTM): https://nextjs.org/docs/app/guides/third-party-libraries
- Vercel custom domains: https://vercel.com/docs/domains/working-with-domains/add-a-domain
- LogRocket React animation comparison 2026: https://blog.logrocket.com/best-react-animation-libraries/
- GSAP vs Motion comparison: https://motion.dev/docs/gsap-vs-motion
