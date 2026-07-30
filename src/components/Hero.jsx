import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const words = [
  { heading: 'sites web',    subtitle: 'Rapides, modernes, inoubliables.'   },
  { heading: 'apps iOS',     subtitle: "De l'idée à l'App Store."            },
  { heading: 'expériences',  subtitle: 'Chaque pixel a son intention.'       },
  { heading: 'produits',     subtitle: 'Du concept à la mise en ligne.'      },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2800)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-700/15 blur-[120px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px] animate-blob delay-2" />
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] rounded-full bg-purple-900/15 blur-[90px] animate-blob delay-4" />
      </div>

      {/* Scan line overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-8 lg:px-12" style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-purple-500/25 text-xs font-mono text-slate-500 dark:text-slate-400 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
          Disponible pour de nouveaux projets
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[clamp(3rem,10vw,7rem)] font-bold leading-[0.95] tracking-tight mb-8">
            <span className="text-gray-900 dark:text-white block">Je conçois des</span>

            {/* Mot central dynamique */}
            <span className="block" style={{ height: 'clamp(3.15rem,10.5vw,7.35rem)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="gradient-text inline-block"
                  style={{ textShadow: 'none' }}
                >
                  {words[index].heading}
                </motion.span>
              </AnimatePresence>
            </span>

            <span className="text-gray-900 dark:text-white block">qui marquent.</span>
          </h1>
        </motion.div>

        {/* Rotating subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-3 mb-12 h-8"
        >
          <span className="font-mono text-purple-500 text-lg select-none">//</span>
          <div className="overflow-hidden h-7 flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="text-slate-600 dark:text-slate-300 text-lg font-medium block"
              >
                {words[index].subtitle}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projets"
            className="group px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all duration-300 glow-purple"
          >
            Voir mes projets
          </a>

        </motion.div>
      </div>

    </section>
  )
}
