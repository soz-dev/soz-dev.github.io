import { Link } from 'react-router-dom'
import { PRIX_BASE } from '../lib/pricingEngine'
import BrandLogo from './BrandLogo'
import { BRAND_TAGLINE, NAV_LINKS } from '../lib/brand'

export default function Footer() {
  const year = new Date().getFullYear()

  const footerLinks = [
    ...NAV_LINKS.filter((l) => l.to !== '/'),
    { to: '/devis', label: 'Devis' },
  ]

  return (
    <footer className="border-t border-gray-200 dark:border-white/5 py-10">
      <div className="max-w-5xl mx-auto px-8 lg:px-12 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="overflow-visible">
              <BrandLogo variant="lockup" />
            </Link>
            <span className="text-[10px] tracking-[0.2em] uppercase text-slate-400">
              {BRAND_TAGLINE}
            </span>
            <span className="text-xs text-slate-400">
              Sites &amp; apps iOS dès {PRIX_BASE['site-vitrine']}€.
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
            {footerLinks.map(l => (
              <Link key={l.to} to={l.to} className="hover:text-gray-900 dark:hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

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

        <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
          © {year} Sofyan Zarouri · soz-dev.com
        </p>
      </div>
    </footer>
  )
}
