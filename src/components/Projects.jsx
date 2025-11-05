import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Aurora OS',
    tag: 'AI + Systems',
    desc: 'An intelligent runtime that adapts interfaces to user intent in real-time.',
    accent: 'from-amber-300/20 to-amber-600/10',
  },
  {
    title: 'Nebula Cloud',
    tag: 'Platform',
    desc: 'Private, privacy-first cloud orchestration for modern product teams.',
    accent: 'from-indigo-300/20 to-indigo-600/10',
  },
  {
    title: 'Quasar ID',
    tag: 'Identity',
    desc: 'Frictionless auth with passkeys and zero-knowledge provenance.
',
    accent: 'from-emerald-300/20 to-emerald-600/10',
  },
]

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const cards = el.querySelectorAll('.project-card')
    gsap.from(cards, {
      y: 24,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
      },
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="relative bg-[#0b0b0c] text-white py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-40 w-[70%] bg-gradient-to-b from-white/10 to-transparent" />
      </div>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 md:mb-16">
          <p className="text-amber-300/80 tracking-widest text-xs uppercase">Our Work</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold">Signature Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <motion.article
              whileHover={{ y: -6 }}
              key={i}
              className={`project-card relative rounded-2xl border border-white/10 bg-gradient-to-br ${p.accent} p-6 md:p-8 overflow-hidden`}
            >
              <div className="absolute right-4 top-4 h-24 w-24 rounded-full bg-white/5 blur-2xl" />
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-white/60">{p.tag}</span>
                <span className="text-sm text-amber-300">0{i + 1}</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 text-white/70 leading-relaxed">
                {p.desc}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-amber-300">
                Explore <span aria-hidden>→</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
