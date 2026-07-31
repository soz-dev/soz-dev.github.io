import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import ThemePicker from './ThemePicker'
import BrandLogo from './BrandLogo'
import { BRAND_NAME, NAV_LINKS } from '../lib/brand'

const navClass = ({ isActive }) =>
  `text-xs tracking-wide font-medium whitespace-nowrap transition-colors duration-200 ${
    isActive
      ? 'text-brand-500 dark:text-brand-400'
      : 'text-slate-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
  }`

function ThemeToggle({ isDark, toggleDark, className = '' }) {
  return (
    <button
      type="button"
      onClick={toggleDark}
      className={`w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-gray-300 dark:hover:border-white/20 hover:text-gray-900 dark:hover:text-white transition-all duration-200 ${className}`}
      aria-label="Changer le thème"
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  )
}

function DevisLink({ className = '' }) {
  return (
    <Link
      to="/devis"
      className={`rounded-full bg-gradient-to-r from-brand-600 to-accent-500 text-white text-xs font-semibold hover:opacity-90 transition-opacity ${className}`}
    >
      Devis
    </Link>
  )
}

export default function Navbar({ isDark, toggleDark }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 overflow-visible bg-white/90 dark:bg-[#0a0a12]/90 backdrop-blur-md border-b border-gray-100 dark:border-white/5 shadow-sm dark:shadow-none py-3"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-3 overflow-visible">
        <Link
          to="/"
          className="flex items-center shrink-0 overflow-visible py-0.5"
          aria-label={`${BRAND_NAME}, accueil`}
        >
          <BrandLogo variant="lockup" />
        </Link>

        <div className="hidden md:flex items-center gap-4">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={navClass}>
              {link.label}
            </NavLink>
          ))}
          <ThemePicker variant="nav" />
          <ThemeToggle isDark={isDark} toggleDark={toggleDark} />
          <DevisLink className="px-5 py-2" />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemePicker variant="nav" />
          <ThemeToggle isDark={isDark} toggleDark={toggleDark} />
          <DevisLink className="px-4 py-2" />
          <button
            type="button"
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
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium py-1 ${isActive ? 'text-brand-500' : 'text-slate-600 dark:text-slate-400'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
