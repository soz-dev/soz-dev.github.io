/**
 * RÈGLE : chaque fichier Lottie n’est utilisé qu’UNE seule fois sur tout le site.
 * Pas d’alias vers le même JSON. Les autres blocs utilisent des icônes Lucide.
 */
export const LOTTIE = {
  // Ambient (1 usage chacun)
  scroll: '/lottie/scroll.json',

  // Sections principales (1 usage)
  devis: '/lottie/devis.json',
  estimate: '/lottie/estimate.json',
  contact: '/lottie/contact.json',
  process: '/lottie/process.json',
  pack: '/lottie/pack.json',
  pricing: '/lottie/pricing.json',
  review: '/lottie/review.json',
  about: '/lottie/about.json',
  faq: '/lottie/faq.json',
  guide: '/lottie/guide.json',
  projects: '/lottie/projects.json',

  // Services (4 cartes + header = 5 fichiers distincts)
  services: '/lottie/coding.json',
  web: '/lottie/design.json',
  shop: '/lottie/shop.json',
  tools: '/lottie/tools.json',
  phone: '/lottie/rocket.json',

  // Erreurs
  error: '/lottie/error.json',
  offline: '/lottie/offline.json',
}
