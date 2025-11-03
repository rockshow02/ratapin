'use client'

import Header from '@/components/Header'
import HomeSection from '@/components/HomeSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}