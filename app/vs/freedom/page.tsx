import type { Metadata } from 'next'
import VsNav from '../VsNav'

export const metadata: Metadata = {
  title: 'StudyBanana vs Freedom App — Which Is Better for Blocking Distractions?',
  description: 'Freedom blocks websites across all your devices. StudyBanana creates a full study environment with music, AI, and parental lock. Compare features and pricing.',
  keywords: 'StudyBanana vs Freedom app, Freedom app alternative, distraction blocker for students, focus app comparison, best app to block distractions while studying',
}

const rows = [
  { feature: 'Parental lock / PIN',          sb: true,  fr: false, note: 'Freedom has no parental controls' },
  { feature: 'Built-in focus music',         sb: true,  fr: false, note: '20 curated lo-fi & ambient tracks' },
  { feature: 'AI homework help',             sb: true,  fr: false, note: 'Ask any question, get clear explanations' },
  { feature: 'Pomodoro timer',               sb: true,  fr: false, note: 'Freedom is a blocker only' },
  { feature: 'Notes & writing pad',          sb: true,  fr: false, note: '' },
  { feature: 'Cross-device blocking',        sb: false, fr: true,  note: 'Freedom syncs blocks across phone, tablet, and computer' },
  { feature: 'Website & app blocking',       sb: false, fr: true,  note: 'Freedom blocks specific sites/apps you choose' },
  { feature: 'Scheduled blocking sessions',  sb: false, fr: true,  note: 'Freedom can run on a daily schedule automatically' },
  { feature: 'Works offline',                sb: true,  fr: false, note: 'Freedom requires internet to sync' },
  { feature: 'Free plan available',          sb: true,  fr: false, note: 'Freedom requires a paid subscription; 7-session free trial only' },
  { feature: 'Kid-friendly UX',             sb: true,  fr: false, note: 'StudyBanana is designed to be inviting for students' },
]

export default function VsFreedomPage() {
  return (
    <div className="min-h-screen bg-[#fff9ec] text-[#2a241f]">
      <VsNav />

      <main className="mx-auto max-w-4xl px-6 pb-24 pt-10">

        <div className="mb-8 text-sm text-black/40">
          <a href="/vs" className="hover:text-black transition">All comparisons</a>
          <span className="mx-2">/</span>
          <span>StudyBanana vs Freedom</span>
        </div>

        <div className="text-center mb-14">
          <div className="mb-5 inline-flex items-center gap-3 text-4xl">
            <span>🍌</span>
            <span className="text-2xl text-black/20 font-light">vs</span>
            <span>🔓</span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl leading-tight">
            StudyBanana vs. Freedom
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-black/55 leading-relaxed">
            Freedom is a popular distraction blocker that syncs across all your devices — phone, tablet, and computer at once. StudyBanana is a dedicated study environment with music, AI help, and parental lock built in. Different tools, different jobs.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mb-14">
          <div className="rounded-2xl bg-[#ffd54f]/20 border border-[#ffd54f]/50 p-6">
            <div className="text-2xl mb-2">🍌</div>
            <h2 className="font-semibold text-lg mb-2">StudyBanana is better if…</h2>
            <ul className="space-y-2 text-sm text-black/65">
              <li>✓ You need a full study environment, not just a blocker</li>
              <li>✓ You want parental control with a PIN lock</li>
              <li>✓ You want music, AI, notes, and a timer in one app</li>
              <li>✓ You want something free — no subscription needed</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-black/[0.03] border border-black/8 p-6">
            <div className="text-2xl mb-2">🔓</div>
            <h2 className="font-semibold text-lg mb-2">Freedom is better if…</h2>
            <ul className="space-y-2 text-sm text-black/65">
              <li>✓ You need to block distractions across phone AND computer at the same time</li>
              <li>✓ You want to block specific websites or apps on a schedule</li>
              <li>✓ You're an adult who wants broad device-level control</li>
              <li>✓ You already have study tools — you just need the blocking layer</li>
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
                <th className="text-center px-4 py-4 font-semibold text-black/40">🔓 Freedom</th>
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
                    {row.fr ? <span className="text-green-600 font-bold text-base">✓</span> : <span className="text-black/20 text-base">—</span>}
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
            <p className="text-sm text-black/50 mb-4">Full free tier with parental lock, timer, music, and AI. Premium adds unlimited everything for $5/month or $49/year.</p>
            <a href="/#download" className="block text-center rounded-full bg-[#2a241f] text-white py-2.5 text-sm font-medium hover:bg-black/80 transition">
              Download Free →
            </a>
          </div>
          <div className="rounded-2xl border border-black/8 bg-white p-6 shadow-sm">
            <div className="text-sm font-bold uppercase tracking-widest text-black/30 mb-2">🔓 Freedom</div>
            <div className="text-3xl font-bold mb-1">$6.99/mo</div>
            <p className="text-sm text-black/50 mb-4">Subscription-based. $29/year or $129 lifetime. 7 free sessions to try before subscribing. No permanent free tier.</p>
            <span className="block text-center rounded-full border border-black/10 py-2.5 text-sm text-black/40">Subscription required</span>
          </div>
        </div>

        <div className="prose prose-sm max-w-none text-black/65 space-y-6 mb-14">
          <h2 className="text-2xl font-semibold text-[#2a241f]">Freedom vs StudyBanana: two different approaches to focus</h2>
          <p>
            Freedom's strength is <strong>breadth</strong>. It syncs across your phone, tablet, and computer simultaneously. If you start a session, you're blocked on every device at once — so you can't just pick up your phone when your computer blocks Instagram. For adults who are their own worst enemy when it comes to distraction, this cross-device enforcement is genuinely powerful.
          </p>
          <p>
            StudyBanana's strength is <strong>depth</strong>. It doesn't just take things away — it creates a complete environment your child can actually study in. The retro TV design, ambient music, Pomodoro timer, AI tutor, and notes are all in one place, and the parental PIN means parents control when study mode ends.
          </p>

          <h2 className="text-2xl font-semibold text-[#2a241f]">Does Freedom have a free plan?</h2>
          <p>
            Freedom offers 7 free blocking sessions when you sign up — after that, a subscription is required. There's no permanent free tier. StudyBanana's free plan has no session limit and includes the core features (parental lock, Pomodoro, 3 music tracks, 20 AI questions per day).
          </p>

          <h2 className="text-2xl font-semibold text-[#2a241f]">Which app should I use for my kid?</h2>
          <p>
            If your biggest concern is your child picking up their phone while studying, Freedom or Forest are worth trying for the phone side of things. For the computer — where most homework actually happens — StudyBanana gives you a dedicated study environment with parental lock that's designed specifically for that use case. Many parents use both.
          </p>
        </div>

        <div className="rounded-2xl bg-[#2a241f] text-white p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Create a real study environment</h2>
          <p className="text-white/55 mb-6 max-w-md mx-auto">StudyBanana is free. No account needed. No subscription required to get started.</p>
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
