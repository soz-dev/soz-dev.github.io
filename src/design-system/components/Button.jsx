import { forwardRef } from 'react'

const variants = {
  primary:
    'bg-gradient-to-r from-brand-600 to-accent-500 text-white hover:opacity-90 glow-purple shadow-md',
  secondary:
    'border border-gray-300 dark:border-white/15 text-gray-800 dark:text-white hover:border-brand-500/50 hover:bg-gray-50 dark:hover:bg-white/5',
  ghost:
    'text-brand-600 dark:text-brand-400 hover:bg-brand-500/10',
  accent:
    'bg-accent-500 text-white hover:bg-accent-600',
  dark:
    'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:opacity-90',
  outline:
    'border border-brand-500/40 text-brand-600 dark:text-brand-400 bg-brand-500/10 hover:bg-brand-500/20',
}

const sizes = {
  sm: 'px-4 py-2 text-xs rounded-full',
  md: 'px-7 py-3 text-sm rounded-full',
  lg: 'px-8 py-3.5 text-sm rounded-full',
  xl: 'px-9 py-4 text-base rounded-full',
}

/**
 * Bouton / lien CTA du design system.
 * @param {'primary'|'secondary'|'ghost'|'accent'|'dark'|'outline'} variant
 * @param {'sm'|'md'|'lg'|'xl'} size
 */
const Button = forwardRef(function Button(
  {
    as: Comp = 'button',
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    type,
    ...props
  },
  ref,
) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-950'

  const resolvedType = Comp === 'button' ? type ?? 'button' : undefined

  return (
    <Comp
      ref={ref}
      type={resolvedType}
      className={`${base} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  )
})

export default Button
