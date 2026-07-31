import Pricing from '../components/Pricing'
import EstimateurRapide from '../components/EstimateurRapide'
import TarifsSynthese from '../components/TarifsSynthese'
import Seo, { PAGE_SEO } from '../components/Seo'

/** Estimateur → grille → synthèse (engagements + vs agence + process). */
export default function TarifsPage() {
  return (
    <>
      <Seo {...PAGE_SEO.tarifs} />
      <div className="pt-20" />
      <EstimateurRapide />
      <Pricing />
      <TarifsSynthese />
    </>
  )
}
