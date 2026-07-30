import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Projets', href: '#projets' },
]

export default function Navbar({ isDark, toggleDark }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#0a0a12]/90 backdrop-blur-md border-b border-gray-100 dark:border-white/5 shadow-sm dark:shadow-none py-3.5"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="gradient-text select-none"
          style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '0.95rem', letterSpacing: '0.1em' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          SOZ_DEV
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-slate-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 tracking-wide font-medium whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleDark}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-gray-300 dark:hover:border-white/20 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
            aria-label="Changer le thème"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a
            href="#devis"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-semibold hover:opacity-90 transition-opacity"
          >
            Devis
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDark}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 dark:border-white/10 text-slate-500 dark:text-slate-400"
            aria-label="Changer le thème"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a
            href="#devis"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-semibold"
          >
            Devis
          </a>
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-5 h-px bg-gray-800 dark:bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-px bg-gray-800 dark:bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-gray-800 dark:bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-[#0a0a12] border-t border-gray-100 dark:border-white/5 px-6 py-4 flex flex-col gap-3"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white font-medium py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#faq"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-slate-600 dark:text-slate-400 font-medium py-1"
          >
            FAQ
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}
