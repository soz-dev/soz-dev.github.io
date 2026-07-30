import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Quel est le délai moyen de réalisation ?',
    a: 'Landing / vitrine : quelques jours à 2 semaines. Site pro ou boutique Stripe : 2 à 4 semaines. App web ou iOS : selon le scope (souvent 4 à 8 semaines). Le planning précis est toujours dans le devis.',
  },
  {
    q: 'Comment se passe le paiement ?',
    a: '30 % d\'acompte au démarrage du projet, solde à la livraison finale. Virement bancaire ou PayPal. Une facture est émise à chaque étape.',
  },
  {
    q: 'Je n\'ai pas de maquette ni de brief, est-ce un problème ?',
    a: 'Pas du tout. La plupart des clients arrivent avec juste une idée. L\'échange initial sert à structurer le projet. On avance en duo (développement assisté par Cursor) pour aller vite sans sacrifier la qualité.',
  },
  {
    q: 'Puis-je modifier mon site moi-même après la livraison ?',
    a: 'Oui, si un CMS est intégré (blogs ou fiches produits). Sinon, sessions de formation ou maintenance mensuelle pour les évolutions.',
  },
  {
    q: 'Proposez-vous un suivi ou de la maintenance après livraison ?',
    a: '1 mois de support gratuit est inclus. Au-delà, maintenance mensuelle à 200 €/mois (mises à jour, sauvegardes, corrections).',
  },
  {
    q: 'Est-ce que vous publiez l\'app sur l\'App Store à ma place ?',
    a: 'Oui. La publication App Store est incluse dans les formules iOS. Il vous faut un compte Apple Developer (99 €/an) — je vous aide à le créer si besoin.',
  },
  {
    q: 'Utilisez-vous WordPress ou des CMS comme Wix ?',
    a: 'Non. Stack moderne : React, Vite, Supabase pour le web ; Swift / SwiftUI pour iOS. Plus rapide, plus maintenable, plus sûr que les CMS génériques.',
  },
  {
    q: 'Vous occupez-vous aussi du design et des textes ?',
    a: 'Du design oui — identité visuelle et maquettes. Pour les textes, rédaction basique possible, ou orientation vers un copywriter si le contenu est stratégique.',
  },
]

function FAQItem({ item, isOpen, onToggle, id }) {
  const panelId = `faq-panel-${id}`
  const buttonId = `faq-button-${id}`
  return (
    <div className={`glass rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-purple-200 dark:border-purple-500/30' : 'border-gray-100 dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10'}`}>
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">{item.q}</span>
        <span
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{ background: isOpen ? 'rgba(168,85,247,0.12)' : 'rgba(0,0,0,0.04)' }}
          aria-hidden="true"
        >
          {isOpen
            ? <Minus className="w-3.5 h-3.5 text-purple-500" />
            : <Plus className="w-3.5 h-3.5 text-slate-500" />
          }
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p className="px-6 pb-5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-28">
      <div className="max-w-3xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-14"
          style={{ textAlign: 'center' }}
        >
          <span className="text-xs font-mono text-purple-400 tracking-[0.3em] uppercase mb-4 block">
            Questions fréquentes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5">FAQ</h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg">
            Tout ce que vous voulez savoir avant de démarrer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-3"
        >
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              id={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
