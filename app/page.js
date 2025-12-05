import Header from '../components/Header'
import LivePlayer from '../components/LivePlayer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050009] text-white">
      <Header />
      <div className="max-w-4xl mx-auto p-6">
        <LivePlayer />
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-pink-400">Welcome to the Krave Zone</h2>
          <p className="mt-2 text-white/80">Streaming non-stop vibes, culture, and energy.</p>
        </section>
      </div>
    </main>
  )
}
