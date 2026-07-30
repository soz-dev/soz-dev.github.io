export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 dark:border-white/5 py-10">
      <div className="max-w-5xl mx-auto px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2.5">
            <img
              src="/logo-mark.png"
              alt="SOZ_DEV"
              className="h-9 w-9 object-contain flex-shrink-0"
              width={36}
              height={36}
            />
            <span
              className="gradient-text select-none"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '0.95rem', letterSpacing: '0.1em' }}
            >
              SOZ_DEV
            </span>
          </div>
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-slate-400">
            Développement &amp; Solutions
          </span>
          <span className="text-xs font-mono text-slate-400">
            Sites &amp; apps iOS — dès 390€.
          </span>
        </div>

        <span className="text-sm text-slate-500 dark:text-slate-400 text-center">
          © {year} Sofyan Zarouri · soz-dev.com · Fait avec React &amp; Vite
        </span>

        <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
          <a
            href="https://github.com/soz-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sofyan-zarouri/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sofyan.devpro@gmail.com"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
