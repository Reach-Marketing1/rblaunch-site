# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Stack

- **Next.js 14.2.35** (App Router) — `app/` directory, no Pages Router
- **TypeScript** — strict mode
- **Tailwind CSS** — custom colors/fonts/keyframes defined in `tailwind.config.ts`
- **Lucide React** — icons only, no other component libraries
- **Google Fonts via `next/font/google`** — Playfair Display (headings) + DM Sans (body), injected as CSS variables `--font-playfair` / `--font-dm-sans`

## Architecture

Single-page marketing site. All sections live in `app/page.tsx` assembled from components in `components/rblaunch/`.

**Color palette** (all custom, defined in `tailwind.config.ts`):
- Backgrounds: `background` (#fafaf8), `bg-alt` (#f0ebe3), `bg-deep` (#e5ddd3) — always warm off-whites, never pure white/black
- Brand primary: `primary` (#1e3d2e, forest green), `primary-hover`, `primary-light`
- Accent: `accent` (#c97b3a, warm amber), `accent-light`
- Text: `foreground` (#1a1510), `foreground-muted`, `foreground-faint`

**Scroll animations** — CSS-only via `globals.css`:
- `.reveal` — fade+scale in, triggered by adding `.visible` class
- `.blur-in-el` — blur-to-clear, same trigger pattern
- `.delay-{n}` utility classes for stagger (80ms increments)
- Each section component runs its own `IntersectionObserver` in a `useEffect` to add `.visible`

**Testimonials auto-scroll** — pure CSS `@keyframes scroll-down/scroll-up` in `globals.css`. Desktop: 3 columns alternating direction. Mobile: single column, separate DOM block (`md:hidden`).

**Card shadow** — multi-layered, defined as `--card-shadow` CSS variable. Never use Tailwind `shadow-*` on cards.

**Logo** — `components/rblaunch/Logo.tsx` exports `LogoBadge` (circle SVG) and `LogoHorizontal`. Matches the physical brand mark: black circle, bold RB with bracket detail, LAUNCH in wide caps.

## Key Constraints

- All `target="_blank"` links must have `rel="noopener noreferrer"` on the **next line**
- Unsplash images are whitelisted in `next.config.mjs` — no other external image hosts without adding them
- No `.env` files should ever be committed — `.gitignore` covers this
- `next.config.mjs` not `.ts` — Next.js 14 does not support TypeScript config files
- `overflow-x: hidden` is set on both `html` and `body` in `globals.css` — don't remove, it prevents mobile layout bleed

## Deployment

Deployed on Vercel, connected to GitHub repo `Reach-Marketing1/rblaunch-site`. Every push to `master` triggers a redeploy automatically.
