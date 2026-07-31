import About from '../components/About'
import FAQ from '../components/FAQ'
import Seo, { PAGE_SEO } from '../components/Seo'

export default function AboutPage() {
  return (
    <>
      <Seo {...PAGE_SEO.about} />
      <div className="pt-20" />
      <About />
      <FAQ />
    </>
  )
}
