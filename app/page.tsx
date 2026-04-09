import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import TrustStrip from '@/components/home/TrustStrip'
import Feature from '@/components/features/Feature'
import UseCases from '@/components/home/UseCases'
import Testimonials from '@/components/home/Testimonials'
import Faces from '@/components/home/Faces'
import Footer from '@/components/layout/Footer'

export default function Home ()  {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustStrip />
        <Feature />
        <UseCases />
        <Testimonials />
        <Faces />
      </main>
      <Footer />
    </>
  )
}
