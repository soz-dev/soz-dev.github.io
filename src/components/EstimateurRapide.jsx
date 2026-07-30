import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react'
import { PRIX_BASE } from '../lib/pricingEngine'

const TYPES = [
  { id: 'site-vitrine', label: 'Landing', hint: '1 page', price: PRIX_BASE['site-vitrine'] },
  { id: 'site-vitrine-multi', label: 'Vitrine', hint: '2–5 pages', price: PRIX_BASE['site-vitrine-multi'] },
  { id: 'site-pro', label: 'Site Pro', hint: 'Complet', price: PRIX_BASE['site-pro'] },
  { id: 'ecommerce', label: 'Boutique Stripe', hint: 'Vente en ligne', price: PRIX_BASE.ecommerce },
  { id: 'app-web', label: 'App web', hint: 'Outil / dashboard', price: PRIX_BASE['app-web'], suffix: '+' },
  { id: 'app-ios', label: 'App iOS', hint: 'Native Swift', price: PRIX_BASE['app-ios'], suffix: '+' },
]

const SCOPES = [
  {
    id: 'essentiel',
    label: 'Essentiel',
    desc: 'Le nécessaire pour démarrer vite',
    mult: 1,
  },
  {
    id: 'complet',
    label: 'Complet',
    desc: 'Options utiles (SEO, formulaires…)',
    mult: 1.15,
  },
  {
    id: 'premium',
    label: 'Premium',
    desc: 'Plus de pages / features',
    mult: 1.35,
  },
]

function fmt(n) {
  return n.toLocaleString('fr-FR')
}

export default function EstimateurRapide() {
  const [step, setStep] = useState(0)
  const [typeId, setTypeId] = useState(null)
  const [scopeId, setScopeId] = useState(null)

  const type = TYPES.find(t => t.id === typeId)
  const scope = SCOPES.find(s => s.id === scopeId)
  const estimate = type && scope
    ? Math.round(type.price * scope.mult / 10) * 10
    : null

  const reset = () => {
    setStep(0)
    setTypeId(null)
    setScopeId(null)
  }

  return (
    <section id="estimateur" className="py-20 md:py-28 bg-gray-50/60 dark:bg-white/[0.02]">
      <div className="max-w-3xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-mono text-purple-400 tracking-[0.3em] uppercase mb-4 block">
            Estimation rapide
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Ton prix en 3 clics
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">
            Indication sous le marché — devis détaillé en 2 minutes.
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 mb-8">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === step ? 'w-8 bg-purple-500' : i < step ? 'w-5 bg-cyan-400' : 'w-5 bg-gray-200 dark:bg-white/10'
              }`}
            />
          ))}
        </div>

        <div className="glass rounded-2xl border border-gray-100 dark:border-white/5 p-6 md:p-8 min-h-[280px]">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="type"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4">1. Type de projet</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {TYPES.map(t => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => { setTypeId(t.id); setStep(1) }}
                      className={`text-left p-4 rounded-xl border transition-all duration-200 hover:scale-[1.02] ${
                        typeId === t.id
                          ? 'border-purple-500 bg-purple-50 dark:bg-purple-500/10'
                          : 'border-gray-200 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-500/40'
                      }`}
                    >
                      <span className="block text-sm font-semibold text-gray-900 dark:text-white">{t.label}</span>
                      <span className="block text-xs text-slate-500 mt-0.5">{t.hint}</span>
                      <span className="block text-xs font-mono text-purple-500 mt-2">
                        dès {fmt(t.price)}€{t.suffix || ''}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="scope"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">2. Niveau de scope</p>
                <p className="text-xs text-slate-500 mb-4">{type?.label}</p>
                <div className="flex flex-col gap-3">
                  {SCOPES.map(s => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => { setScopeId(s.id); setStep(2) }}
                      className={`text-left p-4 rounded-xl border transition-all duration-200 hover:scale-[1.01] ${
                        scopeId === s.id
                          ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-500/10'
                          : 'border-gray-200 dark:border-white/10 hover:border-cyan-300 dark:hover:border-cyan-500/40'
                      }`}
                    >
                      <span className="block text-sm font-semibold text-gray-900 dark:text-white">{s.label}</span>
                      <span className="block text-xs text-slate-500 mt-0.5">{s.desc}</span>
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="mt-5 inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Retour
                </button>
              </motion.div>
            )}

            {step === 2 && estimate != null && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center py-4"
              >
                <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-500 mb-4">
                  <Sparkles className="w-3.5 h-3.5" /> Estimation indicative
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                  {type.label} · {scope.label}
                </p>
                <p className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                  ~{fmt(estimate)}€{type.suffix || ''}
                </p>
                <p className="text-xs text-slate-400 mb-8">
                  Acompte 30 % · solde à la livraison · 1 mois de support
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="#devis"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all glow-purple"
                  >
                    Affiner mon devis
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={reset}
                    className="text-sm text-slate-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    Recommencer
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
