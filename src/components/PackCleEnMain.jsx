import { motion } from 'framer-motion'
import { Check, ArrowRight, Sparkles } from 'lucide-react'
import LottieIcon from './motion/LottieIcon'
import { PRIX_BASE, PRIX_PACK_CLE_EN_MAIN } from '../lib/pricingEngine'
import { Link } from 'react-router-dom'
import { LOTTIE } from '../lib/lottieMap'

const INCLUS = [
  'Site vitrine 2–5 pages (design inclus)',
  'Mise en ligne & configuration',
  'Hébergement 12 mois inclus',
  'Nom de domaine .fr / .com (1 an)*',
  'Certificat SSL + sauvegardes',
  'Formulaire de contact + référencement de base',
  '1 mois de support après livraison',
  'Acompte 30 % seulement pour démarrer',
]

const VITRINE = PRIX_BASE['site-vitrine-multi']
const PACK = PRIX_PACK_CLE_EN_MAIN
const HEBERG_DOMAINE_SEPARE = 300
const PACK_BARRE = VITRINE + HEBERG_DOMAINE_SEPARE

export default function PackCleEnMain() {
  return (
    <section id="pack" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[120px] bg-accent-500/[0.07] dark:bg-accent-500/[0.1]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65 }}
          className="rounded-3xl border border-accent-200/60 dark:border-accent-500/20 bg-gradient-to-br from-white via-white to-accent-50/40 dark:from-[#0a0f1a] dark:via-[#0a0f1a] dark:to-brand-900/30 overflow-hidden relative"
        >
          <div className="absolute -right-8 -top-8 w-40 h-40 opacity-30 pointer-events-none hidden md:block">
            <LottieIcon src={LOTTIE.pack} />
          </div>
          <div className="grid md:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 md:p-10 lg:p-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 text-accent-600 dark:text-accent-400 text-[11px] font-mono font-semibold tracking-wider uppercase mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                Pack recommandé
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                Pack <span className="gradient-text">Clé en main</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-6 max-w-md">
                Un seul prix : site + hébergement + domaine + support. Vous n’avez rien à bricoler côté technique.
              </p>

              <div className="flex items-end gap-3 mb-2">
                <span className="text-sm text-slate-400 line-through">~{PACK_BARRE.toLocaleString('fr-FR')} €</span>
                <span className="font-display text-5xl font-bold text-gray-900 dark:text-white">{PACK.toLocaleString('fr-FR')}€</span>
              </div>
              <p className="text-xs text-slate-400 mb-8 font-mono">
                Vitrine {VITRINE} € + hébergement/domaine ≈ {HEBERG_DOMAINE_SEPARE} € → pack à {PACK} €
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/devis"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-accent-600 to-brand-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Je veux ce pack
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/tarifs"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-gray-200 dark:border-white/15 text-gray-800 dark:text-white font-semibold text-sm hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                  Voir tous les tarifs
                </Link>
              </div>
              <p className="text-[10px] text-slate-400 mt-5">
                * Domaine standard inclus (extension courante). Extensions premium sur devis.
              </p>
            </div>

            <div className="p-8 md:p-10 lg:p-12 bg-gray-900 dark:bg-black/40 text-white md:border-l border-accent-500/20">
              <p className="text-xs font-mono text-accent-400 tracking-[0.2em] uppercase mb-6">Tout inclus</p>
              <ul className="space-y-3.5">
                {INCLUS.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                    className="flex items-start gap-3 text-sm text-slate-200"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-500/20">
                      <Check className="w-3 h-3 text-accent-400" />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <p className="mt-8 text-xs text-slate-500 font-mono">
                Délai typique · 1 à 2 semaines
              </p>
              <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                Maintenance après le mois inclus : optionnelle. Vous pouvez gérer seul.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
