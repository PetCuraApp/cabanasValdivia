'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Cabins from '@/components/Cabins'
import Amenities from '@/components/Amenities'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Cabins />
      <Amenities />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
