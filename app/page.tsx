'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

type Feature = { icon: string; title: string; desc: string; highlight?: boolean }

export default function StudyBananaLandingPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState<string | null>(null)
  const [lifetimeLeft, setLifetimeLeft] = useState(100)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user))
    fetch('/api/lifetime-slots').then(r => r.json()).then(d => setLifetimeLeft(d.slots ?? 100)).catch(() => {})
  }, [])

  async function handleCheckout(priceId: string, label: string) {
    setLoading(label)
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId, email: user?.email || null, userId: user?.id || null }),
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
    else { alert(data.error || 'Something went wrong'); setLoading(null) }
  }
  const features: Feature[] = [
    { icon: '🔒', title: 'Parental Lock', desc: 'Set a PIN and kids are locked in fullscreen — they can\'t switch apps, close the window, or get distracted.', highlight: true },
    { icon: '🎵', title: 'Focus Music', desc: '20 hand-picked ambient, jazz, and lo-fi tracks to keep you in the zone.' },
    { icon: '🤖', title: 'AI Assistant', desc: 'Ask anything. Get instant help with homework, essays, and tough concepts.' },
    { icon: '⏱️', title: 'Pomodoro Timer', desc: '25/5 focus cycles built-in. Work smarter, not longer.' },
    { icon: '📝', title: 'Notes', desc: 'A distraction-free notepad, always one click away.' },
    { icon: '📚', title: 'Kids Encyclopedia', desc: '64 topics across 8 subjects. Learn while you work.' },
  ]

  return (
    <div className="min-h-screen bg-[#fff9ec] text-[#2a241f]">

      {/* Navbar */}
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffd54f] text-base">🍌</span>
          <span className="text-base font-semibold tracking-tight">StudyBanana</span>
        </div>
        <div className="flex items-center gap-3">
          {user ? (
            <span className="text-sm text-black/50 hidden sm:block">{user.email}</span>
          ) : (
            <a href="/auth" className="text-sm text-black/50 hover:text-black transition">Sign in</a>
          )}
          <a href="#pricing" className="rounded-full bg-[#2a241f] px-5 py-2 text-sm font-medium text-white shadow-md transition hover:-translate-y-0.5">
            Get Premium
          </a>
        </div>
      </nav>

      {/* Hero */}
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-12 text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ffd54f]/60 bg-[#ffd54f]/20 px-4 py-1.5 text-sm font-medium text-[#7a5c00]">
          🍌 Free to download · Mac &amp; Windows
        </div>

        <h1 className="mx-auto max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
          Turn your computer into a{' '}
          <span className="relative inline-block">
            <span className="relative z-10">distraction-free</span>
            <span className="absolute inset-x-0 bottom-1 z-0 h-3 rounded bg-[#ffd54f]/50" />
          </span>{' '}
          study space.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">
          Music, timer, AI help, and notes — all in one immersive fullscreen app.
          No browser tabs, no notifications. Just focus.
        </p>

        {/* Download buttons */}
        <div id="download" className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="https://github.com/ssongssu37/studybanana-website/releases/download/v1.0.2/StudyBanana-1.0.0.dmg"
            className="flex items-center gap-2 rounded-full bg-[#2a241f] px-7 py-3 text-base font-medium text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download for Mac
          </a>
          <a
            href="https://github.com/ssongssu37/studybanana-website/releases/download/v1.0.2/StudyBanana.Setup.1.0.0.exe"
            className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 text-base font-medium text-[#2a241f] shadow-sm transition hover:bg-black/[0.03]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 12V6.75l6-1.32v6.57H3zM20 3v8.75h-8V4.82L20 3zM3 13h6v6.43l-6-1.29V13zm17 0v8.75l-8-1.43V13h8z"/>
            </svg>
            Download for Windows
          </a>
        </div>
        <p className="mt-3 text-sm text-black/40">Free · No account needed · Works offline</p>

        {/* Screenshot in iMac frame */}
        <div className="mt-14 flex justify-center">
          <div className="w-full max-w-3xl">
            <img src="/appleTV.png" alt="StudyBanana app on iMac" className="w-full drop-shadow-2xl" />
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-24" id="pricing">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#7a5c00]">Pricing</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Simple, honest pricing</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-black/55">Start free. Upgrade when you're ready.</p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {/* Free */}
            <div className="rounded-2xl border border-black/8 bg-white p-7 text-left shadow-sm">
              <div className="text-xs font-bold uppercase tracking-widest text-black/30 mb-3">Free</div>
              <div className="text-4xl font-bold">$0</div>
              <div className="text-sm text-black/40 mt-1 mb-6">forever</div>
              <ul className="space-y-2 text-sm text-black/60 mb-8">
                {['Clock & Notes','Pomodoro timer','Weather channel','3 free music tracks','20 AI questions/day','2 themes (Daylight Amber + Linen)','Offline access','Parental lock 🔒'].map(f=>(
                  <li key={f} className="flex gap-2"><span className="text-green-500">✓</span>{f}</li>
                ))}
              </ul>
              <a href="#download" className="block text-center rounded-full border border-black/15 py-2.5 text-sm font-medium hover:bg-black/5 transition">
                Download Free
              </a>
            </div>

            {/* Premium */}
            <div className="rounded-2xl bg-[#2a241f] text-white p-7 text-left shadow-xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ffd54f] text-[#2a241f] text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">MOST POPULAR</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Premium</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold line-through text-red-400">$10</span>
                <span className="text-4xl font-bold">$5<span className="text-lg font-normal text-white/50">/mo</span></span>
              </div>
              <div className="text-sm text-white/40 mt-1 mb-6">or <span className="line-through text-red-400">$98</span> $49/year — save $49</div>
              <ul className="space-y-2 text-sm text-white/70 mb-6">
                {['Everything in Free','AI Study Helper','20 music tracks','Kids encyclopedia','All 10 themes'].map(f=>(
                  <li key={f} className="flex gap-2"><span className="text-[#ffd54f]">✓</span>{f}</li>
                ))}
              </ul>
              <div className="flex flex-col gap-2">
                <button onClick={() => handleCheckout('price_1TFMWKCDDRCjONFZueHxhQtJ','monthly')} disabled={!!loading}
                  className="rounded-full bg-[#ffd54f] text-[#2a241f] py-2.5 text-sm font-bold hover:bg-yellow-300 transition disabled:opacity-50">
                  {loading==='monthly' ? 'Loading…' : 'Monthly — $5/mo'}
                </button>
                <button onClick={() => handleCheckout('price_1TFPBECDDRCjONFZBZNEJGow','annual')} disabled={!!loading}
                  className="rounded-full border border-white/20 py-2.5 text-sm font-medium hover:bg-white/10 transition disabled:opacity-50">
                  {loading==='annual' ? 'Loading…' : 'Annual — $49/yr'}
                </button>
              </div>
            </div>

            {/* Lifetime */}
            <div className="rounded-2xl border-2 border-[#ffd54f] bg-white p-7 text-left shadow-sm relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                🔥 Limited Time Offer
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-black/30 mb-3">Lifetime</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold line-through text-red-500">$200</span>
                <span className="text-4xl font-bold">$99</span>
              </div>
              <div className="text-sm text-black/40 mt-1 mb-6">one-time · early bird only</div>
              <ul className="space-y-2 text-sm text-black/60 mb-8">
                {['Everything in Premium','Pay once, use forever','All future updates','Priority support'].map(f=>(
                  <li key={f} className="flex gap-2"><span className="text-green-500">✓</span>{f}</li>
                ))}
              </ul>
              <button onClick={() => handleCheckout('price_1TFPBICDDRCjONFZd54Y5IQj','lifetime')} disabled={!!loading}
                className="w-full rounded-full bg-[#2a241f] text-white py-2.5 text-sm font-bold hover:bg-black/80 transition disabled:opacity-50">
                {loading==='lifetime' ? 'Loading…' : 'Get Lifetime Access'}
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#7a5c00]">Everything you need</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            One app. No distractions.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-black/55">
            StudyBanana replaces your whole desktop with a focused study environment.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className={`rounded-2xl border p-6 text-left shadow-sm transition hover:shadow-md ${
                  f.highlight
                    ? 'border-[#2a241f]/20 bg-[#2a241f] text-white'
                    : 'border-black/6 bg-white'
                }`}
              >
                <div className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl text-2xl ${
                  f.highlight ? 'bg-white/15' : 'bg-[#ffd54f]/30'
                }`}>
                  {f.icon}
                </div>
                <div className="font-semibold">{f.title}</div>
                <div className={`mt-1 text-sm leading-relaxed ${f.highlight ? 'text-white/65' : 'text-black/55'}`}>
                  {f.desc}
                </div>
                {f.highlight && (
                  <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-[#ffd54f] px-3 py-1 text-xs font-semibold text-[#2a241f]">
                    ⭐ Parent favourite
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 rounded-3xl bg-[#2a241f] px-8 py-14 text-white">
          <div className="mb-3 text-3xl">🍌</div>
          <h2 className="text-3xl font-semibold tracking-tight">Ready to focus?</h2>
          <p className="mx-auto mt-3 max-w-md text-base text-white/60">
            Download StudyBanana free and start your first focused study session today.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="https://github.com/ssongssu37/studybanana-website/releases/download/v1.0.2/StudyBanana-1.0.0.dmg" className="rounded-full bg-[#ffd54f] px-7 py-3 text-base font-semibold text-[#2a241f] transition hover:-translate-y-0.5">
              Download for Mac
            </a>
            <a href="https://github.com/ssongssu37/studybanana-website/releases/download/v1.0.2/StudyBanana.Setup.1.0.0.exe" className="rounded-full border border-white/20 px-7 py-3 text-base font-medium text-white transition hover:bg-white/10">
              Download for Windows
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/8 py-8 text-center text-sm text-black/40">
        <div className="flex items-center justify-center gap-1.5">
          <span className="text-base">🍌</span>
          <span>StudyBanana · Free forever · Made with ❤️ for focused learners</span>
        </div>
      </footer>
    </div>
  )
}
