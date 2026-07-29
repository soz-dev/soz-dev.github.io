import { motion } from 'framer-motion'
import { ExternalLink, Smartphone } from 'lucide-react'

const projects = [
  {
    id: 1,
    category: 'Web App',
    year: '2026',
    title: 'Locazen',
    description:
      'Plateforme de gestion locative saisonnière à Sète — réservations, tarification dynamique, simulateur de revenus et interface propriétaires complète.',
    tech: ['React', 'Vite', 'Tailwind', 'Supabase', 'Cloudflare'],
    accentColor: '#a855f7',
    link: 'https://locazen7.fr',
    linkLabel: 'Voir le site',
    appStore: false,
  },
  {
    id: 4,
    category: 'iOS App',
    year: '2026',
    title: 'Locazen 12',
    description:
      'Application iOS de gestion locative saisonnière à Sète — consultez vos réservations, suivez vos revenus et gérez vos biens directement depuis votre iPhone.',
    tech: ['Swift', 'SwiftUI', 'iOS'],
    accentColor: '#0891b2',
    link: 'https://apps.apple.com/fr/app/locazen-12/id6446256021',
    linkLabel: 'App Store',
    appStore: true,
  },
  {
    id: 2,
    category: 'iOS App',
    year: '2026',
    title: 'Dev Mastery',
    description:
      'Apprends SwiftUI & Swift avec des cours structurés, défis pratiques, quiz et aide-mémoire. De débutant à expert, progresse à ton rythme.',
    tech: ['Swift', 'SwiftUI', 'iOS 17+'],
    accentColor: '#06b6d4',
    link: 'https://apps.apple.com/fr/app/dev-mastery/id6759505533',
    linkLabel: 'App Store',
    appStore: true,
  },
  {
    id: 3,
    category: 'iOS Game',
    year: '2026',
    title: 'Motastic',
    description:
      "Défis quotidiens, classements en temps réel et 14 mini-jeux variés : Le Petit Bac, L'intrus, Devine le drapeau, Mémoire célébrités et bien d'autres.",
    tech: ['Swift', 'SwiftUI', 'GameKit', 'iOS'],
    accentColor: '#a855f7',
    link: 'https://apps.apple.com/fr/app/motastic/id6760564637',
    linkLabel: 'App Store',
    appStore: true,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

export default function Projects() {
  return (
    <section id="projets" className="py-28">
      <div className="max-w-5xl mx-auto px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span className="text-xs font-mono text-purple-400 tracking-[0.3em] uppercase mb-4 block">
            // réalisations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Projets</h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg">
            Des produits réels, utilisés par de vraies personnes.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-5"
        >
          {projects.map((p) => (
            <motion.div
              key={p.id}
              variants={cardVariants}
              className="group glass rounded-2xl p-7 border border-gray-100 dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10 transition-all duration-300 relative overflow-hidden flex flex-col"
            >
              {/* Hover glow */}
              <div
                className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                style={{ background: p.accentColor }}
              />

              {/* Meta */}
              <p className="text-xs font-mono mb-4" style={{ color: p.accentColor }}>
                {p.category} · {p.year}
              </p>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{p.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                {p.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full border border-gray-200 dark:border-white/5 text-slate-500 bg-gray-50 dark:bg-white/3"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 mt-auto w-full py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.03]"
                  style={{
                    background: `${p.accentColor}18`,
                    border: `1px solid ${p.accentColor}40`,
                    color: p.accentColor,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = `${p.accentColor}30`
                    e.currentTarget.style.borderColor = `${p.accentColor}80`
                    e.currentTarget.style.boxShadow = `0 0 20px ${p.accentColor}25`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = `${p.accentColor}18`
                    e.currentTarget.style.borderColor = `${p.accentColor}40`
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {p.appStore
                    ? <Smartphone className="w-4 h-4" />
                    : <ExternalLink className="w-4 h-4" />}
                  {p.linkLabel}
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
