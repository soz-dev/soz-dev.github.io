import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { PRIX_BASE } from '../lib/pricingEngine'

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
    <section id="estimateur" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="max-w-2xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="mb-8"
        >
          <p
            className="text-xs tracking-[0.28em] uppercase text-purple-500 mb-3 font-medium"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Estimation
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            En 3 clics, une fourchette claire
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Indication sous le marché. Le devis détaillé affine ensuite le scope.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex items-center gap-3 mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
          {['Type', 'Scope', 'Résultat'].map((label, i) => (
            <div key={label} className="flex items-center gap-2 flex-1">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  i < step
                    ? 'bg-cyan-500 text-white'
                    : i === step
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 dark:bg-white/10 text-slate-400'
                }`}
              >
                {i + 1}
              </div>
              <span className={`text-xs font-medium hidden sm:block ${i === step ? 'text-gray-900 dark:text-white' : 'text-slate-400'}`}>
                {label}
              </span>
              {i < 2 && <div className={`flex-1 h-px ${i < step ? 'bg-cyan-400/60' : 'bg-gray-200 dark:bg-white/10'}`} />}
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl border border-gray-200/80 dark:border-white/10 bg-white dark:bg-[#0a0a12] shadow-sm dark:shadow-none p-5 md:p-7 min-h-[300px]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="type"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Quel type de projet ?
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {TYPES.map(t => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => { setTypeId(t.id); setStep(1) }}
                      className="group text-left p-3.5 rounded-xl border border-gray-150 dark:border-white/10 bg-gray-50/80 dark:bg-white/[0.03] hover:border-purple-400 dark:hover:border-purple-500/50 hover:bg-purple-50/50 dark:hover:bg-purple-500/5 transition-all"
                    >
                      <span className="block text-sm font-semibold text-gray-900 dark:text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
                        {t.label}
                      </span>
                      <span className="block text-[11px] text-slate-500 mt-0.5">{t.hint}</span>
                      <span className="block text-xs font-semibold text-purple-600 dark:text-purple-400 mt-2.5">
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
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Quel niveau de scope ?
                </p>
                <p className="text-xs text-slate-500 mb-4">{type?.label}</p>
                <div className="flex flex-col gap-2.5">
                  {SCOPES.map(s => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => { setScopeId(s.id); setStep(2) }}
                      className="text-left px-4 py-3.5 rounded-xl border border-gray-200 dark:border-white/10 hover:border-cyan-400 dark:hover:border-cyan-500/50 bg-gray-50/50 dark:bg-white/[0.03] hover:bg-cyan-50/40 dark:hover:bg-cyan-500/5 transition-all flex items-center justify-between gap-3"
                    >
                      <div>
                        <span className="block text-sm font-semibold text-gray-900 dark:text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
                          {s.label}
                        </span>
                        <span className="block text-xs text-slate-500 mt-0.5">{s.desc}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-cyan-400 flex-shrink-0" />
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
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="text-center py-2"
              >
                <p className="text-xs tracking-wide uppercase text-slate-400 mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Estimation indicative
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                  {type.label} · {scope.label}
                </p>
                <p
                  className="text-5xl md:text-6xl font-bold gradient-text mb-3 tracking-tight"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  ~{fmt(estimate)}&nbsp;€{type.suffix || ''}
                </p>
                <p className="text-xs text-slate-400 mb-8">
                  Acompte 30&nbsp;% · solde à la livraison · 1 mois de support
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="#devis"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Affiner le devis
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
