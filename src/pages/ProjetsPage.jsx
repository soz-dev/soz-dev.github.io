import Projects from '../components/Projects'
import Seo, { PAGE_SEO } from '../components/Seo'

export default function ProjetsPage() {
  return (
    <>
      <Seo {...PAGE_SEO.projets} />
      <div className="pt-20" />
      <Projects />
    </>
  )
}
