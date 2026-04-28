"use client"

import CTA from '@/components/cta/Cta'
import Features from '@/components/features/Feature'
import Hero from '@/components/home/Hero'
import How from '@/components/how/How'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Stats from '@/components/stats/Stats'
import Stories from '@/components/stories/Stories'
import Faces from '@/components/facebar/Facebar'
import Testimonials from '@/components/testimony/Testimony'
import UseCases from '@/components/usecase/Usecase'

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
        <Faces />
        {/* <Testimonials />
        <UseCases /> */}
        <CTA />

        <Footer />
      </main>
    </>
  )
}
