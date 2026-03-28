import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#fafaf8',
        'bg-alt': '#f0ebe3',
        'bg-deep': '#e5ddd3',
        foreground: '#1a1510',
        'foreground-muted': '#6b6058',
        'foreground-faint': '#a89890',
        primary: '#1e3d2e',
        'primary-hover': '#2a5440',
        'primary-light': '#e8f0eb',
        accent: '#c97b3a',
        'accent-hover': '#b86c2d',
        'accent-light': '#f7ede0',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'blur-in': {
          '0%': { filter: 'blur(12px)', opacity: '0', transform: 'translateY(8px)' },
          '100%': { filter: 'blur(0)', opacity: '1', transform: 'translateY(0)' },
        },
        'scroll-down': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'scroll-up': {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'nav-enter': {
          '0%': { opacity: '0', transform: 'translateY(-12px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.85)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'blur-in': 'blur-in 0.8s ease-out forwards',
        'scroll-down': 'scroll-down 38s linear infinite',
        'scroll-up': 'scroll-up 38s linear infinite',
        'nav-enter': 'nav-enter 0.6s ease-out forwards',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.7s ease-out forwards',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}

export default config
