import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, X, Check } from 'lucide-react'
import { PALETTES, applyPalette, initPalette, PALETTE_STORAGE_KEY, DEFAULT_PALETTE } from '../design-system/themes'

/**
 * Sélecteur de palette — flottant.
 * Montre au visiteur qu’un site peut être relooké en un clic.
 */
export default function ThemePicker({ compact = false }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(DEFAULT_PALETTE)

  useEffect(() => {
    const p = initPalette()
    setActive(p.id)
  }, [])

  const select = (id) => {
    applyPalette(id)
    setActive(id)
  }

  return (
    <div className={`fixed z-50 ${compact ? 'bottom-4 left-4' : 'bottom-24 left-4 md:bottom-6'}`}>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-[min(100vw-2rem,320px)] rounded-2xl border border-gray-200 dark:border-white/10 bg-white/95 dark:bg-[#0a0f1a]/95 backdrop-blur-xl shadow-xl p-4"
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <div>
                <p className="font-display text-sm font-bold text-gray-900 dark:text-white">Personnalisez le site</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Testez un gradient — comme pour votre futur site.</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-gray-900 dark:hover:text-white"
                aria-label="Fermer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {PALETTES.map(p => {
                const selected = active === p.id
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => select(p.id)}
                    className={`relative text-left rounded-xl p-2.5 border transition-all ${
                      selected
                        ? 'border-brand-500 ring-2 ring-brand-500/30 bg-brand-500/5'
                        : 'border-gray-100 dark:border-white/8 hover:border-gray-200 dark:hover:border-white/15'
                    }`}
                  >
                    <div
                      className="h-8 rounded-lg mb-2"
                      style={{ background: `linear-gradient(135deg, ${p.brand[500]}, ${p.accent[500]})` }}
                    />
                    <div className="flex items-center justify-between gap-1">
                      <div>
                        <p className="text-xs font-semibold text-gray-900 dark:text-white">{p.name}</p>
                        <p className="text-[10px] text-slate-400">{p.blurb}</p>
                      </div>
                      {selected && <Check size={14} className="text-brand-500 shrink-0" />}
                    </div>
                  </button>
                )
              })}
            </div>

            <p className="text-[10px] text-slate-400 mt-3 font-mono text-center">
              Choix mémorisé · {PALETTE_STORAGE_KEY}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-semibold shadow-lg hover:scale-[1.03] transition-transform"
        aria-expanded={open}
        aria-label="Changer la palette de couleurs"
      >
        <span
          className="w-4 h-4 rounded-full shrink-0 border border-white/30"
          style={{ background: 'var(--ds-gradient-brand)' }}
        />
        <Palette size={14} />
        Couleurs
      </button>
    </div>
  )
}
