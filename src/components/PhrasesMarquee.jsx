const phrases = [
  '// Rapides, modernes, inoubliables.',
  '// De l\'idée à l\'App Store.',
  '// Chaque pixel a son intention.',
  '// Du concept à la mise en ligne.',
  '// Des produits qui font la différence.',
  '// Web & iOS, du premier commit au déploiement.',
  '// Rapides, modernes, inoubliables.',
  '// De l\'idée à l\'App Store.',
  '// Chaque pixel a son intention.',
  '// Du concept à la mise en ligne.',
  '// Des produits qui font la différence.',
  '// Web & iOS, du premier commit au déploiement.',
]

export default function PhrasesMarquee() {
  return (
    <div className="py-10 border-y border-gray-100 dark:border-white/5 overflow-hidden">
      <div className="animate-marquee gap-0">
        {phrases.map((phrase, i) => (
          <span
            key={i}
            className="whitespace-nowrap px-8 text-sm font-mono text-slate-400 dark:text-slate-500"
          >
            <span className="text-purple-400">{'// '}</span>
            {phrase.replace('// ', '')}
            <span className="mx-6 text-purple-200 dark:text-purple-900">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
