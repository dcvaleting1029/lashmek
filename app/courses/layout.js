const TITLE = 'LMK Academy | Accredited Lash & Brow Training Courses in Edinburgh'
const DESCRIPTION = 'Accredited lash & brow training in Edinburgh with LMK Academy — classic lashes, lash lifts, brow lamination and wax & tint. Small classes, live models & lifetime mentorship from Kirima.'

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'lash academy Edinburgh, brow training Edinburgh, lash training courses Edinburgh, accredited beauty course, classic lash course, lash lift course, brow lamination course, LMK Academy',
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website'
  }
}

export default function CoursesLayout({ children }) {
  return children
}
