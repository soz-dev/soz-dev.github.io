import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PRIX_BASE } from '../lib/pricingEngine'
import LottieIcon from './motion/LottieIcon'
import BrandLogo from './BrandLogo'
import { LOTTIE } from '../lib/lottieMap'
import { easeOutExpo } from '../lib/motionPresets'
import { track, AnalyticsEvents } from '../lib/analytics'

const line = (delay) => ({
  initial: { opacity: 0, y: 28, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { delay, duration: 0.7, ease: easeOutExpo },
})

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden grid-pattern pt-16 sm:pt-20 md:pt-24">
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
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
        }}
      />

      <motion.div
        {...(reduce ? {} : line(0.05))}
        className="relative z-10 flex justify-center px-6 pt-1 sm:pt-3"
      >
        <BrandLogo
          priority
          className="w-[min(58vw,220px)] sm:w-[280px] md:w-[320px]"
        />
      </motion.div>

      <div className="relative z-10 flex-1 flex items-center justify-center w-full max-w-[44rem] mx-auto px-5 sm:px-10 lg:px-12 text-center pb-16 sm:pb-24">
        <div>
          <h1 className="text-[clamp(1.85rem,5.2vw,4.25rem)] font-bold leading-[1.12] tracking-tight mb-5 sm:mb-10 text-gray-900 dark:text-white px-1">
            <motion.span className="block" {...(reduce ? {} : line(0.18))}>
              Sites &amp; apps iOS
            </motion.span>
            <motion.span className="block gradient-text pb-[0.08em]" {...(reduce ? {} : line(0.3))}>
              qui convertissent
            </motion.span>
            <motion.span className="block gradient-text pb-[0.08em]" {...(reduce ? {} : line(0.42))}>
              sans prix agence.
            </motion.span>
          </h1>

          <motion.p
            {...(reduce ? {} : line(0.55))}
            className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-5 max-w-lg mx-auto"
          >
            Pour freelances, artisans et petits business qui veulent un site ou une app native, livré vite et propre.
          </motion.p>

          <motion.p
            {...(reduce ? {} : line(0.65))}
            className="text-sm text-slate-600 dark:text-slate-300 mb-6 sm:mb-10"
          >
            À partir de{' '}
            <span className="font-display text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              {PRIX_BASE['site-vitrine'].toLocaleString('fr-FR')} €
            </span>
            <span className="text-slate-400 line-through ml-2">1 500 €</span>
            <span className="text-slate-400 mx-2 hidden sm:inline">·</span>
            <span className="block sm:inline mt-1 sm:mt-0">
              apps iOS dès{' '}
              <span className="font-display font-bold text-gray-900 dark:text-white">
                {PRIX_BASE['app-ios'].toLocaleString('fr-FR')} €+
              </span>
            </span>
          </motion.p>

          <motion.div
            {...(reduce ? {} : line(0.78))}
            className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3"
          >
            <motion.div whileHover={reduce ? undefined : { scale: 1.03 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
              <Link
                to="/tarifs#estimateur"
                onClick={() => track(AnalyticsEvents.CTA_CLICK, { place: 'hero', to: 'estimateur' })}
                className="inline-flex px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-brand-600 to-accent-500 text-white font-semibold text-sm hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
              >
                Estimer mon projet
              </Link>
            </motion.div>
            <motion.div whileHover={reduce ? undefined : { scale: 1.03 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
              <Link
                to="/projets"
                className="inline-flex px-7 sm:px-8 py-3 sm:py-3.5 rounded-full border border-gray-300 dark:border-white/15 text-gray-800 dark:text-white font-semibold text-sm hover:border-brand-500/50 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
              >
                Voir les projets
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 w-8 h-12 sm:w-10 sm:h-14 opacity-60 hidden sm:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: reduce ? 0.4 : 0.6 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <LottieIcon src={LOTTIE.scroll} />
      </motion.div>
    </section>
  )
}
