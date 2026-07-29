export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-5xl mx-auto px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-5">
        <span className="font-mono text-sm font-bold gradient-text">SOZ_DEV</span>

        <span className="text-sm text-slate-700 text-center">
          © {year} Sofyan Zarouri · soz-dev.com · Fait avec React & Vite
        </span>

        <div className="flex items-center gap-6 text-sm text-slate-600">
          <a
            href="https://github.com/soz-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sofyan.devpro@gmail.com"
            className="hover:text-slate-300 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
