import { motion } from 'framer-motion'
import { MapPin, Code2, Zap, Sparkles } from 'lucide-react'

const traits = [
  { icon: MapPin, text: 'Basé en France', color: '#a855f7' },
  { icon: Code2, text: 'Web + iOS natif', color: '#06b6d4' },
  { icon: Zap, text: 'Livraison rapide', color: '#a855f7' },
  { icon: Sparkles, text: 'Workflow Cursor / IA', color: '#06b6d4' },
]

export default function About() {
  return (
    <section id="a-propos" className="py-28">
      <div className="max-w-5xl mx-auto px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-mono text-purple-400 tracking-[0.3em] uppercase mb-4 block">
              À propos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Un solo, un stack, zéro bullshit
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-5 text-base md:text-lg">
              Je suis <span className="font-semibold text-gray-900 dark:text-white">Sofyan</span> —
              développeur web &amp; iOS. Sites qui convertissent, apps natives sur l’App Store
              (Motastic, Dev Mastery, LocaZen).
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-5 text-sm md:text-base">
              Honnêtement : je shippe avec <span className="text-gray-800 dark:text-slate-200 font-medium">Cursor et un workflow IA</span>.
              Ça va plus vite, ça coûte moins cher pour toi — sans sacrifier la qualité du code ni le design.
              Tu paies le produit, pas une armée de meetings.
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 text-sm md:text-base">
              Du premier commit à la mise en ligne (ou à l’App Store), un seul interlocuteur.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {traits.map((t) => (
                <div key={t.text} className="flex items-center gap-2.5">
                  <t.icon className="w-4 h-4 shrink-0" style={{ color: t.color }} />
                  <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">{t.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col items-center gap-7"
          >
            <div className="w-44 h-44 rounded-3xl gradient-border glass flex items-center justify-center select-none">
              <span
                className="text-7xl font-extrabold gradient-text"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                S
              </span>
            </div>

            <div className="w-full rounded-2xl border border-purple-200/60 dark:border-purple-500/20 bg-purple-50/50 dark:bg-purple-500/5 p-5 text-center">
              <p className="text-xs font-mono text-purple-500 mb-2 uppercase tracking-widest">Le deal</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Prix sous le marché · stack moderne · iOS + web · devis en 2 min
              </p>
              <a
                href="#devis"
                className="inline-block mt-4 text-sm font-semibold text-purple-500 hover:text-purple-400 transition-colors"
              >
                Lancer mon devis →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
