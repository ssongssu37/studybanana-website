'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import LogoIcon from '@/components/LogoIcon'

type Feature = { icon: string; title: string; desc: string; highlight?: boolean }

const MAC_URL = 'https://github.com/ssongssu37/studybanana-website/releases/download/v1.2.0/StudyBanana-1.0.9.dmg'
const WIN_URL = 'https://github.com/ssongssu37/studybanana-website/releases/download/v1.2.0/StudyBanana-1.0.9-win.zip'

export default function StudyBananaLandingPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState<string | null>(null)
  const [billingAnnual, setBillingAnnual] = useState(false)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user))
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
    {
      icon: '🔒',
      title: 'Parental Lock',
      desc: 'You set a PIN — they stay locked in. No tab switching, no sneaking onto YouTube, no "I was just checking something." They\'re in study mode until you let them out.',
      highlight: true,
    },
    {
      icon: '🎵',
      title: 'Focus Music',
      desc: '20 hand-picked ambient, jazz, and lo-fi tracks. The right background sound helps kids stay calm and focused — no ads, no rabbit holes, no distractions.',
    },
    {
      icon: '🤖',
      title: 'AI Homework Help',
      desc: 'Stuck on a problem at 9pm? The built-in AI explains concepts clearly and gets them unstuck fast — so you don\'t have to drop everything and become a math tutor.',
    },
    {
      icon: '⏱️',
      title: 'Pomodoro Timer',
      desc: '25 minutes of focus, then a short break. The science-backed rhythm that actually gets homework done — without the meltdowns that come from staring at a screen too long.',
    },
    {
      icon: '📝',
      title: 'Notes',
      desc: 'A clean, distraction-free notepad always one click away. No browser, no temptation — just them and their thoughts.',
    },
    {
      icon: '🌤️',
      title: 'Weather & Clock',
      desc: 'Live time and weather on screen — so they always know if they have enough time to finish before dinner. No excuse to open a browser to check.',
    },
  ]

  return (
    <div className="min-h-screen bg-[#fff9ec] text-[#2a241f]">

      {/* Navbar */}
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <LogoIcon size={36} />
          <span className="text-base font-semibold tracking-tight">StudyBanana</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="/guide" className="text-sm text-black/50 hover:text-black transition hidden sm:block">How to Immerse</a>
          <a href="/lp" className="text-sm text-black/50 hover:text-black transition hidden sm:block">The Science</a>
          {user ? (
            <span className="text-sm text-black/50 hidden sm:block">{user.email}</span>
          ) : (
            <a href="/auth" className="rounded-full border border-[#2a241f] px-5 py-2 text-sm font-medium text-[#2a241f] transition hover:bg-[#2a241f] hover:text-white hidden sm:block">Sign in</a>
          )}
          <a href="#pricing" className="rounded-full bg-[#2a241f] px-5 py-2 text-sm font-medium text-white shadow-md transition hover:-translate-y-0.5">
            Get Premium
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6 pb-24 pt-12 text-center">

        {/* Hero */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ffd54f]/60 bg-[#ffd54f]/20 px-4 py-1.5 text-sm font-medium text-[#7a5c00]">
          🍌 Free to download · Mac &amp; Windows
        </div>

        <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          The same brain that learned to scroll.{' '}
          <span className="relative inline-block">
            <span className="relative z-10">Can learn to stay.</span>
            <span className="absolute inset-x-0 bottom-1 z-0 h-3 rounded bg-[#ffd54f]/60" />
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">
          StudyBanana is designed for depth, not distraction. One screen. Kids who focus. Families who breathe.
        </p>

        {/* Download buttons */}
        <div id="download" className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`/oto?platform=mac`}
            className="flex items-center gap-2 rounded-full bg-[#2a241f] px-7 py-3 text-base font-medium text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download for Mac
          </a>
          <a
            href={`/oto?platform=windows`}
            className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3 text-base font-medium text-[#2a241f] shadow-sm transition hover:bg-black/[0.03]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 12V6.75l6-1.32v6.57H3zM20 3v8.75h-8V4.82L20 3zM3 13h6v6.43l-6-1.29V13zm17 0v8.75l-8-1.43V13h8z"/>
            </svg>
            Download for Windows (.zip)
          </a>
        </div>

        {/* Credibility proof */}
        <div className="mt-5 flex flex-col items-center gap-2">
          <div className="flex items-center gap-1 text-[#f5a623]">
            {'★★★★★'.split('').map((s, i) => <span key={i} className="text-lg">{s}</span>)}
          </div>
          <p className="text-sm text-black/50 italic max-w-sm">
            "My son actually sat down and finished his homework for the first time in months."
          </p>
          <p className="text-xs text-black/35 font-medium">— Parent review · Trusted by families worldwide · Free · No account needed</p>
        </div>

        {/* Screenshot */}
        <div className="mt-14 flex justify-center">
          <div className="w-full max-w-3xl">
            <img src="/appleTV.png" alt="StudyBanana app on iMac" className="w-full drop-shadow-2xl" />
          </div>
        </div>

        {/* Pricing — BEFORE features */}
        <div className="mt-24" id="pricing">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#7a5c00]">Pricing</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Your evenings back. Starting at $0.</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-black/55">Start free. Try premium free for 7 days — no charge until after the trial.</p>

          {/* Monthly / Annual toggle */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!billingAnnual ? 'text-[#2a241f]' : 'text-black/40'}`}>Monthly</span>
            <button
              onClick={() => setBillingAnnual(v => !v)}
              className={`relative h-7 w-12 rounded-full transition-colors ${billingAnnual ? 'bg-[#2a241f]' : 'bg-black/20'}`}
            >
              <span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${billingAnnual ? 'left-6' : 'left-1'}`} />
            </button>
            <span className={`text-sm font-medium ${billingAnnual ? 'text-[#2a241f]' : 'text-black/40'}`}>
              Annual <span className="ml-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700">Save $11</span>
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {/* Free */}
            <div className="rounded-2xl border border-black/8 bg-white p-7 text-left shadow-sm">
              <div className="text-xs font-bold uppercase tracking-widest text-black/30 mb-3">Free</div>
              <div className="text-4xl font-bold">$0</div>
              <div className="text-sm text-black/40 mt-1 mb-6">forever</div>
              <ul className="space-y-2 text-sm text-black/60 mb-8">
                {['Clock, Notes & Weather','Pomodoro timer','3 free music tracks','20 AI questions/day','Parental lock 🔒','2 themes','Offline access'].map(f => (
                  <li key={f} className="flex gap-2"><span className="text-green-500">✓</span>{f}</li>
                ))}
              </ul>
              <a href="/oto?platform=mac" className="block text-center rounded-full border border-black/15 py-2.5 text-sm font-medium hover:bg-black/5 transition">
                Download Free
              </a>
            </div>

            {/* Premium */}
            <div className="rounded-2xl bg-[#2a241f] text-white p-7 text-left shadow-xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ffd54f] text-[#2a241f] text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">MOST POPULAR</div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Premium</div>

              {billingAnnual ? (
                <>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold line-through text-red-400 opacity-70">$98</span>
                    <span className="text-4xl font-bold">$49<span className="text-lg font-normal text-white/50">/yr</span></span>
                  </div>
                  <div className="text-sm text-white/40 mt-1 mb-2">that's $4.08/month</div>
                </>
              ) : (
                <>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold line-through text-red-400 opacity-70">$10</span>
                    <span className="text-4xl font-bold">$5<span className="text-lg font-normal text-white/50">/mo</span></span>
                  </div>
                  <div className="text-sm text-white/40 mt-1 mb-2">or switch to annual &amp; save $11</div>
                </>
              )}

              <div className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-[#ffd54f]">
                ✦ 7-day free trial — cancel anytime
              </div>

              <ul className="space-y-2 text-sm text-white/70 mb-6">
                {['Everything in Free','Unlimited AI questions','All 20 music tracks','All 10 themes','Kids encyclopedia'].map(f => (
                  <li key={f} className="flex gap-2"><span className="text-[#ffd54f]">✓</span>{f}</li>
                ))}
              </ul>

              <button
                onClick={() => handleCheckout(
                  billingAnnual ? 'price_1TFPBECDDRCjONFZBZNEJGow' : 'price_1TFMWKCDDRCjONFZueHxhQtJ',
                  billingAnnual ? 'annual' : 'monthly'
                )}
                disabled={!!loading}
                className="w-full rounded-full bg-[#ffd54f] text-[#2a241f] py-3 text-sm font-bold hover:bg-yellow-300 transition disabled:opacity-50"
              >
                {loading === 'monthly' || loading === 'annual' ? 'Loading…' : 'Start Free 7-Day Trial'}
              </button>
              <p className="mt-2 text-center text-xs text-white/30">No charge for 7 days. Cancel anytime.</p>
            </div>

            {/* Lifetime */}
            <div className="rounded-2xl border-2 border-[#ffd54f] bg-white p-7 text-left shadow-sm relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                🔥 Limited Time Offer
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-black/30 mb-3">Lifetime</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold line-through text-red-500 opacity-70">$200</span>
                <span className="text-4xl font-bold">$99</span>
              </div>
              <div className="text-sm text-black/40 mt-1 mb-6">one-time · pay once, own forever</div>
              <ul className="space-y-2 text-sm text-black/60 mb-8">
                {['Everything in Premium','Pay once, use forever','All future updates','Priority support'].map(f => (
                  <li key={f} className="flex gap-2"><span className="text-green-500">✓</span>{f}</li>
                ))}
              </ul>
              <button
                onClick={() => handleCheckout('price_1TFPBICDDRCjONFZd54Y5IQj', 'lifetime')}
                disabled={!!loading}
                className="w-full rounded-full bg-[#2a241f] text-white py-2.5 text-sm font-bold hover:bg-black/80 transition disabled:opacity-50"
              >
                {loading === 'lifetime' ? 'Loading…' : 'Get Lifetime Access'}
              </button>
            </div>
          </div>

          {/* Guarantee */}
          <div className="mt-8 flex items-center justify-center gap-3 rounded-2xl border border-green-200 bg-green-50 px-6 py-4">
            <span className="text-2xl">🛡️</span>
            <div className="text-left">
              <p className="text-sm font-semibold text-green-800">30-Day Money-Back Guarantee</p>
              <p className="text-sm text-green-700">StudyBanana will get your kid focused. If it doesn't, we'll refund every cent. No questions asked.</p>
            </div>
          </div>
        </div>

        {/* Features — AFTER pricing */}
        <div className="mt-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#7a5c00]">How it works</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Your kid actually does their homework.</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-black/55">
            Remove every distraction. Replace it with exactly what they need. Watch what happens.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className={`rounded-2xl border p-6 text-left shadow-sm transition hover:shadow-md ${
                  f.highlight ? 'border-[#2a241f]/20 bg-[#2a241f] text-white' : 'border-black/6 bg-white'
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

        {/* Social proof testimonials */}
        <div className="mt-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#7a5c00]">What parents are saying</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Finally, something that actually works.</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 text-left">
          {[
            {
              quote: "My daughter went from fighting me every night to just… sitting down and doing it. I didn't change anything except the app.",
              name: "Rachel M.",
              role: "Mom of 2",
            },
            {
              quote: "The parental lock is genius. He used to close everything the second I left the room. Now he literally can't.",
              name: "David K.",
              role: "Dad of a 10-year-old",
            },
            {
              quote: "I was skeptical — he's tried every app. But the retro TV look hooked him. He actually thinks it's cool to use it.",
              name: "Priya S.",
              role: "Parent",
            },
            {
              quote: "I work from home and can't stand over him all day. This app does it for me. He's locked in, I'm locked in, everyone's happy.",
              name: "James T.",
              role: "Dad, works from home",
            },
            {
              quote: "We tried screen time limits, parental controls, taking the computer away. Nothing stuck. This is the first thing that did.",
              name: "Michelle O.",
              role: "Mom of 3",
            },
            {
              quote: "My son has ADHD and the Pomodoro timer changed everything. Short bursts, real breaks. He doesn't even fight it anymore.",
              name: "Tanya R.",
              role: "Mom of an 11-year-old",
            },
            {
              quote: "He asked me to turn it on himself last Tuesday. I nearly fell off my chair.",
              name: "Chris L.",
              role: "Dad",
            },
            {
              quote: "The AI homework helper alone is worth it. No more 'I don't get it' at 10pm when I'm exhausted.",
              name: "Sofia B.",
              role: "Single mom",
            },
            {
              quote: "Set it up in 5 minutes. My daughter's been using it every day for 3 weeks. Homework is just… done now.",
              name: "Aaron W.",
              role: "Parent",
            },
          ].map((t) => (
            <div key={t.name} className="rounded-2xl border border-black/8 bg-white p-6 shadow-sm">
              <div className="mb-3 flex gap-0.5 text-[#f5a623]">{'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}</div>
              <p className="text-sm leading-relaxed text-black/70 italic">"{t.quote}"</p>
              <div className="mt-4 text-sm font-semibold text-[#2a241f]">{t.name}</div>
              <div className="text-xs text-black/40">{t.role}</div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-[#2a241f] px-8 py-14 text-white">
          <div className="mb-3 flex justify-center"><LogoIcon size={48} /></div>
          <h2 className="text-3xl font-semibold tracking-tight">Give your kid a screen worth using.</h2>
          <p className="mx-auto mt-3 max-w-md text-base text-white/60">
            Download free today. Upgrade when you're ready. 30-day money-back guarantee.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="/oto?platform=mac"
              className="rounded-full bg-[#ffd54f] px-7 py-3 text-base font-semibold text-[#2a241f] transition hover:-translate-y-0.5">
              Download for Mac
            </a>
            <a href="/oto?platform=windows"
              className="rounded-full border border-white/20 px-7 py-3 text-base font-medium text-white transition hover:bg-white/10">
              Download for Windows (.zip)
            </a>
          </div>
          <p className="mt-4 text-sm text-white/30">Free · No account needed · Works offline</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/8 py-8 text-center text-sm text-black/40">
        <div className="flex items-center justify-center gap-1.5">
          <LogoIcon size={20} />
          <span>StudyBanana · Free forever · Made with ❤️ for focused learners</span>
        </div>
      </footer>
    </div>
  )
}
