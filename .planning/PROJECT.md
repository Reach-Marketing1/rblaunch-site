# RBLaunch

## What This Is

RBLaunch is a marketing & ads agency that helps small businesses grow through paid advertising (Meta/Google) and SEO/organic growth strategies. The business is launching fresh and needs a professional web presence and social media footprint to attract clients and book discovery calls.

## Core Value

A small business owner lands on the page, immediately understands what RBLaunch does, and books a free strategy call within 60 seconds.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Landing page that drives visitors to book a free strategy call
- [ ] Highlight two core services: Paid Ads (Meta/Google) and SEO / Organic Growth
- [ ] Complete brand identity built on existing black/white logo + deep red accent (#E8232A)
- [ ] Booking integration via Cal.com (free, no Calendly branding)
- [ ] Analytics and ad pixels: GA4, Meta, TikTok, LinkedIn
- [ ] Branded social media assets for Instagram, Facebook, TikTok, LinkedIn
- [ ] Production deployment on Vercel with custom domain

### Out of Scope

- Blog or content section — not needed for v1 launch
- Client portal / login — no existing clients yet
- E-commerce / payment processing — services are sold via call, not self-serve
- Multi-page deep site structure — single landing page is sufficient for launch

## Context

- Business type: Marketing & Ads agency (paid ads + SEO)
- Target client: Small businesses wanting more leads/customers
- Primary CTA: Book a free 30-minute strategy call
- Logo provided: Horizontal (light + dark) and square icon variants — strictly black & white
- Brand palette: Black (#000000), White (#FFFFFF), Deep Red (#E8232A), Dark Grey (#111111), Muted (#888888)
- Typography direction: Bold condensed sans-serif headings (Barlow Condensed or Oswald) + Inter for body
- Social platforms: Instagram, Facebook, TikTok, LinkedIn
- No existing website, codebase, or social accounts yet — pure greenfield

## Constraints

- **Tech Stack**: Next.js (App Router) + TypeScript + Tailwind CSS — chosen by owner
- **Hosting**: Vercel — free tier sufficient for launch
- **Budget**: Free/low-cost tools only (Cal.com free, GA4 free, native pixels)
- **Timeline**: Launch-ready as fast as possible — no unnecessary phases

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js App Router | SEO-first, server components, native Vercel integration | — Pending |
| Cal.com for booking | Free tier, embeds cleanly, no third-party branding | — Pending |
| Deep Red accent (#E8232A) | Bold, action-driven — chosen by owner | — Pending |
| Tailwind CSS | Brand token integration, rapid development | — Pending |
| Framer Motion | Polished scroll animations for professional feel | — Pending |

---

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-10 after initialization*
