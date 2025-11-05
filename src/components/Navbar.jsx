import { useEffect, useRef } from 'react'
import { Rocket, Star, Users } from 'lucide-react'
import gsap from 'gsap'

export default function Navbar() {
  const navRef = useRef(null)

  useEffect(() => {
    if (!navRef.current) return
    gsap.from(navRef.current, {
      y: -24,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    })
  }, [])

  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 backdrop-blur-xl bg-black/40 border border-white/10 rounded-full px-4 sm:px-6 py-3 text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
    >
      <div className="flex items-center gap-4 sm:gap-6">
        <button
          onClick={() => scrollToId('home')}
          className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide hover:text-amber-300 transition-colors"
        >
          <Rocket className="h-4 w-4 text-amber-300 group-hover:scale-110 transition-transform" />
          <span>Nova Team</span>
        </button>
        <span className="h-5 w-px bg-white/10" />
        <button onClick={() => scrollToId('goals')} className="text-sm hover:text-amber-300 transition-colors">Goals</button>
        <button onClick={() => scrollToId('projects')} className="text-sm hover:text-amber-300 transition-colors">Projects</button>
        <button onClick={() => scrollToId('team')} className="text-sm hover:text-amber-300 transition-colors inline-flex items-center gap-1">
          <Users className="h-4 w-4" /> Team
        </button>
        <button onClick={() => scrollToId('contact')} className="text-sm hover:text-amber-300 transition-colors inline-flex items-center gap-1">
          <Star className="h-4 w-4" /> Contact
        </button>
      </div>
    </nav>
  )
}
