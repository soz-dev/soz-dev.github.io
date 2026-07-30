/**
 * Surface type carte / glass
 * @param {'default'|'glass'|'muted'|'dark'} variant
 */
export default function Surface({
  as: Comp = 'div',
  variant = 'default',
  className = '',
  children,
  ...props
}) {
  const variants = {
    default:
      'bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 rounded-2xl',
    glass: 'glass rounded-2xl',
    muted:
      'bg-gray-50/80 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 rounded-2xl',
    dark: 'bg-gray-900 dark:bg-black/40 text-white rounded-2xl',
  }

  return (
    <Comp className={`${variants[variant] ?? variants.default} ${className}`} {...props}>
      {children}
    </Comp>
  )
}
