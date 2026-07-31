import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionLottie from './motion/SectionLottie'
import { LOTTIE } from '../lib/lottieMap'

const faqs = [
  {
    q: 'Pourquoi ces prix sont-ils si bas ?',
    a: 'Je travaille seul, sans structure lourde : vous payez le résultat, pas une agence. Les prix barrés reflètent l’ordre de grandeur du marché (agence / freelance classique).',
  },
  {
    q: 'Quel délai pour un site ou une app iPhone ?',
    a: 'Page d’accueil : 3–7 jours. Vitrine : 1–2 semaines. Site Pro : 2–3 semaines. Boutique en ligne : souvent 4–8 semaines. Outil web ou app iPhone : selon le projet (souvent 4–8 semaines pour iOS). Le planning exact est dans le devis, avec une marge réaliste.',
  },
  {
    q: 'Comment fonctionne l’acompte ?',
    a: '30 % d’acompte au démarrage pour réserver le créneau et lancer le design. Solde à la livraison / mise en ligne. Virement ou PayPal. Facture à chaque étape. Aucun engagement tant que le devis n’est pas validé.',
  },
  {
    q: 'À qui appartient le code et le site ?',
    a: 'À vous, une fois le solde réglé. Vous recevez les accès (hébergement, dépôt, comptes) et pouvez faire évoluer le projet avec moi ou un autre prestataire. Pas de lock-in propriétaire.',
  },
  {
    q: 'La maintenance est-elle obligatoire ?',
    a: 'Non. 1 mois de support inclus (bugs, petits ajustements). Ensuite vous gérez seul, ou vous prenez une maintenance optionnelle dès 200 €/mois (mises à jour, sauvegardes, corrections). Jamais forcée.',
  },
  {
    q: 'Proposez-vous aussi des apps iPhone ?',
    a: 'Oui, c’est mon cœur de métier. Motastic et Dev Mastery sont sur l’App Store. Publication incluse ; le compte Apple Developer (99 €/an) reste à votre charge.',
  },
  {
    q: 'C’est quoi une boutique en ligne chez vous ?',
    a: 'Un vrai projet e-commerce : catalogue, panier, paiement sécurisé et suivi des commandes. Ce n’est pas un template à 2 000 € : le tarif démarre plus haut et s’affine selon le volume de produits et vos besoins.',
  },
  {
    q: 'Je n’ai ni maquette ni brief, c’est possible ?',
    a: 'Oui. La plupart des clients arrivent avec une idée. L’échange + le devis en ligne structurent le projet. Design inclus ; pour les textes : aide basique ou orientation vers un copywriter.',
  },
  {
    q: 'WordPress / Wix ?',
    a: 'Non. Sites et apps modernes, rapides et évolutifs, sans plugins qui ralentissent ou bloquent votre site.',
  },
]

function FAQItem({ item, isOpen, onToggle, id, reduce }) {
  const panelId = `faq-panel-${id}`
  const buttonId = `faq-button-${id}`
  return (
    <div className={`glass rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-purple-200 dark:border-brand-500/30' : 'border-gray-100 dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10'}`}>
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-500"
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
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0.01 : 0.28, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p className="px-6 pb-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
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
  const reduce = useReducedMotion()

  return (
    <section id="faq" className="py-20 md:py-28" aria-labelledby="faq-title">
      <div className="max-w-3xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-14"
          style={{ textAlign: 'center' }}
        >
          <span className="text-xs font-mono text-brand-400 tracking-[0.3em] uppercase mb-4 block">
            Questions fréquentes
          </span>
          <SectionLottie src={LOTTIE.faq} size="lg" />
          <h2 id="faq-title" className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">FAQ</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-lg">
            Délais, acompte, propriété du code, maintenance : réponses claires.
          </p>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-3"
        >
          {faqs.map((item, i) => (
            <FAQItem
              key={item.q}
              id={i}
              item={item}
              reduce={reduce}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
