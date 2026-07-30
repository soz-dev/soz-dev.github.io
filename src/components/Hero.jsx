import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-700/15 blur-[120px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px] animate-blob delay-2" />
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] rounded-full bg-purple-900/15 blur-[90px] animate-blob delay-4" />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
        }}
      />

      <div className="relative z-10 px-8 lg:px-12" style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="gradient-text select-none mb-8"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 'clamp(1.1rem, 3vw, 1.35rem)', letterSpacing: '0.14em' }}
        >
          SOZ_DEV
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.4rem,7vw,4.75rem)] font-bold leading-[1.05] tracking-tight mb-6 text-gray-900 dark:text-white"
        >
          Sites & apps iOS
          <span className="block gradient-text">qui convertissent — sans prix agence.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-4 max-w-xl mx-auto"
        >
          Pour freelances, artisans et petits business qui veulent un site ou une app native, livré vite et propre.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="font-mono text-sm text-purple-500 dark:text-purple-400 mb-10"
        >
          À partir de <span className="text-lg font-bold text-gray-900 dark:text-white">390€</span>
          <span className="text-slate-400 line-through ml-2">1 500€</span>
          <span className="text-slate-400 mx-2">·</span>
          apps iOS dès <span className="font-bold text-gray-900 dark:text-white">2 990€+</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#devis"
            className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all duration-300 glow-purple"
          >
            Estimer votre projet
          </a>
          <a
            href="#projets"
            className="px-8 py-3.5 rounded-full border border-gray-300 dark:border-white/15 text-gray-800 dark:text-white font-semibold text-sm hover:border-purple-500/50 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300"
          >
            Voir les projets
          </a>
        </motion.div>
      </div>
    </section>
  )
}
