export const PRIX_BASE = {
  'site-vitrine':       390,
  'site-vitrine-multi': 690,
  'site-pro':           1290,
  'ecommerce':          1990,
  'app-web':            2990,
  'app-ios':            2990,
}

/** Pack clé en main = vitrine + hébergement/domaine 12 mois (tarif packagé) */
export const PRIX_PACK_CLE_EN_MAIN = 890
export const PRIX_MAINTENANCE_MOIS = 200

export const LABEL_TYPE = {
  'site-vitrine':       'Page d’accueil (1 page)',
  'site-vitrine-multi': 'Site vitrine (plusieurs pages)',
  'site-pro':           'Site professionnel',
  'ecommerce':          'Boutique en ligne',
  'app-web':            'Outil web / espace client',
  'app-ios':            'Application iPhone',
}

const INTEGRATIONS_PRIX = {
  'Mailchimp / Brevo (+120€)': { label: 'Intégration Mailchimp / Brevo', montant: 120 },
  'CRM existant (+220€)':      { label: 'Intégration CRM', montant: 220 },
  'Zapier (+150€)':            { label: 'Intégration Zapier', montant: 150 },
  'Autre (+90€)':              { label: 'Autre intégration', montant: 90 },
}

const LANGUES_PRIX = {
  'Anglais (+190€)':  { label: 'Version anglaise', montant: 190 },
  'Espagnol (+190€)': { label: 'Version espagnole', montant: 190 },
  'Autre (+190€)':    { label: 'Langue supplémentaire', montant: 190 },
}

const PAIEMENT_EXTRA = {
  'PayPal (+90€)':      { label: 'PayPal', montant: 90 },
  'Apple Pay (+60€)':   { label: 'Apple Pay', montant: 60 },
  'Google Pay (+60€)':  { label: 'Google Pay', montant: 60 },
}

/** Volume catalogue boutique (au-delà du socle inclus) */
const PRODUITS_PRIX = {
  '21-100':  { label: 'Catalogue 21–100 produits', montant: 150 },
  '100-500': { label: 'Catalogue 100–500 produits', montant: 350 },
  '500+':    { label: 'Catalogue 500+ produits', montant: 590 },
}

/**
 * Si le nb de pages dépasse le socle du type → supplément
 * (évite landing 390€ avec « 10+ pages » au même prix)
 */
const PAGES_SURCHARGE = {
  'site-vitrine': {
    '2-5': { label: 'Pages supplémentaires (2–5)', montant: 250 },
    '6-10': { label: 'Pages supplémentaires (6–10)', montant: 550 },
    '10+': { label: 'Pages supplémentaires (10+)', montant: 850 },
  },
  'site-vitrine-multi': {
    '6-10': { label: 'Pages supplémentaires (6–10)', montant: 350 },
    '10+': { label: 'Pages supplémentaires (10+)', montant: 650 },
  },
  'site-pro': {
    '10+': { label: 'Pages supplémentaires (10+)', montant: 400 },
  },
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
  if (q.type_projet === 'ecommerce') list.push('Paiement en ligne inclus')
  return list
}

const FONCS_PRIX = {
  'Calendrier / prise de RDV (+290€)':  { label: 'Calendrier / prise de RDV', montant: 290 },
  'Système de réservation (+290€)':     { label: 'Système de réservation', montant: 290 },
  'Tableau de bord admin (+390€)':      { label: 'Tableau de bord admin', montant: 390 },
  'Espace client / membres (+390€)':    { label: 'Espace client / membres', montant: 390 },
  'Paiement en ligne (+290€)':          { label: 'Paiement en ligne', montant: 290 },
  'Carte interactive / Maps (+150€)':  { label: 'Carte interactive', montant: 150 },
  'Chat widget (+90€)':                 { label: 'Chat (Crisp / Tawk)', montant: 90 },
  'Newsletter (+90€)':                  { label: 'Newsletter', montant: 90 },
  'Notifications push (+150€)':         { label: 'Notifications push', montant: 150 },
  'Recherche avancée (+190€)':          { label: 'Recherche avancée', montant: 190 },
  'Géolocalisation (+150€)':            { label: 'Géolocalisation', montant: 150 },
  'Export PDF / rapports (+190€)':      { label: 'Export PDF / rapports', montant: 190 },
}

export function calculateDevis(q) {
  if (!q?.type_projet) return null

  const lignes = [{ label: LABEL_TYPE[q.type_projet] || q.type_projet, montant: PRIX_BASE[q.type_projet] || 0, base: true }]
  const add = (label, montant) => {
    if (montant > 0) lignes.push({ label, montant })
  }

  if (q.logo === 'Non – à créer (+190€)') add('Création de logo', 190)
  if (q.logo === 'Partiel – à refaire (+120€)') add('Refonte / finalisation logo', 120)
  if (q.maquettes === 'Oui (+150€)') add('Maquettes Figma interactives', 150)
  if (q.blog === 'Oui (+120€)') add('Blog / actualités', 120)
  if (q.contenu_existant === 'Non, à créer (+290€)') add('Rédaction / création de contenus', 290)
  if (q.contenu_existant === 'Partiellement (+150€)') add('Complément contenus', 150)

  for (const lang of (q.langues || [])) {
    if (LANGUES_PRIX[lang]) add(LANGUES_PRIX[lang].label, LANGUES_PRIX[lang].montant)
  }

  const pageExtra = PAGES_SURCHARGE[q.type_projet]?.[q.nb_pages]
  if (pageExtra) add(pageExtra.label, pageExtra.montant)

  for (const f of (q.fonc_principales || [])) {
    // Boutique Stripe : paiement déjà inclus dans le socle
    if (f.startsWith('Paiement en ligne') && q.type_projet === 'ecommerce') continue
    if (FONCS_PRIX[f]) add(FONCS_PRIX[f].label, FONCS_PRIX[f].montant)
  }

  if ((q.auth || []).includes('Google Sign-In (+120€)')) add('Authentification Google', 120)
  if ((q.auth || []).includes('Apple Sign-In (+120€)')) add('Authentification Apple', 120)
  if ((q.auth || []).includes('Rôles utilisateurs (+220€)')) add('Gestion des rôles', 220)
  if (q.livraison === 'Oui (+220€)') add('Gestion livraison / retours', 220)
  if (q.seo === 'Avancé (+150€)') add('SEO avancé', 150)

  if (PRODUITS_PRIX[q.nb_produits]) {
    add(PRODUITS_PRIX[q.nb_produits].label, PRODUITS_PRIX[q.nb_produits].montant)
  }

  for (const p of (q.paiement || [])) {
    // Stripe = inclus boutique / option paiement en ligne
    if (p === 'Stripe' || p.startsWith('Stripe')) continue
    if (p === 'Virement') continue
    if (PAIEMENT_EXTRA[p]) add(PAIEMENT_EXTRA[p].label, PAIEMENT_EXTRA[p].montant)
    else if (p === 'PayPal') add('PayPal', 90)
    else if (p === 'Apple Pay') add('Apple Pay', 60)
    else if (p === 'Google Pay') add('Google Pay', 60)
  }

  for (const i of (q.integrations || [])) {
    if (INTEGRATIONS_PRIX[i]) add(INTEGRATIONS_PRIX[i].label, INTEGRATIONS_PRIX[i].montant)
  }

  const DELAI_SURCHARGE = { urgent: 0.40, '2-3-mois': 0.15 }
  const delaiRate = DELAI_SURCHARGE[q.delai]
  if (delaiRate) {
    const baseAvantDelai = lignes.reduce((s, l) => s + l.montant, 0)
    const surcharge = Math.round(baseAvantDelai * delaiRate)
    const label = q.delai === 'urgent'
      ? 'Supplément urgence (< 1 mois · +40%)'
      : 'Supplément délai serré (2–3 mois · +15%)'
    add(label, surcharge)
  }

  const sousTotal = lignes.reduce((s, l) => s + l.montant, 0)
  const acompte = Math.round(sousTotal * 0.3)

  return {
    lignes,
    inclus: getInclus(q),
    sousTotal,
    acompte,
    solde: sousTotal - acompte,
    maintenance: q.maintenance === 'Oui' ? PRIX_MAINTENANCE_MOIS : 0,
  }
}
