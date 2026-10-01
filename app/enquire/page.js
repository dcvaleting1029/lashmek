'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, MessageCircle, Star, Calendar } from 'lucide-react'
import { Nav, Footer, Cursor, Loader, useLenis } from '@/components/shell'
import { STUDENT_REVIEWS } from '@/lib/academy-reviews'
import { COHORT_DATES } from '@/lib/course-dates'
import { useState } from 'react'

const WHATSAPP_NUMBER = '447494075119'
const waLink = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

const HERO_IMG = 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/fxcgf4eh_8ea4a023-3443-41d6-8b02-99dad5db53b8.JPG'

const PATHWAYS = [
  {
    key: 'lash',
    kicker: 'Pathway One',
    title: 'Lash Training',
    tagline: 'Classic Extensions, Lash Lift and the full Lash Specialist Bundle.',
    img: 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/781svbcx_20fa0236-f3b8-4431-8968-6918cdbb96a0.JPG',
    courses: [
      { name: 'Classic Lash Extensions', duration: '2 Days', from: 500 },
      { name: 'Lash Lift', duration: '2 Days', from: 300 },
      { name: 'Lash Specialist Bundle', duration: '3 Days', from: 650 }
    ],
    includes: [
      'Hands-on live model practice',
      'Professional starter kit option',
      'Digital manual + accredited certificate',
      'Lifetime mentorship from Kirima'
    ],
    waMessage: "Hi Kirima, I'd love to enquire about the Lash Training at LMK Academy. Could you share availability and next steps?"
  },
  {
    key: 'brow',
    kicker: 'Pathway Two',
    title: 'Brow Training',
    tagline: 'Brow Wax & Tint, Lamination and the full Brow Specialist Bundle.',
    img: 'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/4u2zm95m_IMG_7339.jpg',
    courses: [
      { name: 'Brow Wax & Tint', duration: '1 Day', from: 220 },
      { name: 'Brow Lamination', duration: '1 Day', from: 250 },
      { name: 'Brow Specialist Bundle', duration: '1 Day', from: 480 }
    ],
    includes: [
      'Hands-on live model practice',
      'Professional starter kit option',
      'Digital manual + accredited certificate',
      'Lifetime mentorship from Kirima'
    ],
    waMessage: "Hi Kirima, I'd love to enquire about the Brow Training at LMK Academy. Could you share availability and next steps?"
  }
]

const GALLERY = [
  'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/781svbcx_20fa0236-f3b8-4431-8968-6918cdbb96a0.JPG',
  'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/4u2zm95m_IMG_7339.jpg',
  'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/acuiurcs_f0757d96-9e0f-411b-9043-5e8eef7cd0f5.jpg',
  'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/aihyjdjt_IMG_7341.jpg',
  'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/3l05f8sl_18ed7d92-cadf-4f50-9e4a-b11031cf0694.JPG',
  'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/1rhavp2k_IMG_4522.jpg',
  'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/7zca60sz_IMG_7340.jpg',
  'https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/fxcgf4eh_8ea4a023-3443-41d6-8b02-99dad5db53b8.JPG'
]

const BENEFITS = [
  { title: 'Fully Accredited', body: 'Beauty Industry Approval certification eligible for professional insurance.' },
  { title: 'Small Class Sizes', body: 'Intimate, focused training with maximum one-to-one time with your mentor.' },
  { title: 'Live Model Practice', body: 'Build real-world confidence by working on a real model with Kirima by your side.' },
  { title: 'Lifetime Mentorship', body: 'Ongoing support, business guidance and WhatsApp access long after qualification.' }
]

function PathwayCard({ p, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-[#F8F5F2] rounded-[20px] overflow-hidden border border-[#C9A88D]/20 flex flex-col"
    >
      <div className="relative aspect-[5/4] overflow-hidden">
        <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute top-6 left-6 text-[10px] tracking-[0.3em] uppercase text-[#C9A88D]">{p.kicker}</div>
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="font-canela font-bold uppercase text-white text-[32px] md:text-[42px] leading-none tracking-[-0.015em]">{p.title}</h3>
          <p className="mt-3 text-[13px] text-white/85 max-w-md leading-[1.6]">{p.tagline}</p>
        </div>
      </div>

      <div className="p-7 md:p-9 flex-1 flex flex-col">
        <div className="text-[10px] tracking-[0.3em] uppercase text-[#8A8A8A] mb-5">Courses in this pathway</div>
        <div className="space-y-3 pb-7 border-b border-[#C9A88D]/20">
          {p.courses.map((c) => (
            <div key={c.name} className="flex items-center justify-between gap-4">
              <div>
                <div className="text-[15px] text-[#161616] font-medium">{c.name}</div>
                <div className="text-[11px] tracking-[0.2em] uppercase text-[#8A8A8A] mt-0.5">{c.duration}</div>
              </div>
              <div className="font-canela text-xl text-[#B08968] shrink-0">from £{c.from}</div>
            </div>
          ))}
        </div>

        <div className="text-[10px] tracking-[0.3em] uppercase text-[#8A8A8A] mb-4 mt-7">What's included</div>
        <ul className="space-y-2.5 mb-8">
          {p.includes.map((inc) => (
            <li key={inc} className="flex items-start gap-3 text-[14px] text-[#161616]/80 leading-[1.5]">
              <Check size={16} className="text-[#B08968] shrink-0 mt-0.5" />
              <span>{inc}</span>
            </li>
          ))}
        </ul>

        <a
          href={waLink(p.waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="Enquire"
          className="btn-lux btn-primary mt-auto w-full justify-center"
        >
          <span className="btn-fill" />
          <MessageCircle size={16} />
          <span>Enquire via WhatsApp</span>
          <ArrowUpRight size={14} />
        </a>
      </div>
    </motion.div>
  )
}

function EnquirePage() {
  const [loaded, setLoaded] = useState(false)
  useLenis()
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Loader done={loaded} />
      <Cursor />
      <Nav variant="solid" />

      <main className="bg-[#F8F5F2] text-[#161616]">
        {/* HERO */}
        <section className="relative min-h-[88vh] w-full overflow-hidden flex items-center">
          <div className="absolute inset-0">
            <img src={HERO_IMG} alt="LMK Academy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#161616]/55" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#161616]/40 via-[#161616]/30 to-[#161616]/70" />
          </div>
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-32 pb-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-10 h-px bg-[#C9A88D]" />
              <span className="text-[10px] tracking-[0.32em] uppercase text-[#C9A88D]">LMK Academy — Enquire</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-canela font-bold uppercase text-[42px] sm:text-[64px] md:text-[96px] lg:text-[112px] leading-[0.95] tracking-[-0.025em] text-[#F8F5F2] max-w-[1100px]"
            >
              Begin Your <span className="italic font-medium text-[#C9A88D]">Journey</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9 }}
              className="mt-8 text-[15px] md:text-[17px] text-[#F8F5F2]/80 max-w-xl leading-[1.75]"
            >
              LMK Academy courses are fully accredited by Beauty Industry Approval, allowing successful students to obtain appropriate insurance and begin offering their treatments professionally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.1 }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <a
                href={waLink("Hi Kirima, I'd love to enquire about the LMK Academy courses. Could you share more info?")}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Enquire"
                className="btn-lux btn-primary"
              >
                <span className="btn-fill" />
                <MessageCircle size={16} />
                <span>Enquire via WhatsApp</span>
                <ArrowUpRight size={14} />
              </a>
              <a
                href="#pathways"
                data-cursor="Explore"
                className="btn-lux btn-outline !border-[#F8F5F2] !text-[#F8F5F2]"
              >
                <span className="btn-fill" />
                <span>View Pathways</span>
              </a>
              <a
                href="#dates"
                data-cursor="Dates"
                className="btn-lux btn-outline !border-[#F8F5F2] !text-[#F8F5F2]"
              >
                <span className="btn-fill" />
                <Calendar size={14} />
                <span>Upcoming Dates</span>
              </a>
            </motion.div>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-[#F8F5F2]/60 flex items-center gap-3">
            <span>Scroll</span>
            <div className="w-px h-10 bg-[#C9A88D]" />
          </div>
        </section>

        {/* TWO PATHWAYS */}
        <section id="pathways" className="py-24 md:py-36 bg-[#F8F5F2]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-end justify-between gap-6 flex-wrap mb-14">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-px bg-[#C9A88D]" />
                  <span className="text-[10px] tracking-[0.32em] uppercase text-[#8A8A8A]">Choose Your Pathway</span>
                </div>
                <h2 className="font-canela font-bold uppercase text-[36px] md:text-[64px] leading-[1.02] tracking-[-0.02em]">
                  Two Pathways. <span className="italic font-medium text-[#B08968]">One Vision.</span>
                </h2>
              </div>
              <p className="text-[14px] text-[#161616]/60 max-w-xs leading-[1.7]">
                Pick the pathway that aligns with your goals — and message us directly on WhatsApp with any questions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {PATHWAYS.map((p, i) => <PathwayCard key={p.key} p={p} i={i} />)}
            </div>
          </div>
        </section>

        {/* UPCOMING DATES */}
        <section id="dates" className="py-24 md:py-32 bg-[#E9DED3]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-end justify-between gap-6 flex-wrap mb-14">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-px bg-[#B08968]" />
                  <span className="text-[10px] tracking-[0.32em] uppercase text-[#161616]/70">Upcoming Cohorts</span>
                </div>
                <h2 className="font-canela font-bold uppercase text-[32px] md:text-[56px] leading-[1.02] tracking-[-0.02em]">
                  Next Course <span className="italic font-medium text-[#B08968]">Dates.</span>
                </h2>
              </div>
              <p className="text-[14px] text-[#161616]/60 max-w-sm leading-[1.7]">
                Tap any date to enquire about that specific cohort — Kirima will reply personally on WhatsApp with availability.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {[
                { key: 'lash', title: 'Lash Training', data: COHORT_DATES.lash },
                { key: 'brow', title: 'Brow Training', data: COHORT_DATES.brow }
              ].map((col, ci) => (
                <motion.div
                  key={col.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8, delay: ci * 0.1 }}
                  className="bg-[#F8F5F2] rounded-[20px] p-7 md:p-9 border border-[#C9A88D]/20"
                >
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#C9A88D]/20">
                    <Calendar size={16} className="text-[#B08968]" />
                    <div className="text-[10px] tracking-[0.3em] uppercase text-[#8A8A8A]">{col.title}</div>
                  </div>
                  <div className="space-y-7">
                    {col.data.map((c) => (
                      <div key={c.course}>
                        <div className="flex items-baseline justify-between gap-4 mb-3">
                          <div className="font-canela text-[22px] md:text-[24px] text-[#161616] leading-tight">{c.course}</div>
                          <div className="text-[10px] tracking-[0.25em] uppercase text-[#8A8A8A] shrink-0">{c.duration}</div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {c.dates.map((d) => (
                            <a
                              key={d}
                              href={waLink(`Hi Kirima, I'd love to enquire about the ${c.course} course on ${d}. Is it still available?`)}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-cursor="Enquire"
                              className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#C9A88D]/40 text-[12px] tracking-[0.08em] text-[#161616] hover:bg-[#161616] hover:text-[#F8F5F2] hover:border-[#161616] transition-all duration-300"
                            >
                              <span>{d}</span>
                              <ArrowUpRight size={12} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-center gap-3 text-[11px] tracking-[0.25em] uppercase text-[#161616]/60">
              <span>Don't see a date that works?</span>
              <a
                href={waLink("Hi Kirima, the current cohort dates don't suit me — could we arrange an alternative?")}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Enquire"
                className="lux-underline text-[#B08968]"
              >
                Message Kirima
              </a>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="py-24 md:py-32 bg-[#161616] text-[#F8F5F2]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-10 h-px bg-[#C9A88D]" />
              <span className="text-[10px] tracking-[0.32em] uppercase text-[#C9A88D]">Why LMK Academy</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
              {BENEFITS.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                  className="border-l border-[#C9A88D]/30 pl-6"
                >
                  <div className="font-canela text-[32px] md:text-[40px] leading-[1.05] text-[#F8F5F2]">{b.title}</div>
                  <p className="mt-4 text-[14px] text-[#F8F5F2]/70 leading-[1.75]">{b.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="py-24 md:py-32 bg-[#F8F5F2]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-px bg-[#C9A88D]" />
                  <span className="text-[10px] tracking-[0.32em] uppercase text-[#8A8A8A]">The Academy</span>
                </div>
                <h2 className="font-canela font-bold uppercase text-[32px] md:text-[56px] leading-[1.02] tracking-[-0.02em]">
                  Inside The <span className="italic font-medium text-[#B08968]">Studio.</span>
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {GALLERY.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
                  className={`relative overflow-hidden rounded-[14px] group ${i === 0 || i === 5 ? 'aspect-[3/4]' : 'aspect-square'}`}
                >
                  <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 md:py-32 bg-[#E9DED3]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#B08968]" />
              <span className="text-[10px] tracking-[0.32em] uppercase text-[#161616]/70">Student Reviews</span>
            </div>
            <h2 className="font-canela font-bold uppercase text-[32px] md:text-[56px] leading-[1.02] tracking-[-0.02em] mb-14 max-w-3xl">
              What Our Students <span className="italic font-medium text-[#B08968]">Say.</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {STUDENT_REVIEWS.slice(0, 6).map((r, i) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
                  className="bg-[#F8F5F2] rounded-[18px] p-7 md:p-8 border border-[#C9A88D]/15 flex flex-col h-full"
                >
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} size={13} fill="#C9A88D" stroke="#C9A88D" />
                    ))}
                  </div>
                  <p className="text-[14px] leading-[1.8] text-[#161616]/80 flex-1">“{r.quote}”</p>
                  <div className="mt-6 pt-5 border-t border-[#C9A88D]/20">
                    <div className="font-canela text-lg text-[#161616]">{r.name}</div>
                    <div className="text-[10px] tracking-[0.25em] uppercase text-[#8A8A8A] mt-1">{r.course} — {r.when}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative py-28 md:py-40 bg-[#161616] text-[#F8F5F2] overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <div className="gold-blob absolute top-1/4 left-1/4 w-[500px] h-[500px]" />
            <div className="gold-blob absolute bottom-0 right-0 w-[600px] h-[600px]" />
          </div>
          <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="w-10 h-px bg-[#C9A88D]" />
              <span className="text-[10px] tracking-[0.32em] uppercase text-[#C9A88D]">Ready to Begin?</span>
              <span className="w-10 h-px bg-[#C9A88D]" />
            </div>
            <h2 className="font-canela font-bold uppercase text-[40px] sm:text-[60px] md:text-[88px] leading-[0.98] tracking-[-0.025em] max-w-[1000px] mx-auto">
              Your Craft, <span className="italic font-medium text-[#C9A88D]">Elevated.</span>
            </h2>
            <p className="mt-8 text-[15px] md:text-[16px] text-[#F8F5F2]/70 max-w-xl mx-auto leading-[1.8]">
              Message Kirima directly on WhatsApp — ask anything about course content, dates, pricing or finance. We reply personally.
            </p>
            <div className="mt-12 flex items-center justify-center">
              <a
                href={waLink("Hi Kirima, I'd love to enquire about joining LMK Academy. Could you share more info?")}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Enquire"
                className="btn-lux btn-primary !bg-[#C9A88D] !border-[#C9A88D] !text-[#161616]"
              >
                <span className="btn-fill" />
                <MessageCircle size={16} />
                <span>Enquire via WhatsApp</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
            <div className="mt-8 text-[11px] tracking-[0.3em] uppercase text-[#F8F5F2]/50">
              +44 7494 075119 — lmkacademy@outlook.com
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default EnquirePage
