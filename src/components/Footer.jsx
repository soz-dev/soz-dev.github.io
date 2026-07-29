export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 py-10">
      <div className="max-w-5xl mx-auto px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span
            className="gradient-text select-none"
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '0.95rem', letterSpacing: '0.1em' }}
          >
            SOZ_DEV
          </span>
          <span className="text-xs font-mono text-slate-400">
            <span className="text-purple-500">// </span>Rapides, modernes, inoubliables.
          </span>
        </div>

        <span className="text-sm text-slate-500 text-center">
          © {year} Sofyan Zarouri · soz-dev.com · Fait avec React & Vite
        </span>

        <div className="flex items-center gap-6 text-sm text-slate-500">
          <a
            href="https://github.com/soz-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sofyan.devpro@gmail.com"
            className="hover:text-gray-900 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
