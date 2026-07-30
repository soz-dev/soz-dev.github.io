/**
 * Champ de formulaire DS
 */
export default function Input({
  label,
  hint,
  error,
  className = '',
  id,
  as: Comp = 'input',
  ...props
}) {
  const inputId = id || props.name
  const base =
    'w-full rounded-xl border bg-white dark:bg-white/5 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder:text-slate-400 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20'

  const border = error
    ? 'border-danger-500'
    : 'border-gray-200 dark:border-white/10'

  return (
    <label className={`block ${className}`}>
      {label && (
        <span className="block text-xs font-semibold text-gray-700 dark:text-slate-300 mb-1.5">
          {label}
        </span>
      )}
      <Comp id={inputId} className={`${base} ${border}`} {...props} />
      {hint && !error && (
        <span className="mt-1.5 block text-[11px] text-slate-400">{hint}</span>
      )}
      {error && (
        <span className="mt-1.5 block text-[11px] text-danger-500">{error}</span>
      )}
    </label>
  )
}
