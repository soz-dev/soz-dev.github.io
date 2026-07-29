const phrases = [
  'Rapides, modernes, inoubliables.',
  "De l'idée à l'App Store.",
  'Chaque pixel a son intention.',
  'Du concept à la mise en ligne.',
  'Des produits qui font la différence.',
  'Web & iOS, du premier commit au déploiement.',
]

const doubled = [...phrases, ...phrases]

export default function PhrasesMarquee() {
  return (
    <div className="py-10 border-y border-gray-100 dark:border-white/5 overflow-hidden relative">
      {/* Edge fades */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--page-bg), transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--page-bg), transparent)' }}
      />

      <div className="animate-marquee">
        {doubled.map((phrase, i) => (
          <span key={i} className="whitespace-nowrap mx-8 text-sm font-mono text-slate-400 dark:text-slate-500">
            <span className="text-purple-400 mr-1.5">//</span>
            {phrase}
            <span className="ml-8 text-purple-200 dark:text-purple-800">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

