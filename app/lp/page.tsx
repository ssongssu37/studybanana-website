'use client'
import { useState, useEffect } from 'react'

const MAC_URL = 'https://github.com/ssongssu37/studybanana-website/releases/download/v1.1.0/StudyBanana-1.0.9.dmg'
const WIN_URL = 'https://github.com/ssongssu37/studybanana-website/releases/download/v1.1.0/StudyBanana-1.0.9-win.zip'
const MONTHLY_PRICE_ID = 'price_1TFMWKCDDRCjONFZueHxhQtJ'

const REASONS = [
  {
    num: '01',
    title: 'It locks kids into focus mode — no YouTube, no games, no distractions',
    body: 'StudyBanana opens full-screen and stays full-screen. Kids can\'t alt-tab, switch apps, or sneak onto social media. The parental PIN lock means only you can exit the session — not them.',
    emoji: '🔒',
  },
  {
    num: '02',
    title: 'The built-in Pomodoro timer keeps study sessions structured and sustainable',
    body: 'Based on the proven Pomodoro technique, the timer guides kids through 25-minute focus blocks followed by 5-minute breaks. No more marathon sessions that burn them out — or 2-minute "study" sessions that accomplish nothing.',
    emoji: '🍅',
  },
  {
    num: '03',
    title: '20 tracks of focus music — lo-fi, jazz, piano, and ambient — always playing',
    body: 'Studies show background music can boost concentration and reduce study anxiety. StudyBanana ships with 20 hand-picked tracks across 5 genres so your child can find what works best for them. No ads. No surprises. No lyrics.',
    emoji: '🎵',
  },
  {
    num: '04',
    title: 'An AI homework helper that answers any subject question in seconds',
    body: 'Stuck on a math problem at 9pm? The built-in AI assistant handles math, science, history, language arts — any subject, any level. Free users get 20 questions a day. Premium users get unlimited help.',
    emoji: '🤖',
  },
  {
    num: '05',
    title: 'A kids encyclopedia with 64 topics built right in — no browser needed',
    body: 'From black holes to ancient Rome, from photosynthesis to the Olympics — StudyBanana\'s built-in encyclopedia covers 8 subjects and 64 topics written for curious young minds. Research without the rabbit holes.',
    emoji: '📚',
  },
  {
    num: '06',
    title: 'Everything in one place — clock, notes, weather, and more on one screen',
    body: 'Clock with daily motivational quotes. A multi-page notes editor. Live weather. A lo-fi visualizer. A trivia quiz. A typing game. StudyBanana replaces the five different tabs kids usually have open — with one focused, distraction-free workspace.',
    emoji: '🖥️',
  },
]

const REVIEWS = [
  { name: 'Sarah M.', role: 'Mom of 2', stars: 5, text: 'My son actually asks to use this now. First study tool that\'s worked in 3 years of trying.' },
  { name: 'James T.', role: 'Dad of a 10-year-old', stars: 5, text: 'The parental lock is a game changer. He can\'t exit until I unlock it. Homework gets done now.' },
  { name: 'Priya K.', role: 'Parent', stars: 5, text: 'The AI homework helper alone is worth it. My daughter stopped texting me questions during meetings.' },
  { name: 'Michael R.', role: 'Father of 3', stars: 5, text: 'Bought it for my oldest and now all three kids want it. The music and Pomodoro timer actually work.' },
  { name: 'Lisa C.', role: 'Mom', stars: 5, text: 'Looks like a real computer screen so my kids feel grown-up using it. They love it.' },
  { name: 'David W.', role: 'Parent', stars: 5, text: 'Finally something that keeps them off YouTube while still being on the computer. Worth every penny.' },
]

export default function LPPage() {
  const [platform, setPlatform] = useState<'mac' | 'win' | null>(null)
  const [upgrading, setUpgrading] = useState(false)

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase()
    if (ua.includes('win')) setPlatform('win')
    else setPlatform('mac')
  }, [])

  async function handleGetPremium() {
    setUpgrading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: MONTHLY_PRICE_ID, email: null, userId: null }),
      })
      const data = await res.json()
      if (data.url) window.location.href = data.url
      else setUpgrading(false)
    } catch { setUpgrading(false) }
  }

  const downloadUrl = platform === 'win' ? WIN_URL : MAC_URL
  const downloadLabel = platform === 'win' ? 'Download for Windows' : 'Download for Mac'

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">

      {/* Editorial header bar */}
      <div className="border-b border-black/10 bg-white sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍌</span>
            <span className="font-bold text-sm tracking-tight">StudyBanana</span>
          </div>
          <a
            href={downloadUrl}
            className="rounded-full bg-[#ffd54f] text-[#1a1a1a] text-xs font-bold px-4 py-1.5 hover:bg-yellow-300 transition"
          >
            {downloadLabel}
          </a>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-5">

        {/* Category label */}
        <div className="pt-8 pb-2">
          <span className="text-xs font-bold tracking-widest text-[#888] uppercase">Parenting & Education</span>
        </div>

        {/* Hero headline */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-[#111] mb-4">
          6 Reasons Why Thousands of Parents Are Switching to StudyBanana for Their Kids' Study Sessions
        </h1>

        {/* Byline */}
        <div className="flex items-center gap-3 pb-5 border-b border-black/10 mb-6">
          <div className="w-8 h-8 rounded-full bg-[#ffd54f] flex items-center justify-center text-sm">🍌</div>
          <div>
            <p className="text-xs font-semibold text-[#333]">StudyBanana Team</p>
            <p className="text-xs text-[#888]">Updated March 2026 · 4 min read</p>
          </div>
        </div>

        {/* Intro paragraph */}
        <p className="text-base text-[#333] leading-relaxed mb-6">
          If your child has a computer for homework, there's a good chance they're also watching YouTube, scrolling TikTok, or playing games between — and during — every assignment. StudyBanana is a distraction-free study app that runs on Mac and Windows and turns any computer into a focused, productive study station. Here's why parents are calling it the best $5 they've spent on their kids' education.
        </p>

        {/* App screenshots */}
        <div className="mb-8 space-y-3">
          <img
            src="/ss-clock.png"
            alt="StudyBanana clock channel with motivational quote"
            className="w-full rounded-2xl shadow-xl border border-black/8"
          />
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/ss-ai.png"
              alt="StudyBanana AI homework helper"
              className="w-full rounded-xl shadow-lg border border-black/8"
            />
            <img
              src="/ss-visual.png"
              alt="StudyBanana visual channel"
              className="w-full rounded-xl shadow-lg border border-black/8"
            />
          </div>
          <p className="text-center text-xs text-[#aaa]">StudyBanana running on Mac — clock, AI assistant, and visual channels</p>
        </div>

        {/* The 6 reasons */}
        <div className="space-y-0 mb-10">
          {REASONS.map((r, i) => (
            <div key={i} className={`py-7 ${i < REASONS.length - 1 ? 'border-b border-black/8' : ''}`}>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#ffd54f]/20 flex items-center justify-center text-xl">
                  {r.emoji}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#ffd54f] tracking-widest mb-1 uppercase">Reason {r.num}</div>
                  <h2 className="text-lg md:text-xl font-bold text-[#111] leading-snug mb-2">{r.title}</h2>
                  <p className="text-sm text-[#555] leading-relaxed">{r.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Offer section */}
        <div className="rounded-2xl bg-[#2a241f] text-white p-7 mb-8 shadow-2xl">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold uppercase tracking-widest text-white/40">StudyBanana Premium</span>
            <span className="rounded-full bg-green-500/20 text-green-300 text-xs font-bold px-3 py-1">7-Day Free Trial</span>
          </div>

          <div className="flex items-baseline gap-3 mt-3 mb-1">
            <span className="text-3xl font-bold line-through text-red-400 opacity-60">$10</span>
            <span className="text-5xl font-bold">$5</span>
            <span className="text-base text-white/40">/month</span>
          </div>
          <p className="text-xs text-white/40 mb-5">No charge for 7 days. Cancel anytime, no questions asked.</p>

          <div className="grid grid-cols-2 gap-2 mb-5">
            {[
              '✓  All 20 music tracks',
              '✓  Unlimited AI homework help',
              '✓  All 10 colour themes',
              '✓  Full kids encyclopedia',
              '✓  Parental PIN lock',
              '✓  All future updates',
            ].map(item => (
              <div key={item} className="text-sm text-white/70">{item}</div>
            ))}
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3 mb-5 text-sm">
            <span>🛡️</span>
            <span className="text-white/50 text-xs">30-day money-back guarantee. If you're not happy, we refund you — no questions asked.</span>
          </div>

          <button
            onClick={handleGetPremium}
            disabled={upgrading}
            className="w-full rounded-full bg-[#ffd54f] text-[#2a241f] py-4 font-bold text-base hover:bg-yellow-300 transition shadow-lg disabled:opacity-50 mb-3"
          >
            {upgrading ? 'Loading…' : '🚀 Start My 7-Day Free Trial — $5/month'}
          </button>

          <a
            href={downloadUrl}
            className="block w-full text-center rounded-full border border-white/15 py-3 text-sm font-medium text-white/50 hover:bg-white/5 transition"
          >
            ↓ Try the free version first ({platform === 'win' ? 'Windows' : 'Mac'})
          </a>
        </div>

        {/* Star rating summary */}
        <div className="flex items-center gap-4 mb-6 p-5 rounded-2xl bg-[#fffbf0] border border-[#ffd54f]/30">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#111]">4.9</div>
            <div className="text-yellow-400 text-lg">★★★★★</div>
            <div className="text-xs text-[#888] mt-1">Average rating</div>
          </div>
          <div className="flex-1 space-y-1">
            {[5,4,3].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <span className="text-xs text-[#888] w-4">{s}★</span>
                <div className="flex-1 bg-black/8 rounded-full h-1.5 overflow-hidden">
                  <div className="h-full rounded-full bg-[#ffd54f]" style={{width: i===0?'96%':i===1?'3%':'1%'}} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <h3 className="text-lg font-bold text-[#111] mb-4">What parents are saying</h3>
        <div className="space-y-4 mb-10">
          {REVIEWS.map((r, i) => (
            <div key={i} className="rounded-xl border border-black/8 p-5 bg-white">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-sm text-[#111]">{r.name}</p>
                  <p className="text-xs text-[#888]">{r.role}</p>
                </div>
                <span className="text-yellow-400 text-sm">{'★'.repeat(r.stars)}</span>
              </div>
              <p className="text-sm text-[#444] leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center pb-16">
          <p className="text-sm text-[#888] mb-4">Join thousands of families already using StudyBanana</p>
          <button
            onClick={handleGetPremium}
            disabled={upgrading}
            className="rounded-full bg-[#ffd54f] text-[#2a241f] px-10 py-4 font-bold text-base hover:bg-yellow-300 transition shadow-lg disabled:opacity-50 mb-3 block mx-auto w-full max-w-sm"
          >
            {upgrading ? 'Loading…' : '🚀 Start Free Trial — $5/month'}
          </button>
          <a href={downloadUrl} className="text-sm text-[#888] hover:text-[#333] underline">
            Or download the free version →
          </a>
        </div>

      </div>

      {/* Footer */}
      <div className="border-t border-black/8 py-6 text-center">
        <p className="text-xs text-[#aaa]">
          © 2026 StudyBanana · <a href="/" className="hover:text-[#333]">Home</a> · Available for Mac & Windows
        </p>
      </div>

    </div>
  )
}
