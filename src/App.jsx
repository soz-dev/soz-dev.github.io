import { useState, useEffect, lazy, Suspense } from 'react'

const AdminApp = lazy(() => import('./pages/AdminApp'))
const IS_ADMIN = typeof window !== 'undefined' && window.location.search.includes('mode=admin')

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Services from "./components/Services"
import Stack from "./components/Stack"
import Process from "./components/Process"
import DevisPublic from "./components/DevisPublic"
import About from "./components/About"
import Projects from "./components/Projects"
import WebShowcase from "./components/WebShowcase"
import Pricing from "./components/Pricing"
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"
import PhrasesMarquee from "./components/PhrasesMarquee"
import Footer from "./components/Footer"

export default function App() {
  // Admin mode: https://soz-dev.com/?mode=admin
  if (IS_ADMIN) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-[#0a0a12]" />}>
        <AdminApp />
      </Suspense>
    )
  }

  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className="min-h-screen bg-white dark:bg-[#030712]">
      <Navbar isDark={isDark} toggleDark={() => setIsDark(d => !d)} />
      <Hero />
      <Stats />
      <Services />
      <Stack />
      <Process />
      <DevisPublic />
      <About />
      <Projects />
      <WebShowcase />
      <Pricing />
      <FAQ />
      <Contact />
      <PhrasesMarquee />
      <Footer />
    </div>
  )
}
