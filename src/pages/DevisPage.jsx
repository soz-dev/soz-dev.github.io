import DevisPublic from '../components/DevisPublic'
import Seo, { PAGE_SEO } from '../components/Seo'

export default function DevisPage() {
  return (
    <>
      <Seo {...PAGE_SEO.devis} />
      <div className="pt-20" />
      <DevisPublic />
    </>
  )
}
