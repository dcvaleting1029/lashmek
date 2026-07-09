'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowLeft, Star, Quote } from 'lucide-react'
import { Cursor, useLenis, Nav, Footer, LOGO_URL } from '@/components/shell'
import { STUDENT_REVIEWS } from '@/lib/academy-reviews'

function AcademyReviewsPage() {
  useLenis()
  return (
    <>
      <Cursor />
      <div className="grain-overlay" />
      <Nav />
      <main>
        <section className="relative min-h-[70vh] flex items-end pt-32 pb-16 overflow-hidden bg-[#161616] text-[#F8F5F2]">
          <div className="gold-blob absolute top-0 -left-20 w-[500px] h-[500px] opacity-40" />
          <div className="gold-blob absolute bottom-0 right-0 w-[600px] h-[600px] opacity-30" />
          <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-10 w-full">
            <Link href="/courses" data-cursor="Back" className="inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[#F8F5F2]/70 hover:text-[#C9A88D] transition-colors mb-8">
              <ArrowLeft size={14} /> LMK Academy / Courses
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#C9A88D]" />
              <span className="text-[10px] tracking-[0.32em] uppercase text-[#C9A88D]">Student Voices • Google Reviews</span>
            </div>
            <h1 className="font-canela font-bold uppercase text-[clamp(38px,9vw,140px)] leading-[0.95] tracking-[-0.03em] max-w-5xl">
              Academy <span className="italic font-medium text-[#C9A88D]">Reviews</span>
            </h1>
            <p className="mt-8 max-w-xl text-[15px] md:text-[17px] text-[#F8F5F2]/75 leading-[1.75]">
              Real training experiences from our most recent Academy students. Every review below is verified on our Google Business Profile.
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-[#F8F5F2]">
          <div className="max-w-[1300px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {STUDENT_REVIEWS.map((r, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: (i % 2) * 0.1 }}
                  className="relative bg-white rounded-[20px] p-8 md:p-10 border border-[#C9A88D]/25 hover:border-[#C9A88D]/60 transition-colors duration-500"
                >
                  <Quote className="absolute top-6 right-6 text-[#C9A88D]/30" size={40} />
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-[#F8F5F2] flex items-center justify-center shrink-0 ring-1 ring-[#C9A88D]/30">
                      <img src={LOGO_URL} alt="LashMeK&Co." className="w-full h-full object-contain p-1.5" />
                    </div>
                    <div>
                      <div className="font-canela text-lg text-[#161616]">{r.name}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex gap-0.5">{[...Array(5)].map((_, j) => <Star key={j} size={11} fill="#C9A88D" stroke="#C9A88D" />)}</div>
                        <span className="text-[10px] tracking-[0.2em] uppercase text-[#8A8A8A]">{r.when}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#B08968] mb-4">{r.course}</div>
                  <p className="font-canela text-[15px] md:text-[17px] leading-[1.75] text-[#161616]/85">&ldquo;{r.quote}&rdquo;</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-[#E9DED3]">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#B08968]" />
              <span className="text-[10px] tracking-[0.32em] uppercase text-[#161616]/70">Your Journey Awaits</span>
              <span className="w-10 h-px bg-[#B08968]" />
            </div>
            <h2 className="font-canela font-bold uppercase text-[36px] md:text-[60px] leading-[1.05] tracking-[-0.02em] text-[#161616]">
              Become the <span className="italic font-medium text-[#B08968]">next</span> success story
            </h2>
            <p className="mt-8 max-w-xl mx-auto text-[15px] leading-[1.8] text-[#161616]/75">
              Small class sizes. Personal mentorship. Accredited certification. Join LMK Academy and start your beauty career the right way.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/courses" data-cursor="Explore" className="btn-lux btn-primary">
                <span className="btn-fill" />
                <span>Browse Courses</span>
                <ArrowUpRight size={16} />
              </Link>
              <a href="mailto:lmkacademy@outlook.com" data-cursor="Enquire" className="btn-lux btn-outline">
                <span className="btn-fill" />
                <span>Enquire</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default AcademyReviewsPage
