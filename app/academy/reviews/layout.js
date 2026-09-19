const TITLE = 'LMK Academy Reviews | Accredited Lash & Brow Training Edinburgh'
const DESCRIPTION = 'Read verified student reviews of LMK Academy in Edinburgh. Accredited lash & brow training with small class sizes, live model practice and lifetime mentorship from Kirima.'

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'LMK Academy reviews, lash academy Edinburgh reviews, brow training reviews, lash training testimonials Edinburgh, LASHMEK&CO. Academy',
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website'
  }
}

export default function AcademyReviewsLayout({ children }) {
  return children
}
