'use client'

import { useEffect, useState } from 'react'
import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, ArrowLeft, Clock, Award, Users } from 'lucide-react'
import { Cursor, useLenis, Loader, Nav, Footer, SplitReveal } from '@/components/shell'
import { COURSES } from '@/lib/courses'

function CourseDetailPage() {
  const params = useParams()
  const slug = params?.slug
  const [loaded, setLoaded] = useState(false)
  useLenis()
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 1600); return () => clearTimeout(t) }, [])

  const course = COURSES.find(c => c.slug === slug)
  if (!course) {
    return (
      <>
        <Cursor />
        <Nav variant="solid" />
        <div className="min-h-screen flex items-center justify-center text-center px-6">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#B08968]">404</div>
            <h1 className="mt-4 font-canela font-bold uppercase text-4xl md:text-6xl">Course not found</h1>
            <Link href="/courses" className="mt-8 inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase border-b border-[#161616] pb-2">
              <ArrowLeft size={14} /> Back to courses
            </Link>
          </div>
        </div>
      </>
    )
  }

  const others = COURSES.filter(c => c.slug !== course.slug).slice(0, 3)

  return (
    <>
      <Loader done={loaded} />
      <Cursor />
      <div className="grain-overlay" />
      <Nav />
      <main>
        {/* HERO */}
        <section className="relative min-h-[92vh] flex items-end pt-32 pb-16 overflow-hidden">
          <img src={course.img} alt={course.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#161616]/30 via-[#161616]/30 to-[#161616]/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#161616]/60 to-transparent" />
          <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-10 w-full text-[#F8F5F2]">
            <Link href="/courses" data-cursor="Back" className="inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[#F8F5F2]/80 hover:text-[#C9A88D] transition-colors mb-8">
              <ArrowLeft size={14} /> LMK Academy / Courses
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] tracking-[0.32em] uppercase text-[#C9A88D]">{course.level}</span>
              <span className="w-10 h-px bg-[#C9A88D]" />
              <span className="text-[10px] tracking-[0.32em] uppercase text-[#F8F5F2]/70">{course.subtitle}</span>
            </div>
            <h1 className="font-canela font-bold uppercase text-[clamp(40px,8.5vw,140px)] leading-[0.95] tracking-[-0.025em] max-w-5xl">
              <SplitReveal delay={0.3}>{course.title}</SplitReveal>
            </h1>
            <p className="mt-8 max-w-xl text-[15px] md:text-[17px] text-[#F8F5F2]/80 leading-[1.7]">{course.short}</p>

            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-[#C9A88D]" />
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#F8F5F2]/55">Duration</div>
                  <div className="font-canela text-lg">{course.duration}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award size={16} className="text-[#C9A88D]" />
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#F8F5F2]/55">Certification</div>
                  <div className="font-canela text-lg">Accredited</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users size={16} className="text-[#C9A88D]" />
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#F8F5F2]/55">Class Size</div>
                  <div className="font-canela text-lg">Intimate</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#F8F5F2]/55">Investment</div>
                <div className="font-canela text-3xl text-[#C9A88D]">£{course.price}{course.save && <span className="ml-3 text-xs align-middle tracking-[0.2em] uppercase text-[#F8F5F2]/60">Save £{course.save}</span>}</div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#book" data-cursor="Enrol" className="btn-lux btn-light">
                <span className="btn-fill" />
                <span>Enrol now</span>
                <ArrowUpRight size={16} />
              </a>
              <a href="mailto:hello@lashmek.co" data-cursor="Enquire" className="btn-lux btn-light !border-[#C9A88D] !text-[#C9A88D]">
                <span className="btn-fill" />
                <span>Enquire</span>
              </a>
            </div>
          </div>
        </section>

        {/* OVERVIEW + DETAILS */}
        <section className="py-24 md:py-32 bg-[#F8F5F2]">
          <div className="max-w-[1300px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-px bg-[#C9A88D]" />
                <span className="text-[10px] tracking-[0.32em] uppercase text-[#8A8A8A]">Overview</span>
              </div>
              <h2 className="font-canela font-bold uppercase text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.02em] text-[#161616]">
                The <span className="italic font-medium text-[#B08968]">programme</span>
              </h2>
              <p className="mt-8 text-[15px] md:text-[17px] leading-[1.9] text-[#161616]/75 max-w-2xl">{course.overview}</p>

              <div className="mt-14">
                <div className="text-[10px] tracking-[0.32em] uppercase text-[#B08968] mb-5">What you'll learn</div>
                <ul className="space-y-3">
                  {course.learn.map((l, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.04 }}
                      className="flex items-start gap-4 py-3 border-b border-[#161616]/10"
                    >
                      <span className="font-canela text-[#B08968] text-sm w-6">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-[15px] md:text-[16px] text-[#161616]/85">{l}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <div className="bg-[#161616] text-[#F8F5F2] rounded-[20px] p-8 md:p-10">
                <div className="text-[10px] tracking-[0.32em] uppercase text-[#C9A88D] mb-3">Included</div>
                <div className="font-canela font-bold uppercase text-2xl md:text-3xl mb-6">What's inside</div>
                <ul className="space-y-4">
                  {course.includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] md:text-[15px] text-[#F8F5F2]/85 leading-[1.6]">
                      <Check size={16} className="mt-1 shrink-0 text-[#C9A88D]" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-[#C9A88D]/20 flex items-end justify-between">
                  <div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-[#F8F5F2]/55">Total Investment</div>
                    <div className="font-canela text-4xl text-[#C9A88D] mt-1">£{course.price}</div>
                    {course.save && <div className="text-[10px] tracking-[0.2em] uppercase text-[#C9A88D]/80 mt-1">Save £{course.save} — Bundle saving</div>}
                  </div>
                  <a href="#book" data-cursor="Enrol" className="btn-lux btn-light !py-3 !px-5 !text-[10px] !border-[#C9A88D] !text-[#C9A88D]">
                    <span className="btn-fill" />
                    <span>Enrol</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* BOOK CTA */}
        <section id="book" className="py-24 md:py-32 bg-[#E9DED3]">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#B08968]" />
              <span className="text-[10px] tracking-[0.32em] uppercase text-[#161616]/70">Secure Your Space</span>
              <span className="w-10 h-px bg-[#B08968]" />
            </div>
            <h2 className="font-canela font-bold uppercase text-[36px] md:text-[60px] leading-[1.05] tracking-[-0.02em] text-[#161616]">
              Your future <span className="italic font-medium text-[#B08968]">starts here</span>
            </h2>
            <p className="mt-8 max-w-xl mx-auto text-[15px] leading-[1.8] text-[#161616]/75">
              Small class sizes. Limited availability. Secure your space with a deposit today and begin your journey with LMK Academy.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href="mailto:hello@lashmek.co?subject=Course Enquiry" data-cursor="Book" className="btn-lux btn-primary">
                <span className="btn-fill" />
                <span>Reserve with Deposit</span>
                <ArrowUpRight size={16} />
              </a>
              <a href="mailto:hello@lashmek.co" data-cursor="Enquire" className="btn-lux btn-outline">
                <span className="btn-fill" />
                <span>Enquire</span>
              </a>
            </div>
          </div>
        </section>

        {/* OTHER COURSES */}
        <section className="py-24 md:py-32 bg-[#F8F5F2]">
          <div className="max-w-[1500px] mx-auto px-6 md:px-10">
            <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-px bg-[#C9A88D]" />
                  <span className="text-[10px] tracking-[0.32em] uppercase text-[#8A8A8A]">Continue</span>
                </div>
                <h2 className="font-canela font-bold uppercase text-[32px] md:text-[48px] leading-[1.05] tracking-[-0.02em] text-[#161616]">
                  Other <span className="italic font-medium text-[#B08968]">courses</span>
                </h2>
              </div>
              <Link href="/courses" data-cursor="Explore" className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase border-b border-[#161616] pb-2">
                View all <ArrowUpRight size={14} />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {others.map((c) => (
                <Link key={c.slug} href={`/courses/${c.slug}`} data-cursor="View" className="group block">
                  <div className="relative aspect-[4/5] rounded-[16px] overflow-hidden">
                    <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-5 left-5 text-[10px] tracking-[0.3em] uppercase text-[#C9A88D]">{c.level}</div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex items-end justify-between">
                      <div>
                        <h3 className="font-canela font-bold uppercase text-xl md:text-2xl leading-tight">{c.title}</h3>
                        <div className="mt-1 font-canela text-lg text-[#C9A88D]">£{c.price}</div>
                      </div>
                      <div className="w-11 h-11 rounded-full border border-white/60 flex items-center justify-center group-hover:bg-[#C9A88D] group-hover:border-[#C9A88D] transition-all duration-500">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default CourseDetailPage
