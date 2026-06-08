const BASE_TITLE = 'Lash Extensions Edinburgh | Brows, Aesthetics & SPMU | LashMeK & Co'
const DESCRIPTION = 'Professional lash extensions, brow treatments, lash lifts, aesthetics and semi-permanent makeup in Edinburgh. Experienced beauty specialists helping you look and feel your best. Book online today.'

export const metadata = {
  title: `${BASE_TITLE} | Academy`,
  description: DESCRIPTION,
  openGraph: {
    title: `${BASE_TITLE} | Academy`,
    description: DESCRIPTION,
    type: 'website'
  }
}

export default function CoursesLayout({ children }) {
  return children
}
