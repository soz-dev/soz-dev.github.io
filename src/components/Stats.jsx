import { motion } from 'framer-motion'

const stats = [
  { value: '3',    label: 'Apps sur l\'App Store' },
  { value: '5+',   label: 'Projets livrés'         },
  { value: '100%', label: 'Clients satisfaits'      },
  { value: '<48h', label: 'Délai de réponse'        },
]

export default function Stats() {
  return (
    <section className="py-12 border-y border-gray-100 dark:border-white/5">
      <div className="max-w-5xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{s.value}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
