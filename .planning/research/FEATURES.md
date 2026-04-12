# Feature Landscape: RBLaunch Landing Page

**Domain:** Marketing & Ads Agency — Single-page lead generation (book a call)
**Researched:** 2026-04-10
**Research confidence:** HIGH for table stakes; MEDIUM for differentiators; MEDIUM for "no testimonials" tactics

---

## Table Stakes

These are the sections/features visitors expect. Missing any one of these causes visitors to leave without converting — not because they disliked you, but because the page didn't answer their minimum questions.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Hero section with outcome-focused headline | First 3 seconds decide bounce or scroll. Visitors need to see "this is for me" immediately. | Low | Headline must name the result, not the service. "More customers from paid ads and SEO" beats "We run Meta and Google Ads." |
| Single primary CTA above the fold | CTAs above the fold outperform below-fold by ~304%. Visitors who see the CTA first convert at higher rates. | Low | "Book Your Free Strategy Call" — action + qualifier + no-risk signal. Button should be in brand red (#E8232A). |
| Services section (Paid Ads + SEO) | Visitors need to confirm the agency does what they came for before they'll scroll further. | Low | Two service cards max. Lead with outcome, follow with mechanism. "More leads from Google & Meta" then explain what that means. |
| Social proof section | Trust is required before a stranger will give you 30 minutes of their time. Without proof the page feels like a cold pitch. | Low–Med | See full treatment in "No Testimonials" section below. |
| Process / How It Works section | Small business owners fear complexity and commitment. Showing a 3-step process ("Call → Strategy → Launch") reduces anxiety and makes the first step feel safe. | Low | 3 steps only. Step 1 = the CTA action (book call). This section does double duty: clarifies the offer AND re-presents the CTA. |
| Repeated CTA (mid-page and bottom) | Visitors scroll at different depths. A single CTA misses everyone who doesn't convert above the fold. Best practice is CTA after proof, again at the bottom. | Low | Use the same CTA label throughout — consistency reduces decision fatigue. |
| Cal.com booking embed | The booking action must happen on the page, not a redirect. Every redirect loses a percentage of visitors who won't come back. | Low–Med | Inline embed at the dedicated booking section. Popup button in sticky header. Cal.com free tier supports both. |
| Mobile-responsive layout | Over 60% of small business owners will visit on mobile. A broken mobile experience is an immediate exit signal. | Low | Tailwind CSS handles this natively — not a separate effort, just a constraint to enforce during build. |
| Fast page load (Core Web Vitals) | Google uses Core Web Vitals for SEO ranking. Slow pages also increase bounce directly. | Low–Med | Next.js App Router with server components handles this well. Avoid heavy animation libraries that block render. |
| Contact / fallback option | Not everyone is ready to book. A fallback (email or social link) captures visitors who want lower-commitment first contact. | Low | Footer email or LinkedIn link is sufficient. Do not build a contact form for v1 — it splits the CTA focus. |

---

## The "No Testimonials Yet" Problem

This is the central credibility challenge for a new agency. The research is clear: you cannot fake or skip social proof — but you have legitimate alternatives that work.

### What Does and Does Not Work for a New Agency

**Does NOT work:**
- Leaving the proof section empty or vague ("We care about results" without evidence)
- Fabricating numbers or using stock testimonials — visitors can sense inauthenticity
- Using placeholder logos or fake client names

**Does work — ranked by credibility weight:**

| Proof Type | Why It Works | Implementation for RBLaunch |
|------------|-------------|------------------------------|
| Founder credentials and certifications | Google Ads certification and Meta Blueprint certification are verifiable, credible signals that the person running ads actually knows the platform. New agencies can earn these before launch. | Display certification badge images with verification links. Honest: "Certified, not just self-described." |
| Founder story / origin narrative | Authenticity builds more trust than polished corporate copy. A concise story about why the founder started this, what experience they have, and who they exist to help creates human connection. | 2–3 sentences in the About/Founder section. Photo of the founder. Not a bio — a reason. |
| Specificity as a proxy for proof | Specific claims ("We focus only on small businesses under $50K/month ad spend") signal expertise more than vague claims ("We help businesses grow"). Specificity implies experience. | Use throughout the page — in headlines, service descriptions, FAQ answers. Vague = untrustworthy. |
| Platform partner / tool badges | Google Partner program badge (if earned), Meta Business Partner status. These are third-party verified signals. | Only display badges you have actually earned. The Google Partners directory is publicly searchable. |
| "Free strategy call" as proof structure | The call itself is social proof of a kind — it reframes the ask. "I'll analyze your current situation for free" implies enough confidence in the work to put time behind it without upfront payment. | Frame the CTA around what the visitor gets from the call (a strategy, an audit, clarity) not what the agency gets. |
| Early results / beta clients | If any early/free/discounted work is done before launch, document results immediately as a mini case study. Even one result with real numbers beats zero. | Plan to update the page post-launch with first client results. This is a known gap with a known fix. |

---

## Differentiators

These are features that not all agency landing pages have, but that measurably increase trust and conversion for a new agency specifically.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Founder-forward "About" section with photo | Personalizes a faceless new brand. Small business owners are hiring a person, not a corporation. Photo + brief story converts better than a company description. | Low | One paragraph. One photo. Specific, not generic. Tell the "why I started this" story. |
| FAQ section addressing real objections | Small business owners ask: "What will this cost?", "How long before I see results?", "Do I own my ad accounts?", "What makes you different from the last agency I tried?" A FAQ pre-answers these and reduces sales call friction. | Low–Med | 5–7 questions max. Answer honestly — even "pricing depends on budget, we'll discuss on the call" is better than silence. |
| Specificity about what the call delivers | "Book a call" is low-converting. "Get a free 30-minute paid ads audit of your current setup" is higher-converting because it names a concrete deliverable. | Low | Copy change only — no build complexity. High impact per effort. |
| Sticky header with CTA | As visitors scroll, they lose the above-fold CTA. A sticky header with a small "Book a Call" button keeps conversion accessible at all times. | Low | Straightforward in Next.js + Tailwind. Header shrinks on scroll to stay unobtrusive. |
| Service outcome framing (not feature framing) | "More calls booked from Google Maps" converts better than "Local SEO services." Most agency pages lead with features (what they do) not outcomes (what the client gets). | Low | Copy change. No additional sections needed. Write every service description in the format: "[Result] through [Mechanism]." |
| Niche signal (small businesses specifically) | Agencies that try to serve everyone signal that they serve no one particularly well. Naming "small businesses" explicitly in copy increases qualification and trust with that audience. | Low | 1–2 copy lines. No structural change. |

---

## Anti-Features

Things to deliberately NOT build for v1. Each of these adds scope, time, or complexity without improving the primary metric (call bookings).

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| Contact form | Splits CTA focus. Two conversion paths means weaker commitment to both. Forms also require validation, spam protection, email routing. | Footer email address handles edge cases. Single CTA: book the call. |
| Blog / content section | Out of scope per PROJECT.md. No content = dead blog = negative trust signal. | Omit entirely. Add in Phase 2+ when there's content to populate it. |
| Pricing page or pricing detail | Pricing for custom agency services always requires a conversation. Publishing prices cold sets wrong anchors and filters out prospects before you've had a chance to qualify them. | Address it in the FAQ: "Pricing is based on your goals and budget — we'll walk through options on the call." |
| Live chat widget | Requires someone actively monitoring. A new solo/small agency cannot staff this reliably. An unanswered live chat hurts trust more than having no chat. | Use Cal.com async booking — it handles "I want to talk now" use cases without live staffing. |
| Multiple CTAs competing for attention | "Book a call OR download our guide OR follow us on Instagram" — each additional CTA reduces the probability of any single action being taken. | One primary CTA: book the call. Secondary: footer social links only. |
| Testimonials carousel / social feed embed | Without testimonials, a carousel is empty. A social feed embed requires the feed to be active and polished at launch. | Launch without these. Add testimonials inline (not carousel) as they accumulate. |
| Video background / hero video | Kills page load speed, especially on mobile. Conversion benefit is marginal for an agency trying to establish basic credibility. | Use high-quality static imagery or bold typographic hero with brand colors. Framer Motion for scroll animations is sufficient polish. |
| Client portal / login | Explicitly out of scope. No clients yet. | Not applicable. |
| Cookie consent manager (complex) | A simple "we use analytics" notice is sufficient for a US-market site at launch. Complex GDPR tooling adds scope without launch value. | Add a one-line cookie notice in the footer. Revisit if EU traffic becomes significant. |

---

## Section Map (Recommended Page Order)

This ordering follows the psychological progression: curiosity → clarity → trust → action.

```
1. STICKY HEADER          — Logo + "Book a Free Call" CTA button
2. HERO                   — Headline (outcome) + subhead (mechanism + audience) + primary CTA button + supporting image
3. SOCIAL PROOF STRIP     — Certifications / platform badges / "100% free call, no commitment" micro-copy
4. SERVICES               — Two cards: Paid Ads + SEO. Outcome-led copy. No pricing.
5. HOW IT WORKS           — 3 steps: Book → Strategy → Launch. Step 1 = the CTA.
6. ABOUT / FOUNDER        — Photo + origin story. Specific, human, brief.
7. FAQ                    — 5–7 questions addressing real objections from small business owners.
8. BOOKING SECTION        — Cal.com inline embed. "Book your free 30-minute strategy call" heading.
9. FOOTER                 — Logo + email + social links + simple cookie/privacy notice.
```

---

## Feature Dependencies

```
Cal.com account setup → Booking section embed (section 8)
Cal.com account setup → Sticky header CTA popup
Certifications obtained → Social proof strip (section 3)
Brand assets finalized → All sections (typography, colors, logo placement)
Founder photo taken → About section (section 6)
```

**Critical path:** The Cal.com account and a usable founder photo are the only external dependencies. Everything else can be built in parallel.

---

## MVP Recommendation

Build all Table Stakes sections plus these three Differentiators:
1. Founder-forward About section (highest trust ROI for a new agency)
2. FAQ section (pre-answers the objections that kill bookings)
3. Sticky header with CTA (keeps conversion accessible throughout scroll)

Defer:
- Blog (out of scope, PROJECT.md)
- Testimonials carousel (nothing to populate)
- Any social feed embed (feed must be established first)

The first client result should be added to the social proof section as a mini case study the moment it exists. The page should be built to make that update a 15-minute content edit, not a structural change.

---

## Sources

- [How to Build a High-Converting Landing Page in 2025 — Analytics & Beyond](https://analyticsbeyond.com/how-to-build-a-high-converting-landing-page-in-2025/)
- [Best CTA Placement Strategies for Landing Pages — LandingPageFlow](https://www.landingpageflow.com/post/best-cta-placement-strategies-for-landing-pages)
- [25 New CTA Statistics 2026 — WiserNotify](https://wisernotify.com/blog/call-to-action-stats/)
- [11 Social Proof Examples for High-Converting Landing Pages — MailerLite](https://www.mailerlite.com/blog/social-proof-examples-for-landing-pages)
- [9 Social Proof Tactics That Make Landing Pages Convert — Growbo](https://www.growbo.com/professional-service-social-proof/)
- [Questions to Ask a Marketing Agency (for Small Businesses) — Odd.Dog](https://odd.dog/blog/questions-to-ask-a-marketing-agency-for-small-business-owners/)
- [10 Questions Small Business Owners Should Ask Before Hiring a Marketing Agency — Duct Tape Marketing](https://ducttapemarketing.com/10-questions-smbs-should-ask-before-hire-an-agency/)
- [Cal.com Embed Documentation](https://cal.com/embed)
- [How to Add Booking Pages to Your Website — Cal.com Blog](https://cal.com/blog/how-to-add-booking-pages-to-your-website)
- [Meta Blueprint Certification Guide 2025 — bir.ch](https://bir.ch/blog/facebook-blueprint-certification)
- [Why Your Agency Should Be a Google Certified Partner — InvisiblePPC](https://invisibleppc.com/blog/tech-updates/google-certified-partner/)
- [Founder-Led Marketing Strategy — SuperScale](https://superscale.ai/learn/founder-led-marketing-complete-strategy/)
- [7 Landing Page Copywriting Tips — Semrush](https://www.semrush.com/blog/landing-page-copywriting/)
