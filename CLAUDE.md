<!-- GSD:project-start source:PROJECT.md -->
## Project

**RBLaunch**

RBLaunch is a marketing & ads agency that helps small businesses who are invisible online — businesses with no website, businesses that rely entirely on word of mouth, and business owners who know they're missing revenue but don't know where. RBLaunch finds those gaps and fills them through paid advertising (Meta/Google) and SEO/organic growth.

**Core Value:** A small business owner lands on the page, immediately understands what RBLaunch does, and books a free strategy call within 60 seconds.

### Constraints

- **Tech Stack**: Next.js (App Router) + TypeScript + Tailwind CSS — chosen by owner
- **Hosting**: Vercel — free tier sufficient for launch
- **Budget**: Free/low-cost tools only (Cal.com free, GA4 free, native pixels)
- **Timeline**: Launch-ready as fast as possible — no unnecessary phases
<!-- GSD:project-end -->

<!-- GSD:stack-start source:research/STACK.md -->
## Technology Stack

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
### Typography / Fonts
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| next/font/google | (built-in) | Font loading | Self-hosts Google Fonts at build time — zero external network requests, zero layout shift |
### Animation
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| motion | 12.x | Scroll animations, transitions | Formerly Framer Motion, now independent MIT library. 16M+ downloads/month. Native ScrollTimeline for hardware-accelerated scroll-linked animations. |
### Booking / Scheduling
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Cal.com | Vanilla embed | Strategy call booking | Free tier, no third-party branding, owner's preference |
- **Popup (recommended):** User stays on the landing page, modal appears. No navigation away = no exit from conversion funnel.
- **Inline:** Embeds the calendar directly in the page. Works but takes up large vertical space and looks heavy on a landing page.
- **Redirect:** Sends user to cal.com. Loses the branded experience entirely. Avoid.
### Analytics & Tracking
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Google Tag Manager | N/A | Tag container | Single script manages GA4, Meta Pixel, TikTok Pixel, LinkedIn Insight Tag — all from one dashboard without code deploys |
| @next/third-parties | (built-in) | GTM loading | Official Next.js package, loads GTM with correct hydration timing |
### Form Handling (for any contact/lead form)
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| react-hook-form | 7.x | Form state | Minimal re-renders, TypeScript-native, pairs perfectly with Zod |
| zod | 3.x | Schema validation | Validate same schema on client and server action — no duplication |
| @hookform/resolvers | 3.x | Bridge | Connects Zod schema to react-hook-form |
| Resend | 4.x | Email delivery | Developer-friendly API, 3,000 free emails/month, works cleanly with Next.js Server Actions |
### Deployment
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Vercel | Free (Hobby) | Hosting | Zero-config Next.js deployment, automatic preview URLs, custom domain with free HTTPS |
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
## Installation
# Bootstrap (includes Next.js 15, TypeScript, Tailwind v4, ESLint, App Router)
# Animation
# Cal.com — NO npm package needed. Use vanilla script embed only.
# Form validation (add if contact form is in scope)
# Email (add if contact form is in scope)
# Dev tooling
## What NOT to Install
| Package | Reason |
|---------|--------|
| `@calcom/embed-react` | Broken on Next.js 15 + React 19 as of early 2026 |
| `framer-motion` | Renamed to `motion` — old package name still works but is legacy |
| `gsap` | Webflow-owned, restrictive license for competing tools |
| `aos` | Outdated pattern, not React-native |
| `tailwind-merge` + `clsx` | Only needed if building a component library. Single landing page doesn't warrant the abstraction layer; skip unless component reuse becomes complex. |
| `next-seo` | `next-seo` is largely superseded by Next.js 15's native Metadata API (`export const metadata`) in App Router. Use native. |
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
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, or `.github/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
