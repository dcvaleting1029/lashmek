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
  title: 'Lash Extensions Edinburgh | Brows, Aesthetics & SPMU | LashMeK & Co',
  description: 'Professional lash extensions, brow treatments, lash lifts, aesthetics and semi-permanent makeup in Edinburgh. Experienced beauty specialists helping you look and feel your best. Book online today.',
  keywords: 'lash extensions Edinburgh, brows Edinburgh, aesthetics Edinburgh, SPMU, semi-permanent makeup, lash lift, lip filler Edinburgh, beauty clinic Edinburgh, LashMeK&Co',
  openGraph: {
    title: 'Lash Extensions Edinburgh | Brows, Aesthetics & SPMU | LashMeK & Co',
    description: 'Professional lash extensions, brow treatments, lash lifts, aesthetics and semi-permanent makeup in Edinburgh. Experienced beauty specialists helping you look and feel your best. Book online today.',
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
