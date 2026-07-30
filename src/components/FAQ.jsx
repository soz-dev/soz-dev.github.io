import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Quel est le délai moyen de réalisation ?',
    a: 'Un site vitrine prend 1 à 2 semaines, un site pro ou e-commerce 2 à 5 semaines. Pour une app iOS, comptez 4 à 8 semaines selon la complexité. Le planning précis est toujours inclus dans le devis.',
  },
  {
    q: 'Comment se passe le paiement ?',
    a: '30% d\'acompte au démarrage du projet, 30% à la validation des maquettes, 40% à la livraison finale. Virement bancaire ou PayPal. Une facture est émise à chaque étape.',
  },
  {
    q: 'Je n\'ai pas de maquette ni de brief, est-ce un problème ?',
    a: 'Pas du tout. La plupart des clients arrivent avec juste une idée. L\'échange initial sert précisément à structurer le projet ensemble. Je vous guide sur les choix visuels et fonctionnels.',
  },
  {
    q: 'Puis-je modifier mon site moi-même après la livraison ?',
    a: 'Oui, si un CMS est intégré (pour les blogs ou fiches produits). Sinon, je propose des sessions de formation ou des contrats de maintenance mensuelle pour toute modification.',
  },
  {
    q: 'Proposez-vous un suivi ou de la maintenance après livraison ?',
    a: '1 mois de support gratuit est inclus dans tous les projets. Au-delà, des contrats de maintenance mensuelle sont disponibles à partir de 90€/mois (mises à jour, sauvegardes, corrections).',
  },
  {
    q: 'Est-ce que vous publiez l\'app sur l\'App Store à ma place ?',
    a: 'Oui. La publication sur l\'App Store est incluse dans toutes les formules iOS. Vous avez besoin d\'un compte Apple Developer (99€/an), que je vous aide à créer si nécessaire.',
  },
  {
    q: 'Utilisez-vous WordPress ou des CMS comme Wix ?',
    a: 'Non. Je travaille exclusivement avec des technologies modernes : React, Vite, Swift, Supabase. Cela garantit des performances optimales, un code maintenable et une sécurité bien supérieure aux CMS génériques.',
  },
  {
    q: 'Vous occupez-vous aussi du design et des textes ?',
    a: 'Du design oui — création de l\'identité visuelle et des maquettes incluse. Pour les textes, je peux vous proposer une rédaction basique ou vous orienter vers un copywriter si le contenu est stratégique.',
  },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`glass rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-purple-200 dark:border-purple-500/30' : 'border-gray-100 dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">{item.q}</span>
        <span
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{ background: isOpen ? 'rgba(168,85,247,0.12)' : 'rgba(0,0,0,0.04)' }}
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
