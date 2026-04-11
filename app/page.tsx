"use client"

import CTA from '@/components/cta/Cta'
import Features from '@/components/features/Feature'
import Hero from '@/components/home/Hero'
import How from '@/components/how/How'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Stats from '@/components/stats/Stats'
import Stories from '@/components/stories/Stories'

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Stats />
        <Stories />
        <How />
        <Features />
        <CTA />
        <Footer />
      </main>
    </>
  )
}
