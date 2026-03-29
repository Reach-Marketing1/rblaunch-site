'use client'

import { useEffect, useRef } from 'react'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Mark Hendrickson',
    city: 'Brainerd, MN',
    rating: 5,
    service: 'HVAC',
    quote:
      "We went from zero Google reviews to 14 in six weeks. The phone hasn't stopped. Ryan handled everything — I just showed up and did the work.",
  },
  {
    name: 'Dale Sorenson',
    city: 'Baxter, MN',
    rating: 5,
    service: 'Roofing',
    quote:
      "I was skeptical about social media for a roofing company. Three months in, I booked four jobs directly from Facebook. Paid for itself in week two.",
  },
  {
    name: 'Kevin Larson',
    city: 'Little Falls, MN',
    rating: 5,
    service: 'Concrete',
    quote:
      "The missed-call text-back alone was worth it. I was losing bids just because I couldn't answer the phone on the job site. Not anymore.",
  },
  {
    name: 'Jim Paulson',
    city: 'Staples, MN',
    rating: 5,
    service: 'Home Inspection',
    quote:
      "Ryan knows trade businesses. He's not guessing at what content works — he just knows. Our Google profile went from invisible to top 3 in two months.",
  },
  {
    name: 'Brad Mueller',
    city: 'Nisswa, MN',
    rating: 5,
    service: 'Flooring',
    quote:
      "I've tried two other marketing companies. Both overpromised and underdelivered. Ryan is the opposite — understates and overdelivers every single month.",
  },
  {
    name: 'Tom Anderson',
    city: 'Pequot Lakes, MN',
    rating: 5,
    service: 'Plumbing',
    quote:
      "Best ROI of anything I've spent money on in 15 years of running this business. One job covered three months of retainer. The calls kept coming.",
  },
  {
    name: 'Rick Jenson',
    city: 'Crosslake, MN',
    rating: 5,
    service: 'Electrical',
    quote:
      "Setup was painless. Ryan built the whole system in a week. By week two we had new Google activity, new followers, and a lead came in from the chatbot while I was on a job.",
  },
  {
    name: 'Scott Torgerson',
    city: 'Aitkin, MN',
    rating: 5,
    service: 'HVAC',
    quote:
      "The referral system is something I wish I'd had years ago. Customers actually follow through now. Simple, automatic, and it works exactly as advertised.",
  },
  {
    name: 'Mike Halverson',
    city: 'Wadena, MN',
    rating: 5,
    service: 'Landscaping',
    quote:
      "You can tell Ryan grew up around this industry. He doesn't need a long explanation of what we do or why it matters — he gets it immediately. Makes everything easier.",
  },
]

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <div
      className="bg-white rounded-3xl p-6 mb-4 hover:scale-[1.02] transition-transform duration-300"
      style={{
        boxShadow:
          'rgba(14,63,126,0.04) 0px 0px 0px 1px, rgba(42,51,69,0.04) 0px 1px 1px -0.5px, rgba(42,51,70,0.04) 0px 3px 3px -1.5px, rgba(42,51,70,0.04) 0px 6px 6px -3px, rgba(14,63,126,0.04) 0px 12px 12px -6px',
      }}
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={12} className="fill-accent text-accent" />
        ))}
      </div>

      {/* Quote */}
      <p className="font-playfair text-base text-foreground leading-relaxed mb-4">
        &ldquo;{review.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">{review.name}</p>
          <p className="text-xs text-foreground-muted">{review.city}</p>
        </div>
        <span className="text-xs font-medium bg-primary-light text-primary px-2.5 py-1 rounded-full">
          {review.service}
        </span>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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

  // Split reviews into 3 columns (with duplicates for seamless loop)
  const col1 = [...reviews.slice(0, 3), ...reviews.slice(0, 3)]
  const col2 = [...reviews.slice(3, 6), ...reviews.slice(3, 6)]
  const col3 = [...reviews.slice(6, 9), ...reviews.slice(6, 9)]

  return (
    <section ref={sectionRef} className="py-24 bg-bg-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="blur-in-el text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-4">
            What Clients Say
          </p>
          <h2
            className="blur-in-el font-playfair text-4xl md:text-5xl font-semibold text-balance text-foreground leading-[1.1] mb-5"
            style={{ transitionDelay: '180ms' }}
          >
            Trade owners across{' '}
            <em className="text-primary">Minnesota</em>
          </h2>
          <p
            className="blur-in-el text-base text-foreground-muted font-light leading-relaxed"
            style={{ transitionDelay: '360ms' }}
          >
            HVAC technicians, roofers, concrete guys, home inspectors — here&apos;s what they say
            after working with The Trade Flow System.
          </p>
        </div>

        {/* Mobile: single scrolling column */}
        <div className="relative h-[500px] overflow-hidden md:hidden">
          <div className="absolute top-0 left-0 right-0 h-20 z-10 pointer-events-none bg-gradient-to-b from-bg-alt to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-20 z-10 pointer-events-none bg-gradient-to-t from-bg-alt to-transparent" />
          <div className="testimonial-col-down">
            {[...reviews, ...reviews].map((review, i) => (
              <ReviewCard key={`mob-${i}`} review={review} />
            ))}
          </div>
        </div>

        {/* Desktop: 3-column scroll */}
        <div className="relative h-[620px] overflow-hidden hidden md:block">
          {/* Top gradient mask */}
          <div className="absolute top-0 left-0 right-0 h-28 z-10 pointer-events-none bg-gradient-to-b from-bg-alt to-transparent" />
          {/* Bottom gradient mask */}
          <div className="absolute bottom-0 left-0 right-0 h-28 z-10 pointer-events-none bg-gradient-to-t from-bg-alt to-transparent" />

          <div className="grid grid-cols-3 gap-5 h-full">
            {/* Column 1 — scrolls down */}
            <div className="relative overflow-hidden">
              <div className="testimonial-col-down">
                {col1.map((review, i) => (
                  <ReviewCard key={`c1-${i}`} review={review} />
                ))}
              </div>
            </div>

            {/* Column 2 — scrolls up */}
            <div className="relative overflow-hidden">
              <div className="testimonial-col-up">
                {col2.map((review, i) => (
                  <ReviewCard key={`c2-${i}`} review={review} />
                ))}
              </div>
            </div>

            {/* Column 3 — scrolls down */}
            <div className="relative overflow-hidden">
              <div className="testimonial-col-down">
                {col3.map((review, i) => (
                  <ReviewCard key={`c3-${i}`} review={review} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
