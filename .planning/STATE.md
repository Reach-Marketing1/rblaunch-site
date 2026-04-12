# Project State: RBLaunch Website v1

**Last updated:** 2026-04-10
**Status:** Roadmap created — awaiting Phase 1 planning

---

## Project Reference

**Core value:** A small business owner lands on the page, immediately understands what RBLaunch does, and books a free strategy call within 60 seconds.

**What we're building:** Single-page Next.js 15 marketing site for RBLaunch (marketing & ads agency) with Cal.com booking, GTM/pixel tracking, and SEO metadata. Deployed to Vercel with custom domain.

**Current focus:** Phase 1 — Project Foundation

---

## Current Position

**Milestone:** v1 Launch
**Current phase:** 1 (Project Foundation)
**Current plan:** None (planning not yet started)
**Phase status:** Not started

**Progress:**
```
Phase 1: Project Foundation    [ ] Not started
Phase 2: Landing Page Sections [ ] Not started
Phase 3: Booking Integration   [ ] Not started
Phase 4: Analytics & SEO       [ ] Not started
Phase 5: Social Media Assets   [ ] Not started
Phase 6: Deployment            [ ] Not started

Overall: 0/6 phases complete
```

---

## Performance Metrics

| Metric | Value |
|--------|-------|
| Phases total | 6 |
| Phases complete | 0 |
| Requirements total | 25 |
| Requirements complete | 0 |
| Plans written | 0 |
| Plans complete | 0 |

---

## Accumulated Context

### Decisions Locked

| Decision | Rationale |
|----------|-----------|
| Next.js 15 App Router | SEO-first, RSC performance, native Vercel integration |
| Cal.com vanilla JS embed only | `@calcom/embed-react` is broken on Next.js 15 + React 19 |
| `motion` 12.x (not `framer-motion`) | Package renamed; import from `motion/react` |
| GTM as single pixel container | All 4 pixels (GA4, Meta, TikTok, LinkedIn) inside GTM — no hardcoded scripts |
| Tailwind CSS v4 | CSS-first `@theme` config — do not use v3 on new projects |
| `next/font/google` only | Self-hosts Barlow Condensed + Inter, zero FOUT |
| Pixels gated to production | `NEXT_PUBLIC_VERCEL_ENV === 'production'` check prevents polluting ad audiences |

### Critical Pitfalls (do not forget)

- Never animate the hero headline with `initial={{ opacity: 0 }}` — kills LCP
- Never install `@calcom/embed-react` — confirmed broken on React 19
- Fire pixel conversions on `bookingSuccessful` callback, NOT on calendar open
- LinkedIn domain verification is required before running LinkedIn ads

### Open Dependencies (needed during build)

- Founder photo — needed for About/Founder section (PAGE-06)
- Cal.com username and event slug — needed before BOOK-01/BOOK-02 can wire up
- GTM container ID — needed before TRACK-01 can be implemented
- Google Ads / Meta Blueprint badge images — if not yet earned, PAGE-03 proof strip needs a fallback

### Todos

- [ ] Confirm founder photo is available before starting Phase 2
- [ ] Create Cal.com account and confirm event slug before starting Phase 3
- [ ] Create GTM container and record container ID before starting Phase 4

### Blockers

None currently.

---

## Session Continuity

### How to resume

1. Read this file for current position
2. Read `.planning/ROADMAP.md` for phase structure and success criteria
3. Read `.planning/REQUIREMENTS.md` for full requirement list and traceability
4. Run `/gsd-plan-phase 1` to begin planning Phase 1

### Phase transition checklist

When completing a phase, run `/gsd-transition` to:
- Mark phase complete in ROADMAP.md progress table
- Update REQUIREMENTS.md traceability to "Complete"
- Update this file's Current Position section
- Log any new decisions or open dependencies discovered during the phase

---

## File Index

| File | Purpose |
|------|---------|
| `.planning/PROJECT.md` | Core value, constraints, key decisions |
| `.planning/REQUIREMENTS.md` | All v1 requirements with traceability |
| `.planning/ROADMAP.md` | Phase structure, goals, success criteria |
| `.planning/STATE.md` | This file — project memory and current position |
| `.planning/research/SUMMARY.md` | Stack recommendations and architecture decisions |
