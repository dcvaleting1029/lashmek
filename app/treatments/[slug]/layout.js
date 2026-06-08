import { TREATMENTS_DATA } from '@/lib/treatments'

const BASE_TITLE = 'Lash Extensions Edinburgh | Brows, Aesthetics & SPMU | LashMeK & Co'
const DESCRIPTION = 'Professional lash extensions, brow treatments, lash lifts, aesthetics and semi-permanent makeup in Edinburgh. Experienced beauty specialists helping you look and feel your best. Book online today.'

export async function generateMetadata({ params }) {
  const t = TREATMENTS_DATA.find(x => x.slug === params?.slug)
  const name = t ? t.title : 'Treatment'
  const title = `${BASE_TITLE} | ${name}`
  return {
    title,
    description: DESCRIPTION,
    openGraph: { title, description: DESCRIPTION, type: 'website' }
  }
}

export default function TreatmentSlugLayout({ children }) {
  return children
}
