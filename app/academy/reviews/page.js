'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowLeft, Star, Quote } from 'lucide-react'
import { Cursor, useLenis, Nav, Footer, LOGO_URL } from '@/components/shell'

const STUDENT_REVIEWS = [
  {
    name: 'Amy Wallace',
    course: 'Brow Lamination, Wax & Tint',
    when: '2 months ago',
    quote: 'Done my brow lamination, wax and tint training course in the academy today with Kirima, she was amazing and explained everything so well. She was extremely supportive and happy to answer all the questions I had and I now feel more confident in starting this new adventure. The starter kit I got along with doing the course today is great and has everything I need to get me going. Noora was in helping today and she was also brilliant. I’m so happy I chose the lashmek&co academy to do my training and I would highly recommend Kirima to anyone who asks — cannot thank you enough xx'
  },
  {
    name: 'Louise Swan',
    course: 'Brow Wax, Tint & Lamination',
    when: '2 months ago',
    quote: 'Wow wow wow! I completed a brow tint, wax & lamination course with the academy — the support and comfort you feel while learning is amazing! Left feeling proper confident & supported. Cannot recommend enough, invest in yourself here!!!'
  },
  {
    name: 'Trisha Imonitanure',
    course: 'Classic Lash Extensions',
    when: '2 weeks ago',
    quote: 'I completed my classic lash course with Kirima in the salon a few days ago. The course was amazing and easy to understand with great techniques taught! I would recommend coming here to complete training or to receive services as Kirima is lovely.'
  },
  {
    name: 'Sarah Dailly',
    course: 'Lash Extensions',
    when: '1 week ago',
    quote: 'Had a great day training in lash extensions last week. Feel completely supported in my new journey! All the little extra touches on the training day made such a difference. Would recommend training 1000%'
  }
]

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
              <a href="mailto:kirimaa@icloud.com" data-cursor="Enquire" className="btn-lux btn-outline">
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
