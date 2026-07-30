import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { PRIX_BASE } from '../lib/pricingEngine'
import { Link } from 'react-router-dom'

const TYPES = [
  { id: 'site-vitrine', label: 'Landing', hint: '1 page', price: PRIX_BASE['site-vitrine'] },
  { id: 'site-vitrine-multi', label: 'Vitrine', hint: '2–5 pages', price: PRIX_BASE['site-vitrine-multi'] },
  { id: 'site-pro', label: 'Site Pro', hint: 'Complet', price: PRIX_BASE['site-pro'] },
  { id: 'ecommerce', label: 'Boutique', hint: 'Stripe', price: PRIX_BASE.ecommerce },
  { id: 'app-web', label: 'App web', hint: 'Dashboard', price: PRIX_BASE['app-web'], suffix: '+' },
  { id: 'app-ios', label: 'App iOS', hint: 'SwiftUI', price: PRIX_BASE['app-ios'], suffix: '+' },
]

const SCOPES = [
  { id: 'essentiel', label: 'Essentiel', desc: 'Base solide pour démarrer', mult: 1 },
  { id: 'complet', label: 'Complet', desc: 'SEO, formulaires, options utiles', mult: 1.15 },
  { id: 'premium', label: 'Premium', desc: 'Plus de pages et de fonctionnalités', mult: 1.35 },
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
    <section id="estimateur" className="py-28 relative overflow-hidden bg-gray-50/70 dark:bg-white/[0.02]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        <div className="w-[700px] h-[400px] rounded-full blur-[120px] bg-purple-500/5 dark:bg-brand-600/10" />
      </div>

      <div className="relative max-w-5xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-display tracking-[0.28em] uppercase text-purple-500 mb-4 block font-semibold">
            Estimation
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            En 3 clics, une fourchette claire
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-xl mx-auto">
            Indication alignée sur les tarifs affichés. Essentiel = prix de base · Complet / Premium = scope plus large (toujours plus cher). Le devis détaillé affine ensuite.
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10 max-w-lg mx-auto">
          {['Type', 'Scope', 'Résultat'].map((label, i) => (
            <div key={label} className="flex items-center gap-2 sm:gap-3 flex-1">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-display font-bold transition-colors flex-shrink-0 ${
                  i < step
                    ? 'bg-cyan-500 text-white'
                    : i === step
                      ? 'bg-brand-600 text-white shadow-lg shadow-purple-600/30'
                      : 'bg-gray-200 dark:bg-white/10 text-slate-400'
                }`}
              >
                {i + 1}
              </div>
              <span className={`text-sm font-display font-semibold hidden sm:block ${i === step ? 'text-gray-900 dark:text-white' : 'text-slate-400'}`}>
                {label}
              </span>
              {i < 2 && (
                <div className={`flex-1 h-px min-w-[12px] ${i < step ? 'bg-cyan-400/70' : 'bg-gray-200 dark:bg-white/10'}`} />
              )}
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a12] shadow-xl shadow-gray-200/50 dark:shadow-none p-8 md:p-12 min-h-[380px]">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="type"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
              >
                <p className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  Quel type de projet ?
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {TYPES.map(t => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => { setTypeId(t.id); setStep(1) }}
                      className={`text-left p-5 rounded-2xl border transition-all duration-200 hover:scale-[1.02] ${
                        typeId === t.id
                          ? 'border-brand-500 bg-purple-50 dark:bg-purple-500/15 shadow-md shadow-purple-500/10'
                          : 'border-gray-200 dark:border-white/10 bg-gray-50/80 dark:bg-white/[0.03] hover:border-purple-400/60'
                      }`}
                    >
                      <span className="block font-display text-base font-bold text-gray-900 dark:text-white">
                        {t.label}
                      </span>
                      <span className="block text-sm text-slate-500 mt-1">{t.hint}</span>
                      <span className="block text-sm font-semibold text-purple-600 dark:text-brand-400 mt-4">
                        dès {fmt(t.price)}&nbsp;€{t.suffix || ''}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="scope"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
              >
                <p className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Quel niveau de scope ?
                </p>
                <p className="text-sm text-slate-500 mb-6">{type?.label}</p>
                <div className="flex flex-col gap-3 max-w-2xl">
                  {SCOPES.map(s => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => { setScopeId(s.id); setStep(2) }}
                      className="text-left px-6 py-5 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-cyan-400 dark:hover:border-cyan-500/50 bg-gray-50/60 dark:bg-white/[0.03] hover:bg-cyan-50/50 dark:hover:bg-accent-500/5 transition-all flex items-center justify-between gap-4"
                    >
                      <div>
                        <span className="block font-display text-base font-bold text-gray-900 dark:text-white">
                          {s.label}
                        </span>
                        <span className="block text-sm text-slate-500 mt-1">{s.desc}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-300 flex-shrink-0" />
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setStep(0)}
                  className="mt-8 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <ArrowLeft className="w-4 h-4" /> Retour
                </button>
              </motion.div>
            )}

            {step === 2 && estimate != null && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="text-center py-6 md:py-10"
              >
                <p className="font-display text-xs tracking-[0.2em] uppercase text-slate-400 mb-4 font-semibold">
                  Estimation indicative
                </p>
                <p className="text-base text-slate-500 dark:text-slate-400 mb-4">
                  {type.label} · {scope.label}
                </p>
                <p className="font-display text-6xl md:text-7xl font-extrabold gradient-text mb-4 tracking-tight">
                  ~{fmt(estimate)}&nbsp;€{type.suffix || ''}
                </p>
                <p className="text-sm text-slate-400 mb-10">
                  Acompte 30&nbsp;% · solde à la livraison · 1 mois de support
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/devis"
                    className="inline-flex items-center gap-2 px-9 py-3.5 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 text-white font-display font-semibold text-base hover:opacity-90 transition-opacity"
                  >
                    Affiner le devis
                    <ArrowRight className="w-5 h-5" />
                  </Link>
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
