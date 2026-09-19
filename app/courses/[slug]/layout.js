import { COURSES } from '@/lib/courses'

export async function generateMetadata({ params }) {
  const course = COURSES.find(c => c.slug === params?.slug)
  if (!course) {
    return {
      title: 'LMK Academy | Accredited Lash & Brow Training Courses in Edinburgh',
      description: 'Accredited lash & brow training in Edinburgh with LMK Academy. Small classes, live model practice and lifetime mentorship from Kirima.'
    }
  }
  const title = `${course.title} Course Edinburgh | LMK Academy | LashMeK&Co`
  const description = `Accredited ${course.title} training in Edinburgh with LMK Academy — ${course.duration.toLowerCase()} hands-on course with live model, digital manual, certification and lifetime mentorship from Kirima.`
  return {
    title,
    description,
    openGraph: { title, description, type: 'website' }
  }
}

export default function CourseSlugLayout({ children }) {
  return children
}
