'use client'

import { useEffect, useRef } from 'react'
import { Clock, Shield, TrendingUp } from 'lucide-react'

const valueProps = [
  {
    icon: Clock,
    title: 'No Sales Pitch',
    body: '15 minutes. Straight talk. I\'ll tell you honestly if this will work for your business.',
  },
  {
    icon: Shield,
    title: 'Limited Spots',
    body: 'I take on a small number of clients at a time so I can actually deliver for each one.',
  },
  {
    icon: TrendingUp,
    title: 'Results First',
    body: "You'll see real movement — followers, Google activity, live systems — in the first two weeks.",
  },
]

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const banner = entry.target.querySelector('.cta-banner-inner')
            if (banner) {
              ; (banner as HTMLElement).style.transition = 'opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16,1,0.3,1)'
              ; (banner as HTMLElement).style.opacity = '1'
              ; (banner as HTMLElement).style.transform = 'scale(1)'
            }
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80)
            })
            entry.target.querySelectorAll('.blur-in-el').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 180)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-background px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="cta-banner-inner relative rounded-3xl overflow-hidden min-h-[460px] flex items-center"
          style={{
            opacity: 0,
            transform: 'scale(0.97)',
            boxShadow:
              'rgba(14,63,126,0.06) 0px 0px 0px 1px, rgba(42,51,70,0.05) 0px 8px 16px -4px, rgba(14,63,126,0.05) 0px 32px 64px -16px',
          }}
        >
          {/* Background image */}
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80"
            alt="Trade professional on roof"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />

          {/* Content */}
          <div className="relative z-10 w-full px-8 md:px-14 py-14">
            <div className="max-w-2xl">
              <p className="blur-in-el text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-5">
                Ready to grow?
              </p>
              <h2
                className="blur-in-el font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-balance leading-[1.1] mb-6"
                style={{ transitionDelay: '180ms' }}
              >
                Ready to stop losing jobs to competitors who show up online?
              </h2>
              <p
                className="blur-in-el text-white/70 font-light text-base mb-8 max-w-lg leading-relaxed"
                style={{ transitionDelay: '300ms' }}
              >
                Book a free 15-minute call — no pitch, just a straight conversation about whether
                this is the right fit.
              </p>
              <div className="reveal">
                <a
                  href="https://calendly.com/ryankbeach05/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-white hover:bg-primary-light text-primary font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300"
                  style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.15)' }}
                >
                  Book a Free Call
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>

            {/* Value props — bottom right */}
            <div className="reveal absolute bottom-10 right-8 md:right-14 hidden lg:grid grid-cols-3 gap-3 max-w-lg">
              {valueProps.map((vp) => {
                const Icon = vp.icon
                return (
                  <div
                    key={vp.title}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4"
                  >
                    <Icon size={16} className="text-accent mb-2" strokeWidth={1.75} />
                    <p className="text-white text-xs font-semibold mb-1">{vp.title}</p>
                    <p className="text-white/60 text-xs leading-relaxed font-light">{vp.body}</p>
                  </div>
                )
              })}
            </div>

            {/* Mobile value props */}
            <div className="reveal mt-8 grid grid-cols-1 gap-3 lg:hidden">
              {valueProps.map((vp) => {
                const Icon = vp.icon
                return (
                  <div
                    key={vp.title}
                    className="flex items-start gap-2.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-3.5"
                  >
                    <Icon size={15} className="text-accent mt-0.5 flex-shrink-0" strokeWidth={1.75} />
                    <div>
                      <p className="text-white text-xs font-semibold mb-0.5">{vp.title}</p>
                      <p className="text-white/60 text-xs leading-relaxed font-light">{vp.body}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
