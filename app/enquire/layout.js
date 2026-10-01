const TITLE = 'Enquire | LMK Academy — Lash & Brow Training Edinburgh'
const DESCRIPTION = 'Enquire about our accredited lash and brow training at LMK Academy Edinburgh. Small classes, live model practice, lifetime mentorship from Kirima. Message us on WhatsApp.'

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'LMK Academy enquiry, lash training enquiry Edinburgh, brow training enquiry Edinburgh, lash academy WhatsApp, book lash course Edinburgh',
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website'
  }
}

export default function EnquireLayout({ children }) {
  return children
}
