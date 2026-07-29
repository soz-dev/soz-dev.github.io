import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Vitrine',
    price: '890',
    description: 'Parfait pour présenter votre activité et capter vos premiers clients en ligne.',
    features: [
      'Landing page ~5 sections',
      'Design responsive mobile/desktop',
      'Formulaire de contact',
      'SEO on-page de base',
      'Mise en ligne incluse',
    ],
    delay: '1-2 semaines',
    accentColor: '#a855f7',
    popular: false,
  },
  {
    name: 'Site Pro',
    price: '1 890',
    description: 'Pour les entreprises qui veulent un site complet, rapide et bien référencé.',
    features: [
      'Jusqu\'à 8 pages',
      'Blog / CMS intégré',
      'Animations & micro-interactions',
      'SEO avancé + sitemap XML',
      'Google Analytics intégré',
    ],
    delay: '2-3 semaines',
    accentColor: '#8b5cf6',
    popular: true,
  },
  {
    name: 'E-Commerce',
    price: '2 990',
    description: 'Une boutique en ligne clé en main, prête à vendre dès le premier jour.',
    features: [
      'Catalogue produits illimité',
      'Paiement Stripe / PayPal',
      'Gestion stock & commandes',
      'Tableau de bord admin',
      'Emails transactionnels',
    ],
    delay: '3-5 semaines',
    accentColor: '#06b6d4',
    popular: false,
  },
  {
    name: 'Application Web',
    price: '4 990',
    suffix: '+',
    description: 'SaaS, espace membre ou outil métier — avec authentification et base de données.',
    features: [
      'Authentification utilisateurs',
      'Dashboard & espace membre',
      'API REST & base de données',
      'Logique métier avancée',
      'Déploiement cloud inclus',
    ],
    delay: 'Sur devis',
    accentColor: '#0891b2',
    popular: false,
  },
  {
    name: 'App iOS',
    price: '3 490',
    suffix: '+',
    description: 'Application native Swift / SwiftUI, de l\'idée à la publication sur l\'App Store.',
    features: [
      'App native Swift / SwiftUI',
      'Design UI/UX inclus',
      'Tests & débogage complets',
      'Publication App Store incluse',
      'Compatible iOS 17+',
    ],
    delay: '4-8 semaines',
    accentColor: '#a855f7',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="tarifs" className="py-28 bg-gray-50/60">
      <div className="max-w-5xl mx-auto px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-16"
          style={{ textAlign: 'center' }}
        >
          <span className="text-xs font-mono text-purple-400 tracking-[0.3em] uppercase mb-4 block">
            // investissement
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">Tarifs</h2>
          <p className="text-slate-500 text-base md:text-lg" style={{ maxWidth: '480px', margin: '0 auto' }}>
            Des prix transparents, sans surprises. Chaque projet inclut un suivi personnalisé.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative glass rounded-2xl p-7 border transition-all duration-300 flex flex-col ${
                plan.popular
                  ? 'border-purple-300 shadow-lg shadow-purple-100'
                  : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4)' }}
                >
                  ✦ Populaire
                </div>
              )}

              {/* Plan name */}
              <p className="text-xs font-mono mb-3 font-bold tracking-widest uppercase" style={{ color: plan.accentColor }}>
                {plan.name}
              </p>

              {/* Price */}
              <div className="flex items-end gap-1 mb-3">
                <span className="text-3xl md:text-4xl font-bold text-gray-900">{plan.price}€</span>
                {plan.suffix && (
                  <span className="text-slate-400 font-medium text-lg mb-0.5">{plan.suffix}</span>
                )}
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-2.5 mb-7 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: plan.accentColor }} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Delay badge */}
              <div
                className="text-xs font-mono px-3 py-1.5 rounded-lg mb-5 text-center"
                style={{ background: `${plan.accentColor}10`, color: plan.accentColor }}
              >
                ⏱ {plan.delay}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: `${plan.accentColor}15`,
                  border: `1px solid ${plan.accentColor}40`,
                  color: plan.accentColor,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = `${plan.accentColor}25`
                  e.currentTarget.style.borderColor = `${plan.accentColor}70`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = `${plan.accentColor}15`
                  e.currentTarget.style.borderColor = `${plan.accentColor}40`
                }}
              >
                Démarrer ce projet
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-slate-400 font-mono mt-10"
        >
          // Tous les projets incluent 1 mois de support après livraison · Acompte 30% au démarrage
        </motion.p>
      </div>
    </section>
  )
}
