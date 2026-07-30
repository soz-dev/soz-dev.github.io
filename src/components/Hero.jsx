import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PRIX_BASE } from '../lib/pricingEngine'
import LottieIcon from './motion/LottieIcon'
import { easeOutExpo } from '../lib/motionPresets'

const line = (delay) => ({
  initial: { opacity: 0, y: 40, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { delay, duration: 0.85, ease: easeOutExpo },
})

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-700/15 blur-[120px]"
          animate={reduce ? undefined : { x: [0, 40, -20, 0], y: [0, -50, 30, 0], scale: [1, 1.12, 0.95, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-500/10 blur-[100px]"
          animate={reduce ? undefined : { x: [0, -30, 40, 0], y: [0, 40, -20, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] rounded-full bg-brand-900/15 blur-[90px]"
          animate={reduce ? undefined : { x: [0, 25, -35, 0], y: [0, -25, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        {/* Lottie décoratif */}
        <div className="absolute right-[-8%] top-[18%] w-[280px] h-[280px] md:w-[380px] md:h-[380px] opacity-[0.35] dark:opacity-[0.45] pointer-events-none hidden sm:block">
          <LottieIcon src="/lottie/orbit.json" />
        </div>
        <div className="absolute left-[-10%] bottom-[12%] w-[220px] h-[220px] md:w-[300px] md:h-[300px] opacity-[0.25] dark:opacity-[0.35] pointer-events-none hidden md:block scale-x-[-1]">
          <LottieIcon src="/lottie/orbit.json" />
        </div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
        }}
      />

      <div className="relative z-10 w-full max-w-[44rem] mx-auto px-6 sm:px-10 lg:px-12 text-center">
        <motion.p
          {...(reduce ? {} : line(0.12))}
          className="font-display gradient-text select-none mb-8 pb-0.5"
          style={{ fontWeight: 700, fontSize: 'clamp(1.15rem, 3vw, 1.4rem)', letterSpacing: '0.04em' }}
        >
          SOZ_DEV
        </motion.p>

        <h1 className="text-[clamp(2.1rem,5.8vw,4.25rem)] font-bold leading-[1.15] tracking-tight mb-12 sm:mb-14 text-gray-900 dark:text-white px-1">
          <motion.span className="block" {...(reduce ? {} : line(0.22))}>
            Sites &amp; apps iOS
          </motion.span>
          <motion.span className="block gradient-text pb-[0.12em]" {...(reduce ? {} : line(0.38))}>
            qui convertissent
          </motion.span>
          <motion.span className="block gradient-text pb-[0.12em]" {...(reduce ? {} : line(0.52))}>
            sans prix agence.
          </motion.span>
        </h1>

        <motion.p
          {...(reduce ? {} : line(0.68))}
          className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-5 max-w-lg mx-auto"
        >
          Pour freelances, artisans et petits business qui veulent un site ou une app native, livré vite et propre.
        </motion.p>

        <motion.p
          {...(reduce ? {} : line(0.8))}
          className="font-mono text-sm text-brand-500 dark:text-brand-400 mb-12 sm:mb-14"
        >
          À partir de <span className="text-lg font-bold text-gray-900 dark:text-white">{PRIX_BASE['site-vitrine'].toLocaleString('fr-FR')}€</span>
          <span className="text-slate-400 line-through ml-2">1 500€</span>
          <span className="text-slate-400 mx-2">·</span>
          apps iOS dès <span className="font-bold text-gray-900 dark:text-white">{PRIX_BASE['app-ios'].toLocaleString('fr-FR')}€+</span>
        </motion.p>

        <motion.div
          {...(reduce ? {} : line(0.92))}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={reduce ? undefined : { scale: 1.04, y: -2 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
            <Link
              to="/devis"
              className="group inline-flex px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 text-white font-semibold text-sm glow-purple shadow-lg shadow-brand-500/25"
            >
              Estimer votre projet
            </Link>
          </motion.div>
          <motion.div whileHover={reduce ? undefined : { scale: 1.03 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
            <Link
              to="/projets"
              className="inline-flex px-8 py-3.5 rounded-full border border-gray-300 dark:border-white/15 text-gray-800 dark:text-white font-semibold text-sm hover:border-brand-500/50 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              Voir les projets
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicateur scroll Lottie */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-10 h-14 opacity-70 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: reduce ? 0.5 : 0.7 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <LottieIcon src="/lottie/scroll.json" />
      </motion.div>
    </section>
  )
}
