'use client'

import { useEffect, useRef } from 'react'
import { MapPin, Cpu, Hammer, Home, CheckCircle2 } from 'lucide-react'

const facts = [
  { icon: MapPin, text: 'Based in Brainerd Lakes Area, MN' },
  { icon: Cpu, text: 'Built 5 computers — tech is second nature' },
  { icon: Hammer, text: 'Family background in construction & trades' },
  { icon: Home, text: 'Also running a flooring & countertops business' },
]

const values = [
  {
    title: 'Results first, always',
    body: "Lasher Inspections went from zero to 50 followers in 2 days. I don't ask for months to show results. You'll see movement in the first two weeks.",
  },
  {
    title: 'Built for trades, not everyone',
    body: "I work specifically with trade businesses — HVAC, roofing, concrete, home inspection. If you need someone who understands your industry, that's the point.",
  },
  {
    title: 'No jargon, no runaround',
    body: "I tell you exactly what I'm doing and why. Monthly updates in plain language. You'll always know what's happening with your presence.",
  },
]

export default function About() {
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
    <section ref={sectionRef} id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left column */}
          <div>
            <p className="blur-in-el text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-4">
              About Ryan
            </p>
            <h2
              className="blur-in-el font-playfair text-4xl md:text-5xl font-semibold text-foreground leading-[1.1] mb-6 text-balance"
              style={{ transitionDelay: '180ms' }}
            >
              Not an agency.{' '}
              <br className="hidden md:block" />
              Not a freelancer.
              <br />
              <em className="text-primary">Someone who gets it.</em>
            </h2>

            {/* Availability badge */}
            <div className="blur-in-el flex items-center gap-2 mb-8" style={{ transitionDelay: '300ms' }}>
              <span
                className="w-2 h-2 rounded-full bg-primary animate-pulse-dot flex-shrink-0"
                style={{ boxShadow: '0 0 0 3px rgba(30,61,46,0.15)' }}
              />
              <span className="text-xs font-medium text-foreground-muted">
                Taking new clients now
              </span>
            </div>

            {/* Bio */}
            <div className="reveal space-y-4 mb-8">
              <p className="text-base text-foreground-muted leading-relaxed font-light">
                I&apos;m <strong className="font-semibold text-foreground">Ryan</strong> — the only
                person at RBLaunch. I got into marketing the same way a lot of people get good at
                things: I was frustrated. Frustrated with not having money, and frustrated watching
                businesses with great work get beat out by competitors who just knew how to show up
                online.
              </p>
              <p className="text-base text-foreground-muted leading-relaxed font-light">
                So I started paying attention to how marketing actually works — not from courses, but
                from billboards, ads, real businesses. I grew up around my dad&apos;s construction
                company. I know how trade business owners think, how they talk to clients, how they
                quote jobs.{' '}
                <strong className="font-medium text-foreground">
                  I&apos;m not going to pitch you on anything you don&apos;t need.
                </strong>
              </p>
              <p className="text-base text-foreground-muted leading-relaxed font-light">
                I take on a small number of clients at a time so I can actually deliver. You&apos;re
                not getting handed off to a junior employee or an overseas contractor. You get me,
                doing the work, every month.
              </p>
            </div>

            {/* Facts chips */}
            <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {facts.map((fact) => {
                const Icon = fact.icon
                return (
                  <div
                    key={fact.text}
                    className="flex items-center gap-2.5 bg-bg-alt rounded-2xl px-3.5 py-2.5"
                  >
                    <Icon size={14} className="text-primary flex-shrink-0" strokeWidth={2} />
                    <span className="text-xs font-medium text-foreground-muted">{fact.text}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-5">
            {/* Photo placeholder */}
            <div
              className="reveal relative rounded-3xl overflow-hidden aspect-[4/3]"
              style={{
                boxShadow:
                  'rgba(14,63,126,0.04) 0px 0px 0px 1px, rgba(42,51,70,0.04) 0px 6px 6px -3px, rgba(14,63,126,0.04) 0px 24px 24px -12px',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80"
                alt="Ryan Beach — RBLaunch"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="font-playfair text-xl font-semibold text-white">Ryan Beach</p>
                <p className="text-white/70 text-sm">Founder, RBLaunch</p>
              </div>
            </div>

            {/* Value props */}
            <div className="reveal delay-160 space-y-3">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-white rounded-3xl p-5 hover:scale-[1.01] transition-transform duration-300"
                  style={{
                    boxShadow:
                      'rgba(14,63,126,0.04) 0px 0px 0px 1px, rgba(42,51,69,0.04) 0px 1px 1px -0.5px, rgba(42,51,70,0.04) 0px 3px 3px -1.5px, rgba(42,51,70,0.04) 0px 6px 6px -3px',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" strokeWidth={2} />
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">{v.title}</p>
                      <p className="text-xs text-foreground-muted leading-relaxed font-light">{v.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
