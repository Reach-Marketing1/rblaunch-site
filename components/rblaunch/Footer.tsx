'use client'

const footerLinks = {
  Services: [
    { label: 'Social Media Management', href: '#offer' },
    { label: 'Google Business Profile', href: '#offer' },
    { label: 'Meta Ads Management', href: '#offer' },
    { label: 'Lead Automation', href: '#offer' },
    { label: 'Referral System', href: '#offer' },
    { label: 'Post Playbook', href: '#offer' },
  ],
  Company: [
    { label: 'About Ryan', href: '#about' },
    { label: 'How It Works', href: '#process' },
    { label: 'Results', href: '#results' },
    { label: 'The Trade Flow System', href: '#offer' },
  ],
  Support: [
    { label: 'Book a Free Call', href: 'https://calendly.com/ryankbeach05/15min' },
    { label: 'Send a Message', href: '#contact' },
    { label: 'Free Checklist', href: '#checklist' },
    { label: 'Privacy Policy', href: '#' },
  ],
}

const socialLinks = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-[rgba(26,21,16,0.08)] overflow-hidden">

      {/* Giant watermark */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-playfair font-bold text-foreground leading-none"
          style={{ fontSize: 'clamp(48px, 14vw, 260px)', opacity: 0.04, letterSpacing: '-0.04em', lineHeight: 0.85, maxWidth: '100%' }}
        >
          RBLAUNCH
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-baseline gap-0.5 mb-4">
              <span className="font-playfair text-2xl font-semibold text-foreground">RB</span>
              <span className="font-playfair text-2xl font-semibold text-primary">Launch</span>
            </a>
            <p className="text-sm text-foreground-muted font-light leading-relaxed mb-6 max-w-xs">
              You run the jobs.
              <br />
              We keep the calls coming.
            </p>
            <p className="text-xs text-foreground-faint mb-5">
              Brainerd Lakes Area, MN · Serving trade businesses across Central Minnesota
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-bg-alt border border-[rgba(26,21,16,0.08)] flex items-center justify-center text-foreground-muted hover:text-primary hover:border-primary/25 hover:bg-primary-light transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground-faint mb-4">
                {heading}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground-muted hover:text-foreground font-light transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[rgba(26,21,16,0.06)] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-foreground-faint">
            © 2026 RBLaunch. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-foreground-faint hover:text-foreground-muted transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-foreground-faint hover:text-foreground-muted transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
