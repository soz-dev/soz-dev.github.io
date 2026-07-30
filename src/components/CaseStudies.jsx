import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'

const cases = [
  {
    name: 'LocaZen',
    tag: 'Web + iOS',
    accent: '#a855f7',
    before: 'Gestion locative dispersée (tableurs, messages, réservations à la main).',
    after: 'Plateforme web LocaZen 7 + app iOS LocaZen 12 : réservations, revenus et biens au même endroit.',
    delay: 'Produit réel en production à Sète',
    outcome: 'Propriétaires autonomes sur mobile et desktop',
    link: 'https://locazen7.fr',
    linkLabel: 'Voir LocaZen 7',
  },
  {
    name: 'Motastic',
    tag: 'App iOS',
    accent: '#06b6d4',
    before: 'Idée de jeu de mots + classements, sans produit App Store.',
    after: 'App native SwiftUI : défis quotidiens, GameKit, 14 mini-jeux — publiée sur l’App Store.',
    delay: 'Shipée avec workflow Cursor / Swift',
    outcome: 'Jeu live, classements temps réel',
    link: 'https://apps.apple.com/fr/app/motastic/id6760564637',
    linkLabel: 'App Store',
  },
  {
    name: 'Dev Mastery',
    tag: 'App iOS',
    accent: '#8b5cf6',
    before: 'Besoin d’un parcours clair pour apprendre Swift / SwiftUI.',
    after: 'Cours structurés, quiz, défis et aide-mémoire dans une app native iOS 17+.',
    delay: 'De l’idée au store, stack moderne',
    outcome: 'Apprentissage guidé, rythme libre',
    link: 'https://apps.apple.com/fr/app/dev-mastery/id6759505533',
    linkLabel: 'App Store',
  },
]

export default function CaseStudies() {
  return (
    <section id="cas" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono text-purple-400 tracking-[0.3em] uppercase mb-4 block">
            Preuves concrètes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Avant / après
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-lg mx-auto">
            Des projets réels — pas de vanity metrics. Le résultat compte plus que les chiffres gonflés.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {cases.map((c, i) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="glass rounded-2xl border border-gray-100 dark:border-white/5 p-6 md:p-8 overflow-hidden relative"
            >
              <div
                className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: c.accent }}
              />

              <div className="relative flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                <div className="md:w-40 shrink-0">
                  <p className="text-xs font-mono mb-1" style={{ color: c.accent }}>{c.tag}</p>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{c.name}</h3>
                  <p className="text-xs text-slate-400 mt-2 font-mono">{c.delay}</p>
                </div>

                <div className="flex-1 grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-gray-50 dark:bg-white/[0.03] p-4 border border-gray-100 dark:border-white/5">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">Avant</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{c.before}</p>
                  </div>
                  <div
                    className="rounded-xl p-4 border"
                    style={{
                      background: `${c.accent}08`,
                      borderColor: `${c.accent}30`,
                    }}
                  >
                    <p className="text-[10px] font-mono uppercase tracking-widest mb-2" style={{ color: c.accent }}>Après</p>
                    <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">{c.after}</p>
                  </div>
                </div>
              </div>

              <div className="relative mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-gray-100 dark:border-white/5">
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  <span className="font-semibold text-gray-900 dark:text-white">Résultat — </span>
                  {c.outcome}
                </p>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold shrink-0 hover:opacity-80 transition-opacity"
                  style={{ color: c.accent }}
                >
                  {c.linkLabel}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="#devis"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-500 hover:text-purple-400 transition-colors"
          >
            Un projet comme ça pour toi
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
