'use client'

import { useEffect, useRef } from 'react'
import { MapPin, Users, PhoneOff } from 'lucide-react'

const problems = [
  {
    icon: MapPin,
    number: '01',
    title: "You're invisible on Google",
    body: 'When someone in your area searches "HVAC repair near me" or "roofer Brainerd," they find your competitor — because your Google Business Profile is unclaimed, incomplete, or has no recent activity. That\'s a free lead going to someone else, every day.',
  },
  {
    icon: Users,
    number: '02',
    title: 'Word-of-mouth has a ceiling',
    body: "Referrals are great — until they dry up. If you're depending entirely on word-of-mouth to fill your calendar, you've got no control over your pipeline. Social media and Google presence are what let you grow beyond the people you already know.",
  },
  {
    icon: PhoneOff,
    number: '03',
    title: 'Leads call and go cold',
    body: "A missed call is a missed job. Most trade business owners are on the job site — not watching their phone. Without a system to follow up automatically, that lead calls the next guy. We set up automation that responds within minutes, even when you can't.",
  },
]

export default function Problem() {
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
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="blur-in-el text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-4">
            Why Trade Businesses Stay Stuck
          </p>
          <h2 className="blur-in-el font-playfair text-4xl md:text-5xl font-semibold text-balance text-foreground leading-[1.1] mb-5"
            style={{ transitionDelay: '180ms' }}>
            Three reasons you&apos;re leaving jobs on the{' '}
            <em className="text-primary">table</em>
          </h2>
          <p className="blur-in-el text-base text-foreground-muted font-light leading-relaxed"
            style={{ transitionDelay: '360ms' }}>
            It&apos;s not your work quality. Trade businesses with terrible online presence
            beat better ones every day — just because they show up.
          </p>
        </div>

        {/* Problem cards + large image bento */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* Large image block (col-span-1, left) */}
          <div
            className="reveal lg:col-span-1 lg:row-span-1 relative rounded-3xl overflow-hidden min-h-[320px] lg:min-h-0"
            style={{
              boxShadow:
                'rgba(14,63,126,0.04) 0px 0px 0px 1px, rgba(42,51,70,0.04) 0px 6px 6px -3px, rgba(14,63,126,0.04) 0px 24px 24px -12px',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80"
              alt="Trade professional on job site"
              className="w-full h-full object-cover"
              style={{ minHeight: '320px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white/70 text-xs font-medium uppercase tracking-widest mb-1">
                The reality
              </p>
              <p className="font-playfair text-white text-xl font-medium leading-snug">
                Great work doesn&apos;t win jobs.
                <em className="text-accent"> Showing up online does.</em>
              </p>
            </div>
          </div>

          {/* Problem cards (col-span-2, stacked) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5">

            {/* Top row: two small cards side by side on medium, stacked on large */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-2">
              {problems.slice(0, 2).map((problem, i) => {
                const Icon = problem.icon
                return (
                  <div
                    key={problem.number}
                    className={`reveal delay-${(i + 1) * 80} group bg-white rounded-3xl p-7 hover:scale-[1.02] transition-all duration-300 cursor-default`}
                    style={{
                      boxShadow:
                        'rgba(14,63,126,0.04) 0px 0px 0px 1px, rgba(42,51,69,0.04) 0px 1px 1px -0.5px, rgba(42,51,70,0.04) 0px 3px 3px -1.5px, rgba(42,51,70,0.04) 0px 6px 6px -3px, rgba(14,63,126,0.04) 0px 12px 12px -6px, rgba(14,63,126,0.04) 0px 24px 24px -12px',
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-accent-light flex items-center justify-center">
                        <Icon size={18} className="text-accent" strokeWidth={1.75} />
                      </div>
                      <span className="text-xs font-mono text-foreground-faint">{problem.number}</span>
                    </div>
                    <h3 className="font-playfair text-lg font-semibold text-foreground mb-2 leading-snug">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed font-light">
                      {problem.body}
                    </p>
                  </div>
                )
              })}
            </div>

            {/* Bottom: wide card */}
            <div
              className="reveal delay-240 group bg-white rounded-3xl p-7 hover:scale-[1.01] transition-all duration-300 cursor-default"
              style={{
                boxShadow:
                  'rgba(14,63,126,0.04) 0px 0px 0px 1px, rgba(42,51,69,0.04) 0px 1px 1px -0.5px, rgba(42,51,70,0.04) 0px 3px 3px -1.5px, rgba(42,51,70,0.04) 0px 6px 6px -3px, rgba(14,63,126,0.04) 0px 12px 12px -6px, rgba(14,63,126,0.04) 0px 24px 24px -12px',
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-accent-light flex items-center justify-center">
                  <PhoneOff size={18} className="text-accent" strokeWidth={1.75} />
                </div>
                <span className="text-xs font-mono text-foreground-faint">{problems[2].number}</span>
              </div>
              <h3 className="font-playfair text-lg font-semibold text-foreground mb-2 leading-snug">
                {problems[2].title}
              </h3>
              <p className="text-sm text-foreground-muted leading-relaxed font-light">
                {problems[2].body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
