import { useEffect, useState } from 'react'
import {
  Button,
  Badge,
  Eyebrow,
  SectionHeader,
  Surface,
  Input,
  colors,
  typeScale,
  brand,
  fonts,
  radius,
  space,
  motion,
} from '../design-system'

function Swatch({ name, hex, className = '' }) {
  return (
    <div className="min-w-0">
      <div
        className={`h-16 rounded-xl border border-black/5 dark:border-white/10 mb-2 ${className}`}
        style={hex ? { background: hex } : undefined}
      />
      <p className="text-xs font-semibold text-gray-900 dark:text-white truncate">{name}</p>
      {hex && <p className="text-[10px] font-mono text-slate-400">{hex}</p>}
    </div>
  )
}

function Block({ title, children }) {
  return (
    <section className="mb-16 scroll-mt-24" id={title.toLowerCase().replace(/\s+/g, '-')}>
      <h2 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b border-gray-100 dark:border-white/10">
        {title}
      </h2>
      {children}
    </section>
  )
}

const NAV = [
  'Identité',
  'Couleurs',
  'Typographie',
  'Espacements',
  'Rayons',
  'Ombres',
  'Boutons',
  'Badges',
  'Surfaces',
  'Formulaires',
  'Sections',
  'Motion',
]

export default function DesignSystemPage() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className="min-h-screen bg-[var(--ds-page-bg)] text-[var(--ds-page-fg)]">
      {/* Top bar */}
      <header className="sticky top-0 z-40 glass border-b border-gray-100 dark:border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-display font-extrabold tracking-widest gradient-text text-sm shrink-0">
              {brand.name}
            </span>
            <span className="text-xs text-slate-400 truncate hidden sm:inline">Design System</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setIsDark(d => !d)}
              className="text-xs font-mono px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5"
            >
              {isDark ? 'Light' : 'Dark'}
            </button>
            <a
              href="/?mode=admin"
              className="text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5"
            >
              Admin
            </a>
            <a
              href="/"
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900"
            >
              ← Site
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-10 lg:py-14 grid lg:grid-cols-[200px_1fr] gap-10">
        {/* Side nav */}
        <nav className="hidden lg:block sticky top-20 self-start space-y-1">
          {NAV.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="block text-xs font-medium text-slate-500 hover:text-brand-500 dark:hover:text-brand-400 py-1.5 transition-colors"
            >
              {item}
            </a>
          ))}
          <p className="pt-6 text-[10px] font-mono text-slate-400 leading-relaxed">
            ?mode=ds
            <br />
            tokens.css + composants
          </p>
        </nav>

        <main>
          {/* Hero */}
          <div className="mb-16">
            <Eyebrow color="accent">v1 · SOZ-DEV</Eyebrow>
            <h1 className="ds-h1 text-gray-900 dark:text-white mb-4">Design System</h1>
            <p className="ds-body-lg text-slate-500 dark:text-slate-400 max-w-xl mb-6">
              Source de vérité visuelle : tokens CSS, primitives React, light & dark.
              Construire plus vite sans reinventer les couleurs à chaque bloc.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge tone="brand">Syne + Manrope</Badge>
              <Badge tone="accent">Purple → Cyan</Badge>
              <Badge tone="mono">Tailwind 4 @theme</Badge>
              <Badge tone="success">Dark mode</Badge>
            </div>
          </div>

          <Block title="Identité">
            <Surface className="p-8 md:p-10">
              <p className="gradient-text font-display font-extrabold tracking-[0.14em] text-lg mb-4">
                SOZ_DEV
              </p>
              <p className="ds-h2 text-gray-900 dark:text-white mb-3 max-w-lg">{brand.tagline}</p>
              <p className="text-sm text-slate-500 font-mono">{brand.url}</p>
              <div className="mt-8 grid sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <p className="text-slate-400 mb-1">Display</p>
                  <p className="font-display font-bold text-lg" style={{ fontFamily: fonts.display }}>Syne</p>
                </div>
                <div>
                  <p className="text-slate-400 mb-1">Body</p>
                  <p className="font-bold text-lg" style={{ fontFamily: fonts.sans }}>Manrope</p>
                </div>
                <div>
                  <p className="text-slate-400 mb-1">Accent mono</p>
                  <p className="font-mono text-sm">SF Mono / ui-monospace</p>
                </div>
              </div>
            </Surface>
          </Block>

          <Block title="Couleurs">
            <p className="text-sm text-slate-500 mb-4">Brand</p>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-8">
              {Object.entries(colors.brand).map(([k, hex]) => (
                <Swatch key={k} name={k} hex={hex} />
              ))}
            </div>
            <p className="text-sm text-slate-500 mb-4">Accent (cyan)</p>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 mb-8">
              {Object.entries(colors.accent).map(([k, hex]) => (
                <Swatch key={k} name={k} hex={hex} />
              ))}
            </div>
            <p className="text-sm text-slate-500 mb-4">Sémantiques</p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-8">
              <Swatch name="success" hex={colors.success[500]} />
              <Swatch name="warning" hex={colors.warning[500]} />
              <Swatch name="danger" hex={colors.danger[500]} />
              <Swatch name="ink" hex={colors.ink.DEFAULT} />
              <Swatch name="ink-muted" hex={colors.ink.muted} />
              <Swatch name="surface-dark" hex={colors.surface.dark} />
            </div>
            <p className="text-sm text-slate-500 mb-3">Gradient brand</p>
            <div
              className="h-14 rounded-2xl mb-2"
              style={{ background: 'var(--ds-gradient-brand)' }}
            />
            <p className="text-[10px] font-mono text-slate-400">--ds-gradient-brand · purple → cyan</p>
          </Block>

          <Block title="Typographie">
            <div className="space-y-8">
              {typeScale.map(t => (
                <div key={t.name} className="border-b border-gray-100 dark:border-white/5 pb-6">
                  <p className="text-[10px] font-mono text-slate-400 mb-2">{t.name} · .{t.className}</p>
                  <p className={`${t.className} text-gray-900 dark:text-white`}>{t.sample}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block title="Espacements">
            <div className="space-y-3">
              {[
                ['section', space.section, 'Padding vertical sections'],
                ['sectionSm', space.sectionSm, 'Sections compactes'],
                ['container', space.container, 'max-w contenu standard'],
                ['containerWide', space.containerWide, 'max-w showcase'],
              ].map(([name, val, desc]) => (
                <div key={name} className="flex items-center gap-4">
                  <div
                    className="h-8 rounded-md bg-brand-500/20 border border-brand-500/30 shrink-0"
                    style={{ width: name.startsWith('container') ? '40%' : val }}
                  />
                  <div>
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="text-[11px] font-mono text-slate-400">{val} — {desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Block>

          <Block title="Rayons">
            <div className="flex flex-wrap gap-4">
              {Object.entries(radius).map(([name, val]) => (
                <div key={name} className="text-center">
                  <div
                    className="w-16 h-16 bg-brand-500/20 border border-brand-500/40 mb-2"
                    style={{ borderRadius: val }}
                  />
                  <p className="text-[10px] font-mono">{name}</p>
                  <p className="text-[9px] text-slate-400">{val}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block title="Ombres">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="h-24 rounded-2xl bg-white dark:bg-[#0a0f1a] shadow-sm flex items-center justify-center text-xs font-mono">
                shadow-sm
              </div>
              <div className="h-24 rounded-2xl bg-white dark:bg-[#0a0f1a] shadow-md flex items-center justify-center text-xs font-mono">
                shadow-md
              </div>
              <div className="h-24 rounded-2xl bg-white dark:bg-[#0a0f1a] shadow-lg flex items-center justify-center text-xs font-mono">
                shadow-lg
              </div>
              <div className="h-24 rounded-2xl bg-gradient-to-r from-brand-600 to-accent-500 glow-purple flex items-center justify-center text-xs font-mono text-white">
                glow-purple
              </div>
            </div>
          </Block>

          <Block title="Boutons">
            <div className="flex flex-wrap gap-3 mb-6">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="dark">Dark</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">XL</Button>
              <Button disabled>Disabled</Button>
            </div>
            <pre className="mt-6 p-4 rounded-xl bg-gray-900 text-slate-300 text-[11px] overflow-x-auto font-mono">
{`import { Button } from './design-system'
<Button href="#devis" as="a" variant="primary" size="lg">
  Estimer votre projet
</Button>`}
            </pre>
          </Block>

          <Block title="Badges">
            <div className="flex flex-wrap gap-2">
              <Badge tone="brand">Brand</Badge>
              <Badge tone="accent">Accent</Badge>
              <Badge tone="success">Success</Badge>
              <Badge tone="warning">Warning</Badge>
              <Badge tone="neutral">Neutral</Badge>
              <Badge tone="mono">Menu</Badge>
            </div>
          </Block>

          <Block title="Surfaces">
            <div className="grid sm:grid-cols-2 gap-4">
              <Surface className="p-6">
                <p className="font-semibold mb-1">default</p>
                <p className="text-xs text-slate-500">Bordure légère, fond page</p>
              </Surface>
              <Surface variant="glass" className="p-6">
                <p className="font-semibold mb-1">glass</p>
                <p className="text-xs text-slate-500">Blur + translucide</p>
              </Surface>
              <Surface variant="muted" className="p-6">
                <p className="font-semibold mb-1">muted</p>
                <p className="text-xs text-slate-500">Fond section secondary</p>
              </Surface>
              <Surface variant="dark" className="p-6">
                <p className="font-semibold mb-1">dark</p>
                <p className="text-xs text-slate-400">CTA / contraste fort</p>
              </Surface>
            </div>
          </Block>

          <Block title="Formulaires">
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
              <Input label="Email" name="email" type="email" placeholder="vous@email.com" hint="Réponse sous 24h" />
              <Input label="Budget" name="budget" placeholder="690 €" error="Champ requis" />
              <Input
                as="textarea"
                label="Message"
                name="msg"
                rows={3}
                placeholder="Décrivez votre projet…"
                className="sm:col-span-2"
              />
            </div>
          </Block>

          <Block title="Sections">
            <Surface variant="muted" className="p-8">
              <SectionHeader
                eyebrow="Exemple"
                eyebrowColor="cyan"
                title="Titre de section"
                highlight="accentué"
                description="Description courte — une idée par section, comme sur le site."
              />
              <div className="flex justify-center gap-3 -mt-8">
                <Button size="sm">CTA principal</Button>
                <Button size="sm" variant="secondary">Secondaire</Button>
              </div>
            </Surface>
          </Block>

          <Block title="Motion">
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <Surface className="p-5">
                <p className="font-semibold mb-1">easeOutExpo</p>
                <p className="text-[11px] font-mono text-slate-400">{JSON.stringify(motion.easeOutExpo)}</p>
              </Surface>
              <Surface className="p-5">
                <p className="font-semibold mb-1">Durées</p>
                <p className="text-[11px] font-mono text-slate-400">
                  fast {motion.duration.fast}s · base {motion.duration.base}s · slow {motion.duration.slow}s
                </p>
              </Surface>
              <Surface className="p-5">
                <div className="w-10 h-10 rounded-full bg-brand-500/30 animate-blob mb-2" />
                <p className="font-semibold">animate-blob</p>
                <p className="text-[11px] text-slate-400">+ reduced-motion safe</p>
              </Surface>
            </div>
          </Block>

          <footer className="pt-8 border-t border-gray-100 dark:border-white/10 text-xs text-slate-400 font-mono">
            Import : <code className="text-brand-500">from &apos;./design-system&apos;</code>
            {' · '}
            Fichiers : <code>src/design-system/</code>
          </footer>
        </main>
      </div>
    </div>
  )
}
