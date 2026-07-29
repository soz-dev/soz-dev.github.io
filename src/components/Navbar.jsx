import { useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Services',  href: '#services'  },
  { label: 'Projets',   href: '#projets'   },
  { label: 'Tarifs',    href: '#tarifs'    },
  { label: 'Contact',   href: '#contact'   },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm py-4"
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
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 hover:text-gray-900 transition-colors duration-200 tracking-wide font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 px-5 py-2 text-sm font-medium rounded-full border border-purple-400/60 text-purple-600 hover:border-purple-500 hover:text-purple-700 transition-all duration-300"
        >
          Me contacter
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-gray-800 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-gray-800 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-gray-800 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-slate-600 hover:text-gray-900 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-purple-600 hover:text-purple-700 font-medium"
          >
            Me contacter →
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}
