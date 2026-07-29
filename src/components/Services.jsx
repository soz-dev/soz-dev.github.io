import { motion } from 'framer-motion'
import { Globe, Smartphone, Zap, ShoppingBag, LayoutTemplate, Layers, Store, Palette } from 'lucide-react'

const services = [
  {
    icon: Globe,
    accentColor: '#a855f7',
    badge: 'Web & SaaS',
    title: 'Sites Internet',
    description:
      "Des sites qui convertissent et des applications web qui scalent. Rapides, modernes, optimisés SEO — de la landing page au SaaS complet.",
    features: [
      { icon: LayoutTemplate, text: 'Landing pages & vitrines' },
      { icon: Zap,            text: 'Applications web SaaS' },
      { icon: ShoppingBag,   text: 'E-commerce & boutiques' },
      { icon: Layers,        text: 'Portfolios & blogs' },
    ],
  },
  {
    icon: Smartphone,
    accentColor: '#06b6d4',
    badge: 'App Store',
    title: 'Applications iOS',
    description:
      "Des apps natives qui se distinguent dès la première seconde. De l'idée à la publication sur l'App Store, je gère tout le cycle de vie.",
    features: [
      { icon: Smartphone, text: 'Apps Swift / SwiftUI' },
      { icon: Layers,     text: 'React Native cross-platform' },
      { icon: Store,      text: 'Publication App Store' },
      { icon: Palette,    text: 'UI/UX design intégré' },
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Services() {
  return (
    <section id="services" className="py-28">
      <div className="max-w-5xl mx-auto px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-16"
          style={{ textAlign: 'center' }}
        >
          <span className="text-xs font-mono text-purple-400 tracking-[0.3em] uppercase mb-4 block">
            // ce que je crée
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Mes services
          </h2>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed" style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center' }}>
            Du concept à la mise en ligne — des produits digitaux qui font la différence.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariants}
              className="group gradient-border glass rounded-2xl p-8 md:p-10 relative overflow-hidden cursor-default"
            >
              {/* Corner glow */}
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-700"
                style={{ background: s.accentColor }}
              />

              {/* Icon badge */}
              <div
                className="inline-flex p-3 rounded-xl mb-7 border"
                style={{
                  background: `${s.accentColor}18`,
                  borderColor: `${s.accentColor}30`,
                }}
              >
                <s.icon style={{ color: s.accentColor }} className="w-6 h-6" />
              </div>

              {/* Badge + title */}
              <p className="text-xs font-mono mb-1.5" style={{ color: s.accentColor }}>
                {s.badge}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {s.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-8">{s.description}</p>

              {/* Feature list */}
              <ul className="space-y-3">
                {s.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-3 text-sm text-slate-600">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: s.accentColor }}
                    />
                    {f.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
