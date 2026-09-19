import { TREATMENTS_DATA } from '@/lib/treatments'

export async function generateMetadata({ params }) {
  const t = TREATMENTS_DATA.find(x => x.slug === params?.slug)
  if (!t) {
    return {
      title: 'Treatments | LashMeK&Co Luxury Beauty Clinic Edinburgh',
      description: "Edinburgh's luxury beauty clinic — lash extensions, brows, lash lifts and lip enhancements by LashMeK&Co. Book online today."
    }
  }
  const title = `${t.title} Edinburgh | LashMeK&Co Luxury Beauty Clinic`
  const description = `${t.tagline} Book bespoke ${t.title.toLowerCase()} in Edinburgh with LashMeK&Co — precision beauty, hand-mapped to you. Book online via Fresha.`
  return {
    title,
    description,
    openGraph: { title, description, type: 'website' }
  }
}

export default function TreatmentSlugLayout({ children }) {
  return children
}
