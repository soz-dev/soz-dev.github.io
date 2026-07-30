import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShieldCheck, RefreshCw, Headphones, Check, ArrowRight } from 'lucide-react'

const ENGAGEMENTS = [
  { icon: ShieldCheck, title: 'Acompte 30 %', desc: 'Solde à la livraison' },
  { icon: RefreshCw, title: 'Révisions incluses', desc: 'Jusqu’à validation' },
  { icon: Headphones, title: '1 mois de support', desc: 'Bugs & ajustements' },
]

const VS = [
  { label: 'Interlocuteur', soz: 'Direct avec moi', agence: 'Plusieurs relais' },
  { label: 'Délai vitrine', soz: '1–2 semaines', agence: '6–12 semaines' },
  { label: 'Prix affichés', soz: 'Oui, dès le site', agence: 'Souvent opaque' },
]

const STEPS = [
  'Devis en ligne',
  'Échange 30 min',
  'Design & build',
  'Mise en ligne',
]

/** Bloc unique : engagements + différenciation + process court. */
export default function TarifsSynthese() {
  return (
    <section className="py-16 md:py-20 border-t border-gray-100 dark:border-white/5">
      <div className="max-w-5xl mx-auto px-8 lg:px-12 space-y-14">
        {/* Engagements */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-brand-400 tracking-[0.3em] uppercase text-center mb-8"
          >
            Inclus dans chaque projet
          </motion.p>
          <div className="grid sm:grid-cols-3 gap-4">
            {ENGAGEMENTS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-2xl border border-gray-100 dark:border-white/8 bg-gray-50/60 dark:bg-white/[0.02] p-4"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-500/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-brand-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mini comparatif */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8"
          >
            Agence vs <span className="gradient-text">SOZ-DEV</span>
          </motion.h2>
          <div className="rounded-2xl border border-gray-100 dark:border-white/8 overflow-hidden max-w-2xl mx-auto">
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-0 text-xs font-mono uppercase tracking-wider text-slate-400 bg-gray-50 dark:bg-white/[0.03] px-4 py-2.5">
              <span />
              <span className="text-center">Agence</span>
              <span className="text-center text-brand-500">SOZ-DEV</span>
            </div>
            {VS.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1fr_1fr_1fr] gap-2 px-4 py-3.5 text-sm items-center ${
                  i % 2 === 0 ? 'bg-white dark:bg-transparent' : 'bg-gray-50/80 dark:bg-white/[0.02]'
                }`}
              >
                <span className="text-slate-500 text-xs md:text-sm">{row.label}</span>
                <span className="text-center text-slate-400 text-xs md:text-sm">{row.agence}</span>
                <span className="text-center font-medium text-gray-900 dark:text-white text-xs md:text-sm flex items-center justify-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  {row.soz}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Process court */}
        <div className="text-center">
          <p className="text-xs font-mono text-accent-400 tracking-[0.3em] uppercase mb-6">
            Comment ça se passe
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center gap-2 md:gap-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] text-sm font-medium text-gray-900 dark:text-white">
                  <span className="font-mono text-[10px] text-brand-500">{String(i + 1).padStart(2, '0')}</span>
                  {s}
                </span>
                {i < STEPS.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
          <Link
            to="/devis"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 text-white text-sm font-semibold hover:opacity-90"
          >
            Lancer mon devis
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
