import type { Metadata } from 'next'
import VsNav from './VsNav'

export const metadata: Metadata = {
  title: 'StudyBanana vs Other Study Apps — Which Is Best for Your Kids?',
  description: 'Compare StudyBanana with Forest, Cold Turkey, Freedom, and Be Focused. See which focus app actually works for students and families.',
}

const comparisons = [
  {
    slug: 'forest',
    name: 'Forest App',
    emoji: '🌳',
    tagline: 'The plant-growing phone app vs. the full study environment',
    best: 'Mobile, casual gamified focus',
  },
  {
    slug: 'cold-turkey',
    name: 'Cold Turkey',
    emoji: '🦃',
    tagline: 'The hardcore blocker vs. the engaging study tool',
    best: 'Adults who need brutal site blocking',
  },
  {
    slug: 'freedom',
    name: 'Freedom',
    emoji: '🔓',
    tagline: 'The cross-platform blocker vs. the all-in-one study app',
    best: 'Cross-device distraction blocking',
  },
  {
    slug: 'be-focused',
    name: 'Be Focused',
    emoji: '⏱️',
    tagline: 'The simple Pomodoro timer vs. the complete study environment',
    best: 'Minimal Pomodoro tracking',
  },
]

export default function VsIndexPage() {
  return (
    <div className="min-h-screen bg-[#fff9ec] text-[#2a241f]">
      <VsNav />

      <main className="mx-auto max-w-4xl px-6 pb-24 pt-12">
        <div className="text-center mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ffd54f]/60 bg-[#ffd54f]/20 px-4 py-1.5 text-sm font-medium text-[#7a5c00]">
            🍌 Honest comparisons · No fluff
          </div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl leading-tight">
            StudyBanana vs.<br />Other Study Apps
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-black/55 leading-relaxed">
            There are a lot of "focus" apps out there. Here's how StudyBanana compares to the most popular ones — and who each one is actually best for.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {comparisons.map(c => (
            <a
              key={c.slug}
              href={`/vs/${c.slug}`}
              className="group rounded-2xl border border-black/8 bg-white p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="text-3xl mb-3">{c.emoji}</div>
              <h2 className="text-xl font-semibold mb-1">StudyBanana vs. {c.name}</h2>
              <p className="text-sm text-black/50 mb-4">{c.tagline}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-black/35 bg-black/5 rounded-full px-3 py-1">{c.name} is best for: {c.best}</span>
                <span className="text-sm font-medium text-[#7a5c00] group-hover:translate-x-0.5 transition-transform">Compare →</span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-2xl bg-[#2a241f] text-white p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Ready to try StudyBanana?</h2>
          <p className="text-white/60 mb-6 max-w-sm mx-auto">Free to download. No account needed. Works on Mac and Windows.</p>
          <a
            href="/#download"
            className="inline-block rounded-full bg-[#ffd54f] text-[#2a241f] px-8 py-3 font-bold text-sm hover:bg-yellow-300 transition"
          >
            Download Free →
          </a>
        </div>
      </main>
    </div>
  )
}
