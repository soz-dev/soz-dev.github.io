import { motion, useReducedMotion } from 'framer-motion'
import { Globe, Zap, ShoppingBag, LayoutTemplate, Layers, Database, FormInput, Search, Smartphone, Store, Palette } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionLottie from './motion/SectionLottie'
import PhoneMock from './motion/PhoneMock'
import { LOTTIE } from '../lib/lottieMap'

const services = [
  {
    icon: Globe,
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
    phoneMock: true,
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
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export default function Services() {
  const reduce = useReducedMotion()

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
          style={{ textAlign: 'center' }}
        >
          <span className="text-xs font-mono text-brand-400 tracking-[0.3em] uppercase mb-4 block">
            Ce que je crée
          </span>
          <SectionLottie src={LOTTIE.services} size="xl" />
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mes services
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-lg leading-relaxed" style={{ maxWidth: '520px', margin: '0 auto', textAlign: 'center' }}>
            Sites, boutiques en ligne, outils métier et apps iPhone, livrés de A à Z.
          </p>
          <Link
            to="/tarifs#estimateur"
            className="inline-block mt-5 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-brand-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded"
          >
            Estimer mon projet →
          </Link>
        </motion.div>

        <motion.div
          variants={reduce ? undefined : containerVariants}
          initial={reduce ? false : 'hidden'}
          whileInView={reduce ? undefined : 'visible'}
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 gap-5 md:gap-6"
        >
          {services.map((s) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                variants={reduce ? undefined : cardVariants}
                whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.25 } }}
                className="group gradient-border glass rounded-2xl p-7 md:p-8 relative overflow-hidden"
              >
                <div
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-700"
                  style={{ background: s.accentColor }}
                />

                <div className="mb-5">
                  {s.phoneMock ? (
                    <div className="w-36 h-36 md:w-44 md:h-44">
                      <PhoneMock color={s.accentColor} />
                    </div>
                  ) : (
                    <motion.div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ background: `${s.accentColor}18` }}
                      whileHover={reduce ? undefined : { scale: 1.06, rotate: -3 }}
                      aria-hidden
                    >
                      <Icon className="w-7 h-7" style={{ color: s.accentColor }} strokeWidth={1.5} />
                    </motion.div>
                  )}
                </div>

                <p className="text-xs font-mono mb-1.5" style={{ color: s.accentColor }}>
                  {s.badge}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {s.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 text-sm">{s.description}</p>

                <ul className="space-y-2.5">
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
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
