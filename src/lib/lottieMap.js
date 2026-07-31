/**
 * RÈGLE : chaque fichier Lottie n’est utilisé qu’UNE seule fois sur tout le site.
 * Pas d’alias vers le même JSON. Visuels alignés sur le texte de la section.
 * Seuls les Lotties « forts » restent ; le reste = Framer / icônes.
 */
export const LOTTIE = {
  scroll: '/lottie/scroll.json',

  devis: '/lottie/devis.json',
  estimate: '/lottie/pricing.json',
  contact: '/lottie/contact.json',
  pack: '/lottie/pack.json',
  about: '/lottie/about.json',
  faq: '/lottie/search.json',
  projects: '/lottie/process.json',
  services: '/lottie/coding.json',
  trust: '/lottie/trust.json',

  // Erreurs
  crash: '/lottie/crash.json',
  error: '/lottie/error.json',
  offline: '/lottie/offline.json',
}
