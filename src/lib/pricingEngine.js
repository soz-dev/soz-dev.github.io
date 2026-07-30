export const PRIX_BASE = {
  'site-vitrine': 500,
  'site-vitrine-multi': 890,
  'site-pro': 1890,
  'ecommerce': 2990,
  'app-web': 4990,
  'app-ios': 3490,
}

export const LABEL_TYPE = {
  'site-vitrine': 'Site vitrine – 1 page',
  'site-vitrine-multi': 'Site vitrine multi-pages',
  'site-pro': 'Site professionnel',
  'ecommerce': 'E-commerce',
  'app-web': 'Application web',
  'app-ios': 'Application iOS',
}

const INTEGRATIONS_PRIX = {
  'Mailchimp / Brevo (+150€)':  { label: 'Intégration Mailchimp / Brevo', montant: 150 },
  'CRM existant (+300€)':       { label: 'Intégration CRM', montant: 300 },
  'Zapier (+200€)':             { label: 'Intégration Zapier', montant: 200 },
}

const BASE_INCLUS = [
  'Responsive mobile & tablette',
  'HTTPS / SSL',
  '1 mois de support après livraison',
]

function getInclus(q) {
  const list = [...BASE_INCLUS]
  const foncs = q.fonc_principales || []
  if (foncs.some(f => f.startsWith('Formulaire de contact'))) list.push('Formulaire de contact')
  if (foncs.some(f => f.startsWith('Galerie photos'))) list.push('Galerie photos / portfolio')
  if ((q.auth || []).some(a => a.startsWith('Login email'))) list.push('Login email / mot de passe')
  if (q.seo === 'Basique (inclus)') list.push('Référencement SEO basique')
  if ((q.integrations || []).some(i => i.startsWith('Google Analytics'))) list.push('Google Analytics')
  if ((q.integrations || []).some(i => i.startsWith('Calendly'))) list.push('Intégration Calendly')
  return list
}

const FONCS_PRIX = {
  'Calendrier / prise de RDV (+400€)':      { label: 'Calendrier / prise de RDV', montant: 400 },
  'Système de réservation (+400€)':          { label: 'Système de réservation', montant: 400 },
  'Tableau de bord admin (+500€)':           { label: 'Tableau de bord admin', montant: 500 },
  'Espace client / membres (+500€)':         { label: 'Espace client / membres', montant: 500 },
  'Paiement en ligne (+400€)':               { label: 'Paiement en ligne (Stripe)', montant: 400 },
  'Carte interactive / Maps (+200€)':        { label: 'Carte interactive', montant: 200 },
  'Chat en direct (+300€)':                  { label: 'Chat en direct', montant: 300 },
  'Newsletter (+150€)':                      { label: 'Newsletter', montant: 150 },
  'Notifications push (+200€)':              { label: 'Notifications push', montant: 200 },
  'Recherche avancée (+300€)':               { label: 'Recherche avancée', montant: 300 },
  'Géolocalisation (+200€)':                 { label: 'Géolocalisation', montant: 200 },
  'Export PDF / rapports (+300€)':           { label: 'Export PDF / rapports', montant: 300 },
}

export function calculateDevis(q) {
  if (!q?.type_projet) return null

  const lignes = [{ label: LABEL_TYPE[q.type_projet] || q.type_projet, montant: PRIX_BASE[q.type_projet] || 0, base: true }]
  const add = (label, montant) => lignes.push({ label, montant })

  if (q.logo === 'Non – à créer (+300€)') add('Création de logo', 300)
  if (q.blog === 'Oui (+200€)') add('Blog / actualités', 200)
  if ((q.langues || []).includes('Anglais (+300€)')) add('Version anglaise', 300)

  for (const f of (q.fonc_principales || [])) {
    if (FONCS_PRIX[f]) lignes.push({ ...FONCS_PRIX[f] })
  }

  if ((q.auth || []).includes('Google Sign-In (+150€)')) add('Authentification Google', 150)
  if ((q.auth || []).includes('Apple Sign-In (+150€)')) add('Authentification Apple', 150)
  if ((q.auth || []).includes('Rôles utilisateurs (+300€)')) add('Gestion des rôles', 300)
  if (q.livraison === 'Oui (+300€)') add('Gestion livraison / retours', 300)
  if (q.seo === 'Avancé (+200€)') add('SEO avancé', 200)

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
    maintenance: q.maintenance === 'Oui' ? 90 : 0,
  }
}
