import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, Quote, Smartphone, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import { track, AnalyticsEvents } from '../lib/analytics'

/**
 * Preuve sociale basée sur des projets réels (pas d’avis inventés).
 * Les vrais témoignages clients pourront remplacer ce bloc quand disponibles.
 */
const HIGHLIGHTS = [
  {
    project: 'LocaZen 7',
    kind: 'Site web',
    icon: Globe,
    point: 'Plateforme de gestion locative en ligne à Sète — réservations, tarifs, espace propriétaires.',
    href: 'https://locazen7.fr',
    label: 'Voir le site',
  },
  {
    project: 'LocaZen 12',
    kind: 'App iPhone',
    icon: Smartphone,
    point: 'Companion iOS sur l’App Store : suivi des biens et revenus depuis le téléphone.',
    href: 'https://apps.apple.com/fr/app/locazen-12/id6446256021',
    label: 'App Store',
  },
  {
    project: 'Motastic & Dev Mastery',
    kind: 'Apps iPhone',
    icon: Smartphone,
    point: 'Deux apps natives publiées : jeu de mots et formation iOS, de l’idée au Store.',
    href: '/projets',
    label: 'Voir les projets',
    internal: true,
  },
]

export default function Temoignages() {
  const reduce = useReducedMotion()

  return (
    <section className="py-16 md:py-20" aria-labelledby="preuve-title">
      <div className="max-w-5xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-xs font-mono text-brand-400 tracking-[0.3em] uppercase block mb-4">
            Preuve
          </span>
          <Quote className="w-8 h-8 mx-auto mb-4 text-brand-400/70" aria-hidden />
          <h2 id="preuve-title" className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Des projets{' '}<span className="gradient-text">en production</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-md mx-auto">
            Pas d’avis inventés : des livrables réels, déjà utilisés. Les témoignages clients s’ajouteront ici.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {HIGHLIGHTS.map((item, i) => {
            const Icon = item.icon
            const inner = (
              <>
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="w-9 h-9 rounded-xl flex items-center justify-center bg-brand-500/10 text-brand-500"
                    aria-hidden
                  >
                    <Icon className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.project}</p>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">{item.kind}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1 mb-5">
                  {item.point}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-500">
                  {item.label}
                  <ExternalLink className="w-3 h-3" aria-hidden />
                </span>
              </>
            )

            const className =
              'rounded-2xl border border-gray-100 dark:border-white/8 bg-gray-50/80 dark:bg-white/[0.02] p-6 flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#030712] hover:border-brand-500/35 transition-colors'

            return (
              <motion.div
                key={item.project}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reduce ? 0 : i * 0.06 }}
                whileHover={reduce ? undefined : { y: -4 }}
              >
                {item.internal ? (
                  <Link
                    to={item.href}
                    className={className}
                    onClick={() => track(AnalyticsEvents.PROJECT_CLICK, { project: item.project })}
                  >
                    {inner}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                    onClick={() => track(AnalyticsEvents.PROJECT_CLICK, { project: item.project })}
                  >
                    {inner}
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
