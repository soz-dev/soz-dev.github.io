import ErrorFallback from '../components/ErrorFallback'
import Seo, { PAGE_SEO } from '../components/Seo'

export default function NotFoundPage() {
  return (
    <>
      <Seo {...PAGE_SEO.notFound} noindex />
      <ErrorFallback variant="notfound" />
    </>
  )
}
