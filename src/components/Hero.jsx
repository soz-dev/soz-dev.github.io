import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PRIX_BASE } from '../lib/pricingEngine'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-700/15 blur-[120px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-500/10 blur-[100px] animate-blob delay-2" />
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] rounded-full bg-brand-900/15 blur-[90px] animate-blob delay-4" />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
        }}
      />

      <div className="relative z-10 w-full max-w-[44rem] mx-auto px-6 sm:px-10 lg:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="font-display gradient-text select-none mb-8 pb-0.5"
          style={{ fontWeight: 700, fontSize: 'clamp(1.15rem, 3vw, 1.4rem)', letterSpacing: '0.04em' }}
        >
          SOZ_DEV
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.1rem,5.8vw,4.25rem)] font-bold leading-[1.15] tracking-tight mb-12 sm:mb-14 text-gray-900 dark:text-white px-1"
        >
          <span className="block">Sites &amp; apps iOS</span>
          <span className="block gradient-text pb-[0.12em]">qui convertissent</span>
          <span className="block gradient-text pb-[0.12em]">sans prix agence.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-5 max-w-lg mx-auto"
        >
          Pour freelances, artisans et petits business qui veulent un site ou une app native, livré vite et propre.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="font-mono text-sm text-brand-500 dark:text-brand-400 mb-12 sm:mb-14"
        >
          À partir de <span className="text-lg font-bold text-gray-900 dark:text-white">{PRIX_BASE['site-vitrine'].toLocaleString('fr-FR')}€</span>
          <span className="text-slate-400 line-through ml-2">1 500€</span>
          <span className="text-slate-400 mx-2">·</span>
          apps iOS dès <span className="font-bold text-gray-900 dark:text-white">{PRIX_BASE['app-ios'].toLocaleString('fr-FR')}€+</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/devis"
            className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all duration-300 glow-purple"
          >
            Estimer votre projet
          </Link>
          <Link
            to="/projets"
            className="px-8 py-3.5 rounded-full border border-gray-300 dark:border-white/15 text-gray-800 dark:text-white font-semibold text-sm hover:border-brand-500/50 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300"
          >
            Voir les projets
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
