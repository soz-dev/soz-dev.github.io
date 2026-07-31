import Services from '../components/Services'
import WebShowcase from '../components/WebShowcase'
import Seo, { PAGE_SEO } from '../components/Seo'

export default function ServicesPage() {
  return (
    <>
      <Seo {...PAGE_SEO.services} />
      <div className="pt-20" />
      <Services />
      <WebShowcase />
    </>
  )
}
