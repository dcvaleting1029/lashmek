'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Plus, ArrowUpRight, Star, Instagram, Play, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, FreeMode, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

/* ============ ASSETS ============ */
const LOGO_URL = 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/snyl5rby_LASHMEK%26CO.%20-%20Logo.jpg'
const LOGO_NAV_URL = 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/klsqu6ix_LASHMEK%26CO.%20-%20Logo%20%28Transparent%29.png'
const HERO_BG_URL = 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/fxcgf4eh_8ea4a023-3443-41d6-8b02-99dad5db53b8.JPG'
const SALON_URL = 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/lt1veqcv_cfbf72f8-4445-4d02-b6c1-647baf8788b2.JPG'
const FOUNDER_URL = 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/3l05f8sl_18ed7d92-cadf-4f50-9e4a-b11031cf0694.JPG'

const IMG = {
  lash1: 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/781svbcx_20fa0236-f3b8-4431-8968-6918cdbb96a0.JPG',
  lash2: 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/acuiurcs_f0757d96-9e0f-411b-9043-5e8eef7cd0f5.jpg',
  lash3: 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/cuy7pnvq_IMG_4523.jpg',
  lash4: 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/1aopwdgc_IMG_4521.jpg',
  lash5: 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/1rhavp2k_IMG_4522.jpg',
  lip1: 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/xw3hscey_WhatsApp%20Image%202026-02-24%20at%2021.52.54.jpeg',
  lip2: 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/w6o9qvyz_WhatsApp%20Image%202026-02-24%20at%2021.52.50.jpeg',
  lip3: 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/hxp3756g_WhatsApp%20Image%202026-02-24%20at%2021.52.56.jpeg',
  lip4: 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/9uze0f1n_IMG_4565.jpg',
  lip5: 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/p5zjagy2_IMG_4567.jpg',
  salon1: 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/lt1veqcv_cfbf72f8-4445-4d02-b6c1-647baf8788b2.JPG',
  salon2: 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/fxcgf4eh_8ea4a023-3443-41d6-8b02-99dad5db53b8.JPG',
  brow1: 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/7zca60sz_IMG_7340.jpg',
  brow2: 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/n6e51kj5_IMG_7342.jpg',
  brow3: 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/4u2zm95m_IMG_7339.jpg',
  brow4: 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/oz4l8hu1_IMG_7343.jpg',
  brow5: 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/aihyjdjt_IMG_7341.jpg'
}

const HERO_CAROUSEL = [
  { src: IMG.lash3, label: 'Lash Results' },
  { src: IMG.lip1, label: 'Lip Enhancement' },
  { src: IMG.brow1, label: 'Brow Sculpt' },
  { src: IMG.brow1, label: 'Skin Renewal' },
  { src: IMG.lash1, label: 'Hybrid Set' },
  { src: IMG.brow3, label: 'Brow Lamination' },
  { src: IMG.salon1, label: 'Academy Training' }
]

const FLOAT_CARDS = [
  { src: IMG.lash1, label: 'Lash Extensions', cls: 'top-[3%] left-[0%] w-[27%] aspect-[3/4]', dx: 1, dy: -1, rot: -2, delay: 0.2 },
  { src: IMG.brow3, label: 'Brow Treatments', cls: 'top-[3%] right-[0%] w-[27%] aspect-[3/4]', dx: -1, dy: -1, rot: 2, delay: 0.4 },
  { src: IMG.lip3, label: 'Lip Enhancements', cls: 'bottom-[3%] left-[0%] w-[27%] aspect-[3/4]', dx: -1, dy: 1, rot: 2, delay: 0.6 },
  { src: IMG.lip5, label: 'Aesthetics', cls: 'bottom-[3%] right-[0%] w-[27%] aspect-[3/4]', dx: 1, dy: 1, rot: -2, delay: 0.8 }
]

const TREATMENTS = [
  { title: 'Lash Extensions', desc: 'Hand-mapped, weightless lashes designed to your eye shape.', img: IMG.lash1, n: '01' },
  { title: 'Lash Lift', desc: 'A natural elevation. Soft curl, defined finish, lasting weeks.', img: IMG.lash2, n: '02' },
  { title: 'Brows', desc: 'Sculpted, defined and tailored to your bone structure.', img: IMG.brow3, n: '03' },
  { title: 'Skin Treatments', desc: 'Advanced rituals for clarity, hydration and radiance.', img: IMG.brow1, n: '04' },
  { title: 'Aesthetics', desc: 'Precision lip enhancements and refined facial aesthetics.', img: IMG.lip5, n: '05' },
  { title: 'Academy', desc: 'Train with elite mentors. Industry-leading certification.', img: IMG.salon2, n: '06' }
]

const RESULTS = [
  { before: IMG.lip2, after: IMG.lip1, name: 'Russian Lip', cat: 'Lips' },
  { before: IMG.brow4, after: IMG.lash1, name: 'Volume Set', cat: 'Lashes' },
  { before: IMG.lip4, after: IMG.brow1, name: 'Skin Renewal', cat: 'Skin' },
  { before: IMG.brow4, after: IMG.brow5, name: 'Brow Lamination', cat: 'Brows' }
]

const TESTIMONIALS = [
  { name: 'Isla M.', treatment: 'Russian Lip', img: IMG.brow5, quote: 'Honestly the most beautiful, considered experience. K&Co treat every detail like art — I left feeling like the best version of myself.' },
  { name: 'Chloe R.', treatment: 'Volume Lashes', img: IMG.lash3, quote: 'A complete sensory ritual. The space, the music, the precision. I will never go anywhere else.' },
  { name: 'Sienna T.', treatment: 'Brow Sculpt', img: IMG.brow4, quote: 'Editorial perfection. They listened, refined and elevated everything about my brows.' },
  { name: 'Amelia W.', treatment: 'Skin Ritual', img: IMG.brow1, quote: 'My skin has never looked like this. Genuinely glowing. The technique is next-level.' },
  { name: 'Freya L.', treatment: 'Academy Student', img: IMG.lip3, quote: 'I trained with K&Co and it transformed my career. The standards are exceptional.' }
]

const FAQS = [
  { q: 'Where is the studio located?', a: 'LashMeK&Co is based in the heart of Edinburgh in a private appointment-only suite. Full address shared upon booking.' },
  { q: 'How do I book a consultation?', a: 'All new aesthetic clients begin with a complimentary consultation. Book directly online or via WhatsApp for a tailored discovery call.' },
  { q: 'Do you offer training and certification?', a: 'Yes. Our Academy delivers accredited education across lashes, brows and aesthetics with one-to-one mentorship and ongoing support.' },
  { q: 'What is your aftercare process?', a: 'Every client receives a luxury aftercare kit and a personalised digital aftercare guide tailored to their treatment.' },
  { q: 'Do you offer gift cards?', a: 'Yes — beautifully presented physical and digital gift cards are available across all services and academy courses.' }
]

const NAV = ['Treatments', 'Academy', 'Results', 'About', 'Contact']

/* ============ COMPONENTS ============ */

function Loader({ done }) {
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
              <div className="mt-4 text-[10px] tracking-[0.4em] text-[#C9A88D] uppercase">Edinburgh — Est. 2018</div>
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

function Cursor() {
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
      if (t) {
        ring.classList.add('hovering')
        setLabel(t.getAttribute('data-cursor') || '')
      }
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
      <div ref={ringRef} className="cursor-ring">
        <span className="cursor-label">{label}</span>
      </div>
    </>
  )
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <header className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${scrolled ? 'py-4 bg-[#F8F5F2]/85 backdrop-blur-md border-b border-[#C9A88D]/20' : 'py-6 bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="#" data-cursor="Home" className="flex items-center gap-3 group">
          <img src={LOGO_NAV_URL} alt="LashMeK&Co. Beauty Clinic" className="h-12 md:h-14 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} data-cursor="Explore" className="lux-underline text-[11px] tracking-[0.25em] uppercase text-[#161616]/80 hover:text-[#161616]">{n}</a>
          ))}
        </nav>
        <a href="#book" data-cursor="Book" className="btn-lux btn-primary !py-3 !px-5 !text-[10px]">
          <span className="btn-fill" />
          <span>Book</span>
          <ArrowUpRight size={14} />
        </a>
      </div>
    </header>
  )
}

/* Animated lines reveal */
function SplitReveal({ children, delay = 0, className = '' }) {
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

function Hero() {
  const stageRef = useRef(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const yShift = useTransform(scrollY, [0, 800], [0, -120])

  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      setMouse({ x, y })
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Salon background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img src={HERO_BG_URL} alt="" className="w-full h-full object-cover" />
        {/* Layered overlays to ensure readability while preserving luxury feel */}
        <div className="absolute inset-0 bg-[#F8F5F2]/35 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F5F2]/70 via-[#F8F5F2]/25 to-[#F8F5F2]/5" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F5F2]/15 via-transparent to-[#F8F5F2]/25" />
      </div>
      {/* Background blobs */}
      <motion.div style={{ y: yShift }} className="absolute inset-0 pointer-events-none">
        <motion.div animate={{ x: [0, 30, 0], y: [0, -20, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} className="gold-blob absolute -top-32 -left-20 w-[600px] h-[600px]" />
        <motion.div animate={{ x: [0, -40, 0], y: [0, 30, 0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} className="gold-blob absolute top-1/3 right-[-10%] w-[500px] h-[500px] opacity-70" />
        <motion.div animate={{ x: [0, 20, 0], y: [0, 40, 0] }} transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }} className="gold-blob absolute bottom-[-10%] left-1/4 w-[700px] h-[700px] opacity-50" />
      </motion.div>

      <div className="relative max-w-[1500px] mx-auto px-6 md:px-10 pt-32 md:pt-36 pb-16 grid lg:grid-cols-2 gap-10 lg:gap-6 items-center min-h-screen">
        {/* LEFT — CONTENT */}
        <div className="relative z-10 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-10 h-px bg-[#C9A88D]" />
            <span className="text-[10px] tracking-[0.32em] uppercase text-[#8A8A8A]">Edinburgh Beauty • Aesthetics • Academy</span>
          </motion.div>

          <h1 className="font-canela text-[52px] sm:text-[72px] md:text-[88px] leading-[1.05] tracking-[0.005em] font-medium text-[#161616]">
            <span className="reveal-line"><SplitReveal delay={0.4}>BEAUTY</SplitReveal></span>{' '}
            <span className="reveal-line"><SplitReveal delay={0.5} className="italic text-[#B08968]">&amp;</SplitReveal></span>{' '}
            <span className="reveal-line"><SplitReveal delay={0.6}>AESTHETICS</SplitReveal></span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0 }}
            className="mt-8 text-[15px] md:text-[16px] leading-relaxed text-[#161616]/70 max-w-md"
          >
            Advanced aesthetics, premium lashes, brows, skin treatments and beauty education — delivered with precision, expertise and care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#book" data-cursor="Book" className="btn-lux btn-primary">
              <span className="btn-fill" />
              <span>Book Appointment</span>
              <ArrowUpRight size={16} />
            </a>
            <a href="#treatments" data-cursor="View Treatment" className="btn-lux btn-outline">
              <span className="btn-fill" />
              <span>Explore Treatments</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mt-14 flex items-center gap-8 text-[11px] tracking-[0.18em] uppercase text-[#161616]/60"
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} size={11} fill="#C9A88D" stroke="#C9A88D" />)}</div>
              <span>5.0 — 500+ Reviews</span>
            </div>
            <span className="hidden sm:inline">CPD Accredited Academy</span>
          </motion.div>
        </div>

        {/* RIGHT — Empty stage (salon background shows through) */}
        <div className="hidden lg:block" />
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-[#161616]/50 flex items-center gap-3"
      >
        <span>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-px h-10 bg-[#C9A88D]" />
      </motion.div>
    </section>
  )
}

/* Counter */
function Counter({ to, suffix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0
        const dur = 1600
        const t0 = performance.now()
        const step = (t) => {
          const p = Math.min((t - t0) / dur, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setVal(Math.floor(eased * to))
          if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
        io.disconnect()
      }
    }, { threshold: 0.4 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [to])
  return <span ref={ref}>{val}{suffix}</span>
}

function TrustBar() {
  const items = [
    { v: 7, s: '+', l: 'Years Experience' },
    { v: 500, s: '+', l: 'Happy Clients' },
    { v: 5, s: '+', l: 'Industry Awards' },
    { v: 1, s: '', l: 'Premium Academy' }
  ]
  return (
    <section className="relative bg-[#161616] text-[#F8F5F2] py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="gold-blob absolute top-0 left-1/3 w-[500px] h-[500px]" />
      </div>
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-10 h-px bg-[#C9A88D]" />
          <span className="text-[10px] tracking-[0.32em] uppercase text-[#C9A88D]">In Numbers</span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="border-l border-[#C9A88D]/30 pl-6"
            >
              <div className="font-canela text-[64px] md:text-[88px] leading-none text-[#F8F5F2]">
                <Counter to={it.v} suffix={it.s} />
              </div>
              <div className="mt-3 text-[11px] tracking-[0.25em] uppercase text-[#C9A88D]">{it.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Marquee */
function Marquee() {
  const items = ['Edinburgh', '✦', 'Lashes', '✦', 'Brows', '✦', 'Lips', '✦', 'Skin', '✦', 'Aesthetics', '✦', 'Academy', '✦']
  const loop = [...items, ...items]
  return (
    <div className="py-10 border-y border-[#C9A88D]/30 overflow-hidden bg-[#F8F5F2]">
      <div className="marquee-track">
        {loop.map((t, i) => (
          <div key={i} className="shrink-0 px-8 font-canela text-4xl md:text-5xl text-[#161616] italic">{t}</div>
        ))}
      </div>
    </div>
  )
}

/* Treatments — Horizontal scroll */
function Treatments() {
  const scrollerRef = useRef(null)

  // Convert vertical mouse wheel to horizontal scroll while hovering the row
  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return
      // only intercept if there's room to scroll horizontally
      const max = el.scrollWidth - el.clientWidth
      if (max <= 0) return
      const next = el.scrollLeft + e.deltaY
      if ((e.deltaY > 0 && el.scrollLeft < max) || (e.deltaY < 0 && el.scrollLeft > 0)) {
        e.preventDefault()
        el.scrollLeft = next
      }
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <section id="treatments" className="relative bg-[#F8F5F2]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-28 pb-12">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#C9A88D]" />
              <span className="text-[10px] tracking-[0.32em] uppercase text-[#8A8A8A]">The Treatments</span>
            </div>
            <h2 className="font-canela text-[42px] md:text-[68px] leading-[1.02] tracking-[-0.01em] text-[#161616] max-w-3xl">
              Designed for <span className="italic text-[#B08968]">you.</span> Perfected by us.
            </h2>
          </div>
          <p className="text-[14px] text-[#161616]/60 max-w-xs">A curated suite of treatments — each handcrafted, considered and elevated to luxury standard.</p>
        </div>
      </div>

      <div
        ref={scrollerRef}
        data-cursor="Drag"
        className="no-scrollbar overflow-x-auto overscroll-x-contain pb-16 pl-6 md:pl-10 pr-6 md:pr-10 snap-x snap-mandatory scroll-smooth"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div className="flex gap-6 w-max">
          {TREATMENTS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: (i % 3) * 0.1, ease: [0.2, 0.7, 0.2, 1] }}
              data-cursor="View Treatment"
              className="shrink-0 w-[78vw] sm:w-[55vw] md:w-[40vw] lg:w-[30vw] aspect-[3/4] relative rounded-[18px] overflow-hidden group snap-start"
            >
              <img src={t.img} alt={t.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div className="absolute top-6 left-6 text-[10px] tracking-[0.3em] uppercase text-[#C9A88D]">{t.n}</div>
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-canela text-3xl md:text-4xl leading-tight">{t.title}</h3>
                    <p className="mt-3 text-[13px] text-white/80 max-w-xs">{t.desc}</p>
                  </div>
                  <div className="shrink-0 w-11 h-11 rounded-full border border-white/60 flex items-center justify-center group-hover:bg-[#C9A88D] group-hover:border-[#C9A88D] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-20 text-[10px] tracking-[0.3em] uppercase text-[#161616]/50">← Drag or scroll to explore →</div>
    </section>
  )
}

/* Founder */
function Founder() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 0.95])
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <section id="about" ref={ref} className="relative bg-[#E9DED3] py-28 md:py-40 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 lg:order-1 order-2">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-[#B08968]" />
            <span className="text-[10px] tracking-[0.32em] uppercase text-[#161616]/70">Founder — Kirima</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-canela text-[44px] md:text-[64px] leading-[1.02] tracking-[-0.01em] text-[#161616]"
          >
            A studio born from <span className="italic text-[#B08968]">obsession</span> with detail.
          </motion.h2>
          <p className="mt-8 text-[15px] leading-[1.8] text-[#161616]/75 max-w-md">
            For over seven years, Kirima has been refining the art of natural enhancement — building LashMeK&Co into one of Edinburgh's most respected names in luxury aesthetics, lashes and education.
          </p>
          <p className="mt-5 text-[15px] leading-[1.8] text-[#161616]/75 max-w-md">
            Every treatment is approached with the patience of a sculptor and the eye of an editor — quietly luxurious, deeply considered, always elevated.
          </p>
          <a href="#" data-cursor="Read More" className="mt-10 inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase border-b border-[#161616] pb-2">
            The Story <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="lg:col-span-7 lg:order-2 order-1 relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px]">
            <motion.div style={{ scale, y }} className="absolute inset-0">
              <img src={FOUNDER_URL} alt="Founder Kirima" className="w-full h-full object-cover" />
            </motion.div>
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-white/90">
              <span>Est. 2018</span>
              <span>Edinburgh, UK</span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#161616] text-[#F8F5F2] flex items-center justify-center"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <path id="circle" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
              </defs>
              <text fill="#C9A88D" fontSize="7" letterSpacing="2">
                <textPath href="#circle">LASHMEK & CO • EDINBURGH • LUXURY BEAUTY • </textPath>
              </text>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* Before/After Slider */
function CompareSlider({ before, after, name, cat }) {
  const [pos, setPos] = useState(50)
  const wrap = useRef(null)
  const dragging = useRef(false)

  const onMove = (clientX) => {
    const r = wrap.current.getBoundingClientRect()
    const p = ((clientX - r.left) / r.width) * 100
    setPos(Math.max(2, Math.min(98, p)))
  }
  useEffect(() => {
    const mm = (e) => dragging.current && onMove(e.clientX)
    const tm = (e) => dragging.current && onMove(e.touches[0].clientX)
    const up = () => (dragging.current = false)
    window.addEventListener('mousemove', mm)
    window.addEventListener('touchmove', tm)
    window.addEventListener('mouseup', up)
    window.addEventListener('touchend', up)
    return () => {
      window.removeEventListener('mousemove', mm)
      window.removeEventListener('touchmove', tm)
      window.removeEventListener('mouseup', up)
      window.removeEventListener('touchend', up)
    }
  }, [])

  return (
    <div className="shrink-0 w-[85vw] sm:w-[70vw] md:w-[480px]">
      <div ref={wrap} data-cursor="Drag" className="relative aspect-[3/4] rounded-[18px] overflow-hidden select-none touch-none">
        <img src={after} alt="after" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={before} alt="before" className="absolute inset-0 w-full h-full object-cover" style={{ width: `${100 / (pos / 100)}%`, maxWidth: 'none' }} />
        </div>
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/80 backdrop-blur text-[9px] tracking-[0.25em] uppercase">Before</div>
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#161616]/80 text-white text-[9px] tracking-[0.25em] uppercase backdrop-blur">After</div>
        <div
          className="absolute top-0 bottom-0 w-px bg-white"
          style={{ left: `${pos}%` }}
        >
          <button
            onMouseDown={() => (dragging.current = true)}
            onTouchStart={() => (dragging.current = true)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center"
          >
            <div className="flex items-center gap-0.5 text-[#161616]">
              <ChevronRight size={14} className="rotate-180" />
              <ChevronRight size={14} />
            </div>
          </button>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <div className="font-canela text-xl text-[#161616]">{name}</div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#8A8A8A] mt-1">{cat}</div>
        </div>
        <ArrowUpRight className="text-[#B08968]" size={18} />
      </div>
    </div>
  )
}

function Results() {
  const items = [...RESULTS, ...RESULTS]
  return (
    <section id="results" className="py-28 md:py-36 bg-[#F8F5F2]">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-14">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#C9A88D]" />
              <span className="text-[10px] tracking-[0.32em] uppercase text-[#8A8A8A]">Results</span>
            </div>
            <h2 className="font-canela text-[42px] md:text-[64px] leading-[1.02] text-[#161616]">
              The art of <span className="italic text-[#B08968]">transformation.</span>
            </h2>
          </div>
          <div className="flex gap-2 text-[11px] tracking-[0.2em] uppercase text-[#161616]/60">
            <span className="px-3 py-1.5 border border-[#161616]/30 rounded-full">Lips</span>
            <span className="px-3 py-1.5 border border-[#161616]/30 rounded-full">Brows</span>
            <span className="px-3 py-1.5 border border-[#161616]/30 rounded-full">Lashes</span>
            <span className="px-3 py-1.5 border border-[#161616]/30 rounded-full">Skin</span>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-6 px-6 md:px-10 pb-6 w-max">
          {items.map((r, i) => (
            <CompareSlider key={i} {...r} />
          ))}
        </div>
      </div>
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 mt-8 text-[11px] tracking-[0.25em] uppercase text-[#161616]/50">← Drag to compare →</div>
    </section>
  )
}

/* Video Section */
function VideoSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1])
  return (
    <section ref={ref} className="relative h-[90vh] overflow-hidden bg-[#161616]">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img src={IMG.lash3} alt="Cinematic" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <motion.button
          whileHover={{ scale: 1.08 }}
          data-cursor="Play"
          className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-[#C9A88D] bg-[#F8F5F2]/10 backdrop-blur flex items-center justify-center text-[#F8F5F2]"
        >
          <Play size={26} fill="#F8F5F2" />
        </motion.button>
        <h2 className="mt-10 font-canela text-[44px] md:text-[78px] text-[#F8F5F2] leading-[1] tracking-[-0.01em] max-w-4xl">
          Luxury in <span className="italic text-[#C9A88D]">every</span> detail.
        </h2>
        <div className="mt-6 text-[11px] tracking-[0.3em] uppercase text-[#C9A88D]">LashMeK&Co — A Beauty Film</div>
      </div>
    </section>
  )
}

/* Testimonials */
function Testimonials() {
  return (
    <section className="py-28 md:py-36 bg-[#161616] text-[#F8F5F2] relative overflow-hidden">
      <div className="gold-blob absolute top-1/4 -left-20 w-[500px] h-[500px] opacity-40" />
      <div className="gold-blob absolute bottom-0 right-0 w-[600px] h-[600px] opacity-30" />
      <div className="relative max-w-[1500px] mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-px bg-[#C9A88D]" />
          <span className="text-[10px] tracking-[0.32em] uppercase text-[#C9A88D]">Voices</span>
        </div>
        <h2 className="font-canela text-[42px] md:text-[64px] leading-[1.02] mb-14 max-w-3xl">
          Loved by clients <span className="italic text-[#C9A88D]">across</span> Edinburgh.
        </h2>
        <Swiper
          modules={[Autoplay, FreeMode, Pagination]}
          slidesPerView={1.1}
          spaceBetween={20}
          loop
          freeMode
          grabCursor
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1.6 },
            900: { slidesPerView: 2.4 },
            1200: { slidesPerView: 3 }
          }}
          className="!pb-14"
        >
          {TESTIMONIALS.map((t, i) => (
            <SwiperSlide key={i}>
              <div data-cursor="Drag" className="glass rounded-[18px] p-7 h-[400px] flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-5">{[...Array(5)].map((_, j) => <Star key={j} size={13} fill="#C9A88D" stroke="#C9A88D" />)}</div>
                  <p className="font-canela text-xl md:text-2xl leading-[1.35] text-[#F8F5F2]">&ldquo;{t.quote}&rdquo;</p>
                </div>
                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-[#C9A88D]/20">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="text-sm text-[#F8F5F2]">{t.name}</div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-[#C9A88D] mt-1">{t.treatment}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

/* Academy */
function Academy() {
  const cards = [
    { title: 'Foundation Lash', desc: '4-day intensive in classic lash artistry with one-to-one mentorship.', img: IMG.lash3 },
    { title: 'Advanced Volume', desc: 'Master Russian volume techniques, mapping & retention science.', img: IMG.lash4 },
    { title: 'Aesthetic Masterclass', desc: 'Lip enhancement, anatomy and advanced injection techniques.', img: IMG.lip2 }
  ]
  return (
    <section id="academy" className="bg-[#161616] text-[#F8F5F2] py-28 md:py-36 relative overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#C9A88D]" />
              <span className="text-[10px] tracking-[0.32em] uppercase text-[#C9A88D]">Education</span>
            </div>
            <h2 className="font-canela text-[44px] md:text-[78px] leading-[0.98] tracking-[-0.01em]">
              Train with <span className="italic text-[#C9A88D]">LashMeK</span> Academy.
            </h2>
          </div>
          <p className="text-[15px] leading-[1.8] text-[#F8F5F2]/70 max-w-md">
            Where the next generation of luxury beauty professionals are shaped. Accredited, intimate cohorts, lifetime mentorship.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
              data-cursor="Explore"
              className="group relative aspect-[4/5] rounded-[18px] overflow-hidden glass"
            >
              <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/30 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-[#C9A88D]/0 group-hover:ring-[#C9A88D]/60 transition-all duration-700 rounded-[18px]" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3 className="font-canela text-2xl md:text-3xl">{c.title}</h3>
                <p className="mt-3 text-[13px] text-[#F8F5F2]/70">{c.desc}</p>
                <div className="mt-6 flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[#C9A88D]">
                  Enrol <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Instagram grid */
function InstagramFeed() {
  const grid = [
    { src: IMG.lash1, span: 'col-span-2 row-span-2' },
    { src: IMG.lash3, span: '' },
    { src: IMG.lip2, span: '' },
    { src: IMG.brow1, span: 'col-span-2' },
    { src: IMG.salon1, span: 'row-span-2' },
    { src: IMG.lash4, span: '' },
    { src: IMG.lip5, span: '' },
    { src: IMG.brow2, span: 'col-span-2' }
  ]
  return (
    <section className="py-28 md:py-36 bg-[#F8F5F2]">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#C9A88D]" />
              <span className="text-[10px] tracking-[0.32em] uppercase text-[#8A8A8A]">@lashmekandco</span>
            </div>
            <h2 className="font-canela text-[40px] md:text-[60px] leading-[1.02] text-[#161616]">
              Follow our <span className="italic text-[#B08968]">studio</span>.
            </h2>
          </div>
          <a href="#" data-cursor="Follow" className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase border-b border-[#161616] pb-2">
            <Instagram size={14} /> Follow on Instagram
          </a>
        </div>
        <div className="grid grid-cols-4 auto-rows-[140px] md:auto-rows-[200px] gap-3">
          {grid.map((g, i) => (
            <a key={i} href="#" data-cursor="View" className={`relative overflow-hidden rounded-[12px] group ${g.span}`}>
              <img src={g.src} alt="feed" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]" />
              <div className="absolute inset-0 bg-[#161616]/0 group-hover:bg-[#161616]/40 transition-colors duration-500 flex items-center justify-center">
                <Instagram size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* FAQ */
function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="py-28 md:py-36 bg-[#E9DED3]">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-10 h-px bg-[#B08968]" />
            <span className="text-[10px] tracking-[0.32em] uppercase text-[#161616]/70">FAQ</span>
            <span className="w-10 h-px bg-[#B08968]" />
          </div>
          <h2 className="font-canela text-[42px] md:text-[64px] leading-[1.02] text-[#161616]">
            Questions, <span className="italic text-[#B08968]">answered.</span>
          </h2>
        </div>
        <div className="divide-y divide-[#B08968]/30 border-t border-b border-[#B08968]/30">
          {FAQS.map((f, i) => (
            <div key={i} className="py-6">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                data-cursor="Open"
                className="w-full flex items-center justify-between gap-6 text-left"
              >
                <span className="font-canela text-xl md:text-2xl text-[#161616]">{f.q}</span>
                <motion.div animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.4 }} className="shrink-0 w-9 h-9 rounded-full border border-[#161616]/40 flex items-center justify-center">
                  <Plus size={16} />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.7, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pt-5 pr-12 text-[15px] leading-[1.8] text-[#161616]/75 max-w-3xl">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Final CTA */
function FinalCTA() {
  return (
    <section id="book" className="relative h-screen min-h-[700px] overflow-hidden">
      <img src={IMG.brow4} alt="CTA" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#161616]/30 via-[#161616]/45 to-[#161616]/80" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 text-[#F8F5F2]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-10 h-px bg-[#C9A88D]" />
          <span className="text-[10px] tracking-[0.32em] uppercase text-[#C9A88D]">Begin</span>
          <span className="w-10 h-px bg-[#C9A88D]" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="font-canela text-[48px] md:text-[88px] leading-[0.95] tracking-[-0.01em] max-w-5xl"
        >
          Your beauty <span className="italic text-[#C9A88D]">journey</span> starts here.
        </motion.h2>
        <p className="mt-8 text-[14px] md:text-[15px] text-[#F8F5F2]/70 max-w-lg">Reserve your place. Spaces are limited and curated for an intimate experience.</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#" data-cursor="Book" className="btn-lux btn-light">
            <span className="btn-fill" />
            <span>Book Appointment</span>
            <ArrowUpRight size={16} />
          </a>
          <a href="#contact" data-cursor="Contact" className="btn-lux btn-light !border-[#C9A88D] !text-[#C9A88D]">
            <span className="btn-fill" />
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </section>
  )
}

/* Footer */
function Footer() {
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
            <p className="text-sm leading-[1.9] text-[#F8F5F2]/70">Private Suite<br />Edinburgh, Scotland<br />By Appointment Only</p>
          </div>
          <div className="md:col-span-2">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#C9A88D] mb-5">Contact</div>
            <p className="text-sm leading-[1.9] text-[#F8F5F2]/70">hello@lashmek.co<br />+44 131 000 0000</p>
          </div>
          <div className="md:col-span-2">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#C9A88D] mb-5">Follow</div>
            <div className="flex flex-col gap-2 text-sm text-[#F8F5F2]/70">
              <a href="#" data-cursor="Follow" className="lux-underline">Instagram</a>
              <a href="#" data-cursor="Follow" className="lux-underline">TikTok</a>
              <a href="#" data-cursor="Follow" className="lux-underline">Pinterest</a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8 text-[11px] tracking-[0.2em] uppercase text-[#F8F5F2]/40">
          <span>© 2025 LashMeK&Co — All rights reserved</span>
          <span>Crafted in Edinburgh</span>
        </div>
      </div>
    </footer>
  )
}

/* Lenis smooth scroll */
function useLenis() {
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

/* ============ MAIN ============ */
function App() {
  const [loaded, setLoaded] = useState(false)
  useLenis()

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 2000)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Loader done={loaded} />
      <Cursor />
      <div className="grain-overlay" />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Marquee />
        <Treatments />
        <Founder />
        <Results />
        <VideoSection />
        <Testimonials />
        <Academy />
        <InstagramFeed />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}

export default App
App
