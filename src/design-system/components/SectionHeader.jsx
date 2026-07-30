import Eyebrow from './Eyebrow'

/**
 * En-tête de section standardisé
 */
export default function SectionHeader({
  eyebrow,
  eyebrowColor = 'brand',
  title,
  highlight,
  description,
  align = 'center',
  className = '',
}) {
  const alignCls = align === 'left' ? 'text-left' : 'text-center mx-auto'

  return (
    <div className={`mb-12 md:mb-16 ${alignCls} ${className}`} style={align === 'center' ? { maxWidth: '36rem' } : undefined}>
      {eyebrow && <Eyebrow color={eyebrowColor}>{eyebrow}</Eyebrow>}
      {title && (
        <h2 className="ds-h2 text-gray-900 dark:text-white mb-4">
          {title}
          {highlight ? (
            <>
              {' '}
              <span className="gradient-text">{highlight}</span>
            </>
          ) : null}
        </h2>
      )}
      {description && (
        <p className="ds-body-lg text-slate-500 dark:text-slate-400">{description}</p>
      )}
    </div>
  )
}

export { Eyebrow }
