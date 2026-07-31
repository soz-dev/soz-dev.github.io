import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import PreuveLive from '../components/PreuveLive'
import GuideOffre from '../components/GuideOffre'
import PackCleEnMain from '../components/PackCleEnMain'
import Garanties from '../components/Garanties'
import CasMetier from '../components/CasMetier'
import Temoignages from '../components/Temoignages'
import SectionLottie from '../components/motion/SectionLottie'
import LottieIcon from '../components/motion/LottieIcon'
import { LOTTIE } from '../lib/lottieMap'

const TEASERS = [
  {
    to: '/services',
    title: 'Mes services',
    desc: 'Site vitrine, boutique en ligne ou app iPhone : le format adapté à votre activité.',
    lottie: LOTTIE.services,
  },
  {
    to: '/projets',
    title: 'Réalisations',
    desc: 'Des projets déjà en ligne pour freelances, commerces et apps natives.',
    lottie: LOTTIE.project,
  },
  {
    to: '/tarifs',
    title: 'Tous les tarifs',
    desc: 'Grille complète, estimateur et comparatif pour affiner votre budget.',
    lottie: LOTTIE.pricing,
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <PreuveLive />
      <GuideOffre />
      <PackCleEnMain />
      <Garanties />
      <CasMetier />
      <Temoignages />

      <section className="py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-mono text-brand-400 tracking-[0.3em] uppercase block mb-4">
              Aller plus loin
            </span>
            <SectionLottie src={LOTTIE.guide} size="lg" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Explorer{' '}<span className="gradient-text">le détail</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
              Services, exemples ou grille complète pour affiner votre projet.
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
                  <div className="w-24 h-24 mb-4">
                    <LottieIcon src={t.lottie} className="w-full h-full" />
                  </div>
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
              Demander un devis
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
