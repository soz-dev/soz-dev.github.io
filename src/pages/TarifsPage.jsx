import Process from '../components/Process'
import Comparatif from '../components/Comparatif'
import Pricing from '../components/Pricing'
import PackCleEnMain from '../components/PackCleEnMain'
import EstimateurRapide from '../components/EstimateurRapide'
import Garanties from '../components/Garanties'

export default function TarifsPage() {
  return (
    <>
      <div className="pt-20" />
      <Pricing />
      <PackCleEnMain />
      <EstimateurRapide />
      <Comparatif />
      <Garanties />
      <Process />
    </>
  )
}
