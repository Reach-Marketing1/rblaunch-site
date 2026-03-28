'use client'

import { useEffect, useRef } from 'react'
import { Users, Zap, Clock, TrendingUp } from 'lucide-react'

const badges = [
  {
    icon: Users,
    title: '100% Trade Businesses',
    desc: 'We only work with contractors — no restaurants, no retail, no everyone else',
  },
  {
    icon: Zap,
    title: 'Done For You',
    desc: "You don't touch the marketing. You film a clip. We handle everything else",
  },
  {
    icon: Clock,
    title: '2 Weeks',
    desc: 'Average time to visible results — not months. Movement starts in week one',
  },
  {
    icon: TrendingUp,
    title: '1 Extra Job',
    desc: 'Covers your entire monthly investment. Everything after that is pure upside',
  },
]

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-bg-alt border-y border-[rgba(26,21,16,0.07)] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-[rgba(26,21,16,0.08)]">
          {badges.map((badge, i) => {
            const Icon = badge.icon
            return (
              <div
                key={badge.title}
                className={`reveal delay-${i * 80} flex flex-col items-start md:items-center md:text-center px-0 md:px-8`}
              >
                <div className="w-9 h-9 rounded-xl bg-primary-light flex items-center justify-center mb-3 flex-shrink-0">
                  <Icon size={16} className="text-primary" strokeWidth={2} />
                </div>
                <p className="text-sm font-semibold text-foreground mb-1">{badge.title}</p>
                <p className="text-xs text-foreground-muted leading-relaxed">{badge.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
