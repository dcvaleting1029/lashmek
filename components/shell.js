'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export const LOGO_URL = 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/snyl5rby_LASHMEK%26CO.%20-%20Logo.jpg'
export const LOGO_NAV_URL = 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/klsqu6ix_LASHMEK%26CO.%20-%20Logo%20%28Transparent%29.png'

export const BOOKING_URL = 'https://www.fresha.com/en-GB/a/lashmek-edinburgh-uk-143-gilmore-place-acckxp8b/booking?menu=true&cartId=dffffc3a-8f9b-423d-91e7-dc9339ee7b8c'

export const NAV_LINKS = [
  { label: 'Treatments', href: '/#treatments' },
  { label: 'Academy', href: '/courses' },
  { label: 'Results', href: '/#results' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' }
]

export function SplitReveal({ children, delay = 0, className = '' }) {
  return (
    <motion.span
      initial={{ y: '110%' }}
      animate={{ y: 0 }}
      transition={{ duration: 1.1, ease: [0.7, 0, 0.2, 1], delay }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.span>
  )
}

export function Loader({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 1.0, ease: [0.7, 0, 0.2, 1] }}
          className="fixed inset-0 z-[200] bg-[#161616] flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#161616] via-[#1f1b18] to-[#161616]" />
          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1.04 }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
              className="text-center flex flex-col items-center"
            >
              <img
                src={LOGO_NAV_URL}
                alt="LashMeK&Co. Beauty Clinic"
                className="w-[300px] md:w-[400px] h-auto"
                style={{ filter: 'invert(1)' }}
              />
              <div className="mt-4 text-[10px] tracking-[0.4em] text-[#C9A88D] uppercase">LMK Academy</div>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '60vw' }}
              transition={{ duration: 1.6, ease: [0.7, 0, 0.2, 1], delay: 0.2 }}
              className="loader-line"
              style={{ maxWidth: 520 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [label, setLabel] = useState('')
  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return
    let mx = 0, my = 0, rx = 0, ry = 0
    const move = (e) => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)` }
    const loop = () => {
      rx += (mx - rx) * 0.15
      ry += (my - ry) * 0.15
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`
      requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', move)
    loop()
    const handleOver = (e) => {
      const t = e.target.closest('[data-cursor]')
      if (t) { ring.classList.add('hovering'); setLabel(t.getAttribute('data-cursor') || '') }
    }
    const handleOut = (e) => {
      const t = e.target.closest('[data-cursor]')
      if (t) { ring.classList.remove('hovering'); setLabel('') }
    }
    document.addEventListener('mouseover', handleOver)
    document.addEventListener('mouseout', handleOut)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseout', handleOut)
    }
  }, [])
  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring"><span className="cursor-label">{label}</span></div>
    </>
  )
}

export function Nav({ variant = 'auto' }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    fn()
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const solid = variant === 'solid' || scrolled
  return (
    <header className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${solid ? 'py-4 bg-[#F8F5F2]/85 backdrop-blur-md border-b border-[#C9A88D]/20' : 'py-6 bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link href="/" data-cursor="Home" className="flex items-center gap-3 group">
          <img src={LOGO_NAV_URL} alt="LashMeK&Co. Beauty Clinic" className="h-12 md:h-14 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((n) => (
            <Link key={n.label} href={n.href} data-cursor="Explore" className="lux-underline text-[11px] tracking-[0.25em] uppercase text-[#161616]/80 hover:text-[#161616]">{n.label}</Link>
          ))}
        </nav>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-cursor="Book" className="btn-lux btn-primary !py-3 !px-5 !text-[10px]">
          <span className="btn-fill" />
          <span>Book</span>
          <ArrowUpRight size={14} />
        </a>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer id="contact" className="bg-[#161616] text-[#F8F5F2] pt-20 pb-10">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 pb-16 border-b border-[#C9A88D]/20">
          <div className="md:col-span-5">
            <img src={LOGO_NAV_URL} alt="LashMeK&Co. Beauty Clinic" className="h-16 md:h-20 w-auto" style={{ filter: 'invert(1)' }} />
            <p className="mt-6 text-[15px] text-[#F8F5F2]/65 max-w-sm">A luxury beauty clinic in the heart of Edinburgh — treatments, aesthetics and academy.</p>
          </div>
          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#C9A88D] mb-5">Studio</div>
            <p className="text-sm leading-[1.9] text-[#F8F5F2]/70">143 Gilmore Pl<br />Edinburgh EH3 9PW<br />United Kingdom<br />By Appointment Only</p>
          </div>
          <div className="md:col-span-2">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#C9A88D] mb-5">Contact</div>
            <p className="text-sm leading-[1.9] text-[#F8F5F2]/70">kirimaa@icloud.com<br />+44 7494 075119</p>
          </div>
          <div className="md:col-span-2">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#C9A88D] mb-5">Follow</div>
            <div className="flex flex-col gap-2 text-sm text-[#F8F5F2]/70">
              <a href="https://www.instagram.com/lashmekco_academy/" target="_blank" rel="noopener noreferrer" data-cursor="Follow" className="lux-underline">Instagram</a>
              <a href="https://www.tiktok.com/@kirimaa1" target="_blank" rel="noopener noreferrer" data-cursor="Follow" className="lux-underline">TikTok</a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 text-[11px] tracking-[0.2em] uppercase text-[#F8F5F2]/40">
          <span>© 2025 LashMeK&Co — All rights reserved</span>
          <span>Designed By <a href="https://jayalminshawi.com/" target="_blank" rel="noopener noreferrer" className="lux-underline text-[#C9A88D] hover:text-[#F8F5F2] transition-colors">Jay Alminshawi</a></span>
        </div>
      </div>
    </footer>
  )
}

export function useLenis() {
  useEffect(() => {
    let lenis
    let raf
    ;(async () => {
      const Lenis = (await import('lenis')).default
      lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
      const loop = (time) => { lenis.raf(time); raf = requestAnimationFrame(loop) }
      raf = requestAnimationFrame(loop)
    })()
    return () => {
      cancelAnimationFrame(raf)
      if (lenis) lenis.destroy()
    }
  }, [])
}
