import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionLottie from './motion/SectionLottie'
import { LOTTIE } from '../lib/lottieMap'

const CASE = {
  name: 'LocaZen 7',
  secteur: 'Gestion locative · Sète',
  url: 'https://locazen7.fr',
  image: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Flocazen7.fr%2F?w=800&h=500',
  besoin: 'Une plateforme pour gérer réservations, tarifs et revenus locatifs, accessible aux propriétaires.',
  livrable: 'Site web complet avec espace propriétaires, simulateur de revenus et suivi des réservations.',
  delai: 'Quelques semaines',
  resultat: 'Outil en ligne utilisé au quotidien par les propriétaires à Sète.',
}

export default function CasMetier() {
  return (
    <section className="py-20 md:py-24 bg-gray-50/60 dark:bg-white/[0.02]">
      <div className="max-w-5xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-accent-400 tracking-[0.3em] uppercase block mb-4">
            Cas client
          </span>
          <SectionLottie src={LOTTIE.project} size="xl" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Un projet réel,{' '}<span className="gradient-text">pas une démo</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-sm md:text-base">
            Exemple concret : besoin, livrable, résultat. Pour vous projeter avant de demander un devis.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-gray-200 dark:border-white/10 overflow-hidden bg-white dark:bg-[#0a0a12] grid md:grid-cols-2"
        >
          <a
            href={CASE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block aspect-[16/10] md:aspect-auto md:min-h-[320px] bg-gray-100 dark:bg-white/5 overflow-hidden group"
          >
            <img
              src={CASE.image}
              alt={`Aperçu de ${CASE.name}`}
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
            />
            <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 text-white text-xs font-medium">
              Voir le site <ExternalLink className="w-3 h-3" />
            </span>
          </a>

          <div className="p-8 md:p-10 flex flex-col justify-center">
            <p className="text-[11px] font-mono uppercase tracking-wider text-brand-500 mb-2">{CASE.secteur}</p>
            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6">{CASE.name}</h3>

            <dl className="space-y-4 text-sm mb-8">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Besoin</dt>
                <dd className="text-slate-600 dark:text-slate-300 leading-relaxed">{CASE.besoin}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Livré</dt>
                <dd className="text-slate-600 dark:text-slate-300 leading-relaxed">{CASE.livrable}</dd>
              </div>
              <div className="flex gap-6">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Délai</dt>
                  <dd className="text-gray-900 dark:text-white font-medium">{CASE.delai}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Résultat</dt>
                  <dd className="text-gray-900 dark:text-white font-medium">{CASE.resultat}</dd>
                </div>
              </div>
            </dl>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/devis"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 text-white text-sm font-semibold hover:opacity-90"
              >
                Un projet comme celui-ci
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/projets"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-200 dark:border-white/15 text-sm font-semibold text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5"
              >
                Toutes les réalisations
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
