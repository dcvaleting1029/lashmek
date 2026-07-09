'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowLeft, X, Clock, Heart, Sparkles } from 'lucide-react'
import { Cursor, useLenis, Loader, Nav, Footer, SplitReveal } from '@/components/shell'
import { TREATMENTS_DATA, BOOKING_URL } from '@/lib/treatments'

function TreatmentPage() {
  const params = useParams()
  const slug = params?.slug
  const [lightbox, setLightbox] = useState(null)
  useLenis()

  const treatment = TREATMENTS_DATA.find(t => t.slug === slug)
  if (!treatment) {
    return (
      <>
        <Cursor />
        <Nav variant="solid" />
        <div className="min-h-screen flex items-center justify-center text-center px-6">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#B08968]">404</div>
            <h1 className="mt-4 font-canela font-bold uppercase text-4xl md:text-6xl">Treatment not found</h1>
            <Link href="/#treatments" className="mt-8 inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase border-b border-[#161616] pb-2">
              <ArrowLeft size={14} /> Back to treatments
            </Link>
          </div>
        </div>
      </>
    )
  }

  const others = TREATMENTS_DATA.filter(t => t.slug !== treatment.slug)

  return (
    <>
      <Cursor />
      <div className="grain-overlay" />
      <Nav />
      <main>
        {/* HERO */}
        <section className="relative min-h-[92vh] flex items-end pt-32 pb-16 overflow-hidden">
          <img src={treatment.cover} alt={treatment.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#161616]/30 via-[#161616]/35 to-[#161616]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#161616]/55 to-transparent" />
          <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-10 w-full text-[#F8F5F2]">
            <Link href="/#treatments" data-cursor="Back" className="inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-[#F8F5F2]/80 hover:text-[#C9A88D] transition-colors mb-8">
              <ArrowLeft size={14} /> Treatments
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] tracking-[0.32em] uppercase text-[#C9A88D]">{treatment.n}</span>
              <span className="w-10 h-px bg-[#C9A88D]" />
              <span className="text-[10px] tracking-[0.32em] uppercase text-[#F8F5F2]/70">LashMeK&Co. Beauty Clinic</span>
            </div>
            <h1 className="font-canela font-bold uppercase text-[clamp(46px,11vw,180px)] leading-[0.92] tracking-[-0.03em] max-w-5xl">
              {treatment.title}
            </h1>
            <p className="mt-8 max-w-xl text-[15px] md:text-[18px] text-[#F8F5F2]/85 leading-[1.7]">{treatment.tagline}</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-cursor="Book" className="btn-lux btn-light">
                <span className="btn-fill" />
                <span>Book on Fresha</span>
                <ArrowUpRight size={16} />
              </a>
              <a href="mailto:lmkacademy@outlook.com" data-cursor="Enquire" className="btn-lux btn-light !border-[#C9A88D] !text-[#C9A88D]">
                <span className="btn-fill" />
                <span>Enquire</span>
              </a>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="py-24 md:py-32 bg-[#F8F5F2]">
          <div className="max-w-[1300px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-px bg-[#C9A88D]" />
                <span className="text-[10px] tracking-[0.32em] uppercase text-[#8A8A8A]">The Treatment</span>
              </div>
              <h2 className="font-canela font-bold uppercase text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.02em] text-[#161616]">
                Considered. <span className="italic font-medium text-[#B08968]">Refined.</span>
              </h2>
              <p className="mt-8 text-[15px] md:text-[17px] leading-[1.9] text-[#161616]/75 max-w-2xl">{treatment.overview}</p>
            </div>
            <aside className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <div className="bg-[#161616] text-[#F8F5F2] rounded-[20px] p-8 md:p-10">
                <div className="text-[10px] tracking-[0.32em] uppercase text-[#C9A88D] mb-3">At a Glance</div>
                <div className="font-canela font-bold uppercase text-2xl md:text-3xl mb-6">{treatment.title}</div>
                <div className="space-y-5 text-[14px] md:text-[15px]">
                  <div className="flex items-start gap-4">
                    <Clock size={16} className="mt-1 shrink-0 text-[#C9A88D]" />
                    <div>
                      <div className="text-[10px] tracking-[0.3em] uppercase text-[#F8F5F2]/55">Duration</div>
                      <div className="mt-1">{treatment.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Heart size={16} className="mt-1 shrink-0 text-[#C9A88D]" />
                    <div>
                      <div className="text-[10px] tracking-[0.3em] uppercase text-[#F8F5F2]/55">Best For</div>
                      <div className="mt-1">{treatment.bestFor}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Sparkles size={16} className="mt-1 shrink-0 text-[#C9A88D]" />
                    <div>
                      <div className="text-[10px] tracking-[0.3em] uppercase text-[#F8F5F2]/55">Aftercare</div>
                      <ul className="mt-2 space-y-1.5 text-[13px] text-[#F8F5F2]/80">
                        {treatment.aftercare.map((a, i) => (
                          <li key={i}>— {a}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-cursor="Book" className="btn-lux btn-light mt-8 w-full justify-center !border-[#C9A88D] !text-[#C9A88D]">
                  <span className="btn-fill" />
                  <span>Book on Fresha</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* GALLERY */}
        <section className="py-20 md:py-28 bg-[#F8F5F2]">
          <div className="max-w-[1500px] mx-auto px-6 md:px-10">
            <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-px bg-[#C9A88D]" />
                  <span className="text-[10px] tracking-[0.32em] uppercase text-[#8A8A8A]">Gallery</span>
                </div>
                <h2 className="font-canela font-bold uppercase text-[36px] md:text-[64px] leading-[1.02] tracking-[-0.02em] text-[#161616]">
                  Real <span className="italic font-medium text-[#B08968]">results</span>
                </h2>
              </div>
              <p className="text-[14px] text-[#161616]/60 max-w-xs">Every result, handcrafted in studio by LashMeK&Co.</p>
            </div>
            {treatment.gallery.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[260px] gap-3 md:gap-4">
                {treatment.gallery.map((src, i) => {
                  const spans = ['', 'row-span-2', '', 'col-span-2', '', 'row-span-2', 'col-span-2', '']
                  const span = spans[i % spans.length]
                  return (
                    <motion.button
                      key={i}
                      type="button"
                      onClick={() => setLightbox(i)}
                      data-cursor="View"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.7, delay: (i % 4) * 0.05 }}
                      className={`relative overflow-hidden rounded-[14px] group ${span}`}
                    >
                      <img src={src} alt={`${treatment.title} result ${i + 1}`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                      <div className="absolute inset-0 bg-[#161616]/0 group-hover:bg-[#161616]/30 transition-colors duration-500" />
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#F8F5F2]/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <ArrowUpRight size={14} className="text-[#161616]" />
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            ) : (
              <div className="py-20 text-center text-[#161616]/50 text-[13px] tracking-[0.25em] uppercase border border-dashed border-[#C9A88D]/40 rounded-[18px]">Gallery coming soon</div>
            )}
          </div>
        </section>

        {/* LIGHTBOX */}
        <AnimatePresence>
          {lightbox !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-[150] bg-[#161616]/95 backdrop-blur-sm flex items-center justify-center p-6"
              onClick={() => setLightbox(null)}
              data-cursor="Close"
            >
              <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 w-12 h-12 rounded-full border border-[#C9A88D]/60 text-[#F8F5F2] flex items-center justify-center hover:bg-[#C9A88D] hover:text-[#161616] transition-colors" aria-label="Close">
                <X size={18} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + treatment.gallery.length) % treatment.gallery.length) }} className="absolute left-4 md:left-10 w-12 h-12 rounded-full border border-[#C9A88D]/40 text-[#F8F5F2] flex items-center justify-center hover:bg-[#C9A88D] hover:text-[#161616] transition-colors">
                <ArrowLeft size={18} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % treatment.gallery.length) }} className="absolute right-4 md:right-10 w-12 h-12 rounded-full border border-[#C9A88D]/40 text-[#F8F5F2] flex items-center justify-center hover:bg-[#C9A88D] hover:text-[#161616] transition-colors">
                <ArrowLeft size={18} className="rotate-180" />
              </button>
              <motion.img
                key={lightbox}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={treatment.gallery[lightbox]}
                alt={`${treatment.title} ${lightbox + 1}`}
                onClick={(e) => e.stopPropagation()}
                className="max-w-[92vw] max-h-[88vh] object-contain rounded-[10px] shadow-2xl"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-[#F8F5F2]/70">{lightbox + 1} / {treatment.gallery.length}</div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BOOK CTA */}
        <section className="py-24 md:py-32 bg-[#E9DED3]">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#B08968]" />
              <span className="text-[10px] tracking-[0.32em] uppercase text-[#161616]/70">Reserve</span>
              <span className="w-10 h-px bg-[#B08968]" />
            </div>
            <h2 className="font-canela font-bold uppercase text-[36px] md:text-[60px] leading-[1.05] tracking-[-0.02em] text-[#161616]">
              Ready for <span className="italic font-medium text-[#B08968]">{treatment.title}</span>?
            </h2>
            <p className="mt-8 max-w-xl mx-auto text-[15px] leading-[1.8] text-[#161616]/75">
              Book your appointment online via Fresha or send us a message for a personal consultation.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-cursor="Book" className="btn-lux btn-primary">
                <span className="btn-fill" />
                <span>Book on Fresha</span>
                <ArrowUpRight size={16} />
              </a>
              <a href="mailto:lmkacademy@outlook.com" data-cursor="Enquire" className="btn-lux btn-outline">
                <span className="btn-fill" />
                <span>Enquire</span>
              </a>
            </div>
          </div>
        </section>

        {/* OTHER TREATMENTS */}
        <section className="py-24 md:py-32 bg-[#F8F5F2]">
          <div className="max-w-[1500px] mx-auto px-6 md:px-10">
            <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-px bg-[#C9A88D]" />
                  <span className="text-[10px] tracking-[0.32em] uppercase text-[#8A8A8A]">Continue</span>
                </div>
                <h2 className="font-canela font-bold uppercase text-[32px] md:text-[48px] leading-[1.05] tracking-[-0.02em] text-[#161616]">
                  Other <span className="italic font-medium text-[#B08968]">treatments</span>
                </h2>
              </div>
              <Link href="/#treatments" data-cursor="Explore" className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase border-b border-[#161616] pb-2">
                View all <ArrowUpRight size={14} />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {others.map((c) => (
                <Link key={c.slug} href={`/treatments/${c.slug}`} data-cursor="View" className="group block">
                  <div className="relative aspect-[4/5] rounded-[16px] overflow-hidden">
                    <img src={c.cover} alt={c.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-5 left-5 text-[10px] tracking-[0.3em] uppercase text-[#C9A88D]">{c.n}</div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex items-end justify-between">
                      <div>
                        <h3 className="font-canela font-bold uppercase text-xl md:text-2xl leading-tight">{c.title}</h3>
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

export default TreatmentPage
