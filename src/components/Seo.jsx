import { useEffect } from 'react'
import { DEFAULT_OG, PAGE_SEO, SITE_NAME, SITE_URL, LOCAL_BUSINESS_JSON_LD } from '../lib/seo'

export { PAGE_SEO, LOCAL_BUSINESS_JSON_LD }

/**
 * Meta dynamiques par page (title, description, canonical, OG).
 * JSON-LD LocalBusiness / ProfessionalService injecté une fois sur l’accueil.
 */
export default function Seo({
  title,
  description,
  path = '/',
  image = DEFAULT_OG,
  type = 'website',
  jsonLd = null,
  noindex = false,
}) {
  const fullTitle = title.includes('SOZ') ? title : `${title} | ${SITE_NAME}`
  const url = `${SITE_URL}${path === '/' ? '/' : path}`

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (attr, key, content) => {
      if (!content) return
      let el = document.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('name', 'description', description)
    setMeta('name', 'robots', noindex ? 'noindex,nofollow' : 'index,follow')

    setMeta('property', 'og:type', type)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:image', image)
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:locale', 'fr_FR')

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', image)

    let link = document.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', url)

    const scriptId = 'soz-jsonld'
    let script = document.getElementById(scriptId)
    if (jsonLd) {
      if (!script) {
        script = document.createElement('script')
        script.id = scriptId
        script.type = 'application/ld+json'
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(jsonLd)
    }

    return undefined
  }, [fullTitle, description, url, image, type, jsonLd, noindex, path])

  return null
}
