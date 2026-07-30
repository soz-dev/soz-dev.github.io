/**
 * Conteneur de section + titre optionnel
 */
export default function Section({
  id,
  wide = false,
  muted = false,
  compact = false,
  className = '',
  children,
  ...props
}) {
  return (
    <section
      id={id}
      className={`${compact ? 'ds-section-sm' : 'ds-section'} ${
        muted ? 'bg-gray-50/60 dark:bg-white/[0.02]' : ''
      } ${className}`}
      {...props}
    >
      <div className={wide ? 'ds-container-wide' : 'ds-container'}>{children}</div>
    </section>
  )
}
