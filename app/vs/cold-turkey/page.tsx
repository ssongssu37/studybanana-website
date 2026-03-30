import type { Metadata } from 'next'
import VsNav from '../VsNav'

export const metadata: Metadata = {
  title: 'StudyBanana vs Cold Turkey — Which Is Better for Focused Studying?',
  description: 'Cold Turkey blocks websites with an iron fist. StudyBanana replaces them with a focused study environment. See which approach actually helps students learn.',
  keywords: 'StudyBanana vs Cold Turkey, Cold Turkey alternative, focus app for students, website blocker vs study app, Cold Turkey Blocker comparison',
}

const rows = [
  { feature: 'Parental lock / PIN',       sb: true,  ct: false, note: 'Cold Turkey has no parental controls' },
  { feature: 'Built-in focus music',      sb: true,  ct: false, note: 'StudyBanana: 20 curated tracks' },
  { feature: 'AI homework help',          sb: true,  ct: false, note: 'Ask questions, get instant explanations' },
  { feature: 'Pomodoro timer',            sb: true,  ct: true,  note: 'Cold Turkey has a basic timer' },
  { feature: 'Notes & writing pad',       sb: true,  ct: false, note: '' },
  { feature: 'Website / app blocking',    sb: false, ct: true,  note: 'Cold Turkey is a powerful site blocker' },
  { feature: 'Unbypassable lock',         sb: true,  ct: true,  note: 'Both can lock users in (Cold Turkey: scheduled; StudyBanana: PIN)' },
  { feature: 'Works on Mac & Windows',    sb: true,  ct: true,  note: '' },
  { feature: 'Free plan available',       sb: true,  ct: true,  note: 'Both have free versions' },
  { feature: 'Kid-friendly interface',    sb: true,  ct: false, note: 'Cold Turkey is a utility, not a study environment' },
  { feature: 'Positive / engaging UX',   sb: true,  ct: false, note: 'StudyBanana is designed to be inviting, not punishing' },
]

export default function VsColdTurkeyPage() {
  return (
    <div className="min-h-screen bg-[#fff9ec] text-[#2a241f]">
      <VsNav />

      <main className="mx-auto max-w-4xl px-6 pb-24 pt-10">

        <div className="mb-8 text-sm text-black/40">
          <a href="/vs" className="hover:text-black transition">All comparisons</a>
          <span className="mx-2">/</span>
          <span>StudyBanana vs Cold Turkey</span>
        </div>

        <div className="text-center mb-14">
          <div className="mb-5 inline-flex items-center gap-3 text-4xl">
            <span>🍌</span>
            <span className="text-2xl text-black/20 font-light">vs</span>
            <span>🦃</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl leading-tight">
            StudyBanana vs. Cold Turkey
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-black/55 leading-relaxed">
            Cold Turkey is one of the most aggressive website blockers ever built — once it's on, even restarting your computer won't stop it. StudyBanana takes a different approach: instead of blocking the bad, it replaces it with something better. Here's when each one makes sense.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mb-14">
          <div className="rounded-2xl bg-[#ffd54f]/20 border border-[#ffd54f]/50 p-6">
            <div className="text-2xl mb-2">🍌</div>
            <h2 className="font-semibold text-lg mb-2">StudyBanana is better if…</h2>
            <ul className="space-y-2 text-sm text-black/65">
              <li>✓ You have kids who need a structured study environment</li>
              <li>✓ You want music, AI, and a timer — not just blocking</li>
              <li>✓ You want a parental PIN so kids can't quit study mode</li>
              <li>✓ You want something kids actually enjoy using</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-black/[0.03] border border-black/8 p-6">
            <div className="text-2xl mb-2">🦃</div>
            <h2 className="font-semibold text-lg mb-2">Cold Turkey is better if…</h2>
            <ul className="space-y-2 text-sm text-black/65">
              <li>✓ You're an adult who needs to block specific websites on a schedule</li>
              <li>✓ You want the nuclear option — a blocker that can't be bypassed at all</li>
              <li>✓ You only need blocking, not a full study environment</li>
              <li>✓ You want to block apps, not just websites</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Feature comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-black/8 bg-white shadow-sm mb-14">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-black/8">
                <th className="text-left px-5 py-4 font-semibold text-black/40 w-1/2">Feature</th>
                <th className="text-center px-4 py-4 font-semibold text-[#7a5c00]">🍌 StudyBanana</th>
                <th className="text-center px-4 py-4 font-semibold text-black/40">🦃 Cold Turkey</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-black/[0.015]'}>
                  <td className="px-5 py-3.5 text-black/70">
                    <span className="font-medium text-[#2a241f]">{row.feature}</span>
                    {row.note && <span className="block text-xs text-black/35 mt-0.5">{row.note}</span>}
                  </td>
                  <td className="text-center px-4 py-3.5">
                    {row.sb ? <span className="text-green-600 font-bold text-base">✓</span> : <span className="text-black/20 text-base">—</span>}
                  </td>
                  <td className="text-center px-4 py-3.5">
                    {row.ct ? <span className="text-green-600 font-bold text-base">✓</span> : <span className="text-black/20 text-base">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-2 mb-14">
          <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-sm">
            <div className="text-sm font-bold uppercase tracking-widest text-black/30 mb-2">🍌 StudyBanana</div>
            <div className="text-3xl font-bold mb-1">Free</div>
            <p className="text-sm text-black/50 mb-4">Parental lock, timer, music, and AI help all in the free plan. Premium is $5/month for unlimited features.</p>
            <a href="/#download" className="block text-center rounded-full bg-[#2a241f] text-white py-2.5 text-sm font-medium hover:bg-black/80 transition">
              Download Free →
            </a>
          </div>
          <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-sm">
            <div className="text-sm font-bold uppercase tracking-widest text-black/30 mb-2">🦃 Cold Turkey</div>
            <div className="text-3xl font-bold mb-1">Free / $39</div>
            <p className="text-sm text-black/50 mb-4">Basic blocking is free. Cold Turkey Pro is a one-time $39 purchase for advanced features like scheduled blocks.</p>
            <span className="block text-center rounded-full border border-black/10 py-2.5 text-sm text-black/40">One-time purchase</span>
          </div>
        </div>

        <div className="prose prose-sm max-w-none text-black/65 space-y-6 mb-14">
          <h2 className="text-2xl font-semibold text-[#2a241f]">The core philosophy difference</h2>
          <p>
            Cold Turkey works by <strong>punishment</strong> — it takes things away. Block YouTube, block Reddit, block Twitter. What's left is a blank screen and willpower. For highly motivated adults who just need to stop themselves from reflexively opening distracting sites, this works extremely well.
          </p>
          <p>
            StudyBanana works by <strong>replacement</strong> — it gives you a better environment to go to. Instead of removing distractions and leaving nothing, it fills the screen with music, a timer, notes, weather, and an AI that can help with homework. For kids especially, "here's a place to focus" works better than "you're not allowed to be anywhere else."
          </p>

          <h2 className="text-2xl font-semibold text-[#2a241f]">Can you use Cold Turkey and StudyBanana together?</h2>
          <p>
            Yes, and it can be a powerful combo. Use Cold Turkey to block social media and gaming sites on a schedule, and use StudyBanana as the dedicated study environment your child opens during homework time. The two tools solve different parts of the distraction problem and don't conflict with each other.
          </p>

          <h2 className="text-2xl font-semibold text-[#2a241f]">Is Cold Turkey safe for kids?</h2>
          <p>
            Cold Turkey was designed for adults. It has no parental controls and no kid-friendly interface — it's a power tool for people who want to block themselves. If you're setting it up on a child's computer, you'd have to manage it yourself, and there's no way to enforce a study session from the parent's end. StudyBanana's PIN lock gives parents that control directly.
          </p>
        </div>

        <div className="rounded-2xl bg-[#2a241f] text-white p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Give your child a place to focus</h2>
          <p className="text-white/55 mb-6 max-w-md mx-auto">StudyBanana is free to download. No account, no setup — just open it and study.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/oto?platform=mac" className="rounded-full bg-[#ffd54f] text-[#2a241f] px-7 py-3 font-bold text-sm hover:bg-yellow-300 transition">
              Download for Mac →
            </a>
            <a href="/oto?platform=windows" className="rounded-full border border-white/20 text-white px-7 py-3 font-medium text-sm hover:bg-white/10 transition">
              Download for Windows
            </a>
          </div>
        </div>

      </main>
    </div>
  )
}
