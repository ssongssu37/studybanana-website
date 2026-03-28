'use client'
import { useState, useEffect } from 'react'
import LogoIcon from '@/components/LogoIcon'
import Link from 'next/link'

const MAC_URL = 'https://github.com/ssongssu37/studybanana-website/releases/download/v1.2.0/StudyBanana-1.0.9.dmg'
const WIN_URL = 'https://github.com/ssongssu37/studybanana-website/releases/download/v1.2.0/StudyBanana-1.0.9-win.zip'

const STAGES = [
  {
    number: '01',
    title: 'Understand what immersion actually is',
    body: [
      'Most people picture deep focus as visible intensity. The child leans forward, brow furrowed, body stiff — pushing through. That posture looks like concentration. It is usually the opposite.',
      'Psychologists have studied this for over a century. Beyond a moderate level of physiological arousal, performance declines. When stress rises, working memory shrinks, flexibility narrows, and complex thinking becomes mechanical. The child who appears to be grinding may be operating at a fraction of their capacity.',
      'Immersion feels different. The body is relaxed. Breathing is steady. Attention narrows naturally — not forcefully. The mind isn\'t holding itself together. It is absorbed.',
      'This is the state. Not intensity. Relaxed continuity. "Only me and the problem."',
    ],
    pull: 'Tension is not focus. It is focus\'s enemy.',
  },
  {
    number: '02',
    title: 'Prepare the nervous system before you begin',
    body: [
      'You cannot think your way into immersion from a state of agitation. The nervous system must settle first.',
      'This is not abstract. Research consistently shows that elevated stress reduces working memory performance by measurable amounts. A child anxious about a grade, tense from an argument, or overstimulated from a screen cannot enter immersion — not because they lack discipline, but because their cognitive architecture is temporarily impaired.',
      'Before sitting down to study, the preparation matters: reduce background noise, transition away from fast stimulation, let the nervous system recalibrate. Calm music helps. Quiet helps. A brief pause between activities helps. Two minutes of decompression is not wasted time. It is the prerequisite.',
      'Most study sessions fail in the thirty seconds before they start.',
    ],
    pull: 'Calm is not the reward for finishing. It is the precondition for beginning.',
  },
  {
    number: '03',
    title: 'Protect the first five minutes — structurally',
    body: [
      'The opening minutes of any focus session are neurologically unstable. The brain is shifting states — from reactive mode to reflective mode. During that transition, attention is fragile.',
      'Research on task-switching shows that moving from a high-stimulation activity into a cognitively demanding one creates measurable "switch costs": slower reaction times, higher error rates, and reduced accuracy. Even a brief interruption during this entry phase — a notification, a question from across the room, a tab left open — can prevent immersion from forming at all.',
      'If the first five minutes are fragmented, the session is likely already lost.',
      'This is why the structure of the environment matters more than willpower. A full-screen interface that removes visual clutter. A closed door. Music that masks distraction. A device that doesn\'t notify. These are not preferences — they are the structural conditions that make the transition possible.',
      'Protect entry. Everything else follows from there.',
    ],
    pull: 'The most important moment of a study session is the first five minutes. Most people don\'t protect them.',
  },
  {
    number: '04',
    title: 'Move through the resistance — don\'t mistake it for inability',
    body: [
      'The first few minutes of effort frequently feel uncomfortable. Restless. Boring. The mind wanders. The task feels harder than it should.',
      'This is not a sign that something is wrong. It is the transition.',
      'Research on boredom shows that moderate periods of understimulation — the gap between external structure and internal direction — are the entry point for deeper engagement. The restlessness precedes initiative. The discomfort precedes absorption. Children who are rescued from this discomfort immediately, given stimulation or shorter tasks, never learn what comes after.',
      'What comes after is immersion.',
      'The practice is simply to remain. Stay with the task past the restlessness. Don\'t interpret difficulty as incapability. The nervous system is adjusting. In most cases, if you stay for eight to twelve minutes, the internal noise quiets. The problem begins to feel navigable. Attention settles.',
      'This is the part that cannot be skipped. There is no shortcut through the doorway.',
    ],
    pull: 'Boredom is not the absence of immersion. It is the entrance.',
  },
  {
    number: '05',
    title: 'Build the habit — not the willpower',
    body: [
      'Willpower is unreliable. It depletes across the day. It works against mood. It cannot be summoned on command.',
      'Habits are different. Research on habit formation shows that behaviors repeated in consistent contexts become increasingly automatic — requiring less decision-making, less resistance, less conscious effort over time. In one widely cited study, habits formed over an average of 66 days of repetition. The behavior became effortless not because the person became stronger, but because the brain stopped having to decide.',
      'Applied to attention: what a child repeatedly does in the first moments of discomfort — stays or switches — becomes their default. If they routinely switch to stimulation when focus becomes difficult, that becomes automatic. If they routinely remain, that becomes automatic.',
      'The goal is not to build willpower. It is to build the system that makes willpower unnecessary.',
      'Same time. Same space. Same entry ritual. Same structure. Repetition is the training. The practice is the compound interest. Pressure won\'t get you there. Consistent repetition will.',
    ],
    pull: 'You don\'t need more discipline. You need a better system.',
  },
  {
    number: '06',
    title: 'Recover deliberately — endurance is cycles, not constant exertion',
    body: [
      'Mental endurance is not built through continuous strain. It is built through cycles of activation and recovery — the same way physical endurance is built.',
      'Research on sustained attention tasks shows that performance declines steadily without breaks. Brief rest intervals inserted between demanding sessions improve subsequent accuracy compared to uninterrupted conditions. A twenty-five minute session followed by a five-minute break outperforms forty-five minutes of grinding.',
      'Sleep is the most powerful form of recovery. Large-scale developmental research involving over 11,000 children found that those sleeping fewer than nine hours showed significantly reduced working memory, executive function, and sustained attention the following day. Sleep is not downtime from focus training. It is the mechanism by which the gains from focus training are consolidated.',
      'Quiet also functions as recovery. In noise-saturated environments, the nervous system rarely fully resets. Brief periods of silence — not sleep, just quiet — allow sensory systems to recalibrate.',
      'Rest is not weakness. It is preparation for the next session.',
    ],
    pull: 'The deepest thinkers don\'t outwork everyone. They recover better.',
  },
  {
    number: '07',
    title: 'Do it again tomorrow — duration is where depth lives',
    body: [
      'A single immersion session is valuable. Ten sessions begin to change the brain. A hundred sessions change the person.',
      'Research on attention as a trainable capacity shows that sustained, structured practice — not intensity, not urgency — is the mechanism of improvement. Children exposed to stable daily rhythms and consistent work routines gradually show stronger executive functioning, better emotional regulation, and higher task persistence across years. These gains are not dramatic. They are incremental. And they compound.',
      'The fifth session feels different from the first. The thirtieth feels different from the fifth. At some point, the discomfort of the entry phase shortens. Attention settles faster. The resistance softens.',
      'This is not motivation. It is training. The nervous system has simply learned what comes after the discomfort. It begins to anticipate the absorption.',
      'Deep focus is not a personality trait. It is not a gift. It is not something some people have and others lack. It is what happens when the right conditions are repeated consistently over time.',
      'The future belongs to those who can remain. Not because they were born with the capacity — but because they practiced it.',
    ],
    pull: 'Depth is not born. It is accumulated.',
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
    <div style={{ background: '#0d0d0d', minHeight: '100vh', color: '#e8e0d0', fontFamily: 'Georgia, serif' }}>

      {/* Nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(13,13,13,0.95)',
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
          <Link href="/lp" style={{
            fontFamily: 'system-ui, sans-serif', fontSize: '13px', color: 'rgba(232,224,208,0.55)',
            textDecoration: 'none', letterSpacing: '0.5px',
          }}>The Science</Link>
          <a href={downloadUrl} style={{
            background: '#f5e070', color: '#1a1600',
            padding: '8px 18px', borderRadius: '6px',
            fontFamily: 'system-ui, sans-serif', fontSize: '13px', fontWeight: 700,
            textDecoration: 'none', letterSpacing: '0.3px',
          }}>Download Free</a>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ padding: 'clamp(60px,10vh,120px) clamp(20px,5vw,80px) clamp(40px,6vh,80px)', maxWidth: '780px', margin: '0 auto' }}>
        <p style={{
          fontFamily: 'system-ui, sans-serif', fontSize: '12px', letterSpacing: '4px',
          color: 'rgba(245,224,112,0.7)', textTransform: 'uppercase', marginBottom: '28px',
        }}>A Guide to Deep Focus</p>

        <h1 style={{
          fontSize: 'clamp(42px,6vw,72px)', fontWeight: 400, lineHeight: 1.08,
          color: '#f0e8d8', marginBottom: '32px', letterSpacing: '-0.5px',
        }}>
          How to Immerse
        </h1>

        <p style={{
          fontSize: 'clamp(17px,2vw,21px)', lineHeight: 1.75, color: 'rgba(232,224,208,0.72)',
          maxWidth: '620px', fontStyle: 'italic',
        }}>
          Immersion is not a personality trait. It is not something some minds do naturally and others cannot. It is a state — specific, learnable, repeatable — and like any trained capacity, it responds to the right conditions.
        </p>

        <div style={{ margin: '48px 0', height: '1px', background: 'linear-gradient(to right, rgba(245,224,112,0.3), transparent)' }} />

        <p style={{ fontSize: '18px', lineHeight: 1.8, color: 'rgba(232,224,208,0.65)' }}>
          What follows is a practical framework drawn from the research behind StudyBanana. Not tips. Not hacks. The actual mechanics of how deep focus forms — and what consistently prevents it.
        </p>
      </div>

      {/* Stages */}
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 clamp(20px,5vw,80px)' }}>
        {STAGES.map((stage, i) => (
          <div key={i} style={{
            marginBottom: 'clamp(70px,10vh,110px)',
            paddingTop: i > 0 ? 'clamp(70px,10vh,110px)' : 0,
            borderTop: i > 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
          }}>
            {/* Stage number */}
            <div style={{
              fontFamily: 'system-ui, sans-serif', fontSize: '11px', letterSpacing: '4px',
              color: 'rgba(245,224,112,0.5)', textTransform: 'uppercase', marginBottom: '20px',
            }}>
              Stage {stage.number}
            </div>

            {/* Title */}
            <h2 style={{
              fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 400, lineHeight: 1.2,
              color: '#f0e8d8', marginBottom: '36px', letterSpacing: '-0.2px',
            }}>
              {stage.title}
            </h2>

            {/* Body paragraphs */}
            {stage.body.map((para, j) => (
              <p key={j} style={{
                fontSize: 'clamp(16px,1.8vw,18px)', lineHeight: 1.85,
                color: 'rgba(232,224,208,0.72)', marginBottom: '22px',
              }}>
                {para}
              </p>
            ))}

            {/* Pull quote */}
            <blockquote style={{
              margin: '40px 0 0',
              paddingLeft: '28px',
              borderLeft: '2px solid rgba(245,224,112,0.35)',
              fontStyle: 'italic',
              fontSize: 'clamp(17px,2vw,20px)',
              lineHeight: 1.65,
              color: 'rgba(245,224,112,0.8)',
            }}>
              {stage.pull}
            </blockquote>
          </div>
        ))}
      </div>

      {/* Closing — The Environment is the Tool */}
      <div style={{
        margin: 'clamp(60px,8vh,100px) auto 0',
        padding: 'clamp(50px,8vh,90px) clamp(20px,5vw,80px)',
        maxWidth: '780px',
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}>
        <p style={{
          fontFamily: 'system-ui, sans-serif', fontSize: '11px', letterSpacing: '4px',
          color: 'rgba(245,224,112,0.5)', textTransform: 'uppercase', marginBottom: '28px',
        }}>The Environment Is the Tool</p>

        <h2 style={{
          fontSize: 'clamp(28px,4vw,46px)', fontWeight: 400, lineHeight: 1.15,
          color: '#f0e8d8', marginBottom: '32px',
        }}>
          You cannot think your way into the right environment.<br />
          You have to build it.
        </h2>

        <p style={{ fontSize: 'clamp(16px,1.8vw,18px)', lineHeight: 1.85, color: 'rgba(232,224,208,0.65)', marginBottom: '24px' }}>
          Every principle in this guide — calm before starting, protecting entry, structural protection from distraction, consistent repetition, deliberate recovery — depends on the environment being arranged to support it.
        </p>
        <p style={{ fontSize: 'clamp(16px,1.8vw,18px)', lineHeight: 1.85, color: 'rgba(232,224,208,0.65)', marginBottom: '24px' }}>
          StudyBanana was built around this research. Full-screen mode removes visual clutter at the moment the nervous system most needs simplicity. Calm music provides the physiological baseline immersion requires. The Pomodoro timer structures sessions and recovery in cycles that build endurance. The parental lock makes the commitment structural — the environment stays closed so the entry phase can complete. The AI assistant handles blockers before they break the session. The built-in dictionary, encyclopedia, and quiz keep the session alive without leaving the environment.
        </p>
        <p style={{ fontSize: 'clamp(16px,1.8vw,18px)', lineHeight: 1.85, color: 'rgba(232,224,208,0.65)', marginBottom: '40px' }}>
          None of this replaces the practice. The repetition, the patience, the willingness to stay through the discomfort — that is still the student's work. But the environment determines whether the practice is even possible.
        </p>

        {/* Final quote */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(245,224,112,0.05) 0%, rgba(245,224,112,0.02) 100%)',
          border: '1px solid rgba(245,224,112,0.15)',
          borderRadius: '8px',
          padding: 'clamp(28px,4vh,48px) clamp(24px,4vw,48px)',
          marginBottom: '48px',
        }}>
          <p style={{
            fontSize: 'clamp(19px,2.5vw,26px)', fontStyle: 'italic', lineHeight: 1.6,
            color: 'rgba(245,224,112,0.85)', marginBottom: '16px',
          }}>
            "The future will belong to those who can remain."
          </p>
          <p style={{
            fontFamily: 'system-ui, sans-serif', fontSize: '12px', letterSpacing: '2px',
            color: 'rgba(245,224,112,0.4)', textTransform: 'uppercase',
          }}>
            — The Immersion Effect
          </p>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px' }}>
          <a
            href={downloadUrl}
            style={{
              display: 'inline-block',
              background: '#f5e070', color: '#1a1600',
              padding: '16px 36px', borderRadius: '8px',
              fontFamily: 'system-ui, sans-serif', fontSize: '16px', fontWeight: 700,
              textDecoration: 'none', letterSpacing: '0.3px',
            }}
          >
            {downloadLabel} — Free
          </a>
          <p style={{
            fontFamily: 'system-ui, sans-serif', fontSize: '13px',
            color: 'rgba(232,224,208,0.35)', margin: 0,
          }}>
            Mac &amp; Windows · No account required to start
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: 'clamp(30px,5vh,50px) clamp(20px,5vw,80px)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '16px',
        maxWidth: '1200px', margin: '60px auto 0',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <LogoIcon size={24} />
          <span style={{ fontFamily: 'system-ui, sans-serif', fontSize: '13px', color: 'rgba(232,224,208,0.35)' }}>
            © 2025 StudyBanana
          </span>
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <Link href="/lp" style={{ fontFamily: 'system-ui, sans-serif', fontSize: '13px', color: 'rgba(232,224,208,0.35)', textDecoration: 'none' }}>The Science</Link>
          <Link href="/" style={{ fontFamily: 'system-ui, sans-serif', fontSize: '13px', color: 'rgba(232,224,208,0.35)', textDecoration: 'none' }}>Home</Link>
        </div>
      </footer>

    </div>
  )
}
