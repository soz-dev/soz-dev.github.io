import { useState, useEffect, lazy, Suspense } from 'react'

const AdminApp = lazy(() => import('./pages/AdminApp'))

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WebShowcase from './components/WebShowcase'
import Projects from './components/Projects'
import Process from './components/Process'
import Pricing from './components/Pricing'
import EstimateurRapide from './components/EstimateurRapide'
import Garanties from './components/Garanties'
import DevisPublic from './components/DevisPublic'
import FAQ from './components/FAQ'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StickyCta from './components/StickyCta'

function PublicApp() {
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
    <div className="min-h-screen bg-white dark:bg-[#030712] pb-20 md:pb-0">
      <Navbar isDark={isDark} toggleDark={() => setIsDark(d => !d)} />
      {/* Parcours conversion : découvrir → preuve → prix → devis */}
      <Hero />
      <Services />
      <WebShowcase />
      <Projects />
      <Process />
      <Pricing />
      <EstimateurRapide />
      <Garanties />
      <DevisPublic />
      <FAQ />
      <About />
      <Contact />
      <Footer />
      <StickyCta />
    </div>
  )
}

export default function App() {
  const isAdmin = typeof window !== 'undefined' && window.location.search.includes('mode=admin')

  if (isAdmin) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-[#0a0a12]" />}>
        <AdminApp />
      </Suspense>
    )
  }

  return <PublicApp />
}
