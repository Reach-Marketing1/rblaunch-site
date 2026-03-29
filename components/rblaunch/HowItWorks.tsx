'use client'

import { useEffect, useRef } from 'react'
import { Settings, Video, PhoneIncoming } from 'lucide-react'

const steps = [
  {
    icon: Settings,
    number: '01',
    title: 'Setup Week',
    body: "I build everything out — Google Business Profile fully optimized, chatbot live, missed-call text-back active, referral system connected, content templates ready for your trade. You don't lift a finger.",
  },
  {
    icon: Video,
    number: '02',
    title: 'Content Flow Starts',
    body: 'You film a 30–60 second clip on the job site. Send it to me. I write the caption, add the SEO, and post it to Facebook, Instagram, and Google. That\'s your entire job. I handle the rest.',
  },
  {
    icon: PhoneIncoming,
    number: '03',
    title: 'The Phone Rings More',
    body: "Your Google profile climbs. Social following grows. Referrals come in through the system. Leads who call after hours get a text response within minutes. You close more jobs — without changing how you work.",
  },
]

export default function HowItWorks() {
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
    <section ref={sectionRef} id="process" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="blur-in-el text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-4">
            The Booked Out Blueprint
          </p>
          <h2
            className="blur-in-el font-playfair text-4xl md:text-5xl font-semibold text-balance text-foreground leading-[1.1] mb-5"
            style={{ transitionDelay: '180ms' }}
          >
            Up and running in{' '}
            <em className="text-primary">two weeks</em>
          </h2>
          <p
            className="blur-in-el text-base text-foreground-muted font-light leading-relaxed"
            style={{ transitionDelay: '360ms' }}
          >
            Three phases. No tech setup on your end. No long onboarding calls. Just a system
            that starts working before the month is out.
          </p>
        </div>

        {/* Steps layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">

          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[calc(33.33%-1px)] right-[calc(33.33%-1px)] h-px bg-gradient-to-r from-transparent via-[rgba(26,21,16,0.12)] to-transparent" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className={`reveal delay-${i * 160} group relative`}
              >
                {/* Card */}
                <div
                  className="bg-white rounded-3xl p-7 h-full hover:scale-[1.02] transition-all duration-300"
                  style={{
                    boxShadow:
                      'rgba(14,63,126,0.04) 0px 0px 0px 1px, rgba(42,51,69,0.04) 0px 1px 1px -0.5px, rgba(42,51,70,0.04) 0px 3px 3px -1.5px, rgba(42,51,70,0.04) 0px 6px 6px -3px, rgba(14,63,126,0.04) 0px 12px 12px -6px, rgba(14,63,126,0.04) 0px 24px 24px -12px',
                  }}
                >
                  {/* Step number + icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-primary flex items-center justify-center">
                      <Icon size={18} className="text-white" strokeWidth={1.75} />
                    </div>
                    <span className="text-xs font-mono font-semibold text-foreground-faint tracking-wider">
                      Step {step.number}
                    </span>
                  </div>

                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed font-light">
                    {step.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="reveal mt-8 text-center">
          <p className="text-sm text-foreground-muted mb-4 font-light">
            Ready to see this in action for your business?
          </p>
          <a
            href="https://calendly.com/ryankbeach05/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-medium text-sm px-7 py-3.5 rounded-full transition-all duration-300"
            style={{ boxShadow: '0 2px 12px rgba(30,61,46,0.2)' }}
          >
            Book a Free 15-Min Call
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
