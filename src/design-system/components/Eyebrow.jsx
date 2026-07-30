/**
 * Eyebrow de section (label mono uppercase)
 * @param {'brand'|'accent'|'cyan'|'amber'} color
 */
export default function Eyebrow({ color = 'brand', className = '', children, as: Comp = 'span', ...props }) {
  const colors = {
    brand: 'text-brand-500 dark:text-brand-400',
    accent: 'text-accent-500 dark:text-accent-400',
    cyan: 'text-cyan-400',
    amber: 'text-amber-500 dark:text-amber-400',
  }

  return (
    <Comp
      className={`ds-eyebrow block mb-4 ${colors[color] ?? colors.brand} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  )
}
