import Contact from '../components/Contact'
import Seo, { PAGE_SEO } from '../components/Seo'

export default function ContactPage() {
  return (
    <>
      <Seo {...PAGE_SEO.contact} />
      <div className="pt-20" />
      <Contact />
    </>
  )
}
