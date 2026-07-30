import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import PreuveLive from '../components/PreuveLive'

const TEASERS = [
  {
    to: '/services',
    title: 'Services & styles',
    desc: 'Landing, vitrine, boutique, apps — et des aperçus d’univers.',
  },
  {
    to: '/projets',
    title: 'Projets livrés',
    desc: 'Apps iOS et sites réels : Motastic, Dev Mastery, LocaZen…',
  },
  {
    to: '/tarifs',
    title: 'Tarifs & estimateur',
    desc: 'Prix clairs, pack clé en main, fourchette en 3 clics.',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <PreuveLive />

      <section className="py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-mono text-brand-400 tracking-[0.3em] uppercase block mb-4">
              Parcourir
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Tout le site,{' '}<span className="gradient-text">sans le scroll infini</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
              Choisissez une page — devis, tarifs ou projets — et avancez à votre rythme.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {TEASERS.map((t, i) => (
              <motion.div
                key={t.to}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={t.to}
                  className="block h-full rounded-2xl border border-gray-100 dark:border-white/8 bg-gray-50/80 dark:bg-white/[0.02] p-6 hover:border-brand-500/40 transition-colors group"
                >
                  <h3 className="font-display font-bold text-gray-900 dark:text-white mb-2 group-hover:gradient-text transition-all">
                    {t.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">{t.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500">
                    Voir <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/devis"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Estimer mon projet
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
