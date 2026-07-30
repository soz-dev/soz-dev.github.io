import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

const links = [
  { label: 'Services',  href: '#services'  },
  { label: 'Projets',   href: '#projets'   },
  { label: 'Tarifs',    href: '#tarifs'    },
  { label: 'Devis',     href: '#devis'     },
  { label: 'FAQ',       href: '#faq'       },
  { label: 'Contact',   href: '#contact'   },
]

export default function Navbar({ isDark, toggleDark }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0a0a12] border-b border-gray-100 dark:border-white/5 shadow-sm dark:shadow-none py-4"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="gradient-text select-none"
          style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '0.95rem', letterSpacing: '0.1em' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          SOZ_DEV
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-slate-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 tracking-wide font-medium whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleDark}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-gray-300 dark:hover:border-white/20 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
            aria-label="Changer le thème"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile/tablet right: toggle + hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleDark}
            className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 dark:border-white/10 text-slate-500 dark:text-slate-400"
            aria-label="Changer le thème"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

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

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white dark:bg-[#0a0a12] border-t border-gray-100 dark:border-white/5 px-6 py-4 grid grid-cols-2 gap-x-8 gap-y-4"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="col-span-2 pt-2 border-t border-gray-100 dark:border-white/5">
            <button
              onClick={() => { toggleDark(); setMenuOpen(false) }}
              className="text-sm text-slate-500 dark:text-slate-400 font-medium"
            >
              {isDark ? '☀️ Mode clair' : '🌙 Mode sombre'}
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
