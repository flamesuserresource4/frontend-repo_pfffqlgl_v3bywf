import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Linkedin, Mail } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const people = [
  { name: 'Ava Winters', role: 'Creative Director', color: 'from-amber-400 to-amber-600' },
  { name: 'Noah Orion', role: 'Lead Engineer', color: 'from-indigo-400 to-indigo-600' },
  { name: 'Mila Reyes', role: 'Product Designer', color: 'from-rose-400 to-rose-600' },
  { name: 'Leo Archer', role: 'ML Researcher', color: 'from-emerald-400 to-emerald-600' },
]

function initials(name) {
  return name.split(' ').map(p => p[0]).slice(0, 2).join('')
}

export default function Team() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const cards = el.querySelectorAll('.team-card')
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
    <section id="team" ref={sectionRef} className="relative bg-[#0b0b0c] text-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 md:mb-16">
          <p className="text-amber-300/80 tracking-widest text-xs uppercase">People</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold">Meet the Team</h2>
          <p className="mt-3 max-w-2xl text-white/70">A compact, world-class team blending strategy, design, and engineering into experiences that feel effortless.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {people.map((p, i) => (
            <motion.div whileHover={{ y: -6 }} key={i} className="team-card group rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className={`h-16 w-16 rounded-xl bg-gradient-to-br ${p.color} text-black flex items-center justify-center font-semibold text-xl`}>
                {initials(p.name)}
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">{p.name}</h3>
              <p className="text-white/70">{p.role}</p>
              <div className="mt-6 flex items-center gap-3 text-sm">
                <a href="#" className="inline-flex items-center gap-1 text-white/80 hover:text-amber-300 transition-colors">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a href="#" className="inline-flex items-center gap-1 text-white/80 hover:text-amber-300 transition-colors">
                  <Mail className="h-4 w-4" /> Email
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
