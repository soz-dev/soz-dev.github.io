import { motion } from 'framer-motion'
import { ShieldCheck, RefreshCw, Headphones, Layers } from 'lucide-react'
import SectionLottie from './motion/SectionLottie'
import LottieIcon from './motion/LottieIcon'
import { LOTTIE } from '../lib/lottieMap'

const items = [
  {
    icon: ShieldCheck,
    lottie: LOTTIE.pack,
    title: 'Acompte 30 %',
    desc: 'Vous démarrez sans tout payer. Solde à la livraison.',
    color: '#a855f7',
  },
  {
    icon: RefreshCw,
    lottie: LOTTIE.design,
    title: 'Révisions incluses',
    desc: 'Nous itérons jusqu’à ce que le résultat vous convienne, sans surprise.',
    color: '#06b6d4',
  },
  {
    icon: Headphones,
    lottie: LOTTIE.support,
    title: '1 mois de support',
    desc: 'Bugs, petits ajustements et questions, couverts après livraison.',
    color: '#8b5cf6',
  },
  {
    icon: Layers,
    lottie: LOTTIE.coding,
    title: 'Techno fiable',
    desc: 'Sites et apps modernes, rapides et évolutifs, pas de solution bloquée par des plugins.',
    color: '#0891b2',
  },
]

export default function Garanties() {
  return (
    <section id="garanties" className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-mono text-accent-400 tracking-[0.3em] uppercase mb-3 block">
            Engagements
          </span>
          <SectionLottie src={LOTTIE.trust} size="xl" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Des engagements clairs
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="rounded-2xl p-5 border border-gray-100 dark:border-white/5 bg-white/50 dark:bg-white/[0.02] text-center sm:text-left"
            >
              <div className="w-28 h-28 mx-auto sm:mx-0 mb-4">
                <LottieIcon src={item.lottie} className="w-full h-full" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1.5">{item.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
