'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const sectionRef = useRef<HTMLElement>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.blur-in-el').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 180)
            })
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <section
      ref={sectionRef}
      id="checklist"
      className="py-24 bg-primary overflow-hidden relative"
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Decorative circle */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-20 -left-16 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <div>
            <p className="blur-in-el text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-5">
              Free Resource
            </p>
            <h2
              className="blur-in-el font-playfair text-4xl md:text-5xl font-semibold text-white text-balance leading-[1.1] mb-5"
              style={{ transitionDelay: '180ms' }}
            >
              Find out exactly where you&apos;re losing jobs{' '}
              <em className="text-accent">online</em>
            </h2>
            <p
              className="blur-in-el text-white/70 font-light text-base leading-relaxed mb-8"
              style={{ transitionDelay: '360ms' }}
            >
              The Trade Business Online Presence Checklist is a free 15-point self-audit.
              Takes 5 minutes. You&apos;ll know exactly what&apos;s broken and what to fix first —
              no pitch call required.
            </p>

            <ul className="reveal space-y-3">
              {[
                'Google Business Profile — 5 quick checks',
                'Social media basics — are you showing up?',
                'Lead follow-up — are you losing jobs to slow response?',
                'Scoring guide — see where you actually stand',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-white/80 text-sm font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div className="reveal">
            <div
              className="bg-white rounded-3xl p-8"
              style={{
                boxShadow:
                  'rgba(14,63,126,0.08) 0px 0px 0px 1px, rgba(42,51,70,0.06) 0px 8px 16px -4px, rgba(14,63,126,0.06) 0px 32px 64px -16px',
              }}
            >
              {!submitted ? (
                <>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-1">
                    Get the Free Checklist
                  </h3>
                  <p className="text-sm text-foreground-muted font-light mb-6">
                    15 points · 5 minutes · Instant access
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-foreground-muted uppercase tracking-[0.15em] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="First name"
                        required
                        className="w-full bg-bg-alt border border-[rgba(26,21,16,0.08)] rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground-faint focus:outline-none focus:border-primary/40 focus:bg-white transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground-muted uppercase tracking-[0.15em] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        required
                        className="w-full bg-bg-alt border border-[rgba(26,21,16,0.08)] rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground-faint focus:outline-none focus:border-primary/40 focus:bg-white transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground-muted uppercase tracking-[0.15em] mb-1.5">
                        Phone <span className="font-normal normal-case">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(218) 000-0000"
                        className="w-full bg-bg-alt border border-[rgba(26,21,16,0.08)] rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-foreground-faint focus:outline-none focus:border-primary/40 focus:bg-white transition-all duration-200"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="group w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover disabled:opacity-70 text-white font-semibold text-sm py-3.5 rounded-full transition-all duration-300 mt-2"
                      style={{ boxShadow: '0 2px 12px rgba(30,61,46,0.2)' }}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending…
                        </span>
                      ) : (
                        <>
                          Send Me the Free Checklist
                          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-foreground-faint pt-1">
                      No spam. Unsubscribe anytime.{' '}
                      <a href="#" className="underline hover:text-foreground-muted transition-colors">
                        Privacy Policy
                      </a>
                    </p>
                  </form>
                </>
              ) : (
                <div className="py-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mb-4">
                    <CheckCircle2 size={26} className="text-primary" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                    You&apos;re on the list.
                  </h3>
                  <p className="text-sm text-foreground-muted font-light leading-relaxed">
                    Check your inbox — the checklist is on its way. If you don&apos;t see it in
                    5 minutes, check your spam folder.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
