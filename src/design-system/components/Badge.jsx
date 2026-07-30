const tones = {
  brand: 'bg-brand-100 dark:bg-brand-500/10 text-brand-600 dark:text-brand-300',
  accent: 'bg-accent-100 dark:bg-accent-500/10 text-accent-700 dark:text-accent-300',
  success: 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
  warning: 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300',
  neutral: 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-slate-300',
  mono: 'bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-300 font-mono',
}

/**
 * Pastille / tag
 * @param {'brand'|'accent'|'success'|'warning'|'neutral'|'mono'} tone
 */
export default function Badge({ tone = 'brand', className = '', children, ...props }) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold ${tones[tone] ?? tones.brand} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
