import { motion } from 'framer-motion'
import { Globe, Zap, ShoppingBag, LayoutTemplate, Layers, Database, FormInput, Search, Smartphone, Store, Palette } from 'lucide-react'

const services = [
  {
    icon: Globe,
    accentColor: '#a855f7',
    badge: 'Sites web',
    title: 'Vitrines & sites pro',
    description:
      'Landing pages, sites multi-pages et sites pro. React + Vite : rapides, SEO-friendly, mis en ligne pour vous.',
    features: [
      { icon: LayoutTemplate, text: 'Landing & vitrines' },
      { icon: Layers, text: 'Sites multi-pages / blog' },
      { icon: Search, text: 'SEO on-page & Analytics' },
      { icon: FormInput, text: 'Formulaires & devis' },
    ],
  },
  {
    icon: ShoppingBag,
    accentColor: '#06b6d4',
    badge: 'Vente en ligne',
    title: 'Boutiques Stripe',
    description:
      'Catalogue, panier et paiement Stripe Checkout. Admin pour suivre les commandes — sans usine WordPress.',
    features: [
      { icon: ShoppingBag, text: 'Catalogue + panier' },
      { icon: Zap, text: 'Paiement Stripe sécurisé' },
      { icon: Database, text: 'Admin commandes' },
      { icon: FormInput, text: 'Emails de confirmation' },
    ],
  },
  {
    icon: Database,
    accentColor: '#8b5cf6',
    badge: 'Outils métier',
    title: 'Apps web & dashboards',
    description:
      'Espace membre, CRM léger, back-office : auth Supabase, données en base, interface sur mesure.',
    features: [
      { icon: Database, text: 'Auth + base de données' },
      { icon: Layers, text: 'Dashboards & CRUD' },
      { icon: Zap, text: 'Logique métier ciblée' },
      { icon: Globe, text: 'Déploiement cloud' },
    ],
  },
  {
    icon: Smartphone,
    accentColor: '#007AFF',
    badge: 'App Store',
    title: 'Applications iOS',
    description:
      'Apps natives Swift / SwiftUI — comme Motastic et Dev Mastery. De l’idée à la publication App Store.',
    features: [
      { icon: Smartphone, text: 'Apps Swift / SwiftUI' },
      { icon: Palette, text: 'UI/UX design inclus' },
      { icon: Store, text: 'Publication App Store' },
      { icon: Zap, text: 'iOS 17+ ready' },
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-16"
          style={{ textAlign: 'center' }}
        >
          <span className="text-xs font-mono text-purple-400 tracking-[0.3em] uppercase mb-4 block">
            Ce que je crée
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5">
            Mes services
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed" style={{ maxWidth: '520px', margin: '0 auto', textAlign: 'center' }}>
            Web + iOS, livrés de A à Z : sites, boutiques Stripe, outils métier et apps natives.
          </p>
          <a href="#devis" className="inline-block mt-5 text-sm font-semibold text-purple-500 hover:text-purple-400 transition-colors">
            Estimer votre projet →
          </a>
        </motion.div>

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
              className="group gradient-border glass rounded-2xl p-8 relative overflow-hidden cursor-default"
            >
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-700"
                style={{ background: s.accentColor }}
              />

              <div
                className="inline-flex p-3 rounded-xl mb-7 border"
                style={{
                  background: `${s.accentColor}18`,
                  borderColor: `${s.accentColor}30`,
                }}
              >
                <s.icon style={{ color: s.accentColor }} className="w-6 h-6" />
              </div>

              <p className="text-xs font-mono mb-1.5" style={{ color: s.accentColor }}>
                {s.badge}
              </p>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {s.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 text-sm">{s.description}</p>

              <ul className="space-y-3">
                {s.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
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
