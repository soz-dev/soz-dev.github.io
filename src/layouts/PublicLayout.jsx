import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StickyCta from '../components/StickyCta'

export default function PublicLayout() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className="min-h-screen bg-white dark:bg-[#030712] pb-20 md:pb-0">
      <Navbar isDark={isDark} toggleDark={() => setIsDark(d => !d)} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyCta />
    </div>
  )
}
