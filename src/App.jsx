import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Team from './components/Team'

function App() {
  return (
    <div className="bg-[#0b0b0c] min-h-screen antialiased selection:bg-amber-300 selection:text-black">
      <Navbar />
      <Hero />
      <section id="goals" className="bg-[#0b0b0c] text-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-widest text-white/60">Vision</p>
              <h3 className="mt-2 text-2xl font-semibold">Build timeless experiences</h3>
              <p className="mt-3 text-white/70">We aim for clarity, beauty, and durability — products that feel inevitable the moment you use them.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-widest text-white/60">Craft</p>
              <h3 className="mt-2 text-2xl font-semibold">Design with intention</h3>
              <p className="mt-3 text-white/70">Every interaction is considered. Every detail serves a purpose. Minimal, but never bare.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-widest text-white/60">Impact</p>
              <h3 className="mt-2 text-2xl font-semibold">Deliver measurable value</h3>
              <p className="mt-3 text-white/70">Elegant interfaces meet rigorous engineering to move the needle for teams and users.</p>
            </div>
          </div>
        </div>
      </section>
      <Projects />
      <Team />
      <footer id="contact" className="bg-[#0b0b0c] border-t border-white/10 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-semibold">Nova Team</h4>
            <p className="text-white/60">Futuristic, digital, minimalist</p>
          </div>
          <a
            href="mailto:hello@novateam.studio"
            className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-3 text-sm font-semibold tracking-wide hover:bg-amber-300 transition-colors"
          >
            Start a conversation
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
