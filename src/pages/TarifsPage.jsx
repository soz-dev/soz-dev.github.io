import Pricing from '../components/Pricing'
import EstimateurRapide from '../components/EstimateurRapide'
import TarifsSynthese from '../components/TarifsSynthese'

/** Estimateur → grille → synthèse (engagements + vs agence + process). */
export default function TarifsPage() {
  return (
    <>
      <div className="pt-20" />
      <EstimateurRapide />
      <Pricing />
      <TarifsSynthese />
    </>
  )
}
