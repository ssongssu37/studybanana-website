'use client'
import { useState, useEffect } from 'react'
import LogoIcon from '@/components/LogoIcon'
import Link from 'next/link'

const MAC_URL = 'https://github.com/ssongssu37/studybanana-website/releases/download/v1.2.0/StudyBanana-1.0.9.dmg'
const WIN_URL = 'https://github.com/ssongssu37/studybanana-website/releases/download/v1.2.0/StudyBanana-1.0.9-win.zip'

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
    why: 'The first 8–12 minutes almost always feel uncomfortable. Boring. Too hard. Like you\'re not getting anywhere. This is not a sign something is wrong — it\'s the transition. The mind is adjusting from rapid-stimulation mode to sustained-thinking mode. Most people quit here.',
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
    why: 'Mental endurance is built through cycles of focus and recovery — exactly like physical training. Performance declines steadily without breaks. A 25-minute focused session followed by a real break outperforms an hour of grinding every time.',
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
      'Write a note about what you don\'t understand. Come back to it after the session.',
    ],
    note: 'Leaving the environment breaks the state. Stay inside it.',
  },
  {
    n: '07',
    title: 'End with a recall attempt',
    why: 'Passive reading creates the illusion of understanding. Active recall — trying to remember what you just learned without looking — is the actual mechanism that moves information into long-term memory. It takes 3 minutes and doubles retention.',
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
    why: 'Sleep is when the brain consolidates everything you practiced. Children sleeping under nine hours show measurably reduced working memory and attention the next day. This isn\'t about effort — it\'s about the biology of how focus is maintained and rebuilt.',
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
    <div style={{ background: '#0f0e0c', minHeight: '100vh', color: '#e8e0d0', fontFamily: 'Georgia, serif' }}>

      {/* Nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(15,14,12,0.96)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '0 clamp(20px,5vw,80px)',
        height: '60px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <LogoIcon size={32} />
          <span style={{ fontFamily: 'Georgia, serif', fontSize: '15px', color: '#e8e0d0', letterSpacing: '0.5px' }}>StudyBanana</span>
        </Link>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Link href="/lp" style={{ fontFamily: 'system-ui, sans-serif', fontSize: '13px', color: 'rgba(232,224,208,0.45)', textDecoration: 'none' }}>The Science</Link>
          <a href={downloadUrl} style={{
            background: '#f5e070', color: '#1a1600',
            padding: '8px 18px', borderRadius: '6px',
            fontFamily: 'system-ui, sans-serif', fontSize: '13px', fontWeight: 700,
            textDecoration: 'none',
          }}>Download Free</a>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: 'clamp(50px,8vh,90px) clamp(20px,5vw,48px) clamp(32px,5vh,60px)' }}>
        <p style={{
          fontFamily: 'system-ui, sans-serif', fontSize: '11px', letterSpacing: '4px',
          color: 'rgba(245,224,112,0.6)', textTransform: 'uppercase', marginBottom: '20px',
        }}>The Immersion Guide</p>

        <h1 style={{
          fontSize: 'clamp(36px,5.5vw,62px)', fontWeight: 400, lineHeight: 1.1,
          color: '#f0e8d8', marginBottom: '24px', letterSpacing: '-0.3px',
        }}>
          8 steps to<br />deep focus
        </h1>

        <p style={{ fontSize: 'clamp(15px,1.8vw,18px)', lineHeight: 1.75, color: 'rgba(232,224,208,0.6)', maxWidth: '520px', margin: 0 }}>
          Immersion is a learnable state — not a personality trait. These steps take about 25 minutes to complete. Follow them in order.
        </p>
      </div>

      {/* Progress line */}
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)' }}>
        <div style={{ height: '1px', background: 'rgba(245,224,112,0.12)', marginBottom: 'clamp(40px,6vh,70px)' }} />
      </div>

      {/* Steps */}
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 clamp(20px,5vw,48px)' }}>
        {STEPS.map((step, i) => (
          <div key={i} style={{ marginBottom: 'clamp(48px,7vh,80px)', display: 'flex', gap: 'clamp(20px,4vw,48px)' }}>

            {/* Number column */}
            <div style={{ flexShrink: 0, paddingTop: '4px' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '50%',
                border: '1px solid rgba(245,224,112,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'system-ui, sans-serif', fontSize: '13px', fontWeight: 600,
                color: 'rgba(245,224,112,0.6)', letterSpacing: '1px',
              }}>
                {step.n}
              </div>
              {i < STEPS.length - 1 && (
                <div style={{
                  width: '1px', height: 'clamp(48px,7vh,80px)',
                  background: 'rgba(245,224,112,0.08)',
                  margin: '12px auto 0',
                }} />
              )}
            </div>

            {/* Content column */}
            <div style={{ flex: 1 }}>
              <h2 style={{
                fontSize: 'clamp(18px,2.5vw,24px)', fontWeight: 400, lineHeight: 1.2,
                color: '#f0e8d8', marginBottom: '14px', letterSpacing: '-0.1px',
              }}>
                {step.title}
              </h2>

              <p style={{
                fontSize: 'clamp(14px,1.6vw,16px)', lineHeight: 1.75,
                color: 'rgba(232,224,208,0.55)', marginBottom: '20px',
              }}>
                {step.why}
              </p>

              {/* Do this box */}
              <div style={{
                background: 'rgba(245,224,112,0.04)',
                border: '1px solid rgba(245,224,112,0.12)',
                borderRadius: '8px',
                padding: '18px 20px',
                marginBottom: '14px',
              }}>
                <p style={{
                  fontFamily: 'system-ui, sans-serif', fontSize: '10px', letterSpacing: '3px',
                  color: 'rgba(245,224,112,0.45)', textTransform: 'uppercase', marginBottom: '12px',
                }}>Do this</p>
                {step.do.map((action, j) => (
                  <div key={j} style={{ display: 'flex', gap: '12px', marginBottom: j < step.do.length - 1 ? '10px' : 0 }}>
                    <span style={{ color: 'rgba(245,224,112,0.4)', fontSize: '14px', flexShrink: 0, marginTop: '1px' }}>→</span>
                    <p style={{ fontSize: 'clamp(13px,1.5vw,15px)', lineHeight: 1.65, color: 'rgba(232,224,208,0.75)', margin: 0 }}>
                      {action}
                    </p>
                  </div>
                ))}
              </div>

              {/* Note */}
              <p style={{
                fontFamily: 'system-ui, sans-serif', fontSize: '12px', lineHeight: 1.6,
                color: 'rgba(245,224,112,0.45)', fontStyle: 'italic',
              }}>
                {step.note}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA section */}
      <div style={{
        maxWidth: '680px', margin: 'clamp(40px,6vh,70px) auto 0',
        padding: '0 clamp(20px,5vw,48px)',
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(245,224,112,0.06) 0%, rgba(245,224,112,0.02) 100%)',
          border: '1px solid rgba(245,224,112,0.14)',
          borderRadius: '12px',
          padding: 'clamp(28px,5vh,48px) clamp(24px,4vw,40px)',
        }}>
          <p style={{
            fontFamily: 'system-ui, sans-serif', fontSize: '11px', letterSpacing: '4px',
            color: 'rgba(245,224,112,0.5)', textTransform: 'uppercase', marginBottom: '18px',
          }}>StudyBanana</p>

          <h2 style={{
            fontSize: 'clamp(20px,3vw,30px)', fontWeight: 400, lineHeight: 1.25,
            color: '#f0e8d8', marginBottom: '16px',
          }}>
            Every step in this guide is built into the app.
          </h2>

          <p style={{ fontSize: 'clamp(14px,1.6vw,16px)', lineHeight: 1.75, color: 'rgba(232,224,208,0.55)', marginBottom: '28px' }}>
            Calm music to settle the nervous system. Full-screen mode that protects entry. A Pomodoro timer that structures sessions and recovery. A built-in AI, dictionary, and encyclopedia so you never have to leave. Active recall through quizzes. Parental lock to make the commitment structural.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start' }}>
            <a href={downloadUrl} style={{
              display: 'inline-block',
              background: '#f5e070', color: '#1a1600',
              padding: '14px 30px', borderRadius: '8px',
              fontFamily: 'system-ui, sans-serif', fontSize: '15px', fontWeight: 700,
              textDecoration: 'none',
            }}>
              {downloadLabel} — Free
            </a>
            <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '12px', color: 'rgba(232,224,208,0.3)', margin: 0 }}>
              Mac &amp; Windows · No account required
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: 'clamp(28px,4vh,44px) clamp(20px,5vw,48px)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '16px',
        maxWidth: '680px', margin: 'clamp(50px,7vh,80px) auto 0',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <LogoIcon size={22} />
          <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: '12px', color: 'rgba(232,224,208,0.3)' }}>© 2025 StudyBanana</span>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link href="/lp" style={{ fontFamily: 'system-ui, sans-serif', fontSize: '12px', color: 'rgba(232,224,208,0.3)', textDecoration: 'none' }}>The Science</Link>
          <Link href="/" style={{ fontFamily: 'system-ui, sans-serif', fontSize: '12px', color: 'rgba(232,224,208,0.3)', textDecoration: 'none' }}>Home</Link>
        </div>
      </footer>

      <div style={{ height: 'clamp(30px,5vh,60px)' }} />
    </div>
  )
}
