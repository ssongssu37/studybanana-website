'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

const MAC_URL = 'https://github.com/ssongssu37/studybanana-website/releases/download/v1.0.5/StudyBanana-1.0.0.dmg'
const WIN_URL = 'https://github.com/ssongssu37/studybanana-website/releases/download/v1.0.5/StudyBanana.Setup.1.0.0.exe'
const ANNUAL_PRICE_ID = 'price_1TFPBECDDRCjONFZBZNEJGow'

function OTOContent() {
  const searchParams = useSearchParams()
  const platform = searchParams.get('platform') || 'mac'
  const downloadUrl = platform === 'windows' ? WIN_URL : MAC_URL
  const platformLabel = platform === 'windows' ? 'Windows' : 'Mac'

  const [loading, setLoading] = useState(false)
  const [declining, setDeclining] = useState(false)

  async function handleUpgrade() {
    setLoading(true)
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId: ANNUAL_PRICE_ID, email: null, userId: null }),
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
    else { alert(data.error || 'Something went wrong'); setLoading(false) }
  }

  function handleDecline() {
    setDeclining(true)
    window.location.href = downloadUrl
  }

  return (
    <div className="min-h-screen bg-[#fff9ec] text-[#2a241f] flex flex-col">

      {/* Minimal nav */}
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
        <a href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffd54f] text-base">🍌</span>
          <span className="text-base font-semibold tracking-tight">StudyBanana</span>
        </a>
      </nav>

      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl text-center">

          {/* Label */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ffd54f]/60 bg-[#ffd54f]/20 px-4 py-1.5 text-sm font-medium text-[#7a5c00]">
            ✅ Your free download is ready
          </div>

          {/* Headline */}
          <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            One second — want to unlock{' '}
            <span className="relative inline-block">
              <span className="relative z-10">everything</span>
              <span className="absolute inset-x-0 bottom-1 z-0 h-3 rounded bg-[#ffd54f]/60" />
            </span>{' '}
            while you're here?
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-base text-black/55 leading-relaxed">
            The free version gives you a taste. Premium unlocks all 20 music tracks, unlimited AI homework help,
            every theme, and the full experience — for less than a coffee a month.
          </p>

          {/* Offer card */}
          <div className="mt-8 rounded-3xl bg-[#2a241f] text-white p-8 shadow-2xl text-left">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold uppercase tracking-widest text-white/40">Premium — Annual</span>
              <span className="rounded-full bg-green-500/20 text-green-300 text-xs font-bold px-3 py-1">7-Day Free Trial</span>
            </div>

            <div className="flex items-baseline gap-3 mt-3">
              <span className="text-4xl font-bold line-through text-red-400 opacity-70">$98</span>
              <span className="text-5xl font-bold">$49</span>
              <span className="text-lg text-white/40">/year</span>
            </div>
            <p className="text-sm text-white/40 mt-1 mb-6">That's $4.08/month. Try free for 7 days — no charge until after trial.</p>

            <div className="grid grid-cols-2 gap-2 mb-8">
              {[
                '✓  All 20 music tracks',
                '✓  Unlimited AI questions',
                '✓  All 10 themes',
                '✓  Kids encyclopedia',
                '✓  Parental lock',
                '✓  All future updates',
              ].map(item => (
                <div key={item} className="text-sm text-white/70">{item}</div>
              ))}
            </div>

            {/* Guarantee inside card */}
            <div className="flex items-center gap-2 rounded-xl bg-white/8 px-4 py-3 mb-6 text-sm">
              <span className="text-lg">🛡️</span>
              <span className="text-white/60">30-day money-back guarantee — no questions asked.</span>
            </div>

            <button
              onClick={handleUpgrade}
              disabled={loading}
              className="w-full rounded-full bg-[#ffd54f] text-[#2a241f] py-4 text-base font-bold hover:bg-yellow-300 transition shadow-lg disabled:opacity-50"
            >
              {loading ? 'Loading…' : '🚀 Yes — Upgrade & Start My Free Trial'}
            </button>
          </div>

          {/* Decline */}
          <div className="mt-6">
            <button
              onClick={handleDecline}
              disabled={declining}
              className="text-sm text-black/40 hover:text-black/60 transition underline underline-offset-2"
            >
              {declining ? 'Starting download…' : `No thanks, just download the free version for ${platformLabel} →`}
            </button>
          </div>

          <p className="mt-4 text-xs text-black/30">
            Free version includes: Clock, Notes, Weather, Pomodoro, 3 music tracks, 20 AI questions/day, Parental lock
          </p>
        </div>
      </main>
    </div>
  )
}

export default function OTOPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#fff9ec] flex items-center justify-center">
        <span className="text-2xl animate-pulse">🍌</span>
      </div>
    }>
      <OTOContent />
    </Suspense>
  )
}
