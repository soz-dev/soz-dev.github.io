import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StickyCta from '../components/StickyCta'
import PageTransition from '../components/motion/PageTransition'
import ScrollProgress from '../components/motion/ScrollProgress'

export default function PublicLayout() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className="min-h-screen bg-white dark:bg-[#030712] pb-20 md:pb-0">
      <ScrollProgress />
      <Navbar isDark={isDark} toggleDark={() => setIsDark(d => !d)} />
      <main>
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
