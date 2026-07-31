/**
 * Placeholders de chargement SOZ_DEV — réservent l’espace, shimmer marque.
 * Respecte prefers-reduced-motion (fond statique).
 */

export function Skeleton({ className = '', rounded = 'rounded-2xl', style, ...props }) {
  return (
    <div
      className={`skeleton ${rounded} ${className}`}
      style={style}
      aria-hidden
      {...props}
    />
  )
}

/** Fallback Suspense plein écran (chunks lazy). */
export function PageLoader({ dark = false }) {
  return (
    <div
      className={`min-h-[100svh] flex items-center justify-center ${
        dark ? 'bg-[#0a0a12]' : 'bg-white dark:bg-[#030712]'
      }`}
      role="status"
      aria-live="polite"
      aria-label="Chargement"
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-8 h-8 rounded-full border-2 border-brand-500/25 border-t-brand-500 dark:border-brand-400/30 dark:border-t-brand-400 animate-spin motion-reduce:animate-none motion-reduce:border-brand-500/50"
          aria-hidden
        />
        <Skeleton className="h-1.5 w-20 rounded-full" />
      </div>
    </div>
  )
}

export default Skeleton
