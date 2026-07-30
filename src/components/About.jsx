import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MapPin, Code2, Zap, Heart, ArrowRight } from 'lucide-react'

const traits = [
  { icon: MapPin,  text: 'Basé en France',         color: '#a855f7' },
  { icon: Code2,   text: 'Sites web & apps iPhone', color: '#06b6d4' },
  { icon: Zap,     text: 'Livraison rapide',        color: '#a855f7' },
  { icon: Heart,   text: 'Passionné de produit',    color: '#06b6d4' },
]

const miniStats = [
  { value: '3',   label: 'Apps App Store' },
  { value: '5+',  label: 'Projets web'    },
  { value: '2+',  label: 'Ans d\'exp.'    },
  { value: '24h', label: 'Réponse max.'   },
]

export default function About() {
  return (
    <section id="a-propos" className="py-28">
      <div className="max-w-5xl mx-auto px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-mono text-brand-400 tracking-[0.3em] uppercase mb-4 block">
              À propos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Qui suis-je
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-5 text-base md:text-lg">
              Je suis <span className="font-semibold text-gray-900 dark:text-white">Sofyan</span>, développeur
              web &amp; iOS. Sites qui convertissent, boutiques en ligne, et apps iPhone
              (Motastic, Dev Mastery…), livrés avec soin, sans prix agence.
            </p>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 text-sm md:text-base">
              Ce qui m&apos;anime : transformer une idée brute en produit fini
              jusqu&apos;à la mise en ligne ou l&apos;App Store.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {traits.map((t) => (
                <div key={t.text} className="flex items-center gap-2.5">
                  <t.icon className="w-4 h-4 shrink-0" style={{ color: t.color }} />
                  <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">{t.text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 text-white text-sm font-semibold hover:opacity-90"
              >
                Me contacter
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/devis"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-200 dark:border-white/15 text-sm font-semibold text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5"
              >
                Demander un devis
              </Link>
            </div>
          </motion.div>

          {/* Right: Avatar + mini stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col items-center gap-7"
          >
            {/* Avatar initials */}
            <div className="w-44 h-44 rounded-3xl gradient-border glass flex items-center justify-center select-none">
              <span className="font-display text-7xl font-extrabold gradient-text">
                S
              </span>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {miniStats.map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-2xl p-5 border border-gray-100 dark:border-white/5 text-center hover:border-gray-200 dark:hover:border-white/10 transition-colors"
                >
                  <div className="text-2xl font-bold gradient-text mb-1">{s.value}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
