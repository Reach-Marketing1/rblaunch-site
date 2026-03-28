import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'RBLaunch — The Trade Flow System | Marketing for Trade Businesses',
  description:
    'Done-for-you social media, Google presence, and lead automation for HVAC, roofing, concrete, and home service businesses in the Brainerd Lakes Area, MN. You run the jobs. We keep the calls coming.',
  openGraph: {
    title: 'RBLaunch — You run the jobs. We keep the calls coming.',
    description:
      'The Trade Flow System — done-for-you online presence management for trade businesses in the Brainerd Lakes Area and beyond.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
