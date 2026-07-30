export const PRIX_BASE = {
  'site-vitrine':       690,
  'site-vitrine-multi': 1390,
  'site-pro':           2790,
  'ecommerce':          3990,
  'app-web':            5990,
  'app-ios':            4990,
}

export const LABEL_TYPE = {
  'site-vitrine':       'Site vitrine \u2013 1 page',
  'site-vitrine-multi': 'Site vitrine multi-pages',
  'site-pro':           'Site professionnel',
  'ecommerce':          'E-commerce',
  'app-web':            'Application web',
  'app-ios':            'Application iOS',
}

const INTEGRATIONS_PRIX = {
  'Mailchimp / Brevo (+210\u20ac)': { label: 'Int\u00e9gration Mailchimp / Brevo', montant: 210 },
  'CRM existant (+420\u20ac)':      { label: 'Int\u00e9gration CRM', montant: 420 },
  'Zapier (+280\u20ac)':            { label: 'Int\u00e9gration Zapier', montant: 280 },
}

const BASE_INCLUS = [
  'Responsive mobile & tablette',
  'HTTPS / SSL',
  '1 mois de support apr\u00e8s livraison',
]

function getInclus(q) {
  const list = [...BASE_INCLUS]
  const foncs = q.fonc_principales || []
  if (foncs.some(f => f.startsWith('Formulaire de contact'))) list.push('Formulaire de contact')
  if (foncs.some(f => f.startsWith('Galerie photos'))) list.push('Galerie photos / portfolio')
  if ((q.auth || []).some(a => a.startsWith('Login email'))) list.push('Login email / mot de passe')
  if (q.seo === 'Basique (inclus)') list.push('R\u00e9f\u00e9rencement SEO basique')
  if ((q.integrations || []).some(i => i.startsWith('Google Analytics'))) list.push('Google Analytics')
  if ((q.integrations || []).some(i => i.startsWith('Calendly'))) list.push('Int\u00e9gration Calendly')
  return list
}

const FONCS_PRIX = {
  'Calendrier / prise de RDV (+560\u20ac)':  { label: 'Calendrier / prise de RDV', montant: 560 },
  'Syst\u00e8me de r\u00e9servation (+560\u20ac)': { label: 'Syst\u00e8me de r\u00e9servation', montant: 560 },
  'Tableau de bord admin (+700\u20ac)':       { label: 'Tableau de bord admin', montant: 700 },
  'Espace client / membres (+700\u20ac)':     { label: 'Espace client / membres', montant: 700 },
  'Paiement en ligne (+560\u20ac)':           { label: 'Paiement en ligne (Stripe)', montant: 560 },
  'Carte interactive / Maps (+280\u20ac)':    { label: 'Carte interactive', montant: 280 },
  'Chat en direct (+420\u20ac)':              { label: 'Chat en direct', montant: 420 },
  'Newsletter (+210\u20ac)':                  { label: 'Newsletter', montant: 210 },
  'Notifications push (+280\u20ac)':          { label: 'Notifications push', montant: 280 },
  'Recherche avanc\u00e9e (+420\u20ac)':      { label: 'Recherche avanc\u00e9e', montant: 420 },
  'G\u00e9olocalisation (+280\u20ac)':        { label: 'G\u00e9olocalisation', montant: 280 },
  'Export PDF / rapports (+420\u20ac)':       { label: 'Export PDF / rapports', montant: 420 },
}

export function calculateDevis(q) {
  if (!q?.type_projet) return null

  const lignes = [{ label: LABEL_TYPE[q.type_projet] || q.type_projet, montant: PRIX_BASE[q.type_projet] || 0, base: true }]
  const add = (label, montant) => lignes.push({ label, montant })

  if (q.logo === 'Non \u2013 \u00e0 cr\u00e9er (+420\u20ac)') add('Cr\u00e9ation de logo', 420)
  if (q.maquettes === 'Oui (+290\u20ac)') add('Maquettes Figma interactives', 290)
  if (q.blog === 'Oui (+280\u20ac)') add('Blog / actualit\u00e9s', 280)
  if ((q.langues || []).includes('Anglais (+420\u20ac)')) add('Version anglaise', 420)

  for (const f of (q.fonc_principales || [])) {
    if (FONCS_PRIX[f]) lignes.push({ ...FONCS_PRIX[f] })
  }

  if ((q.auth || []).includes('Google Sign-In (+210\u20ac)')) add('Authentification Google', 210)
  if ((q.auth || []).includes('Apple Sign-In (+210\u20ac)')) add('Authentification Apple', 210)
  if ((q.auth || []).includes('R\u00f4les utilisateurs (+420\u20ac)')) add('Gestion des r\u00f4les', 420)
  if (q.livraison === 'Oui (+420\u20ac)') add('Gestion livraison / retours', 420)
  if (q.seo === 'Avanc\u00e9 (+280\u20ac)') add('SEO avanc\u00e9', 280)

  for (const i of (q.integrations || [])) {
    if (INTEGRATIONS_PRIX[i]) lignes.push({ ...INTEGRATIONS_PRIX[i] })
  }

  const sousTotal = lignes.reduce((s, l) => s + l.montant, 0)
  const acompte = Math.round(sousTotal * 0.3)

  return {
    lignes,
    inclus: getInclus(q),
    sousTotal,
    acompte,
    solde: sousTotal - acompte,
    maintenance: q.maintenance === 'Oui' ? 130 : 0,
  }
}
