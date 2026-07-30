import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { PRIX_BASE, PRIX_PACK_CLE_EN_MAIN, PRIX_MAINTENANCE_MOIS } from '../lib/pricingEngine'
import { Link } from 'react-router-dom'

/**
 * Prix sous le marché FR. Duo Sofyan + Cursor : web (React/Vite/Supabase/Stripe) + iOS (Swift/SwiftUI).
 * Les montants viennent de PRIX_BASE (même source que devis / estimateur).
 */
const fmt = (n) => n.toLocaleString('fr-FR')

const plans = [
  {
    name: 'Page d’accueil',
    originalPrice: '1 500',
    price: fmt(PRIX_BASE['site-vitrine']),
    description: 'Une page qui présente votre activité et convertit. Idéal pour démarrer vite.',
    features: [
      '1 page (~5 sections)',
      'Design adapté mobile & desktop',
      'Formulaire de contact',
      'Mise en ligne incluse',
      'Référencement de base',
    ],
    delay: '3–7 jours',
    accentColor: '#f59e0b',
    popular: false,
  },
  {
    name: 'Vitrine',
    originalPrice: '2 800',
    price: fmt(PRIX_BASE['site-vitrine-multi']),
    description: 'Plusieurs pages pour expliquer votre offre et rassurer vos clients.',
    features: [
      '2 à 5 pages',
      'Design cohérent',
      'Formulaire + référencement',
      'Mise en ligne incluse',
      '1 mois de support',
    ],
    delay: '1–2 semaines',
    accentColor: '#a855f7',
    popular: true,
  },
  {
    name: 'Site Pro',
    originalPrice: '5 500',
    price: fmt(PRIX_BASE['site-pro']),
    description: 'Site complet, rapide, prêt à évoluer, blog ou contenus éditables possibles.',
    features: [
      'Jusqu’à 8 pages',
      'Blog / contenus éditables',
      'Animations soignées',
      'Référencement + statistiques',
      '1 mois de support',
    ],
    delay: '2–3 semaines',
    accentColor: '#8b5cf6',
    popular: false,
  },
  {
    name: 'Boutique en ligne',
    price: fmt(PRIX_BASE.ecommerce),
    suffix: '+',
    noPromo: true,
    description: 'Catalogue, panier, paiement sécurisé et suivi des commandes. Projet plus technique : tarif de départ, affiné selon le catalogue et vos besoins.',
    features: [
      'Catalogue produits (socle inclus)',
      'Panier + paiement en ligne',
      'Suivi des commandes',
      'Emails de confirmation',
      'Mobile & mise en ligne',
      'Devis selon le volume & options',
    ],
    delay: '4–8 semaines',
    accentColor: '#06b6d4',
    popular: false,
  },
  {
    name: 'Outil / espace client',
    originalPrice: '12 000',
    price: fmt(PRIX_BASE['app-web']),
    suffix: '+',
    description: 'Espace membre, tableau de bord ou outil métier adapté à votre activité.',
    features: [
      'Comptes clients sécurisés',
      'Tableaux de bord & gestion',
      'Fonctionnalités sur mesure',
      'Mise en ligne incluse',
      'Devis selon le besoin',
    ],
    delay: 'Sur devis',
    accentColor: '#0891b2',
    popular: false,
  },
  {
    name: 'App iOS',
    originalPrice: '10 000',
    price: fmt(PRIX_BASE['app-ios']),
    suffix: '+',
    description: 'App iPhone, de l’idée à l’App Store (Motastic, Dev Mastery…).',
    features: [
      'App iPhone native',
      'Design inclus',
      'Tests avant publication',
      'Publication App Store',
      'Compatible iPhones récents',
    ],
    delay: '4–8 semaines',
    accentColor: '#a855f7',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="tarifs" className="py-28 bg-gray-50/60 dark:bg-white/[0.02]">
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
            Investissement
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5">Tarifs</h2>
          <p className="text-sm text-amber-600 dark:text-amber-400 font-medium mb-4">
            Prix clairement sous le marché : sites web & apps iPhone
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg" style={{ maxWidth: '520px', margin: '0 auto' }}>
            Les prix barrés correspondent à l’ordre de grandeur d’une agence ou d’un freelance classique.
          </p>
        </motion.div>

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
                  ? 'border-purple-300 dark:border-brand-500/30 shadow-lg shadow-brand-100 dark:shadow-brand-900/10'
                  : 'border-gray-100 dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10'
              }`}
            >
              {plan.popular && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4)' }}
                >
                  Populaire
                </div>
              )}

              <p className="text-xs font-mono mb-3 font-bold tracking-widest uppercase" style={{ color: plan.accentColor }}>
                {plan.name}
              </p>

              <div className="flex items-end gap-2 mb-3">
                <div className="flex flex-col">
                  {plan.originalPrice && !plan.noPromo && (
                    <span className="text-sm text-slate-400 line-through font-medium">{plan.originalPrice}€</span>
                  )}
                  <div className="flex items-end gap-1">
                    <span className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{plan.price}€</span>
                    {plan.suffix && (
                      <span className="text-slate-400 font-medium text-lg mb-0.5">{plan.suffix}</span>
                    )}
                  </div>
                  {plan.noPromo && (
                    <span className="text-[11px] text-slate-400 mt-1 font-medium">À partir de · sur devis</span>
                  )}
                </div>
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">{plan.description}</p>

              <ul className="space-y-2.5 mb-7 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                    <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: plan.accentColor }} />
                    {f}
                  </li>
                ))}
              </ul>

              <div
                className="text-xs font-mono px-3 py-1.5 rounded-lg mb-5 text-center"
                style={{ background: `${plan.accentColor}10`, color: plan.accentColor }}
              >
                Délai : {plan.delay}
              </div>

              <Link
                to="/devis"
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
                Estimer votre projet
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center text-sm text-slate-400 dark:text-slate-500 font-mono mt-10"
        >
          1 mois de support inclus · Acompte 30 % · Maintenance optionnelle (pas obligatoire) dès {PRIX_MAINTENANCE_MOIS} €/mois
          <br />
          <span className="text-slate-500 dark:text-slate-600 normal-case font-sans text-xs mt-1 inline-block">
            Après le mois inclus, vous pouvez tout gérer seul si vous préférez.
          </span>
          <Link to="/tarifs#pack" className="text-accent-600 dark:text-accent-400 hover:underline mt-2 inline-block">
            Pack clé en main (site + hébergement + domaine) → {PRIX_PACK_CLE_EN_MAIN.toLocaleString('fr-FR')} €
          </Link>
        </motion.p>
      </div>
    </section>
  )
}
