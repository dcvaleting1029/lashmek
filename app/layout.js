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
  title: 'Lash Extensions & Brows Edinburgh | LashMeK&Co Beauty Clinic & Academy',
  description: "Edinburgh's luxury beauty clinic & accredited academy — expert lash extensions, brows, lash lifts, lip enhancements and professional training with LashMeK&Co. Book online.",
  keywords: 'lash extensions Edinburgh, brow lamination Edinburgh, lash lift Edinburgh, lip filler Edinburgh, aesthetics Edinburgh, beauty clinic Edinburgh, lash academy Edinburgh, accredited lash training, brow training Edinburgh, LashMeK&Co',
  openGraph: {
    title: 'Lash Extensions & Brows Edinburgh | LashMeK&Co Beauty Clinic & Academy',
    description: "Edinburgh's luxury beauty clinic & accredited academy — expert lash extensions, brows, lash lifts, lip enhancements and professional training with LashMeK&Co. Book online.",
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
