'use client'
import { useState, useEffect } from 'react'
import LogoIcon from '@/components/LogoIcon'

const MAC_URL = 'https://github.com/ssongssu37/studybanana-website/releases/download/v1.2.0/StudyBanana-1.0.9.dmg'
const WIN_URL = 'https://github.com/ssongssu37/studybanana-website/releases/download/v1.2.0/StudyBanana-1.0.9-win.zip'
const MONTHLY_PRICE_ID = 'price_1TFMWKCDDRCjONFZueHxhQtJ'

const TOOLS = [
  {
    emoji: '🎵',
    label: 'Calm the nervous system first',
    desc: 'Research cited in The Immersion Effect shows a 23% drop in working memory performance under stress. Tension doesn\'t sharpen focus — it shortens it. StudyBanana\'s 20 tracks of ambient, lo-fi, jazz, and piano music aren\'t background noise. They are the physiological condition the immersion state requires.',
  },
  {
    emoji: '⏱️',
    label: 'Build duration through repetition, not pressure',
    desc: 'The book\'s research on habit formation shows attention endurance grows through consistent repetition — not intensity, not willpower. The built-in Pomodoro timer structures sessions that gradually extend. Twenty-five minutes is the starting point, not the ceiling. The timer is the training system.',
  },
  {
    emoji: '🔒',
    label: 'Protect the entry point — structurally',
    desc: 'Research on deep focus consistently shows the first five minutes determine whether immersion happens at all. StudyBanana opens full-screen and stays full-screen. The parental PIN lock makes that commitment structural — the child cannot exit the environment on impulse. Environmental design replaces willpower.',
  },
  {
    emoji: '🤖',
    label: 'Remove the friction that breaks immersion',
    desc: 'Frustration without resolution is one of the primary causes of session abandonment. When a child hits a genuine blocker and can\'t move forward, the session ends — and so does the practice. The built-in AI assistant handles the specific moments that would otherwise pull a child out of deep work. Not to make thinking easy. To keep the session alive.',
  },
  {
    emoji: '📚',
    label: 'Feed curiosity without fragmentation',
    desc: 'Opening a browser to look something up ends the immersion session. Rabbit holes, notifications, and autoplay do the rest. StudyBanana\'s built-in encyclopedia — 64 topics across 8 subjects — keeps reference material inside the environment. Curiosity gets honored. The state stays intact.',
  },
  {
    emoji: '📝',
    label: 'Writing as immersion practice',
    desc: 'Articulating a thought in writing requires staying with it longer than any other cognitive act. The multi-page notes editor turns assignments into an immersion exercise — not just task completion. The child learns to develop an idea, not just record it.',
  },
  {
    emoji: '💬',
    label: 'Set intention before the session begins',
    desc: 'The brain does not switch from reactive mode to reflective mode automatically. A daily rotating quote is not motivational decoration — it is the signal that something different is about to happen. That brief mental pivot, repeated daily, becomes part of how the child enters the immersion state.',
  },
  {
    emoji: '📖',
    label: 'Remove comprehension gaps before they break the session',
    desc: 'When a child hits an unknown word mid-reading, they face a silent choice: skip it and lose meaning, or look it up and leave the environment. Both options damage the session. The built-in dictionary removes that choice. Comprehension stays intact. The state stays intact.',
  },
  {
    emoji: '🧠',
    label: 'Active recall — the mechanism that actually consolidates learning',
    desc: 'Passive reading creates the illusion of understanding. Testing — even briefly — forces retrieval, which is the actual process by which information moves into long-term memory. The built-in trivia quiz turns the end of a study session into an act of genuine retention, not just time spent.',
  },
  {
    emoji: '⌨️',
    label: 'Build typing fluency so thinking can move faster than the keys',
    desc: 'A child who types slowly spends working memory on the mechanical act of typing — memory that should be available for thought. The typing practice game builds automaticity deliberately. When the keystrokes become invisible, the ideas move forward unobstructed.',
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
    <div className="min-h-screen bg-[#fafaf8] text-[#1a1a1a]" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>

      {/* Sticky nav */}
      <div className="border-b border-black/10 bg-[#fafaf8]/95 backdrop-blur sticky top-0 z-20">
        <div className="max-w-2xl mx-auto px-5 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <LogoIcon size={32} />
            <span className="font-bold text-sm tracking-tight" style={{ fontFamily: 'system-ui, sans-serif' }}>StudyBanana</span>
          </a>
          <a
            href={downloadUrl}
            className="rounded-full bg-[#ffd54f] text-[#1a1a1a] text-xs font-bold px-4 py-1.5 hover:bg-yellow-300 transition"
            style={{ fontFamily: 'system-ui, sans-serif' }}
          >
            {downloadLabel}
          </a>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-5">

        {/* Category tag */}
        <div className="pt-10 pb-3">
          <span className="text-xs font-bold tracking-widest text-[#999] uppercase" style={{ fontFamily: 'system-ui, sans-serif' }}>
            Children · Focus · The Immersion Effect
          </span>
        </div>

        {/* Hero headline */}
        <h1 className="text-3xl md:text-[2.6rem] font-bold leading-[1.2] text-[#111] mb-5">
          The Future Will Belong to Those Who Can Remain
        </h1>

        {/* Deck */}
        <p className="text-lg md:text-xl text-[#444] leading-relaxed mb-6 italic">
          A study app built on the science of the immersion state — not another distraction wearing an educational label.
        </p>

        {/* Byline */}
        <div className="flex items-center gap-3 pb-6 border-b border-black/10 mb-8">
          <div className="w-9 h-9 rounded-full bg-[#1a1814] flex items-center justify-center text-sm text-[#ffd54f] font-bold" style={{ fontFamily: 'system-ui' }}>IE</div>
          <div style={{ fontFamily: 'system-ui, sans-serif' }}>
            <p className="text-xs font-semibold text-[#333]">Based on <em>The Immersion Effect</em> — a book about raising children who can think deeply in a distracted world</p>
            <p className="text-xs text-[#999]">Updated March 2026 · 6 min read</p>
          </div>
        </div>

        {/* Opening */}
        <p className="text-base md:text-lg text-[#333] leading-[1.85] mb-5">
          Something is changing in children today. Not intelligence — they are sharper than ever. They navigate devices effortlessly, absorb information quickly, and switch between tasks with impressive speed.
        </p>
        <p className="text-base md:text-lg text-[#333] leading-[1.85] mb-5">
          But <em>staying</em> with something. That is different.
        </p>
        <p className="text-base md:text-lg text-[#333] leading-[1.85] mb-5">
          You might see it when your child starts homework and drifts after a few minutes. Or when they open a book, read two pages, and reach for something else. Or when they build something halfway and suddenly decide they are "bored."
        </p>
        <p className="text-base md:text-lg text-[#333] leading-[1.85] mb-8">
          None of these moments feel alarming on their own. But the research tells a clear story.
        </p>

        {/* Screenshot 1 */}
        <div className="mb-10">
          <img
            src="/ss-110-2.png"
            alt="StudyBanana — the immersive study environment"
            className="w-full rounded-2xl shadow-2xl border border-black/8"
          />
          <p className="text-center text-xs text-[#aaa] mt-2" style={{ fontFamily: 'system-ui' }}>StudyBanana — designed for depth, not distraction</p>
        </div>

        {/* SECTION: The Science */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-5 leading-tight">
          Attention Is Not a Trait. It Is a System.
        </h2>

        <p className="text-base md:text-lg text-[#333] leading-[1.85] mb-5">
          When a child struggles to focus, the instinct is to interpret it as a character issue — lack of discipline, lack of effort, lack of will. But attention does not behave like eye color. It behaves like a skill that develops — or atrophies — based on what it is repeatedly asked to do.
        </p>

        <p className="text-base md:text-lg text-[#333] leading-[1.85] mb-5">
          In a nationally representative study of over 11,000 adolescents, average recreational screen time reached more than seven hours per day. Parallel studies tracking attention in classroom settings show measurable increases in off-task behavior compared to cohorts from the early 2000s. In research following more than 8,000 children over time, those with higher social media use showed increases in inattention symptoms over months — not days.
        </p>

        <p className="text-base md:text-lg text-[#333] leading-[1.85] mb-8">
          These patterns are not signs of moral failure. They are signs of environmental adaptation. The brain strengthens what it uses most. What it uses most right now is short bursts of novelty.
        </p>

        {/* Pull quote 1 */}
        <blockquote className="border-l-4 border-[#ffd54f] pl-6 my-10">
          <p className="text-xl md:text-2xl font-bold italic text-[#1a1814] leading-snug">
            &ldquo;The same brain that learns to scroll can learn to stay. The same nervous system that reacts to novelty can stabilize around depth.&rdquo;
          </p>
          <footer className="mt-3 text-sm text-[#888]" style={{ fontFamily: 'system-ui' }}>— <em>The Immersion Effect</em></footer>
        </blockquote>

        {/* SECTION: Two Dopamines */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-5 leading-tight">
          Two Reward Systems. Two Very Different Futures.
        </h2>

        <p className="text-base md:text-lg text-[#333] leading-[1.85] mb-5">
          Not all stimulation is equal. Neuroscientists describe two distinct dopamine pathways — and understanding them changes how we see the difference between scrolling and studying.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
          <div className="rounded-2xl bg-[#fff3f3] border border-red-100 p-6">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-bold text-base text-[#111] mb-2" style={{ fontFamily: 'system-ui, sans-serif' }}>Fast Dopamine</h3>
            <p className="text-sm text-[#555] leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>Games, social feeds, notifications. Spikes quickly — then crashes. Leaves the brain restless, seeking the next hit. Trains the mind for switching, not staying.</p>
          </div>
          <div className="rounded-2xl bg-[#f0fff4] border border-green-100 p-6">
            <div className="text-2xl mb-2">🌊</div>
            <h3 className="font-bold text-base text-[#111] mb-2" style={{ fontFamily: 'system-ui, sans-serif' }}>Deep Dopamine</h3>
            <p className="text-sm text-[#555] leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>Sustained thinking, problem-solving, creating. Builds steadily without crashing. Produces lasting satisfaction and the quiet confidence of real competence.</p>
          </div>
        </div>

        <p className="text-base md:text-lg text-[#333] leading-[1.85] mb-8">
          The difference is not willpower. It is which system gets trained. Children who spend their afternoons chasing fast dopamine are not weaker — they are adapted. The goal is to give them an environment where the other system has room to grow.
        </p>

        {/* SECTION: Immersion State */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-5 leading-tight">
          The Immersion State — Where Real Growth Happens
        </h2>

        <p className="text-base md:text-lg text-[#333] leading-[1.85] mb-5">
          When a child stays with a problem long enough — past the discomfort, past the impulse to switch — something shifts. Attention narrows. The noise fades. The task becomes absorbing. Only me and the problem.
        </p>

        <p className="text-base md:text-lg text-[#333] leading-[1.85] mb-5">
          That is the immersion state. And research consistently shows it is not intensity or pressure that produces it — it is <em>relaxed continuity</em>. The prefrontal cortex stabilizes after approximately 20–30 minutes of continuous engagement. Working memory endurance improves. Attentional fluctuation decreases.
        </p>

        <p className="text-base md:text-lg text-[#333] leading-[1.85] mb-5">
          The reward that comes from staying — &ldquo;I worked through that and figured it out&rdquo; — is different from any external praise. It is internal. It is grounded in memory. And it reduces fear the next time difficulty appears.
        </p>

        <p className="text-base md:text-lg text-[#333] leading-[1.85] mb-8">
          In a longitudinal study of over 3,000 middle school students, intrinsic engagement — the kind that comes from staying, not from being entertained — predicted both academic performance <em>and</em> emotional well-being across multiple years.
        </p>

        {/* Pull quote 2 */}
        <blockquote className="border-l-4 border-[#ffd54f] pl-6 my-10">
          <p className="text-xl md:text-2xl font-bold italic text-[#1a1814] leading-snug">
            &ldquo;Immersion is not intensity. It is the ability to sit with a problem calmly and continuously until the mind reorganizes around it.&rdquo;
          </p>
          <footer className="mt-3 text-sm text-[#888]" style={{ fontFamily: 'system-ui' }}>— <em>The Immersion Effect</em></footer>
        </blockquote>

        {/* Screenshot 2 */}
        <div className="mb-10">
          <img
            src="/ss-110-1.png"
            alt="StudyBanana — the retro study TV"
            className="w-full rounded-2xl shadow-2xl border border-black/8"
          />
        </div>

        {/* SECTION: AI Paradox */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-5 leading-tight">
          The AI Era Makes This More Urgent — Not Less
        </h2>

        <p className="text-base md:text-lg text-[#333] leading-[1.85] mb-5">
          As artificial intelligence systems take over routine cognitive work — summaries, calculations, translations, pattern recognition — a question emerges: what human advantage remains?
        </p>

        <p className="text-base md:text-lg text-[#333] leading-[1.85] mb-5">
          Labor market analyses consistently show that automation disproportionately affects routine tasks. The roles that grow are those requiring complex judgment, creative synthesis, long-horizon reasoning, and the ability to remain with ambiguity. These capacities all depend on one thing: sustained attention.
        </p>

        <p className="text-base md:text-lg text-[#333] leading-[1.85] mb-5">
          If children grow accustomed to offloading effort at the first sign of difficulty — as tools increasingly allow — they miss the very practice that builds cognitive endurance. Conversely, children trained to remain with complexity develop an advantage that technology cannot replicate.
        </p>

        {/* Stat callout */}
        <div className="rounded-2xl bg-[#1a1814] text-white p-7 my-10">
          <p className="text-4xl font-bold text-[#ffd54f] mb-2">45%</p>
          <p className="text-sm text-white/70 leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>
            In a five-year longitudinal study of 3,100 adults, those who dedicated sustained time to a single meaningful project were 45% more likely to report high life satisfaction — compared to those whose time was divided across unrelated pursuits. Sustained engagement, not talent, predicted long-term satisfaction.
          </p>
        </div>

        {/* Pull quote 3 */}
        <blockquote className="border-l-4 border-[#ffd54f] pl-6 my-10">
          <p className="text-xl md:text-2xl font-bold italic text-[#1a1814] leading-snug">
            &ldquo;Sustained attention may become one of the rarest and most valuable skills of the coming decades.&rdquo;
          </p>
          <footer className="mt-3 text-sm text-[#888]" style={{ fontFamily: 'system-ui' }}>— <em>The Immersion Effect</em></footer>
        </blockquote>

        {/* SECTION: The App */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-5 leading-tight">
          StudyBanana Was Built to Create the Conditions for Immersion
        </h2>

        <p className="text-base md:text-lg text-[#333] leading-[1.85] mb-5">
          Most educational apps are still competing for attention. Notifications. Streaks. Points. They use the same fast-dopamine mechanics as the apps they are meant to replace.
        </p>

        <p className="text-base md:text-lg text-[#333] leading-[1.85] mb-5">
          StudyBanana is different. It is a distraction-free study environment designed around one principle: create the conditions where the immersion state can emerge. A calm space. No algorithmic feeds. No interruptions. Music that supports the parasympathetic nervous system. Structured time that builds duration gradually. A workspace that <em>feels</em> different from entertainment — so the brain treats it differently.
        </p>

        <p className="text-base md:text-lg text-[#333] leading-[1.85] mb-8">
          It opens full-screen. It stays full-screen. Everything a child needs for a complete study session is already inside.
        </p>

        {/* Screenshot 3 */}
        <div className="mb-10">
          <img
            src="/ss-110-3.png"
            alt="StudyBanana channels"
            className="w-full rounded-2xl shadow-2xl border border-black/8"
          />
        </div>

        {/* Tools */}
        <h3 className="text-xl font-bold text-[#111] mb-2 mt-2" style={{ fontFamily: 'system-ui, sans-serif' }}>Ten design decisions — each one rooted in the science</h3>
        <p className="text-sm text-[#888] mb-8" style={{ fontFamily: 'system-ui, sans-serif' }}>Every feature in StudyBanana exists because of a specific finding in attention, neuroscience, or habit research. Nothing is decoration.</p>
        <div className="space-y-0 mb-12">
          {TOOLS.map((t, i) => (
            <div key={i} className={`py-7 flex gap-5 items-start ${i < TOOLS.length - 1 ? 'border-b border-black/8' : ''}`}>
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#fffbf0] border border-[#ffd54f]/30 flex items-center justify-center text-2xl">
                {t.emoji}
              </div>
              <div>
                <h3 className="font-bold text-base text-[#111] mb-2" style={{ fontFamily: 'system-ui, sans-serif' }}>{t.label}</h3>
                <p className="text-sm text-[#555] leading-relaxed" style={{ fontFamily: 'system-ui, sans-serif' }}>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Offer */}
        <div className="rounded-2xl bg-[#1a1814] text-white p-7 mb-10 shadow-2xl">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold uppercase tracking-widest text-white/40" style={{ fontFamily: 'system-ui' }}>StudyBanana Premium</span>
            <span className="rounded-full bg-green-500/20 text-green-300 text-xs font-bold px-3 py-1" style={{ fontFamily: 'system-ui' }}>7-Day Free Trial</span>
          </div>

          <div className="flex items-baseline gap-3 mt-4 mb-1">
            <span className="text-3xl font-bold line-through text-red-400 opacity-60">$10</span>
            <span className="text-5xl font-bold">$5</span>
            <span className="text-base text-white/40" style={{ fontFamily: 'system-ui' }}>/month</span>
          </div>
          <p className="text-xs text-white/40 mb-6" style={{ fontFamily: 'system-ui' }}>No charge for 7 days. Cancel anytime.</p>

          <div className="grid grid-cols-2 gap-2 mb-6">
            {['✓  All 20 music tracks','✓  Unlimited AI homework help','✓  All 10 colour themes','✓  Full kids encyclopedia','✓  Parental PIN lock','✓  All future updates'].map(item => (
              <div key={item} className="text-sm text-white/70" style={{ fontFamily: 'system-ui' }}>{item}</div>
            ))}
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-3 mb-6">
            <span>🛡️</span>
            <span className="text-white/50 text-xs" style={{ fontFamily: 'system-ui' }}>30-day money-back guarantee. No questions asked.</span>
          </div>

          <button
            onClick={handleGetPremium}
            disabled={upgrading}
            className="w-full rounded-full bg-[#ffd54f] text-[#1a1814] py-4 font-bold text-base hover:bg-yellow-300 transition shadow-lg disabled:opacity-50 mb-3"
            style={{ fontFamily: 'system-ui, sans-serif' }}
          >
            {upgrading ? 'Loading…' : '🚀 Start My 7-Day Free Trial — $5/month'}
          </button>

          <a
            href={downloadUrl}
            className="block w-full text-center rounded-full border border-white/15 py-3 text-sm font-medium text-white/50 hover:bg-white/5 transition"
            style={{ fontFamily: 'system-ui, sans-serif' }}
          >
            ↓ Try the free version first ({platform === 'win' ? 'Windows' : 'Mac'})
          </a>
        </div>

        {/* Reviews */}
        <h3 className="text-2xl font-bold text-[#111] mb-2">What Parents Are Saying</h3>
        <div className="flex items-center gap-4 mb-7 p-5 rounded-2xl bg-[#fffbf0] border border-[#ffd54f]/30">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#111]">4.9</div>
            <div className="text-yellow-400 text-lg">★★★★★</div>
            <div className="text-xs text-[#888] mt-1" style={{ fontFamily: 'system-ui' }}>Average rating</div>
          </div>
          <div className="flex-1 space-y-1">
            {[5,4,3].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <span className="text-xs text-[#888] w-4" style={{ fontFamily: 'system-ui' }}>{s}★</span>
                <div className="flex-1 bg-black/8 rounded-full h-1.5 overflow-hidden">
                  <div className="h-full rounded-full bg-[#ffd54f]" style={{width: i===0?'96%':i===1?'3%':'1%'}} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 mb-12">
          {REVIEWS.map((r, i) => (
            <div key={i} className="rounded-xl border border-black/8 p-5 bg-white">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-sm text-[#111]" style={{ fontFamily: 'system-ui' }}>{r.name}</p>
                  <p className="text-xs text-[#888]" style={{ fontFamily: 'system-ui' }}>{r.role}</p>
                </div>
                <span className="text-yellow-400 text-sm">{'★'.repeat(r.stars)}</span>
              </div>
              <p className="text-sm text-[#444] leading-relaxed" style={{ fontFamily: 'system-ui' }}>&ldquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </div>

        {/* Closing essay */}
        <div className="border-t border-black/10 pt-10 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#111] mb-6 leading-tight">
            Depth Is Not Lost. It Is Undertrained.
          </h2>
          <p className="text-base md:text-lg text-[#333] leading-[1.85] mb-5">
            Children are not broken. They have not lost the capacity for depth. That capacity is simply being outcompeted — every hour, every day — by an environment engineered for the opposite.
          </p>
          <p className="text-base md:text-lg text-[#333] leading-[1.85] mb-5">
            The research on neural plasticity is clear: patterns can change. Intervention studies show that even after years of fragmented attention habits, measurable improvements occur when consistent structure is introduced. What gets practiced becomes automatic. The habit of staying can be rebuilt — one session at a time.
          </p>
          <p className="text-base md:text-lg text-[#333] leading-[1.85] mb-5">
            This is not about banning screens or turning your home into a monastery. It is about giving your child one protected space — one hour, one focused environment — where depth has a chance to form.
          </p>
          <p className="text-base md:text-lg text-[#555] leading-[1.85] italic">
            StudyBanana is that space.
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center pb-16">
          <p className="text-sm text-[#888] mb-5" style={{ fontFamily: 'system-ui' }}>Join thousands of families already using StudyBanana</p>
          <button
            onClick={handleGetPremium}
            disabled={upgrading}
            className="rounded-full bg-[#ffd54f] text-[#1a1814] px-10 py-4 font-bold text-base hover:bg-yellow-300 transition shadow-lg disabled:opacity-50 mb-4 block mx-auto w-full max-w-sm"
            style={{ fontFamily: 'system-ui, sans-serif' }}
          >
            {upgrading ? 'Loading…' : '🚀 Start Free Trial — $5/month'}
          </button>
          <a href={downloadUrl} className="text-sm text-[#888] hover:text-[#333] underline" style={{ fontFamily: 'system-ui' }}>
            Or download the free version →
          </a>
        </div>

      </div>

      {/* Footer */}
      <div className="border-t border-black/8 py-6 text-center">
        <p className="text-xs text-[#aaa]" style={{ fontFamily: 'system-ui' }}>
          © 2026 StudyBanana · <a href="/" className="hover:text-[#333]">Home</a> · Available for Mac & Windows
        </p>
        <p className="text-xs text-[#ccc] mt-1 italic">Based on <em>The Immersion Effect</em> — raising children who can think deeply in a distracted world</p>
      </div>

    </div>
  )
}
