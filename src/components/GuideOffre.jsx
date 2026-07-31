import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Check, CheckCircle2 } from 'lucide-react'
import { PRIX_BASE, PRIX_PACK_CLE_EN_MAIN } from '../lib/pricingEngine'
import SectionLottie from './motion/SectionLottie'
import { LOTTIE } from '../lib/lottieMap'

const RESULTS = {
  boutique: {
    title: 'Boutique en ligne',
    price: PRIX_BASE.ecommerce,
    suffix: '+',
    blurb: 'Catalogue, panier et paiement sécurisé. Tarif de départ : le devis affine selon votre catalogue.',
    to: '/tarifs',
    cta: 'Voir le tarif boutique',
  },
  pack: {
    title: 'Pack clé en main',
    price: PRIX_PACK_CLE_EN_MAIN,
    blurb: 'Site vitrine + hébergement + domaine + support. L’offre la plus simple pour démarrer.',
    to: '/tarifs#pack',
    cta: 'Voir le pack',
    highlight: true,
  },
  vitrine: {
    title: 'Site vitrine',
    price: PRIX_BASE['site-vitrine-multi'],
    blurb: '2 à 5 pages pour présenter votre offre et rassurer vos clients.',
    to: '/tarifs',
    cta: 'Voir les tarifs',
  },
  page: {
    title: 'Page d’accueil',
    price: PRIX_BASE['site-vitrine'],
    blurb: 'Une page claire pour présenter votre activité et générer des contacts.',
    to: '/tarifs',
    cta: 'Voir le tarif',
  },
  pro: {
    title: 'Site Pro',
    price: PRIX_BASE['site-pro'],
    blurb: 'Plus de pages, blog ou contenus à faire évoluer. Idéal si vous grandissez vite.',
    to: '/tarifs',
    cta: 'Voir le tarif',
  },
}

/**
 * 3 questions → recommandation d’offre.
 * vente → pages → hébergement
 */
export default function GuideOffre() {
  const [step, setStep] = useState(0)
  const [vente, setVente] = useState(null)
  const [pages, setPages] = useState(null)
  const [resultKey, setResultKey] = useState(null)

  const reset = () => {
    setStep(0)
    setVente(null)
    setPages(null)
    setResultKey(null)
  }

  const pickVente = (yes) => {
    setVente(yes)
    if (yes) {
      setResultKey('boutique')
      setStep(3)
    } else {
      setStep(1)
    }
  }

  const pickPages = (p) => {
    setPages(p)
    if (p === '1') {
      setResultKey('page')
      setStep(3)
    } else if (p === '6+') {
      setResultKey('pro')
      setStep(3)
    } else {
      setStep(2)
    }
  }

  const pickHebergement = (hasHost) => {
    setResultKey(hasHost ? 'vitrine' : 'pack')
    setStep(3)
  }

  const result = resultKey ? RESULTS[resultKey] : null

  return (
    <section className="py-20 md:py-24">
      <div className="max-w-3xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-xs font-mono text-brand-400 tracking-[0.3em] uppercase block mb-4">
            En 3 questions
          </span>
          <SectionLottie src={LOTTIE.guide} size="xl" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Quelle offre{' '}<span className="gradient-text">vous correspond ?</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-md mx-auto">
            Pas besoin de tout comprendre : répondez, on vous indique le forfait le plus adapté.
          </p>
        </motion.div>

        <div className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a12] p-6 md:p-10 shadow-lg shadow-gray-200/40 dark:shadow-none min-h-[280px]">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="q0"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                <p className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  1. Vous vendez des produits en ligne ?
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { label: 'Oui, je vends en ligne', val: true },
                    { label: 'Non, surtout présenter mon activité', val: false },
                  ].map(o => (
                    <button
                      key={o.label}
                      type="button"
                      onClick={() => pickVente(o.val)}
                      className="text-left px-5 py-4 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-brand-500/50 bg-gray-50/80 dark:bg-white/[0.03] transition-colors font-medium text-sm text-gray-900 dark:text-white"
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="q1"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                <p className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  2. Combien de pages environ ?
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { label: 'Une seule page', val: '1' },
                    { label: '2 à 5 pages', val: '2-5' },
                    { label: '6 pages ou plus', val: '6+' },
                  ].map(o => (
                    <button
                      key={o.val}
                      type="button"
                      onClick={() => pickPages(o.val)}
                      className="text-left px-5 py-4 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-brand-500/50 bg-gray-50/80 dark:bg-white/[0.03] transition-colors font-medium text-sm text-gray-900 dark:text-white"
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
                <button type="button" onClick={() => setStep(0)} className="mt-6 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-gray-900 dark:hover:text-white">
                  <ArrowLeft className="w-4 h-4" /> Retour
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="q2"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                <p className="font-display text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  3. Vous avez déjà un hébergement et un nom de domaine ?
                </p>
                <p className="text-sm text-slate-500 mb-6">
                  Si non, le pack clé en main s’occupe de tout pour vous.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => pickHebergement(true)}
                    className="text-left px-5 py-4 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-brand-500/50 bg-gray-50/80 dark:bg-white/[0.03] transition-colors font-medium text-sm text-gray-900 dark:text-white"
                  >
                    Oui, c’est déjà prêt
                  </button>
                  <button
                    type="button"
                    onClick={() => pickHebergement(false)}
                    className="text-left px-5 py-4 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-brand-500/50 bg-gray-50/80 dark:bg-white/[0.03] transition-colors font-medium text-sm text-gray-900 dark:text-white"
                  >
                    Non, je préfère tout inclus
                  </button>
                </div>
                <button type="button" onClick={() => setStep(1)} className="mt-6 inline-flex items-center gap-2 text-sm text-slate-500 hover:text-gray-900 dark:hover:text-white">
                  <ArrowLeft className="w-4 h-4" /> Retour
                </button>
              </motion.div>
            )}

            {step === 3 && result && (
              <motion.div
                key="res"
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                className="text-center py-2"
              >
                <div className="mx-auto w-20 h-20 mb-4 rounded-full bg-emerald-500/15 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" strokeWidth={1.5} />
                </div>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold mb-4 ${
                  result.highlight
                    ? 'bg-accent-500/15 text-accent-600 dark:text-accent-400'
                    : 'bg-brand-500/10 text-brand-600 dark:text-brand-400'
                }`}>
                  <Check className="w-3.5 h-3.5" />
                  Recommandé pour vous
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {result.title}
                </h3>
                <p className="font-display text-4xl font-bold gradient-text mb-3">
                  {result.price.toLocaleString('fr-FR')}€{result.suffix || ''}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto mb-8 leading-relaxed">
                  {result.blurb}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    to={result.to}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 text-white font-semibold text-sm hover:opacity-90"
                  >
                    {result.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/devis"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gray-200 dark:border-white/15 text-sm font-semibold text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                  >
                    Demander un devis
                  </Link>
                </div>
                <button type="button" onClick={reset} className="mt-6 text-sm text-slate-500 hover:text-gray-900 dark:hover:text-white">
                  Recommencer
                </button>
                {(vente !== null || pages) && (
                  <p className="sr-only">
                    Réponses : vente={String(vente)}, pages={pages}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
