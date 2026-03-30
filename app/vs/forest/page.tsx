import type { Metadata } from 'next'
import VsNav from '../VsNav'

export const metadata: Metadata = {
  title: 'StudyBanana vs Forest App — Which Focus App Is Better for Students?',
  description: 'Comparing StudyBanana and Forest App for students and families. See features, pricing, and which app actually helps kids focus on homework.',
  keywords: 'StudyBanana vs Forest, Forest app alternative, best study app for students, focus app for kids, Forest app vs study app',
}

const rows = [
  { feature: 'Parental lock / PIN', sb: true,  forest: false, note: 'Forest has no parental controls' },
  { feature: 'Built-in focus music', sb: true,  forest: false, note: '20 curated lo-fi & ambient tracks' },
  { feature: 'AI homework help',    sb: true,  forest: false, note: 'Ask questions, get explanations' },
  { feature: 'Pomodoro timer',      sb: true,  forest: true,  note: 'Both include a timer' },
  { feature: 'Desktop app (Mac/Windows)', sb: true, forest: false, note: 'Forest is primarily mobile' },
  { feature: 'Notes & writing pad', sb: true,  forest: false, note: 'Multi-page notes in StudyBanana' },
  { feature: 'Works offline',       sb: true,  forest: true,  note: 'Both work without internet' },
  { feature: 'No ads or tracking',  sb: true,  forest: true,  note: 'Both are ad-free' },
  { feature: 'Phone blocking',      sb: false, forest: true,  note: 'Forest locks your phone; StudyBanana is desktop' },
  { feature: 'Gamified rewards',    sb: false, forest: true,  note: 'Forest grows virtual trees and plants real ones' },
  { feature: 'Free tier available', sb: true,  forest: false, note: 'Forest requires purchase; StudyBanana has a free plan' },
]

export default function VsForestPage() {
  return (
    <div className="min-h-screen bg-[#fff9ec] text-[#2a241f]">
      <VsNav />

      <main className="mx-auto max-w-4xl px-6 pb-24 pt-10">

        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-black/40">
          <a href="/vs" className="hover:text-black transition">All comparisons</a>
          <span className="mx-2">/</span>
          <span>StudyBanana vs Forest App</span>
        </div>

        {/* Hero */}
        <div className="text-center mb-14">
          <div className="mb-5 inline-flex items-center gap-3 text-4xl">
            <span>🍌</span>
            <span className="text-2xl text-black/20 font-light">vs</span>
            <span>🌳</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl leading-tight">
            StudyBanana vs. Forest App
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-black/55 leading-relaxed">
            Forest is a beloved mobile app that grows a virtual tree while you focus. StudyBanana is a desktop study environment built for serious work — with music, AI help, a Pomodoro timer, and parental lock. Here's how they compare.
          </p>
        </div>

        {/* Quick verdict */}
        <div className="grid gap-4 sm:grid-cols-2 mb-14">
          <div className="rounded-2xl bg-[#ffd54f]/20 border border-[#ffd54f]/50 p-6">
            <div className="text-2xl mb-2">🍌</div>
            <h2 className="font-semibold text-lg mb-2">StudyBanana is better if…</h2>
            <ul className="space-y-2 text-sm text-black/65">
              <li>✓ You want to lock your kid into study mode with a PIN</li>
              <li>✓ Your child studies on a computer, not a phone</li>
              <li>✓ You want music, AI, and a timer all in one place</li>
              <li>✓ You need something free to start today</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-black/[0.03] border border-black/8 p-6">
            <div className="text-2xl mb-2">🌳</div>
            <h2 className="font-semibold text-lg mb-2">Forest is better if…</h2>
            <ul className="space-y-2 text-sm text-black/65">
              <li>✓ Your child is addicted to their phone, not a computer</li>
              <li>✓ You want gamified rewards (virtual trees, coins)</li>
              <li>✓ You want to contribute to real tree planting</li>
              <li>✓ You prefer a simple, minimal focus timer</li>
            </ul>
          </div>
        </div>

        {/* Comparison table */}
        <h2 className="text-2xl font-semibold mb-6">Feature comparison</h2>
        <div className="overflow-x-auto rounded-2xl border border-black/8 bg-white shadow-sm mb-14">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-black/8">
                <th className="text-left px-5 py-4 font-semibold text-black/40 w-1/2">Feature</th>
                <th className="text-center px-4 py-4 font-semibold text-[#7a5c00]">🍌 StudyBanana</th>
                <th className="text-center px-4 py-4 font-semibold text-black/40">🌳 Forest</th>
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
                    {row.sb
                      ? <span className="text-green-600 font-bold text-base">✓</span>
                      : <span className="text-black/20 text-base">—</span>}
                  </td>
                  <td className="text-center px-4 py-3.5">
                    {row.forest
                      ? <span className="text-green-600 font-bold text-base">✓</span>
                      : <span className="text-black/20 text-base">—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pricing */}
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-2 mb-14">
          <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-sm">
            <div className="text-sm font-bold uppercase tracking-widest text-black/30 mb-2">🍌 StudyBanana</div>
            <div className="text-3xl font-bold mb-1">Free</div>
            <p className="text-sm text-black/50 mb-4">Parental lock, timer, 3 music tracks, AI help — all free. Premium adds unlimited music and AI for $5/month.</p>
            <a href="/#download" className="block text-center rounded-full bg-[#2a241f] text-white py-2.5 text-sm font-medium hover:bg-black/80 transition">
              Download Free →
            </a>
          </div>
          <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-sm">
            <div className="text-sm font-bold uppercase tracking-widest text-black/30 mb-2">🌳 Forest</div>
            <div className="text-3xl font-bold mb-1">$1.99+</div>
            <p className="text-sm text-black/50 mb-4">One-time purchase on iOS/Android. Some features require in-app purchases. No free tier.</p>
            <span className="block text-center rounded-full border border-black/10 py-2.5 text-sm text-black/40">Paid only</span>
          </div>
        </div>

        {/* Long-form content for SEO/LLM */}
        <div className="prose prose-sm max-w-none text-black/65 space-y-6 mb-14">
          <h2 className="text-2xl font-semibold text-[#2a241f]">The main difference between StudyBanana and Forest</h2>
          <p>
            Forest is a <strong>phone focus app</strong>. Its core mechanic — grow a tree, don't touch your phone — is designed to solve one specific problem: phone addiction. It does that job really well. But if your child's distraction problem is on their computer (which is where most homework actually happens), Forest doesn't help.
          </p>
          <p>
            StudyBanana is a <strong>desktop study environment</strong>. It runs as a full-screen app on Mac and Windows, replacing the entire screen with a focused space that includes music, a Pomodoro timer, notes, weather, a clock, and an AI tutor — all in one place. The parental PIN lock means once study mode is on, kids can't switch tabs or quit the app without the parent's code.
          </p>

          <h2 className="text-2xl font-semibold text-[#2a241f]">Does Forest work for kids?</h2>
          <p>
            Forest works well for teenagers who are self-motivated and want a fun way to stay off their phone. But for younger kids who need external accountability, Forest falls short — there's no parental control, no lock mechanism that a parent controls, and no study tools built in.
          </p>

          <h2 className="text-2xl font-semibold text-[#2a241f]">Can StudyBanana replace Forest?</h2>
          <p>
            If your concern is specifically <em>phone use during homework time</em>, Forest is the right tool. But if you want a complete study environment that your child can sit down at, get focused with background music, ask an AI for help, and stay locked in with a timer — StudyBanana does all of that with no phone required.
          </p>
          <p>
            Many families use both: Forest on the phone to prevent scrolling, StudyBanana on the laptop to create a proper study environment.
          </p>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-[#2a241f] text-white p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Try StudyBanana free today</h2>
          <p className="text-white/55 mb-6 max-w-md mx-auto">No account needed. Works on Mac and Windows. Free plan includes parental lock, Pomodoro timer, and AI homework help.</p>
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
