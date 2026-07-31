import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StickyCta from '../components/StickyCta'
import PageTransition from '../components/motion/PageTransition'
import ScrollProgress from '../components/motion/ScrollProgress'
import { initAnalytics } from '../lib/analytics'

export default function PublicLayout() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    initAnalytics()
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-[#030712] pb-20 md:pb-0">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-brand-600 focus:text-white focus:text-sm"
      >
        Aller au contenu
      </a>
      <ScrollProgress />
      <Navbar isDark={isDark} toggleDark={() => setIsDark(d => !d)} />
      <main id="main-content">
        <AnimatePresence mode="wait">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      <StickyCta />
    </div>
  )
}

