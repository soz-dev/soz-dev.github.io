import { motion } from 'framer-motion'
import { Globe, Zap, ShoppingBag, LayoutTemplate, Layers, Database, FormInput, Search, Smartphone, Store, Palette } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionLottie from './motion/SectionLottie'
import LottieIcon from './motion/LottieIcon'
import { LOTTIE } from '../lib/lottieMap'

const services = [
  {
    icon: Globe,
    lottie: LOTTIE.web,
    accentColor: '#a855f7',
    badge: 'Sites web',
    title: 'Vitrines & sites pro',
    description:
      'Une page d’accueil ou un site complet pour présenter votre activité, gagner en crédibilité et générer des contacts.',
    features: [
      { icon: LayoutTemplate, text: 'Page d’accueil ou site multi-pages' },
      { icon: Layers, text: 'Blog ou contenus à faire évoluer' },
      { icon: Search, text: 'Référencement de base & suivi' },
      { icon: FormInput, text: 'Formulaires & demande de devis' },
    ],
  },
  {
    icon: ShoppingBag,
    lottie: LOTTIE.shop,
    accentColor: '#06b6d4',
    badge: 'Vente en ligne',
    title: 'Boutique en ligne',
    description:
      'Catalogue, panier et paiement sécurisé. Suivi des commandes inclus. Projet plus engagé qu’une vitrine : on cadre le besoin avant de chiffrer.',
    features: [
      { icon: ShoppingBag, text: 'Catalogue + panier' },
      { icon: Zap, text: 'Paiement en ligne sécurisé' },
      { icon: Database, text: 'Suivi des commandes' },
      { icon: FormInput, text: 'Emails de confirmation' },
    ],
  },
  {
    icon: Database,
    lottie: LOTTIE.tools,
    accentColor: '#8b5cf6',
    badge: 'Outils métier',
    title: 'Espaces & outils sur mesure',
    description:
      'Espace client, tableau de bord ou outil interne : connexion sécurisée, données à vous, interface adaptée à votre métier.',
    features: [
      { icon: Database, text: 'Compte client sécurisé' },
      { icon: Layers, text: 'Tableaux de bord & gestion' },
      { icon: Zap, text: 'Fonctionnalités sur mesure' },
      { icon: Globe, text: 'Mise en ligne incluse' },
    ],
  },
  {
    icon: Smartphone,
    lottie: LOTTIE.phone,
    accentColor: '#007AFF',
    badge: 'App Store',
    title: 'Applications iOS',
    description:
      'Une app pour iPhone, comme Motastic ou Dev Mastery, de l’idée jusqu’à la publication sur l’App Store.',
    features: [
      { icon: Smartphone, text: 'App iPhone native' },
      { icon: Palette, text: 'Design inclus' },
      { icon: Store, text: 'Publication App Store' },
      { icon: Zap, text: 'Compatible iPhones récents' },
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
          <span className="text-xs font-mono text-brand-400 tracking-[0.3em] uppercase mb-4 block">
            Ce que je crée
          </span>
          <SectionLottie src={LOTTIE.code} size="md" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5">
            Mes services
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed" style={{ maxWidth: '520px', margin: '0 auto', textAlign: 'center' }}>
            Sites, boutiques en ligne, outils métier et apps iPhone, livrés de A à Z.
          </p>
          <Link to="/devis" className="inline-block mt-5 text-sm font-semibold text-purple-500 hover:text-brand-400 transition-colors">
            Estimer votre projet →
          </Link>
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
              whileHover={{ y: -8, transition: { duration: 0.28 } }}
              className="group gradient-border glass rounded-2xl p-8 relative overflow-hidden cursor-default"
            >
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-700"
                style={{ background: s.accentColor }}
              />

              <div className="w-16 h-16 mb-6">
                <LottieIcon src={s.lottie} className="w-full h-full" />
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
