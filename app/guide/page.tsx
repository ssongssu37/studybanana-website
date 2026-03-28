'use client'
import { useState, useEffect } from 'react'
import LogoIcon from '@/components/LogoIcon'
import Link from 'next/link'

const MAC_URL = 'https://github.com/ssongssu37/studybanana-website/releases/download/v1.3.0/StudyBanana-1.3.0.dmg'
const WIN_URL = 'https://github.com/ssongssu37/studybanana-website/releases/download/v1.3.0/StudyBanana-Setup-1.3.0.exe'

const STEPS = [
  {
    n: '01',
    title: 'Calm your nervous system first',
    why: 'You cannot think your way into deep focus from a state of stress. Elevated anxiety measurably shrinks working memory — meaning a tense mind is a slower mind, even if it looks like it\'s trying harder.',
    do: [
      'Before you open anything, sit still for 60 seconds.',
      'Put on calm music — ambient, lo-fi, or piano. Let it play before you start.',
      'Close every unrelated tab and silence your phone. Do this now, not after you start.',
    ],
    note: 'The session begins before you open your first book.',
  },
  {
    n: '02',
    title: 'Set a single intention',
    why: 'The brain doesn\'t shift from reactive mode to reflective mode automatically. A small, deliberate act — naming what you\'re about to do — signals the transition. Without it, you drift into the task still half-distracted.',
    do: [
      'Write one sentence: what are you working on and what do you want to understand by the end?',
      'Say it out loud if you can. It sounds odd. It works.',
      'Don\'t start the timer until you\'ve done this.',
    ],
    note: 'Intention is the on-ramp. Don\'t skip it.',
  },
  {
    n: '03',
    title: 'Protect the first five minutes — completely',
    why: 'The opening minutes of any session are neurologically unstable. The brain is switching states. Even one interruption during this window — a notification, a question, a tab — can prevent immersion from forming at all. Research calls this the "switch cost." It\'s real.',
    do: [
      'Go full-screen. Remove everything from view except the work.',
      'Tell anyone nearby you\'re unavailable for the next 25 minutes.',
      'Do not check anything. Not quickly. Not just once. Nothing.',
    ],
    note: 'If the first five minutes are fragmented, the whole session probably is.',
  },
  {
    n: '04',
    title: 'Stay through the restlessness',
    why: 'The first 8–12 minutes almost always feel uncomfortable. Boring. Too hard. Like you\'re not getting anywhere. This is not a sign something is wrong — it\'s the transition. Most people quit here.',
    do: [
      'When you feel the urge to switch — pause. Don\'t act on it.',
      'Keep your eyes on the work. Read the next sentence. Write the next word.',
      'Wait. The internal noise quiets. It always does.',
    ],
    note: 'Boredom is not the absence of immersion. It\'s the entrance.',
  },
  {
    n: '05',
    title: 'Work in sessions, not marathons',
    why: 'Mental endurance is built through cycles of focus and recovery — exactly like physical training. A 25-minute focused session followed by a real break outperforms an hour of grinding every time.',
    do: [
      'Set a timer for 25 minutes. Work until it rings.',
      'Take a genuine 5-minute break — stand up, look away from screens.',
      'After 3 sessions, take a longer 15–20 minute break.',
    ],
    note: 'The break is part of the training. Don\'t skip it.',
  },
  {
    n: '06',
    title: 'Handle blockers without leaving',
    why: 'One of the most common reasons sessions end early: you hit something you don\'t understand, and solving it means opening a browser. Once you\'re in a browser, the session is over.',
    do: [
      'Use a built-in dictionary for unknown words. Don\'t Google.',
      'Use an AI assistant for stuck moments — ask specifically, then close it.',
      'Write a note about what you don\'t understand and come back after the session.',
    ],
    note: 'Leaving the environment breaks the state. Stay inside it.',
  },
  {
    n: '07',
    title: 'End with a recall attempt',
    why: 'Passive reading creates the illusion of understanding. Active recall — trying to remember what you just learned without looking — is the actual mechanism that moves information into long-term memory.',
    do: [
      'Close your notes. Write down the 3 most important things from the session.',
      'Try to answer: what did I actually learn? What would I explain to someone else?',
      'It\'s okay if you can\'t remember everything. The attempt is the training.',
    ],
    note: 'Time spent is not the same as learning. Recall is.',
  },
  {
    n: '08',
    title: 'Recover before tomorrow',
    why: 'Sleep is when the brain consolidates everything you practiced. Children sleeping under nine hours show measurably reduced working memory and attention the next day — not because of effort, but because of biology.',
    do: [
      'No screens 30 minutes before bed. This is the single highest-impact change.',
      'Same bedtime every night — consistency matters more than duration.',
      'Think of sleep as tomorrow\'s session. Protect it like one.',
    ],
    note: 'The deepest thinkers don\'t outwork everyone. They recover better.',
  },
]

export default function GuidePage() {
  const [platform, setPlatform] = useState<'mac' | 'win' | null>(null)

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase()
    if (ua.includes('win')) setPlatform('win')
    else setPlatform('mac')
  }, [])

  const downloadUrl = platform === 'win' ? WIN_URL : MAC_URL
  const downloadLabel = platform === 'win' ? 'Download for Windows' : 'Download for Mac'

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#1a1a1a]" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>

      {/* Nav */}
      <div className="border-b border-black/10 bg-[#fafaf8]/95 backdrop-blur sticky top-0 z-20">
        <div className="max-w-2xl mx-auto px-5 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <LogoIcon size={32} />
            <span className="font-bold text-sm tracking-tight" style={{ fontFamily: 'system-ui, sans-serif' }}>StudyBanana</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/lp" className="text-xs text-[#999] hover:text-[#333] transition hidden sm:block" style={{ fontFamily: 'system-ui, sans-serif' }}>The Science</Link>
            <a
              href={downloadUrl}
              className="rounded-full bg-[#ffd54f] text-[#1a1a1a] text-xs font-bold px-4 py-1.5 hover:bg-yellow-300 transition"
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              {downloadLabel}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-5">

        {/* Hero */}
        <div className="pt-10 pb-3">
          <span className="text-xs font-bold tracking-widest text-[#999] uppercase" style={{ fontFamily: 'system-ui, sans-serif' }}>
            The Immersion Guide · 8 Steps
          </span>
        </div>

        <h1 className="text-3xl md:text-[2.6rem] font-bold leading-[1.2] text-[#111] mb-5">
          How to Get Into Deep Focus
        </h1>

        <p className="text-lg md:text-xl text-[#444] leading-relaxed mb-6 italic">
          Immersion is not a personality trait. It is a learnable state — specific, repeatable, and grounded in how the brain actually works. These 8 steps show you how to enter it.
        </p>

        <div className="flex items-center gap-3 pb-6 border-b border-black/10 mb-10">
          <div className="w-9 h-9 rounded-full bg-[#1a1814] flex items-center justify-center text-sm text-[#ffd54f] font-bold" style={{ fontFamily: 'system-ui' }}>IE</div>
          <div style={{ fontFamily: 'system-ui, sans-serif' }}>
            <p className="text-xs font-semibold text-[#333]">Based on <em>The Immersion Effect</em> — research on how deep focus forms and what consistently prevents it</p>
            <p className="text-xs text-[#999]">Follow the steps in order · Takes one 25-minute session to complete</p>
          </div>
        </div>

        {/* Steps */}
        {STEPS.map((step, i) => (
          <div key={i} className="flex gap-6 mb-10">

            {/* Number + connector */}
            <div className="flex flex-col items-center flex-shrink-0">
              <div
                className="w-10 h-10 rounded-full border-2 border-[#ffd54f] flex items-center justify-center text-xs font-bold text-[#1a1814]"
                style={{ fontFamily: 'system-ui, sans-serif', background: '#fffbee' }}
              >
                {step.n}
              </div>
              {i < STEPS.length - 1 && (
                <div className="w-px flex-1 bg-[#ffd54f]/30 mt-2" style={{ minHeight: '32px' }} />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pb-2">
              <h2 className="text-xl md:text-2xl font-bold text-[#111] mb-3 leading-snug">
                {step.title}
              </h2>

              <p className="text-base text-[#555] leading-[1.8] mb-4" style={{ fontFamily: 'system-ui, sans-serif' }}>
                {step.why}
              </p>

              {/* Do this box */}
              <div className="rounded-2xl bg-[#1a1814] p-5 mb-3">
                <p className="text-xs font-bold tracking-widest text-[#ffd54f] uppercase mb-3" style={{ fontFamily: 'system-ui, sans-serif' }}>
                  Do this
                </p>
                {step.do.map((action, j) => (
                  <div key={j} className="flex gap-3 mb-2 last:mb-0">
                    <span className="text-[#ffd54f] text-sm mt-0.5 flex-shrink-0">→</span>
                    <p className="text-sm text-white/80 leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>
                      {action}
                    </p>
                  </div>
                ))}
              </div>

              {/* Takeaway note */}
              <p className="text-sm text-[#999] italic" style={{ fontFamily: 'system-ui, sans-serif' }}>
                {step.note}
              </p>
            </div>
          </div>
        ))}

        {/* Pull quote */}
        <blockquote className="border-l-4 border-[#ffd54f] pl-6 my-12">
          <p className="text-xl md:text-2xl font-bold italic text-[#1a1814] leading-snug">
            &ldquo;The future will belong to those who can remain. Not because they were born with the capacity — but because they practiced it.&rdquo;
          </p>
          <footer className="mt-3 text-sm text-[#888]" style={{ fontFamily: 'system-ui' }}>— <em>The Immersion Effect</em></footer>
        </blockquote>

        {/* CTA */}
        <div className="rounded-2xl bg-[#1a1814] text-white p-7 mb-16">
          <p className="text-xs font-bold tracking-widest text-[#ffd54f] uppercase mb-3" style={{ fontFamily: 'system-ui, sans-serif' }}>
            StudyBanana
          </p>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
            Every step in this guide is built into the app.
          </h2>
          <p className="text-sm text-white/60 leading-relaxed mb-6" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Calm music to settle the nervous system. Full-screen mode that protects entry. A Pomodoro timer for structured sessions and recovery. A built-in AI, dictionary, and encyclopedia so you never have to leave. Active recall through quizzes. Parental lock to make the commitment structural.
          </p>
          <a
            href={downloadUrl}
            className="inline-block rounded-full bg-[#ffd54f] text-[#1a1814] font-bold px-7 py-3 hover:bg-yellow-300 transition text-sm"
            style={{ fontFamily: 'system-ui, sans-serif' }}
          >
            {downloadLabel} — Free
          </a>
          <p className="text-xs text-white/30 mt-3" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Mac &amp; Windows · No account required to start
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="border-t border-black/10">
        <div className="max-w-2xl mx-auto px-5 py-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <LogoIcon size={22} />
            <span className="text-xs text-[#aaa]" style={{ fontFamily: 'system-ui, sans-serif' }}>© 2025 StudyBanana</span>
          </div>
          <div className="flex gap-5">
            <Link href="/lp" className="text-xs text-[#aaa] hover:text-[#333] transition" style={{ fontFamily: 'system-ui, sans-serif' }}>The Science</Link>
            <Link href="/" className="text-xs text-[#aaa] hover:text-[#333] transition" style={{ fontFamily: 'system-ui, sans-serif' }}>Home</Link>
          </div>
        </div>
      </div>

    </div>
  )
}
