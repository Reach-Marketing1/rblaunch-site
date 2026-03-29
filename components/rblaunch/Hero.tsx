'use client'

import { useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  // Blur-in animation on mount
  useEffect(() => {
    const els = heroRef.current?.querySelectorAll('.blur-in-hero')
    if (!els) return
    els.forEach((el, i) => {
      const target = el as HTMLElement
      target.style.opacity = '0'
      target.style.filter = 'blur(12px)'
      target.style.transform = 'translateY(8px)'
      setTimeout(() => {
        target.style.transition = 'opacity 0.8s ease-out, filter 0.8s ease-out, transform 0.8s ease-out'
        target.style.opacity = '1'
        target.style.filter = 'blur(0)'
        target.style.transform = 'translateY(0)'
      }, 200 + i * 180)
    })
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80"
          alt="Trade professional on the job site"
          className="w-full h-full object-cover object-center"
        />
        {/* Warm overlay — from bottom, covers ~70% */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf8] via-[rgba(250,250,248,0.80)] to-[rgba(250,250,248,0.35)]" />
        {/* Warm tint */}
        <div className="absolute inset-0 bg-[rgba(240,235,227,0.25)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="blur-in-hero inline-flex items-center gap-2 mb-6">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              The Trade Flow System
            </span>
          </div>

          {/* Headline */}
          <h1 className="blur-in-hero font-playfair text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] text-balance text-foreground mb-6">
            You run the jobs.{' '}
            <br />
            <em className="text-primary italic">We keep the calls coming.</em>
          </h1>

          {/* Subheadline */}
          <p className="blur-in-hero text-base md:text-lg text-foreground-muted font-light leading-relaxed max-w-xl mb-10">
            Most HVAC guys, roofers, and contractors lose jobs every week to
            competitors who show up online. RBLaunch handles your social media,
            Google presence, and lead follow-up — done for you, every month.
          </p>

          {/* CTA Group */}
          <div className="blur-in-hero flex flex-wrap items-center gap-3 mb-8">
            <a
              href="#checklist"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-medium text-sm px-7 py-3.5 rounded-full transition-all duration-300"
              style={{ boxShadow: '0 2px 16px rgba(30,61,46,0.25), 0 1px 3px rgba(30,61,46,0.15)' }}
            >
              Get My Free Checklist
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground font-medium text-sm px-7 py-3.5 rounded-full border border-[rgba(26,21,16,0.15)] hover:border-[rgba(26,21,16,0.3)] hover:bg-white/60 transition-all duration-300"
            >
              See How It Works
            </a>
          </div>

          {/* Availability badge */}
          <div className="blur-in-hero flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full bg-primary animate-pulse-dot flex-shrink-0"
              style={{ boxShadow: '0 0 0 3px rgba(30,61,46,0.15)' }}
            />
            <span className="text-xs text-foreground-muted font-medium">
              Taking new clients — Brainerd Lakes Area &amp; surrounding markets
            </span>
          </div>
        </div>

        {/* Floating result card */}
        <div
          className="blur-in-hero absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 hidden lg:block w-72"
          style={{
            boxShadow:
              'rgba(14,63,126,0.06) 0px 0px 0px 1px, rgba(42,51,70,0.06) 0px 4px 8px -2px, rgba(14,63,126,0.05) 0px 16px 40px -8px',
          }}
        >
          <div className="bg-white rounded-3xl p-5 overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground-faint mb-0.5">
                  Case Study
                </p>
                <p className="text-sm font-semibold text-foreground">
                  Lasher Inspections
                </p>
              </div>
              <span className="text-xs font-medium bg-primary-light text-primary px-2.5 py-1 rounded-full">
                Week 1
              </span>
            </div>

            <div className="space-y-2.5 mb-4">
              {[
                { label: 'Account age', value: 'Brand new' },
                { label: 'Google profile', value: 'Fully optimized' },
                { label: 'Strategy', value: 'SEO + local positioning' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between text-xs">
                  <span className="text-foreground-muted">{item.label}</span>
                  <span className="font-medium text-foreground">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary-light rounded-2xl p-3.5 flex items-center justify-between">
              <div>
                <p className="text-xs text-foreground-muted mb-0.5">New followers</p>
                <p className="text-2xl font-playfair font-semibold text-primary">
                  50 <span className="text-sm text-accent">↑</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-foreground-muted mb-0.5">Time taken</p>
                <p className="text-sm font-semibold text-foreground">2 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs uppercase tracking-[0.25em] text-foreground-muted">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-foreground-muted to-transparent animate-pulse" />
      </div>
    </section>
  )
}
