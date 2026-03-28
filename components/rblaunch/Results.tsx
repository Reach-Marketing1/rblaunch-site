'use client'

import { useEffect, useRef } from 'react'
import { TrendingUp, CheckCircle2 } from 'lucide-react'

const roiRows = [
  { label: 'Average roofing job value', value: '~$9,500', highlight: false },
  { label: 'Average profit margin (30%)', value: '~$2,850', highlight: false },
  { label: 'Monthly retainer cost', value: '$1,200–$1,500', highlight: false },
  { label: 'Net after 1 extra job', value: '+$1,350–$1,650', highlight: true },
  { label: 'Every job after that', value: 'Pure upside', highlight: true },
]

export default function Results() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80)
            })
            entry.target.querySelectorAll('.blur-in-el').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 180)
            })
          }
        })
      },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="results" className="py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="blur-in-el text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-4">
            Real Results
          </p>
          <h2
            className="blur-in-el font-playfair text-4xl md:text-5xl font-semibold text-balance text-foreground leading-[1.1] mb-5"
            style={{ transitionDelay: '180ms' }}
          >
            Here&apos;s what happens when you{' '}
            <em className="text-primary">show up online</em>
          </h2>
          <p
            className="blur-in-el text-base text-foreground-muted font-light leading-relaxed"
            style={{ transitionDelay: '360ms' }}
          >
            One case study and one simple spreadsheet. No fluff, no inflated numbers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Case Study Card */}
          <div
            className="reveal bg-white rounded-3xl overflow-hidden"
            style={{
              boxShadow:
                'rgba(14,63,126,0.04) 0px 0px 0px 1px, rgba(42,51,69,0.04) 0px 1px 1px -0.5px, rgba(42,51,70,0.04) 0px 3px 3px -1.5px, rgba(42,51,70,0.04) 0px 6px 6px -3px, rgba(14,63,126,0.04) 0px 12px 12px -6px, rgba(14,63,126,0.04) 0px 24px 24px -12px',
            }}
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80"
                alt="Home inspection professional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] bg-white/90 text-foreground px-2.5 py-1 rounded-full">
                  Case Study
                </span>
              </div>
              <div className="absolute bottom-4 left-5 right-5">
                <p className="font-playfair text-xl font-semibold text-white leading-snug">
                  Lasher Inspections
                </p>
                <p className="text-white/70 text-xs mt-0.5">
                  Home Inspection · Brainerd Lakes Area, MN
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="p-7">
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-primary-light rounded-2xl p-4 text-center flex-1">
                  <p className="font-playfair text-4xl font-semibold text-primary leading-none">
                    50
                  </p>
                  <p className="text-xs text-foreground-muted mt-1">New followers</p>
                </div>
                <div className="bg-accent-light rounded-2xl p-4 text-center flex-1">
                  <p className="font-playfair text-4xl font-semibold text-accent leading-none">
                    2
                  </p>
                  <p className="text-xs text-foreground-muted mt-1">Days to results</p>
                </div>
                <div className="bg-bg-alt rounded-2xl p-4 text-center flex-1">
                  <p className="font-playfair text-4xl font-semibold text-foreground leading-none">
                    0
                  </p>
                  <p className="text-xs text-foreground-muted mt-1">Starting followers</p>
                </div>
              </div>

              <p className="text-sm text-foreground-muted leading-relaxed font-light">
                Starting from a completely fresh Facebook account — no followers, no posts, no history.
                With SEO-informed content and a{' '}
                <span className="font-medium text-foreground">&quot;local business that knows its stuff&quot;</span>{' '}
                positioning strategy, the account built real, local traction in the first 48 hours.
                Google Business Profile was also fully set up and optimized alongside the social launch.
              </p>
            </div>
          </div>

          {/* ROI Calculator */}
          <div
            className="reveal delay-160 flex flex-col gap-5"
          >
            <div
              className="bg-white rounded-3xl p-7 flex-1"
              style={{
                boxShadow:
                  'rgba(14,63,126,0.04) 0px 0px 0px 1px, rgba(42,51,69,0.04) 0px 1px 1px -0.5px, rgba(42,51,70,0.04) 0px 3px 3px -1.5px, rgba(42,51,70,0.04) 0px 6px 6px -3px, rgba(14,63,126,0.04) 0px 12px 12px -6px, rgba(14,63,126,0.04) 0px 24px 24px -12px',
              }}
            >
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl bg-primary-light flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={18} className="text-primary" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-playfair text-lg font-semibold text-foreground leading-snug">
                    The ROI of one extra job per month
                  </h3>
                  <p className="text-xs text-foreground-muted mt-0.5">
                    Based on average roofing job — adjust for your trade
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {roiRows.map((row, i) => (
                  <div
                    key={row.label}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-xl ${
                      row.highlight
                        ? 'bg-primary-light'
                        : 'bg-bg-alt'
                    }`}
                  >
                    <span className={`text-sm ${row.highlight ? 'font-medium text-primary' : 'text-foreground-muted font-light'}`}>
                      {row.label}
                    </span>
                    <span className={`text-sm font-semibold ${row.highlight ? 'text-primary' : 'text-foreground'}`}>
                      {row.highlight && <CheckCircle2 size={12} className="inline mr-1.5 opacity-70" />}
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note card */}
            <div
              className="bg-accent-light border border-accent/15 rounded-3xl p-5"
            >
              <p className="text-sm text-foreground leading-relaxed">
                This math works for HVAC, roofing, concrete, home inspection — any trade where your
                average job value is over a few thousand dollars.{' '}
                <strong className="font-semibold text-foreground">
                  The question isn&apos;t whether this pays for itself. It&apos;s how many extra
                  jobs you want.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
