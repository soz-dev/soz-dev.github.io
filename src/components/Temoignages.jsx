import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const ITEMS = [
  {
    quote: 'Un site clair, livré vite, avec un prix annoncé dès le départ. Exactement ce qu’il me fallait pour me lancer.',
    name: 'Léa M.',
    role: 'Freelance · vitrine',
  },
  {
    quote: 'Je ne voulais pas bricoler l’hébergement. Le pack clé en main m’a évité les mauvaises surprises techniques.',
    name: 'Karim B.',
    role: 'Artisan · pack',
  },
  {
    quote: 'Devis transparent, échanges directs, mise en ligne sans stress. On avance sans jargon inutile.',
    name: 'Sophie T.',
    role: 'Coach · site pro',
  },
]

export default function Temoignages() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono text-brand-400 tracking-[0.3em] uppercase block mb-4">
            Avis
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Ce que retiennent{' '}<span className="gradient-text">les clients</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-md mx-auto">
            Prix clair, interlocuteur unique, livraison sans usine à gaz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {ITEMS.map((item, i) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-2xl border border-gray-100 dark:border-white/8 bg-gray-50/80 dark:bg-white/[0.02] p-6 flex flex-col"
            >
              <div className="flex gap-0.5 mb-4 text-amber-400" aria-hidden>
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1 mb-5">
                “{item.quote}”
              </p>
              <footer>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.name}</p>
                <p className="text-xs text-slate-500 mt-0.5">{item.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
