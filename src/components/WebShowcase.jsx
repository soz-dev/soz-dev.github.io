import { motion } from 'framer-motion'
import { Monitor } from 'lucide-react'

const IMG = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=75`

// ── 1. Restaurant — split editorial + menu list (dark / gold) ───────────────
function MiniRestaurant() {
  const dishes = [
    ['Carpaccio de bœuf', '18 €', 'Entrée'],
    ['Risotto aux truffes', '32 €', 'Plat'],
    ['Pigeon rôti', '38 €', 'Plat'],
    ['Fondant chocolat', '14 €', 'Dessert'],
  ]
  return (
    <div style={{ fontFamily: 'Georgia, "Times New Roman", serif', background: '#0c0a09', color: '#faf6ef', width: '100%', minHeight: 580, height: 'auto', overflow: 'visible', display: 'flex' }}>
      {/* Left: full-bleed dish */}
      <div style={{ width: '42%', position: 'relative', flexShrink: 0 }}>
        <img loading="lazy" src={IMG('1414235077428-338989a2e8c0', 220, 280)} alt="Plat signature Bella Cucina" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.target.style.display = 'none' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,transparent 40%,rgba(12,10,9,0.92))' }} />
        <div style={{ position: 'absolute', bottom: 10, left: 8, right: 8 }}>
          <p style={{ fontSize: 6, letterSpacing: 2, color: '#d4a843', margin: '0 0 2px', fontFamily: 'system-ui' }}>SIGNATURE</p>
          <p style={{ fontSize: 11, fontWeight: 700, margin: 0, lineHeight: 1.15, fontStyle: 'italic' }}>Osso buco<br />alla milanese</p>
        </div>
      </div>
      {/* Right: brand + menu */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <div style={{ padding: '8px 10px 6px', borderBottom: '1px solid rgba(212,168,67,0.25)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: '#d4a843' }}>BELLA CUCINA</span>
            <span style={{ fontSize: 6, fontFamily: 'system-ui', color: 'rgba(250,246,239,0.45)' }}>★ Michelin</span>
          </div>
          <p style={{ fontSize: 6, margin: '2px 0 0', fontFamily: 'system-ui', color: 'rgba(250,246,239,0.5)', letterSpacing: 1 }}>PARIS 8 · DEPUIS 1987</p>
        </div>
        <div style={{ flex: 1, padding: '6px 10px', overflow: 'hidden' }}>
          <p style={{ fontSize: 6.5, letterSpacing: 2, color: '#d4a843', margin: '0 0 5px', fontFamily: 'system-ui' }}>À LA CARTE</p>
          {dishes.map(([name, price, cat], i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 5, fontFamily: 'system-ui' }}>
              <span style={{ fontSize: 5.5, color: 'rgba(212,168,67,0.7)', width: 28, flexShrink: 0 }}>{cat}</span>
              <span style={{ fontSize: 8, flex: 1, borderBottom: '1px dotted rgba(212,168,67,0.3)', paddingBottom: 2 }}>{name}</span>
              <span style={{ fontSize: 8, color: '#d4a843', fontWeight: 700 }}>{price}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: '6px 10px', background: 'rgba(212,168,67,0.12)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'system-ui' }}>
          <span style={{ fontSize: 6.5, color: 'rgba(250,246,239,0.6)' }}>Ouvert · 12h–14h30 / 19h–23h</span>
          <button type="button" style={{ background: '#d4a843', color: '#0c0a09', border: 'none', padding: '4px 10px', fontSize: 7, fontWeight: 800, letterSpacing: 0.5, cursor: 'pointer' }}>Réserver</button>
        </div>
      </div>
    </div>
  )
}

// ── 2. Coach — asymmetric portrait + credentials (warm sage) ────────────────
function MiniCoach() {
  return (
    <div style={{ fontFamily: 'system-ui', background: '#f4f1eb', color: '#1a2e28', width: '100%', minHeight: 580, height: 'auto', overflow: 'visible', display: 'grid', gridTemplateColumns: '1fr 0.95fr' }}>
      <div style={{ padding: '10px 10px 8px', display: 'flex', flexDirection: 'column' }}>
        <p style={{ fontSize: 6, letterSpacing: 2.5, color: '#5c7a6e', margin: '0 0 4px', fontWeight: 700 }}>COACH ICF · PARIS</p>
        <h2 style={{ fontSize: 15, fontWeight: 800, margin: '0 0 4px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>Marie<br />Laurent</h2>
        <p style={{ fontSize: 7, color: '#5a6b64', margin: '0 0 8px', lineHeight: 1.35 }}>Accompagnement carrière &amp; leadership pour cadres ambitieux.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 8 }}>
          {[['200+', 'clients'], ['6 ans', 'expérience'], ['ICF', 'certifiée']].map(([v, l], i) => (
            <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'baseline', borderLeft: '2px solid #7d9b8c', paddingLeft: 6 }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: '#2d4a40' }}>{v}</span>
              <span style={{ fontSize: 6.5, color: '#6b7c74' }}>{l}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 'auto', background: '#1a2e28', color: '#f4f1eb', borderRadius: 6, padding: '6px 8px' }}>
          <p style={{ fontSize: 6, color: '#a8c4b8', margin: '0 0 2px' }}>Prochaine dispo</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 8, fontWeight: 700 }}>Lun 14h · 120 €</span>
            <button type="button" style={{ background: '#c4a574', color: '#1a2e28', border: 'none', padding: '3px 8px', borderRadius: 4, fontSize: 6.5, fontWeight: 700, cursor: 'pointer' }}>Réserver</button>
          </div>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <img loading="lazy" src={IMG('1573496359142-b8d87734a5a2', 200, 280)} alt="Portrait de Marie Laurent, coach" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.target.style.display = 'none' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '8px', background: 'linear-gradient(transparent,rgba(26,46,40,0.92))' }}>
          <p style={{ fontSize: 7, fontStyle: 'italic', color: '#e8e4dc', margin: '0 0 3px', lineHeight: 1.35 }}>&ldquo;En 3 mois j&apos;ai décroché le poste de mes rêves.&rdquo;</p>
          <p style={{ fontSize: 6, color: '#c4a574', margin: 0 }}>— Sophie T., Manager</p>
        </div>
      </div>
    </div>
  )
}

// ── 3. E-commerce — marketplace: featured + dense catalog (blush/noir) ──────
function MiniEcommerce() {
  const products = [
    [IMG('1542291026-7eec264c27ff', 100, 100), 'Air Runner', '129 €', '189 €', true],
    [IMG('1548036328-c9fa89d128fa', 100, 100), 'Sac Cuir', '189 €', null, false],
    [IMG('1523275335684-37898b6baf30', 100, 100), 'Montre Or', '320 €', '450 €', true],
    [IMG('1434389677669-e08b4cac3105', 100, 100), 'Lunettes', '89 €', null, false],
  ]
  return (
    <div style={{ fontFamily: 'system-ui', background: '#faf8f6', color: '#1a1a1a', width: '100%', minHeight: 580, height: 'auto', overflow: 'visible', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 9px', background: '#1a1a1a', color: '#fff' }}>
        <span style={{ fontWeight: 900, fontSize: 10, letterSpacing: 1 }}>LUXE<span style={{ color: '#e8a0bf' }}>SHOP</span></span>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 6.5 }}>
          <span style={{ color: 'rgba(255,255,255,0.5)' }}>Femme</span>
          <span style={{ color: 'rgba(255,255,255,0.5)' }}>Homme</span>
          <span style={{ background: '#e8a0bf', color: '#1a1a1a', borderRadius: 10, padding: '2px 6px', fontWeight: 700 }}>3</span>
        </div>
      </div>
      <div style={{ background: 'linear-gradient(90deg,#1a1a1a,#3d2a35)', padding: '5px 9px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: 6, background: '#e8a0bf', color: '#1a1a1a', padding: '1px 5px', borderRadius: 2, fontWeight: 800, marginRight: 5 }}>-30%</span>
          <span style={{ fontSize: 8, fontWeight: 700, color: '#fff' }}>Soldes d&apos;été — fin dimanche</span>
        </div>
        <span style={{ fontSize: 6.5, color: '#e8a0bf', fontWeight: 600 }}>Voir →</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 0, flex: 1, minHeight: 0 }}>
        <div style={{ position: 'relative', borderRight: '1px solid #eee' }}>
          <img loading="lazy" src={IMG('1490481651871-ab68de25d43d', 200, 200)} alt="Lookbook collection été" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.target.style.display = 'none' }} />
          <div style={{ position: 'absolute', bottom: 6, left: 6, right: 6, background: 'rgba(255,255,255,0.95)', padding: '5px 7px', borderRadius: 4 }}>
            <p style={{ fontSize: 6, color: '#e8a0bf', fontWeight: 700, margin: '0 0 1px', letterSpacing: 1 }}>LOOKBOOK</p>
            <p style={{ fontSize: 9, fontWeight: 800, margin: '0 0 3px' }}>Collection Été</p>
            <button type="button" style={{ background: '#1a1a1a', color: '#fff', border: 'none', padding: '3px 8px', fontSize: 6.5, fontWeight: 700, cursor: 'pointer', borderRadius: 3 }}>Explorer</button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, padding: '5px', overflow: 'hidden' }}>
          {products.map(([src, name, price, old, promo], i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #f0ebe8', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: 42 }}>
                <img loading="lazy" src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.target.style.display = 'none' }} />
                {promo && <span style={{ position: 'absolute', top: 2, left: 2, background: '#c45c7a', color: '#fff', fontSize: 5, padding: '1px 3px', fontWeight: 700 }}>PROMO</span>}
              </div>
              <div style={{ padding: '3px 4px' }}>
                <p style={{ fontSize: 6, fontWeight: 600, margin: '0 0 1px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</p>
                <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                  <span style={{ fontSize: 7, fontWeight: 800, color: '#c45c7a' }}>{price}</span>
                  {old && <span style={{ fontSize: 5.5, color: '#aaa', textDecoration: 'line-through' }}>{old}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '4px 6px', fontSize: 5.5, color: '#888', borderTop: '1px solid #eee', background: '#fff' }}>
        <span>Paiement sécurisé</span>
        <span>Livraison 24h</span>
        <span>Retour 30j</span>
      </div>
    </div>
  )
}

// ── 4. SaaS — product landing + mini dashboard strip (indigo/slate) ─────────
function MiniSaaS() {
  return (
    <div style={{ fontFamily: 'system-ui', background: '#0b1220', color: '#e2e8f0', width: '100%', minHeight: 580, height: 'auto', overflow: 'visible', display: 'flex', flexDirection: 'column' }}>
      {/* Marketing top bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 10px', borderBottom: '1px solid rgba(99,102,241,0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <div style={{ width: 14, height: 14, borderRadius: 4, background: 'linear-gradient(135deg,#6366f1,#22d3ee)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8, fontWeight: 900 }}>N</div>
          <span style={{ fontSize: 9, fontWeight: 800 }}>Nexus<span style={{ color: '#818cf8' }}>.io</span></span>
        </div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <span style={{ fontSize: 6, color: '#64748b' }}>Pricing</span>
          <span style={{ fontSize: 6, color: '#64748b' }}>Docs</span>
          <button type="button" style={{ background: '#6366f1', color: '#fff', border: 'none', padding: '3px 8px', borderRadius: 4, fontSize: 6.5, fontWeight: 700, cursor: 'pointer' }}>Essai gratuit</button>
        </div>
      </div>
      {/* Hero copy */}
      <div style={{ padding: '8px 10px 6px', textAlign: 'center' }}>
        <p style={{ fontSize: 6, color: '#818cf8', letterSpacing: 2, margin: '0 0 3px', fontWeight: 700 }}>PRODUCTIVITY OS</p>
        <h2 style={{ fontSize: 12, fontWeight: 800, margin: '0 0 3px', lineHeight: 1.2 }}>Pilotez votre équipe<br />en un seul endroit</h2>
        <p style={{ fontSize: 6.5, color: '#94a3b8', margin: '0 0 6px' }}>CRM · projets · analytics — synchronisés.</p>
      </div>
      {/* App preview chrome */}
      <div style={{ flex: 1, margin: '0 8px 8px', background: '#111827', borderRadius: 6, border: '1px solid rgba(99,102,241,0.25)', overflow: 'hidden', display: 'flex' }}>
        <div style={{ width: 28, background: '#0f172a', borderRight: '1px solid rgba(255,255,255,0.05)', padding: '6px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7 }}>
          {['■', '▣', '◎', '◇'].map((ic, i) => (
            <span key={i} style={{ fontSize: 7, color: i === 0 ? '#818cf8' : '#475569' }}>{ic}</span>
          ))}
        </div>
        <div style={{ flex: 1, padding: '6px 7px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
            <span style={{ fontSize: 6.5, fontWeight: 700, color: '#c7d2fe' }}>Overview</span>
            <span style={{ fontSize: 5.5, background: 'rgba(34,197,94,0.15)', color: '#4ade80', padding: '1px 5px', borderRadius: 8 }}>● Live</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4, marginBottom: 5 }}>
            {[['2.8k', 'Users', '#818cf8'], ['47k€', 'MRR', '#22d3ee'], ['98%', 'Uptime', '#4ade80']].map(([v, l, c], i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 4, padding: '4px 5px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ fontSize: 10, fontWeight: 800, margin: 0, color: c }}>{v}</p>
                <p style={{ fontSize: 5.5, color: '#64748b', margin: 0 }}>{l}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 22 }}>
            {[35, 48, 42, 62, 55, 70, 58, 80, 72, 88, 65, 92].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: '2px 2px 0 0', background: i === 11 ? '#6366f1' : `rgba(99,102,241,${0.15 + i * 0.05})` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 5. Artisan — urgency-first local business (navy / safety orange) ────────
function MiniArtisan() {
  const services = [
    [IMG('1581094794329-c8112a89af12', 120, 80), 'Dépannage'],
    [IMG('1504148455328-c376907d081c', 120, 80), 'Installation'],
    [IMG('1621905251189-08b45d6a269e', 120, 80), 'Rénovation'],
  ]
  return (
    <div style={{ fontFamily: 'system-ui', background: '#fff', color: '#0f1c2e', width: '100%', minHeight: 580, height: 'auto', overflow: 'visible', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky urgency bar */}
      <div style={{ background: '#f97316', color: '#fff', padding: '4px 9px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 7, fontWeight: 700 }}>
        <span>Intervention sous 45 min · Paris &amp; IDF</span>
        <span>06 12 34 56 78</span>
      </div>
      <div style={{ background: '#0f1c2e', padding: '7px 9px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <p style={{ fontSize: 10, fontWeight: 900, color: '#fff', margin: 0 }}>ProPlomberie</p>
          <p style={{ fontSize: 6, color: 'rgba(255,255,255,0.55)', margin: 0 }}>Artisan RGE · Assurance décennale</p>
        </div>
        <button type="button" style={{ background: '#f97316', color: '#fff', border: 'none', padding: '5px 9px', borderRadius: 4, fontSize: 7, fontWeight: 800, cursor: 'pointer' }}>Devis gratuit</button>
      </div>
      <div style={{ padding: '7px 9px 5px' }}>
        <h2 style={{ fontSize: 11, fontWeight: 900, margin: '0 0 3px', lineHeight: 1.2 }}>Fuite, chaudière, rénovation — on intervient aujourd&apos;hui.</h2>
        <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: 6 }}>
          {['★ 4.9/5 (312 avis)', 'RGE Qualibat', 'Devis sous 2h'].map((b, i) => (
            <span key={i} style={{ fontSize: 5.5, background: '#fff7ed', color: '#c2410c', border: '1px solid #fed7aa', padding: '2px 5px', borderRadius: 3, fontWeight: 600 }}>{b}</span>
          ))}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4, padding: '0 8px', flex: 1 }}>
        {services.map(([src, label], i) => (
          <div key={i} style={{ borderRadius: 5, overflow: 'hidden', border: '1px solid #e2e8f0', position: 'relative' }}>
            <img loading="lazy" src={src} alt={label} style={{ width: '100%', height: 58, objectFit: 'cover' }} onError={e => { e.target.style.display = 'none' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(15,28,46,0.85)', padding: '3px 4px' }}>
              <p style={{ fontSize: 6.5, fontWeight: 700, color: '#fff', margin: 0, textAlign: 'center' }}>{label}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: '5px 9px', display: 'flex', justifyContent: 'space-between', fontSize: 6, color: '#64748b', borderTop: '1px solid #f1f5f9', marginTop: 5 }}>
        <span>Zones : 75 · 92 · 93 · 94</span>
        <span style={{ color: '#16a34a', fontWeight: 700 }}>● Disponible maintenant</span>
      </div>
    </div>
  )
}

// ── 6. Blog / Magazine — editorial masthead + columns (ink / cream) ─────────
function MiniBlog() {
  return (
    <div style={{ fontFamily: 'Georgia, "Times New Roman", serif', background: '#f7f4ef', color: '#1a1a1a', width: '100%', minHeight: 580, height: 'auto', overflow: 'visible', display: 'flex', flexDirection: 'column' }}>
      {/* Masthead */}
      <div style={{ textAlign: 'center', padding: '6px 8px 4px', borderBottom: '2px solid #1a1a1a' }}>
        <p style={{ fontSize: 5.5, letterSpacing: 3, margin: '0 0 2px', fontFamily: 'system-ui', color: '#666' }}>VENDREDI · ÉDITION DIGITALE</p>
        <h1 style={{ fontSize: 16, fontWeight: 900, margin: 0, letterSpacing: '-0.03em' }}>THE PULSE</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 3, fontSize: 6, fontFamily: 'system-ui', color: '#555', borderTop: '1px solid #ccc', paddingTop: 3 }}>
          {['Tech', 'Design', 'Business', 'Culture', 'Opinion'].map(c => <span key={c}>{c}</span>)}
        </div>
      </div>
      {/* Magazine grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 0, flex: 1, minHeight: 0 }}>
        <div style={{ borderRight: '1px solid #ddd', padding: '6px 7px', display: 'flex', flexDirection: 'column' }}>
          <img loading="lazy" src={IMG('1486312338219-ce68d2c6f44d', 240, 120)} alt="Illustration article à la une" style={{ width: '100%', height: 72, objectFit: 'cover', marginBottom: 5 }} onError={e => { e.target.style.display = 'none' }} />
          <span style={{ fontSize: 5.5, fontFamily: 'system-ui', background: '#1a1a1a', color: '#f7f4ef', padding: '1px 5px', alignSelf: 'flex-start', fontWeight: 700, letterSpacing: 1 }}>À LA UNE</span>
          <h2 style={{ fontSize: 11, fontWeight: 800, margin: '4px 0 3px', lineHeight: 1.2 }}>L&apos;IA va-t-elle remplacer les développeurs en 2027&nbsp;?</h2>
          <p style={{ fontSize: 6.5, color: '#555', margin: '0 0 4px', lineHeight: 1.35, fontFamily: 'system-ui' }}>Enquête auprès de 40 CTO européens sur l&apos;automatisation du code.</p>
          <p style={{ fontSize: 6, color: '#888', marginTop: 'auto', fontFamily: 'system-ui' }}>Alex M. · 8 min · 2.4K lectures</p>
        </div>
        <div style={{ padding: '6px 7px', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            [IMG('1550745165-9bc0b252726f', 80, 50), 'React 19', 'Ce qui change vraiment pour les apps prod'],
            [IMG('1559526324-593bc073d938', 80, 50), 'Design', 'Figma vs Penpot : le match 2026'],
            [IMG('1516321318423-f06f85e504b3', 80, 50), 'Business', 'Levées seed : le nouveau normal'],
          ].map(([src, cat, title], i) => (
            <div key={i} style={{ display: 'flex', gap: 5, alignItems: 'flex-start', borderBottom: i < 2 ? '1px solid #e5e0d8' : 'none', paddingBottom: i < 2 ? 5 : 0 }}>
              <img loading="lazy" src={src} alt="" style={{ width: 36, height: 28, objectFit: 'cover', flexShrink: 0 }} onError={e => { e.target.style.display = 'none' }} />
              <div style={{ minWidth: 0 }}>
                <p style={{ fontSize: 5.5, fontFamily: 'system-ui', color: '#a855f7', fontWeight: 700, margin: '0 0 1px', letterSpacing: 0.5 }}>{cat}</p>
                <p style={{ fontSize: 7, fontWeight: 700, margin: 0, lineHeight: 1.25 }}>{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── 7. Cabinet — institutional split + team strip (navy / gold / cream) ─────
function MiniCabinet() {
  const domaines = ['Affaires', 'Immobilier', 'Travail', 'Fiscal', 'Pénal']
  return (
    <div style={{ fontFamily: 'Georgia, "Times New Roman", serif', background: '#f5f2eb', color: '#0f1f3d', width: '100%', minHeight: 580, height: 'auto', overflow: 'visible', display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#0f1f3d', padding: '8px 10px', textAlign: 'center' }}>
        <p style={{ fontSize: 5.5, letterSpacing: 3, color: '#c9a84c', margin: '0 0 2px', fontFamily: 'system-ui' }}>CABINET D&apos;AVOCATS · PARIS</p>
        <p style={{ fontSize: 12, fontWeight: 700, color: '#fff', margin: 0, letterSpacing: 1 }}>DUPONT <span style={{ color: '#c9a84c', fontWeight: 400 }}>&amp;</span> ASSOCIÉS</p>
        <div style={{ width: 40, height: 1, background: '#c9a84c', margin: '5px auto 0' }} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', flex: 1, minHeight: 0 }}>
        <div style={{ padding: '8px 9px', borderRight: '1px solid #e0d9cc', display: 'flex', flexDirection: 'column' }}>
          <p style={{ fontSize: 10, fontWeight: 700, margin: '0 0 4px', lineHeight: 1.25, fontStyle: 'italic' }}>Votre défense,<br />notre expertise.</p>
          <p style={{ fontSize: 6.5, color: '#5a6478', margin: '0 0 7px', lineHeight: 1.35, fontFamily: 'system-ui' }}>30 ans au service des entreprises et des particuliers. Consultation sur RDV.</p>
          <p style={{ fontSize: 6, letterSpacing: 1.5, color: '#c9a84c', margin: '0 0 4px', fontFamily: 'system-ui', fontWeight: 700 }}>DOMAINES</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginBottom: 8 }}>
            {domaines.map(d => (
              <span key={d} style={{ fontSize: 6, fontFamily: 'system-ui', border: '1px solid #c9a84c', color: '#0f1f3d', padding: '2px 5px' }}>{d}</span>
            ))}
          </div>
          <button type="button" style={{ marginTop: 'auto', background: '#c9a84c', color: '#0f1f3d', border: 'none', padding: '5px 10px', fontSize: 7, fontWeight: 800, cursor: 'pointer', fontFamily: 'system-ui', alignSelf: 'flex-start' }}>Prendre RDV →</button>
        </div>
        <div style={{ position: 'relative' }}>
          <img loading="lazy" src={IMG('1507679799987-440acc9e8e8c', 200, 220)} alt="Bureau du cabinet Dupont & Associés" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.target.style.display = 'none' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(15,31,61,0.88)', padding: '6px 7px' }}>
            <p style={{ fontSize: 6, color: '#c9a84c', margin: '0 0 3px', fontFamily: 'system-ui', letterSpacing: 1 }}>L&apos;ÉQUIPE</p>
            <div style={{ display: 'flex', gap: 4 }}>
              {[
                IMG('1560250097-0b93528c311a', 40, 40),
                IMG('1573496359142-b8d87734a5a2', 40, 40),
                IMG('1472099645785-5658abf4ff4e', 40, 40),
              ].map((src, i) => (
                <img key={i} loading="lazy" src={src} alt={`Associé ${i + 1}`} style={{ width: 22, height: 22, borderRadius: '50%', objectFit: 'cover', border: '1.5px solid #c9a84c' }} onError={e => { e.target.style.display = 'none' }} />
              ))}
              <span style={{ fontSize: 6, color: 'rgba(255,255,255,0.6)', alignSelf: 'center', fontFamily: 'system-ui', marginLeft: 2 }}>+4 avocats</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── 8. Portfolio — creative masonry + oversized type (noir / lime) ───────────
function MiniPortfolio() {
  return (
    <div style={{ fontFamily: 'system-ui', background: '#0a0a0a', color: '#fff', width: '100%', minHeight: 580, height: 'auto', overflow: 'visible', position: 'relative' }}>
      {/* Oversized brand watermark */}
      <p style={{ position: 'absolute', top: -4, left: 6, fontSize: 42, fontWeight: 900, letterSpacing: '-0.06em', color: 'rgba(255,255,255,0.04)', margin: 0, lineHeight: 1, zIndex: 0, pointerEvents: 'none' }}>LÉNA</p>
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 9px' }}>
          <span style={{ fontSize: 9, fontWeight: 900, letterSpacing: 2 }}>LÉNA<span style={{ color: '#c8f542' }}>.</span>PHOTO</span>
          <div style={{ display: 'flex', gap: 7, fontSize: 6, color: 'rgba(255,255,255,0.4)' }}>
            <span style={{ color: '#c8f542' }}>Work</span>
            <span>About</span>
            <span>Book</span>
          </div>
        </div>
        {/* Asymmetric masonry */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.3fr 0.85fr 1fr', gridTemplateRows: '1fr 0.7fr', gap: 3, padding: '0 6px 6px', minHeight: 0 }}>
          <div style={{ gridRow: '1 / 3', position: 'relative', overflow: 'hidden', borderRadius: 3 }}>
            <img loading="lazy" src={IMG('1506905925346-21bda4d32df4', 200, 280)} alt="Série Paysage — montagne" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.target.style.display = 'none' }} />
            <div style={{ position: 'absolute', bottom: 5, left: 5 }}>
              <p style={{ fontSize: 5.5, color: '#c8f542', margin: '0 0 1px', fontWeight: 700, letterSpacing: 1 }}>01 — PAYSAGE</p>
              <p style={{ fontSize: 8, fontWeight: 800, margin: 0 }}>Alpes 2025</p>
            </div>
          </div>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 3 }}>
            <img loading="lazy" src={IMG('1543610892-0b1f7b6b7eb3', 120, 100)} alt="Portrait studio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.target.style.display = 'none' }} />
            <span style={{ position: 'absolute', top: 3, left: 3, fontSize: 5, background: '#c8f542', color: '#0a0a0a', padding: '1px 4px', fontWeight: 800 }}>02</span>
          </div>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 3 }}>
            <img loading="lazy" src={IMG('1501854140801-50d01698950b', 120, 100)} alt="Nature morte" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.target.style.display = 'none' }} />
            <span style={{ position: 'absolute', top: 3, left: 3, fontSize: 5, background: 'rgba(0,0,0,0.6)', color: '#c8f542', padding: '1px 4px', fontWeight: 800 }}>03</span>
          </div>
          <div style={{ gridColumn: '2 / 4', position: 'relative', overflow: 'hidden', borderRadius: 3, background: '#141414', display: 'flex', alignItems: 'center', padding: '0 8px', gap: 8 }}>
            <img loading="lazy" src={IMG('1518173946687-a4c8892bbd9f', 100, 60)} alt="Série urbaine" style={{ width: 52, height: 36, objectFit: 'cover', borderRadius: 2, flexShrink: 0 }} onError={e => { e.target.style.display = 'none' }} />
            <div style={{ minWidth: 0 }}>
              <p style={{ fontSize: 5.5, color: '#c8f542', margin: '0 0 1px', letterSpacing: 1, fontWeight: 700 }}>04 — URBAN</p>
              <p style={{ fontSize: 8, fontWeight: 700, margin: '0 0 2px' }}>Nuits de Tokyo</p>
              <p style={{ fontSize: 6, color: 'rgba(255,255,255,0.4)', margin: 0 }}>240 photos · 3 prix</p>
            </div>
            <button type="button" style={{ marginLeft: 'auto', background: 'transparent', color: '#c8f542', border: '1px solid #c8f542', padding: '3px 7px', fontSize: 6, fontWeight: 700, cursor: 'pointer', flexShrink: 0 }}>Book →</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Browser frame ────────────────────────────────────────────────────────────
function BrowserFrame({ url, label, tags, children, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay }}
      className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-[#0f0f1a] border-b border-gray-200 dark:border-white/8 flex-shrink-0">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <div className="flex-1 mx-1.5 bg-white/60 dark:bg-white/8 rounded-full px-3 py-0.5 text-[10px] text-gray-400 dark:text-slate-500 font-mono truncate">{url}</div>
        <Monitor size={10} className="text-gray-400 dark:text-slate-600 flex-shrink-0" />
      </div>
      {/* Scrollable preview — user can see the full mock */}
      <div
        className="relative bg-white dark:bg-[#050508] showcase-scroll"
        style={{ height: 320, overflowY: 'auto', overflowX: 'hidden', WebkitOverflowScrolling: 'touch' }}
      >
        <div style={{ height: 580 }}>{children}</div>
      </div>
      <div className="px-3.5 py-2.5 bg-gray-50 dark:bg-[#07070f] border-t border-gray-200 dark:border-white/8 flex-shrink-0">
        <p className="text-xs font-semibold text-gray-800 dark:text-white mb-1.5" style={{ fontFamily: "'Outfit', sans-serif" }}>{label}</p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map(t => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-300 font-mono">{t}</span>
          ))}
        </div>
        <p className="text-[10px] text-slate-400 mt-1.5 font-mono">Faites défiler pour voir tout l&apos;exemple ↓</p>
      </div>
    </motion.div>
  )
}

// ── Section ──────────────────────────────────────────────────────────────────
const DEMOS = [
  { url: 'bella-cucina.fr', label: 'Restaurant gastronomique', tags: ['Dark design', 'Réservation', 'Menu interactif'], component: <MiniRestaurant /> },
  { url: 'marie-coaching.fr', label: 'Coach & Thérapeute', tags: ['Landing page', 'Calendrier', 'Témoignages'], component: <MiniCoach /> },
  { url: 'luxeshop.fr', label: 'Boutique Stripe', tags: ['Catalogue', 'Panier', 'Stripe', 'Promo'], component: <MiniEcommerce /> },
  { url: 'app.saas-demo.io', label: 'Application SaaS', tags: ['Dashboard', 'Auth', 'API REST', 'Temps réel'], component: <MiniSaaS /> },
  { url: 'proplomberie-paris.fr', label: 'Artisan / Site vitrine', tags: ['Urgence 24/7', 'Devis gratuit', 'SEO local'], component: <MiniArtisan /> },
  { url: 'thepulse.fr', label: 'Blog / Site dynamique', tags: ['CMS', 'Articles', 'Catégories', 'Newsletter'], component: <MiniBlog /> },
  { url: 'dupont-avocats.fr', label: 'Cabinet professionnel', tags: ['Institutionnel', 'Rendez-vous', 'Multi-pages'], component: <MiniCabinet /> },
  { url: 'lena-photo.fr', label: 'Portfolio créatif', tags: ['Galerie', 'Dark', 'Fullscreen', 'Contact'], component: <MiniPortfolio /> },
]

export default function WebShowcase() {
  return (
    <section id="exemples" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1000px] h-[700px] rounded-full blur-[160px]" style={{ background: 'rgba(6,182,212,0.04)' }} />
      </div>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(to right,transparent,rgba(6,182,212,0.25),transparent)' }} />

      <div className="relative max-w-6xl mx-auto px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-cyan-400 tracking-[0.3em] uppercase block mb-4">Ce qu&apos;on peut créer</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-5">
            Votre secteur,{' '}<span className="gradient-text">votre site</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg" style={{ maxWidth: '520px', margin: '0 auto' }}>
            Huit directions différentes — boutique, vitrine, SaaS, portfolio… Faites défiler chaque aperçu pour voir l&apos;exemple complet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DEMOS.map((demo, i) => (
            <BrowserFrame key={demo.url} url={demo.url} label={demo.label} tags={demo.tags} delay={i * 0.06}>
              {demo.component}
            </BrowserFrame>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href="#devis"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all duration-300 glow-purple"
          >
            Un site comme celui-ci pour vous → devis
          </a>
          <p className="text-center text-xs text-slate-400 dark:text-slate-500 font-mono mt-4">
            Vrai code React — pas des captures d&apos;écran.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
