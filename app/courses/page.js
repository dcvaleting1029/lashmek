'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, ChevronDown } from 'lucide-react'
import { Cursor, useLenis, Loader, Nav, Footer, SplitReveal } from '@/components/shell'
import { COURSES, COURSE_BENEFITS, COURSE_HERO_IMG, LASH_GROUP_IMG, BROW_GROUP_IMG } from '@/lib/courses'
import { STUDENT_REVIEWS } from '@/lib/academy-reviews'
import { Quote, Star } from 'lucide-react'

function CourseGroup({ heading, kicker, courses, image, reverse }) {
  return (
    <section className="py-20 md:py-28 bg-[#F8F5F2]">
      <div className={`max-w-[1500px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10 items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
          className="lg:col-span-6 relative aspect-[3/4] rounded-[20px] overflow-hidden"
        >
          <img src={image} alt={heading} className="absolute inset-0 w-full h-full object-cover" />
        </motion.div>

        <div className="lg:col-span-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-[#C9A88D]" />
            <span className="text-[10px] tracking-[0.32em] uppercase text-[#8A8A8A]">{kicker}</span>
          </div>
          <div className="space-y-4">
            {courses.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group"
              >
                <div className="flex items-center justify-between gap-6 py-5 border-b border-[#161616]/15">
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] tracking-[0.3em] uppercase text-[#B08968] mb-1.5">{c.level}</div>
                    <h4 className="font-canela font-bold uppercase text-[18px] md:text-[22px] leading-[1.2] tracking-[-0.01em] text-[#161616]">
                      {c.title}
                    </h4>
                    <div className="text-[12px] text-[#161616]/55 mt-1">{c.subtitle} • {c.duration}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-canela text-[22px] md:text-[26px] text-[#161616] leading-none">£{c.priceWithoutKit}</div>
                    <div className="text-[9px] tracking-[0.22em] uppercase text-[#8A8A8A] mt-1">Without kit</div>
                    <div className="font-canela text-[18px] md:text-[22px] text-[#B08968] leading-none mt-2">£{c.priceWithKit}</div>
                    <div className="text-[9px] tracking-[0.22em] uppercase text-[#B08968] mt-1">With starter kit</div>
                  </div>
                </div>
                <Link
                  href={`/courses/${c.slug}`}
                  data-cursor="Details"
                  className="mt-3 inline-flex items-center justify-between w-full bg-[#161616] hover:bg-[#C9A88D] transition-colors duration-500 text-[#F8F5F2] hover:text-[#161616] rounded-full px-6 py-4 group"
                >
                  <span className="text-[11px] tracking-[0.3em] uppercase">Details</span>
                  <ChevronDown size={16} className="-rotate-90 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CoursesPage() {
  useLenis()

  const lashCourses = COURSES.filter(c => c.category === 'lash')
  const browCourses = COURSES.filter(c => c.category === 'brow')

  return (
    <>
      <Cursor />
      <div className="grain-overlay" />
      <Nav />
      <main>
        {/* HERO */}
        <section className="relative min-h-[88vh] flex items-end pt-32 pb-20 overflow-hidden">
          <img src={COURSE_HERO_IMG} alt="LMK Academy" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8F5F2]/35 via-[#F8F5F2]/10 to-[#F8F5F2]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F5F2]/55 via-[#F8F5F2]/15 to-[#F8F5F2]/5" />
          <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-10 w-full">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#C9A88D]" />
              <span className="text-[10px] tracking-[0.32em] uppercase text-[#161616]/70">LMK Academy • By Kirima</span>
            </motion.div>
            <h1 className="font-canela font-bold uppercase text-[clamp(56px,14vw,220px)] leading-[0.92] tracking-[-0.03em] text-[#161616] overflow-hidden">
              <span className="block overflow-hidden"><SplitReveal delay={0.3}>Courses</SplitReveal></span>
            </h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }} className="mt-8 max-w-xl text-[15px] md:text-[16px] text-[#161616]/70 leading-[1.8]">
              Full-stack accredited courses that give you the knowledge, skill and credibility to grow your personal brand and business in lashes & brows.
            </motion.p>
          </div>
        </section>

        {/* INTRO */}
        <section className="bg-[#F8F5F2] py-24 md:py-32">
          <div className="max-w-[1000px] mx-auto px-6 md:px-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#C9A88D]" />
              <span className="text-[10px] tracking-[0.32em] uppercase text-[#8A8A8A]">The Programme</span>
              <span className="w-10 h-px bg-[#C9A88D]" />
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="font-canela font-bold uppercase text-[36px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-[#161616]"
            >
              The courses that <span className="italic font-medium text-[#B08968]">we offer</span>
            </motion.h2>
            <p className="mt-8 text-[15px] md:text-[16px] text-[#161616]/70 max-w-2xl mx-auto leading-[1.9]">
              Full-stack accredited courses that give you the knowledge, skill and credibility you need to allow you to grow your personal brand and business in lashes & brows.
            </p>
          </div>
        </section>

        <CourseGroup heading="Lash Training" kicker="Lash Training Courses" courses={lashCourses} image={LASH_GROUP_IMG} reverse={false} />
        <CourseGroup heading="Brow Training" kicker="Brow Training Courses" courses={browCourses} image={BROW_GROUP_IMG} reverse={true} />

        {/* STUDENT REVIEWS */}
        <section className="py-24 md:py-32 bg-[#161616] text-[#F8F5F2] relative overflow-hidden">
          <div className="gold-blob absolute top-1/4 -left-20 w-[500px] h-[500px] opacity-30" />
          <div className="gold-blob absolute bottom-0 right-0 w-[600px] h-[600px] opacity-20" />
          <div className="relative max-w-[1300px] mx-auto px-6 md:px-10">
            <div className="flex items-end justify-between gap-6 flex-wrap mb-14">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-px bg-[#C9A88D]" />
                  <span className="text-[10px] tracking-[0.32em] uppercase text-[#C9A88D]">Student Voices • Google Reviews</span>
                </div>
                <h2 className="font-canela font-bold uppercase text-[36px] md:text-[60px] leading-[1.05] tracking-[-0.02em]">
                  Loved by <span className="italic font-medium text-[#C9A88D]">our students</span>
                </h2>
              </div>
              <Link href="/academy/reviews" data-cursor="Read" className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase border-b border-[#F8F5F2]/40 hover:border-[#C9A88D] hover:text-[#C9A88D] transition-colors pb-2">
                Read all reviews <ArrowUpRight size={14} />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {STUDENT_REVIEWS.map((r, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, delay: (i % 2) * 0.1 }}
                  className="relative glass rounded-[20px] p-8 md:p-10"
                >
                  <Quote className="absolute top-6 right-6 text-[#C9A88D]/30" size={40} />
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-[#F8F5F2] flex items-center justify-center shrink-0 ring-1 ring-[#C9A88D]/30">
                      <img src="https://customer-assets.emergentagent.com/job_lashme-refined/artifacts/snyl5rby_LASHMEK%26CO.%20-%20Logo.jpg" alt="LashMeK&Co." className="w-full h-full object-contain p-1.5" />
                    </div>
                    <div>
                      <div className="font-canela text-lg text-[#F8F5F2]">{r.name}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex gap-0.5">{[...Array(5)].map((_, j) => <Star key={j} size={11} fill="#C9A88D" stroke="#C9A88D" />)}</div>
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#F8F5F2]/55">{r.when}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#C9A88D] mb-4">{r.course}</div>
                  <p className="font-canela text-[14px] md:text-[16px] leading-[1.75] text-[#F8F5F2]/85 line-clamp-6">&ldquo;{r.quote}&rdquo;</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY TRAIN */}
        <section className="bg-[#E9DED3] py-28 md:py-36">
          <div className="max-w-[1300px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16 md:mb-20">
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="w-10 h-px bg-[#B08968]" />
                <span className="text-[10px] tracking-[0.32em] uppercase text-[#161616]/70">Why Us</span>
                <span className="w-10 h-px bg-[#B08968]" />
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="font-canela font-bold uppercase text-[36px] md:text-[60px] leading-[1.05] tracking-[-0.02em] text-[#161616]"
              >
                Why train with <span className="italic font-medium text-[#B08968]">LMK Academy</span>
              </motion.h2>
              <p className="mt-6 max-w-2xl mx-auto text-[15px] leading-[1.9] text-[#161616]/75">
                Choosing where to train is one of the most important decisions in your beauty career. At LMK Academy, you're not just booking a course — you're investing in real industry knowledge, confidence and long-term success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {COURSE_BENEFITS.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: (i % 4) * 0.06 }}
                  className="bg-[#F8F5F2] p-8 md:p-10 rounded-[18px] border border-[#B08968]/15 hover:border-[#B08968]/40 transition-colors duration-500"
                >
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#B08968] mb-3">{`0${i + 1}`}</div>
                  <h3 className="font-canela font-bold uppercase text-[20px] md:text-[26px] leading-[1.15] tracking-[-0.01em] text-[#161616]">{b.title}</h3>
                  <p className="mt-4 text-[14px] md:text-[15px] leading-[1.8] text-[#161616]/70">{b.body}</p>
                  {b.bullets && (
                    <ul className="mt-4 space-y-2.5">
                      {b.bullets.map((bb, j) => (
                        <li key={j} className="flex items-start gap-3 text-[14px] text-[#161616]/75">
                          <Check size={14} className="mt-1 shrink-0 text-[#B08968]" />
                          <span>{bb}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-20 md:mt-24 pt-16 border-t border-[#B08968]/30">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="font-canela italic text-[26px] md:text-[42px] text-[#161616] max-w-3xl mx-auto leading-[1.3]"
              >
                Invest in yourself. Invest in your skills. <span className="text-[#B08968]">Invest in your independence.</span>
              </motion.p>
              <p className="mt-8 text-[11px] tracking-[0.3em] uppercase text-[#161616]/60">Small class sizes • Limited availability • Secure your space today</p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link href="/#book" data-cursor="Book" className="btn-lux btn-primary">
                  <span className="btn-fill" />
                  <span>Secure Your Space</span>
                  <ArrowUpRight size={16} />
                </Link>
                <Link href="/academy/reviews" data-cursor="Read" className="btn-lux btn-outline">
                  <span className="btn-fill" />
                  <span>Read Student Reviews</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default CoursesPage
