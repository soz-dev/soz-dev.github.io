import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const ROWS = [
  { label: 'Prix site vitrine', agence: '2 500 – 5 000 €', soz: '690 €' },
  { label: 'Délai typique', agence: '6 – 12 semaines', soz: '1 – 2 semaines' },
  { label: 'Interlocuteur', agence: 'Commercial → PM → junior', soz: 'Vous + moi, direct' },
  { label: 'Stack', agence: 'Souvent WordPress / template', soz: 'React, Vite, Supabase…' },
  { label: 'Acompte', agence: '50 – 100 %', soz: '30 % au démarrage' },
  { label: 'Révisions', agence: 'Forfait limité / facturé', soz: 'Incluses jusqu’au OK' },
  { label: 'Apps iOS natives', agence: 'Rare / hors de prix', soz: 'Dès 2 990 €+' },
  { label: 'Maintenance', agence: 'Contrat opaque', soz: 'À partir de 200 €/mois' },
]

export default function Comparatif() {
  return (
    <section id="comparatif" className="py-24 md:py-28">
      <div className="max-w-4xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
          className="text-center mb-12 md:mb-14"
        >
          <span className="text-xs font-mono text-accent-400 tracking-[0.3em] uppercase block mb-4">
            Comparatif
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Agence vs <span className="gradient-text">SOZ-DEV</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base max-w-lg mx-auto">
            Même résultat professionnel — sans la machine à facturer.
          </p>
        </motion.div>

        {/* En-têtes colonnes */}
        <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-2 mb-3 px-1">
          <div />
          <div className="text-center text-xs font-mono uppercase tracking-wider text-slate-400 py-2">
            Agence classique
          </div>
          <div className="text-center text-xs font-mono uppercase tracking-wider text-brand-500 dark:text-brand-400 py-2 rounded-t-xl bg-purple-50/80 dark:bg-purple-500/10">
            SOZ-DEV
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-white/8">
          {ROWS.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className={`grid grid-cols-[1.2fr_1fr_1fr] gap-2 items-stretch ${
                i % 2 === 0 ? 'bg-white dark:bg-white/[0.02]' : 'bg-gray-50/80 dark:bg-white/[0.04]'
              }`}
            >
              <div className="px-4 py-3.5 text-sm font-semibold text-gray-800 dark:text-slate-200 flex items-center">
                {row.label}
              </div>
              <div className="px-3 py-3.5 text-xs md:text-sm text-slate-500 dark:text-slate-400 flex items-start gap-1.5 justify-center text-center">
                <X className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 shrink-0 mt-0.5 hidden sm:block" />
                <span>{row.agence}</span>
              </div>
              <div className="px-3 py-3.5 text-xs md:text-sm font-semibold text-gray-900 dark:text-white flex items-start gap-1.5 justify-center text-center bg-purple-50/50 dark:bg-purple-500/[0.08]">
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5 hidden sm:block" />
                <span>{row.soz}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="#pack"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-brand-400 hover:opacity-80 transition-opacity"
          >
            Voir le pack clé en main →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
