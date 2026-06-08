import { COURSES } from '@/lib/courses'

const BASE_TITLE = 'Lash Extensions Edinburgh | Brows, Aesthetics & SPMU | LashMeK & Co'
const DESCRIPTION = 'Professional lash extensions, brow treatments, lash lifts, aesthetics and semi-permanent makeup in Edinburgh. Experienced beauty specialists helping you look and feel your best. Book online today.'

export async function generateMetadata({ params }) {
  const course = COURSES.find(c => c.slug === params?.slug)
  const name = course ? course.title : 'Academy'
  const title = `${BASE_TITLE} | ${name}`
  return {
    title,
    description: DESCRIPTION,
    openGraph: { title, description: DESCRIPTION, type: 'website' }
  }
}

export default function CourseSlugLayout({ children }) {
  return children
}
