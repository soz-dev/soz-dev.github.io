import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, Check } from 'lucide-react'
import { PALETTES, applyPalette, initPalette, DEFAULT_PALETTE } from '../design-system/themes'

/**
 * Sélecteur de palette dans la navbar (en haut).
 */
export default function ThemePicker({ variant = 'nav' }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(DEFAULT_PALETTE)
  const ref = useRef(null)

  useEffect(() => {
    const p = initPalette()
    setActive(p.id)
  }, [])

  useEffect(() => {
    if (!open) return
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [open])

  const select = (id) => {
    applyPalette(id)
    setActive(id)
  }

  const isNav = variant === 'nav'

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className={
          isNav
            ? 'w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-brand-500/40 hover:text-gray-900 dark:hover:text-white transition-all'
            : 'inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-semibold shadow-lg'
        }
        aria-expanded={open}
        aria-label="Changer la palette de couleurs"
        title="Couleurs"
      >
        <span
          className="w-4 h-4 rounded-full shrink-0 border border-black/10 dark:border-white/30"
          style={{ background: 'var(--ds-gradient-brand)' }}
        />
        {!isNav && (
          <>
            <Palette size={14} />
            Couleurs
          </>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className={`absolute z-[60] mt-2 w-[min(100vw-2rem,300px)] rounded-2xl border border-gray-200 dark:border-white/10 bg-white/95 dark:bg-[#0a0f1a]/95 backdrop-blur-xl shadow-xl p-3.5 ${
              isNav ? 'right-0' : 'left-0'
            }`}
          >
            <p className="font-display text-sm font-bold text-gray-900 dark:text-white mb-0.5 px-0.5">
              Personnalisez
            </p>
            <p className="text-[11px] text-slate-500 mb-3 px-0.5">
              Testez un gradient, comme pour votre futur site.
            </p>

            <div className="grid grid-cols-2 gap-2">
              {PALETTES.map(p => {
                const selected = active === p.id
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => select(p.id)}
                    className={`relative text-left rounded-xl p-2 border transition-all ${
                      selected
                        ? 'border-brand-500 ring-2 ring-brand-500/30 bg-brand-500/5'
                        : 'border-gray-100 dark:border-white/8 hover:border-gray-200 dark:hover:border-white/15'
                    }`}
                  >
                    <div
                      className="h-7 rounded-md mb-1.5"
                      style={{ background: `linear-gradient(135deg, ${p.brand[500]}, ${p.accent[500]})` }}
                    />
                    <div className="flex items-center justify-between gap-1">
                      <div>
                        <p className="text-[11px] font-semibold text-gray-900 dark:text-white leading-tight">{p.name}</p>
                        <p className="text-[9px] text-slate-400">{p.blurb}</p>
                      </div>
                      {selected && <Check size={12} className="text-brand-500 shrink-0" />}
                    </div>
                  </button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
