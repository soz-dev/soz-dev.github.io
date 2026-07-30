import { motion } from 'framer-motion'
import { Mail, MessageCircle, FileText, Palette, Code2, Rocket, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Mail,
    color: '#06b6d4',
    number: '00',
    title: 'Formulaire de devis',
    description: "Commencez par remplir le formulaire en ligne : obtenez une estimation instantanée et soumettez votre projet directement par email.",
    cta: { label: 'Remplir le formulaire', href: '#devis' },
    featured: true,
  },
  {
    icon: MessageCircle,
    color: '#a855f7',
    number: '01',
    title: 'Échange initial',
    description: 'Appel gratuit de 30 min pour cerner votre projet, vos besoins et votre budget. Sans engagement.',
  },
  {
    icon: FileText,
    color: '#9333ea',
    number: '02',
    title: 'Devis & Planning',
    description: 'Proposition chiffrée avec planning de livraison clair envoyée sous 48h. Pas de mauvaises surprises.',
  },
  {
    icon: Palette,
    color: '#7c3aed',
    number: '03',
    title: 'Design & Maquettes',
    description: 'Maquettes interactives soumises à votre validation avant de toucher une ligne de code.',
  },
  {
    icon: Code2,
    color: '#8b5cf6',
    number: '04',
    title: 'Développement',
    description: "Code propre, performant et responsive. Points d'avancement réguliers pour rester alignés.",
  },
  {
    icon: Rocket,
    color: '#0891b2',
    number: '05',
    title: 'Mise en ligne',
    description: 'Tests complets, déploiement et passation de tous les accès. Vous êtes 100% autonomes.',
  },
]

export default function Process() {
  return (
    <section id="processus" className="py-28 bg-gray-50/60 dark:bg-white/[0.02]">
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
            Comment ça marche
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5">Mon processus</h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg" style={{ maxWidth: '480px', margin: '0 auto' }}>
            De l'idée à la mise en ligne — un processus clair, sans jargon, sans surprise.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className={`rounded-2xl p-6 border transition-colors duration-300 flex items-start gap-5 ${
                step.featured
                  ? 'bg-white dark:bg-white/[0.04] border-cyan-200 dark:border-cyan-500/20 shadow-sm dark:shadow-none'
                  : 'glass border-gray-100 dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10'
              }`}
            >
              {/* Number + icon */}
              <div className="shrink-0 flex flex-col items-center gap-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${step.color}15`, border: `1px solid ${step.color}30` }}
                >
                  <step.icon className="w-5 h-5" style={{ color: step.color }} />
                </div>
                <span className="text-xs font-mono font-bold" style={{ color: step.color }}>{step.number}</span>
              </div>

              <div className="pt-1 flex-1">
                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">{step.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{step.description}</p>
                {step.cta && (
                  <a
                    href={step.cta.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold mt-3 transition"
                    style={{ color: step.color }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    {step.cta.label}
                    <ArrowRight size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
