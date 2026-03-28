import Navbar from '@/components/rblaunch/Navbar'
import Hero from '@/components/rblaunch/Hero'
import TrustBar from '@/components/rblaunch/TrustBar'
import Problem from '@/components/rblaunch/Problem'
import Offer from '@/components/rblaunch/Offer'
import HowItWorks from '@/components/rblaunch/HowItWorks'
import Results from '@/components/rblaunch/Results'
import About from '@/components/rblaunch/About'
import Testimonials from '@/components/rblaunch/Testimonials'
import CTABanner from '@/components/rblaunch/CTABanner'
import Newsletter from '@/components/rblaunch/Newsletter'
import Footer from '@/components/rblaunch/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Problem />
      <Offer />
      <HowItWorks />
      <Results />
      <About />
      <Testimonials />
      <CTABanner />
      <Newsletter />
      <Footer />
    </main>
  )
}
