import { useState, useEffect, lazy, Suspense } from 'react'

const AdminApp = lazy(() => import('./pages/AdminApp'))

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EstimateurRapide from './components/EstimateurRapide'
import Services from './components/Services'
import Process from './components/Process'
import WebShowcase from './components/WebShowcase'
import Pricing from './components/Pricing'
import Garanties from './components/Garanties'
import DevisPublic from './components/DevisPublic'
import Projects from './components/Projects'
import About from './components/About'
import FAQ from './components/FAQ'
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
      <Hero />
      <EstimateurRapide />
      <Services />
      <WebShowcase />
      <Pricing />
      <Garanties />
      <DevisPublic />
      <Projects />
      <Process />
      <About />
      <FAQ />
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
