'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'The System', href: '#offer' },
  { label: 'How It Works', href: '#process' },
  { label: 'Results', href: '#results' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 animate-nav-enter px-4 pt-3"
      style={{ animationFillMode: 'both' }}
    >
      <div
        className={`rounded-2xl border transition-all duration-500 ${
          scrolled
            ? 'bg-[rgba(250,250,248,0.92)] border-[rgba(26,21,16,0.1)] backdrop-blur-md'
            : 'bg-[rgba(255,255,255,0.55)] border-[rgba(255,255,255,0.5)] backdrop-blur-md'
        }`}
        style={{
          boxShadow: scrolled
            ? 'rgba(14,63,126,0.06) 0px 0px 0px 1px, rgba(42,51,70,0.05) 0px 4px 8px -2px, rgba(14,63,126,0.04) 0px 16px 32px -8px'
            : 'rgba(14,63,126,0.04) 0px 0px 0px 1px, rgba(42,51,70,0.04) 0px 2px 4px -1px',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative flex items-center h-[68px]">

            {/* Left — Nav Links */}
            <div className="hidden md:flex items-center gap-7 flex-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Center — Logo (absolute) */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <a href="#" className="flex items-baseline gap-0.5">
                <span className="font-playfair text-xl font-semibold tracking-tight text-foreground">
                  RB
                </span>
                <span className="font-playfair text-xl font-semibold tracking-tight text-primary">
                  Launch
                </span>
              </a>
            </div>

            {/* Right — CTA */}
            <div className="flex items-center gap-3 flex-1 justify-end">
              <a
                href="#checklist"
                className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-primary border border-primary/25 hover:bg-primary-light hover:border-primary/40 px-4 py-2 rounded-full transition-all duration-200"
              >
                Free Checklist
                <span className="text-accent">→</span>
              </a>

              {/* Mobile hamburger */}
              <button
                className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pb-5 pt-2 space-y-1 border-t border-[rgba(26,21,16,0.06)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-foreground/70 hover:text-foreground py-2.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#checklist"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-primary hover:bg-primary-hover px-5 py-2.5 rounded-full transition-colors duration-200"
              >
                Get Free Checklist →
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
