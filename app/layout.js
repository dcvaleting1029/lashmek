import { Poppins, Inter } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-canela',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600']
})

export const metadata = {
  title: 'LASHMEK&CO. — Edinburgh Beauty Clinic, Aesthetics & Academy',
  description: 'Advanced aesthetics, premium lashes, brows, skin treatments and beauty education delivered with precision, expertise and care.',
  keywords: 'Edinburgh beauty clinic, lash extensions, aesthetics clinic, brow treatments, lip enhancements, skin treatments, beauty academy, luxury salon',
  openGraph: {
    title: 'LASHMEK&CO. — Edinburgh Luxury Beauty Clinic',
    description: 'Elevating Natural Beauty Through Luxury Treatments',
    type: 'website'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="antialiased bg-[#F8F5F2] text-[#161616] font-inter">
        {children}
      </body>
    </html>
  )
}
