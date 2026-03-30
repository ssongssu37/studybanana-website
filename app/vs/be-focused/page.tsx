import type { Metadata } from 'next'
import VsNav from '../VsNav'

export const metadata: Metadata = {
  title: 'StudyBanana vs Be Focused — More Than Just a Pomodoro Timer',
  description: 'Be Focused is a simple Pomodoro timer. StudyBanana includes a Pomodoro timer plus music, AI help, parental lock, and notes — all in one distraction-free environment.',
  keywords: 'StudyBanana vs Be Focused, Be Focused alternative, best Pomodoro app for students, Pomodoro timer with music, focus app for kids',
}

const rows = [
  { feature: 'Pomodoro timer',            sb: true, bf: true,  note: 'Both support 25/5/15 min Pomodoro intervals' },
  { feature: 'Parental lock / PIN',       sb: true, bf: false, note: 'Be Focused has no parental controls' },
  { feature: 'Built-in focus music',      sb: true, bf: false, note: '20 curated lo-fi & ambient tracks included' },
  { feature: 'AI homework help',          sb: true, bf: false, note: 'Ask any question and get explanations instantly' },
  { feature: 'Notes & writing pad',       sb: true, bf: false, note: 'Multi-page notes in StudyBanana' },
  { feature: 'Session history / tracking',sb: false,bf: true,  note: 'Be Focused tracks your sessions over time' },
  { feature: 'Task list integration',     sb: false,bf: true,  note: 'Be Focused lets you attach tasks to timer sessions' },
  { feature: 'Works on Mac & Windows',    sb: true, bf: false, note: 'Be Focused is Mac/iOS only' },
  { feature: 'Free plan available',       sb: true, bf: false, note: 'Be Focused requires a one-time purchase' },
  { feature: 'Full-screen study mode',    sb: true, bf: false, note: 'StudyBanana takes over the whole screen' },
  { feature: 'Clock & weather display',   sb: true, bf: false, note: '' },
]

export default function VsBeFocusedPage() {
  return (
    <div className="min-h-screen bg-[#fff9ec] text-[#2a241f]">
      <VsNav />

      <main className="mx-auto max-w-4xl px-6 pb-24 pt-10">

        <div className="mb-8 text-sm text-black/40">
          <a href="/vs" className="hover:text-black transition">All comparisons</a>
          <span className="mx-2">/</span>
          <span>StudyBanana vs Be Focused</span>
        </div>

        <div className="text-center mb-14">
          <div className="mb-5 inline-flex items-center gap-3 text-4xl">
            <span>🍌</span>
            <span className="text-2xl text-black/20 font-light">vs</span>
            <span>⏱️</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl leading-tight">
            StudyBanana vs. Be Focused
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-black/55 leading-relaxed">
            Be Focused is a clean, minimal Pomodoro timer for Mac and iOS. StudyBanana includes a Pomodoro timer too — plus music, an AI tutor, notes, parental lock, and a full-screen study environment. Here's how they compare.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mb-14">
          <div className="rounded-2xl bg-[#ffd54f]/20 border border-[#ffd54f]/50 p-6">
            <div className="text-2xl mb-2">🍌</div>
            <h2 className="font-semibold text-lg mb-2">StudyBanana is better if…</h2>
            <ul className="space-y-2 text-sm text-black/65">
              <li>✓ You want more than just a timer — music, AI, notes, all together</li>
              <li>✓ You need parental lock for kids who can't self-regulate</li>
              <li>✓ You use Windows (Be Focused is Mac/iOS only)</li>
              <li>✓ You want a full-screen environment that replaces the desktop</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-black/[0.03] border border-black/8 p-6">
            <div className="text-2xl mb-2">⏱️</div>
            <h2 className="font-semibold text-lg mb-2">Be Focused is better if…</h2>
            <ul className="space-y-2 text-sm text-black/65">
              <li>✓ You want a minimal Pomodoro tracker with task history</li>
              <li>✓ You use the Mac menu bar and want a discreet timer</li>
              <li>✓ You want to attach tasks to your timer sessions</li>
              <li>✓ You're on iOS and want it to sync with your iPhone</li>
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
                <th className="text-center px-4 py-4 font-semibold text-black/40">⏱️ Be Focused</th>
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
                    {row.bf ? <span className="text-green-600 font-bold text-base">✓</span> : <span className="text-black/20 text-base">—</span>}
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
            <p className="text-sm text-black/50 mb-4">Pomodoro timer, parental lock, music, and AI help are all free. Premium adds unlimited tracks and AI for $5/month.</p>
            <a href="/#download" className="block text-center rounded-full bg-[#2a241f] text-white py-2.5 text-sm font-medium hover:bg-black/80 transition">
              Download Free →
            </a>
          </div>
          <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-sm">
            <div className="text-sm font-bold uppercase tracking-widest text-black/30 mb-2">⏱️ Be Focused</div>
            <div className="text-3xl font-bold mb-1">$4.99</div>
            <p className="text-sm text-black/50 mb-4">One-time purchase on the Mac App Store. Be Focused Pro adds more features for an additional cost. No free tier.</p>
            <span className="block text-center rounded-full border border-black/10 py-2.5 text-sm text-black/40">Paid only</span>
          </div>
        </div>

        <div className="prose prose-sm max-w-none text-black/65 space-y-6 mb-14">
          <h2 className="text-2xl font-semibold text-[#2a241f]">What's the difference between StudyBanana and Be Focused?</h2>
          <p>
            Be Focused is laser-focused on one thing: the Pomodoro technique. It has a beautiful timer, task list integration, and session history. If all you want is a sophisticated Pomodoro tracker, it's one of the best on the market.
          </p>
          <p>
            StudyBanana takes a different approach. The Pomodoro timer is one channel in a larger study environment — you also get background music, an AI tutor, notes, a live clock, weather, and parental lock. The whole app is designed to replace your desktop during study time, not just track your intervals.
          </p>

          <h2 className="text-2xl font-semibold text-[#2a241f]">Does Be Focused work on Windows?</h2>
          <p>
            No — Be Focused is Mac and iOS only. If you or your child uses a Windows computer, StudyBanana is the better option since it runs natively on both Mac and Windows.
          </p>

          <h2 className="text-2xl font-semibold text-[#2a241f]">Is a Pomodoro timer enough for kids?</h2>
          <p>
            For self-motivated students who are already managing their study habits, a Pomodoro app like Be Focused can be plenty. But for kids who struggle to stay on task — or parents who need to lock the study environment until homework is done — StudyBanana's parental PIN and full-screen design make a bigger difference than just a timer.
          </p>
          <p>
            The Pomodoro technique is built into StudyBanana's Channel 6. When a session starts, the full-screen environment handles everything: music plays automatically, the timer runs, and the PIN lock keeps kids from switching away.
          </p>
        </div>

        <div className="rounded-2xl bg-[#2a241f] text-white p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">More than just a timer</h2>
          <p className="text-white/55 mb-6 max-w-md mx-auto">StudyBanana is free to download. Includes Pomodoro, music, AI help, notes, and parental lock — all in one.</p>
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
