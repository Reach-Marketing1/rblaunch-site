'use client'

import { useEffect, useRef, useState } from 'react'
import {
  Instagram, Star, Search, Share2, PhoneCall,
  Megaphone, BarChart2, Gift, CheckCircle2
} from 'lucide-react'

const categories = ['All', 'Social', 'Google', 'Automation', 'Ads']

const services = [
  {
    icon: Instagram,
    name: 'Social Media Content',
    desc: 'Facebook & Instagram. You film a quick clip on the job site — I write it, caption it, optimize it, and post it. Your face, your work, my strategy.',
    category: 'Social',
    badge: 'Core',
    badgeColor: 'bg-primary-light text-primary',
  },
  {
    icon: Search,
    name: 'Google Business Profile',
    desc: 'Regular posts, photo updates, Q&A management, and review response. Your profile stays active, which Google rewards with better rankings.',
    category: 'Google',
    badge: 'Core',
    badgeColor: 'bg-primary-light text-primary',
  },
  {
    icon: Gift,
    name: 'Post Playbook',
    desc: 'A curated set of ready-to-use post ideas built for your trade — real examples of exactly what to put on Facebook or Instagram to start getting attention.',
    category: 'Social',
    badge: 'Bonus',
    badgeColor: 'bg-accent-light text-accent',
  },
  {
    icon: Share2,
    name: 'Referral System',
    desc: 'A simple funnel that makes it easy for happy customers to refer you. Set up once, works in the background every month.',
    category: 'Automation',
    badge: 'Core',
    badgeColor: 'bg-primary-light text-primary',
  },
  {
    icon: PhoneCall,
    name: 'Missed Call Text-Back',
    desc: "You miss a call on the job site. Two minutes later, they get a text automatically. A chatbot handles basic questions and keeps them engaged until you can follow up.",
    category: 'Automation',
    badge: 'Core',
    badgeColor: 'bg-primary-light text-primary',
  },
  {
    icon: Megaphone,
    name: 'Meta Ads Management',
    desc: 'Targeted Facebook and Instagram ad campaigns built around your trade, your area, and the jobs you want more of.',
    category: 'Ads',
    badge: 'Core',
    badgeColor: 'bg-primary-light text-primary',
  },
  {
    icon: BarChart2,
    name: 'Lead Automation',
    desc: 'Full pipeline follow-up system — from first contact to booking, automated so no lead slips through the cracks.',
    category: 'Automation',
    badge: 'Pro',
    badgeColor: 'bg-foreground/5 text-foreground-muted',
  },
  {
    icon: CheckCircle2,
    name: 'Monthly Reporting',
    desc: "Plain-language monthly update on what's happening with your online presence — no jargon, no vanity metrics.",
    category: 'All',
    badge: 'Included',
    badgeColor: 'bg-bg-deep text-foreground-muted',
  },
]

export default function Offer() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeTab, setActiveTab] = useState('All')
  const [visible, setVisible] = useState(true)
  const [tabLeft, setTabLeft] = useState(4)
  const [tabWidth, setTabWidth] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const filtered = activeTab === 'All' ? services : services.filter((s) => s.category === activeTab)

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
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Calculate sliding pill position
  useEffect(() => {
    const idx = categories.indexOf(activeTab)
    const btn = tabRefs.current[idx]
    if (btn) {
      setTabLeft(btn.offsetLeft)
      setTabWidth(btn.offsetWidth)
    }
  }, [activeTab])

  const handleTabChange = (cat: string) => {
    setVisible(false)
    setTimeout(() => {
      setActiveTab(cat)
      setVisible(true)
    }, 180)
  }

  return (
    <section ref={sectionRef} id="offer" className="py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="blur-in-el text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-4">
            The Offer
          </p>
          <h2
            className="blur-in-el font-playfair text-4xl md:text-5xl font-semibold text-balance text-foreground leading-[1.1] mb-5"
            style={{ transitionDelay: '180ms' }}
          >
            Everything your online presence needs —{' '}
            <em className="text-primary">done for you</em>
          </h2>
          <p
            className="blur-in-el text-base text-foreground-muted font-light leading-relaxed"
            style={{ transitionDelay: '360ms' }}
          >
            You run jobs. I run your marketing using{' '}
            <strong className="font-medium text-foreground">The Booked Out Blueprint</strong> — a
            proven process that keeps your social media active, your Google profile growing, and new
            leads following up automatically every month.
          </p>
        </div>

        {/* Category filter pill control */}
        <div className="reveal mb-8 w-full overflow-x-auto pb-1 -mb-1">
          <div
            className="relative flex items-center bg-background rounded-full p-1 border border-[rgba(26,21,16,0.08)] w-max"
            style={{ boxShadow: 'rgba(14,63,126,0.04) 0px 0px 0px 1px, rgba(42,51,70,0.04) 0px 2px 4px -1px' }}
          >
            {/* Sliding background pill */}
            <div
              className="absolute rounded-full bg-primary transition-all duration-300 ease-out"
              style={{
                left: tabLeft,
                width: tabWidth,
                top: 4,
                bottom: 4,
              }}
            />
            {categories.map((cat, i) => (
              <button
                key={cat}
                ref={(el) => { tabRefs.current[i] = el }}
                onClick={() => handleTabChange(cat)}
                className={`relative z-10 px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                  activeTab === cat ? 'text-white' : 'text-foreground-muted hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 transition-opacity duration-200 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {filtered.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.name}
                className="group bg-white rounded-3xl p-6 hover:scale-[1.02] transition-all duration-300 cursor-default flex flex-col"
                style={{
                  boxShadow:
                    'rgba(14,63,126,0.04) 0px 0px 0px 1px, rgba(42,51,69,0.04) 0px 1px 1px -0.5px, rgba(42,51,70,0.04) 0px 3px 3px -1.5px, rgba(42,51,70,0.04) 0px 6px 6px -3px, rgba(14,63,126,0.04) 0px 12px 12px -6px, rgba(14,63,126,0.04) 0px 24px 24px -12px',
                  animationDelay: `${i * 60}ms`,
                }}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-primary-light flex items-center justify-center">
                    <Icon size={18} className="text-primary" strokeWidth={1.75} />
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${service.badgeColor}`}>
                    {service.badge}
                  </span>
                </div>

                <h3 className="font-playfair text-base font-semibold text-foreground mb-2 leading-snug">
                  {service.name}
                </h3>
                <p className="text-xs text-foreground-muted leading-relaxed font-light flex-1">
                  {service.desc}
                </p>
              </div>
            )
          })}
        </div>

        {/* Pricing + CTA row */}
        <div className="reveal mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 bg-white rounded-3xl p-7"
          style={{
            boxShadow:
              'rgba(14,63,126,0.04) 0px 0px 0px 1px, rgba(42,51,69,0.04) 0px 1px 1px -0.5px, rgba(42,51,70,0.04) 0px 6px 6px -3px, rgba(14,63,126,0.04) 0px 24px 24px -12px',
          }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground-faint mb-1">
              Monthly Retainer
            </p>
            <p className="font-playfair text-3xl font-semibold text-foreground">
              $1,200 – $1,500
              <span className="text-base font-sans font-normal text-foreground-muted ml-2">/ month</span>
            </p>
            <p className="text-sm text-foreground-muted mt-1 font-light">
              Everything above included. No à la carte, no upsells.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://calendly.com/ryankbeach05/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-medium text-sm px-6 py-3 rounded-full transition-all duration-300"
              style={{ boxShadow: '0 2px 12px rgba(30,61,46,0.2)' }}
            >
              Book a Free Call
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center text-sm font-medium text-foreground-muted hover:text-foreground px-4 py-3 transition-colors"
            >
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
