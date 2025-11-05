import { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const containerRef = useRef(null)
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from(headlineRef.current, { y: 20, opacity: 0, duration: 0.8 })
      .from(subRef.current, { y: 20, opacity: 0, duration: 0.8 }, '-=0.5')
      .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.8 }, '-=0.6')

    return () => tl.kill()
  }, [])

  return (
    <section id="home" ref={containerRef} className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b0c] text-white flex items-center">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-2 gap-8 px-6 md:px-10">
        <div className="py-24 md:py-32">
          <h1 ref={headlineRef} className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            A modern, luxurious and minimal collective for bold ideas
          </h1>
          <p ref={subRef} className="mt-6 text-white/70 text-lg md:text-xl max-w-xl">
            We craft futuristic experiences, merging design and engineering. Explore our goals, see what we’re building, and meet the people behind the magic.
          </p>
          <div ref={ctaRef} className="mt-10 flex items-center gap-4">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-3 text-sm font-semibold tracking-wide hover:bg-amber-300 transition-colors">
              View Projects
            </a>
            <a href="#team" className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold tracking-wide hover:border-amber-300 hover:text-amber-300 transition-colors">
              Meet the Team
            </a>
          </div>
        </div>

        {/* 3D Spline Scene */}
        <div className="relative h-[50vh] md:h-[70vh] lg:h-[80vh] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
