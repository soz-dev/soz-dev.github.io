import { useState, useEffect } from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Services from "./components/Services"
import Process from "./components/Process"
import About from "./components/About"
import Stack from "./components/Stack"
import Projects from "./components/Projects"
import Pricing from "./components/Pricing"
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
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
      <Process />
      <About />
      <Stack />
      <Projects />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
