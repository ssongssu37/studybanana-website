'use client'
import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import LogoIcon from '@/components/LogoIcon'

const MAC_URL = 'https://github.com/ssongssu37/studybanana-website/releases/download/v1.0.9/StudyBanana-1.0.6.dmg'
const WIN_URL = 'https://github.com/ssongssu37/studybanana-website/releases/download/v1.0.9/StudyBanana-1.0.6-win.zip'
const MONTHLY_PRICE_ID = 'price_1TFMWKCDDRCjONFZueHxhQtJ'

function OTOContent() {
  const searchParams = useSearchParams()
  const platform = searchParams.get('platform') || 'mac'
  const downloadUrl = platform === 'windows' ? WIN_URL : MAC_URL
  const platformLabel = platform === 'windows' ? 'Windows' : 'Mac'

  const [step, setStep] = useState<'offer' | 'account' | 'redirecting'>('offer')
  const [mode, setMode] = useState<'signup' | 'signin'>('signup')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [declining, setDeclining] = useState(false)

  async function handleAccount(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      let userId: string
      let userEmail: string

      if (mode === 'signup') {
        const { data, error: err } = await supabase.auth.signUp({ email, password })
        if (err) {
          if (err.message.toLowerCase().includes('already registered') || err.message.toLowerCase().includes('already exists')) {
            setError('This email already has an account — switch to Sign In below.')
          } else {
            setError(err.message)
          }
          setLoading(false)
          return
        }
        if (!data.user) { setError('Signup failed. Please try again.'); setLoading(false); return }
        userId = data.user.id
        userEmail = data.user.email!
      } else {
        const { data, error: err } = await supabase.auth.signInWithPassword({ email, password })
        if (err) {
          setError('Incorrect email or password.')
          setLoading(false)
          return
        }
        if (!data.user) { setError('Sign in failed. Please try again.'); setLoading(false); return }
        userId = data.user.id
        userEmail = data.user.email!
      }

      setStep('redirecting')
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: MONTHLY_PRICE_ID, email: userEmail, userId }),
      })
      const data = await res.json()
      if (data.url) window.location.href = data.url
      else throw new Error(data.error || 'Something went wrong')
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
      setStep('account')
      setLoading(false)
    }
  }

  function handleDecline() {
    setDeclining(true)
    window.location.href = downloadUrl
  }

  const nav = (
    <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
      <a href="/" className="flex items-center gap-2">
        <LogoIcon size={36} />
        <span className="text-base font-semibold tracking-tight">StudyBanana</span>
      </a>
    </nav>
  )

  // ── Step 2: Account creation / sign-in ──
  if (step === 'account' || step === 'redirecting') {
    return (
      <div className="min-h-screen bg-[#fff9ec] text-[#2a241f] flex flex-col">
        {nav}
        <main className="flex flex-1 items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            {step === 'redirecting' ? (
              <div className="text-center">
                <div className="text-5xl mb-4 animate-pulse">🍌</div>
                <p className="text-black/60">Redirecting to checkout…</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">🔐</div>
                  <h1 className="text-2xl font-semibold">
                    {mode === 'signup' ? 'Create your account' : 'Sign in to your account'}
                  </h1>
                  <p className="mt-2 text-sm text-black/50">
                    {mode === 'signup'
                      ? "You'll use this to log into the app and access your premium features."
                      : 'Sign in and we\'ll link your premium to this account.'}
                  </p>
                </div>

                {/* Tab toggle */}
                <div className="flex rounded-xl overflow-hidden border border-black/10 mb-5">
                  <button
                    onClick={() => { setMode('signup'); setError('') }}
                    className={`flex-1 py-2.5 text-sm font-semibold transition ${mode === 'signup' ? 'bg-[#2a241f] text-white' : 'text-black/50 hover:bg-black/5'}`}
                  >
                    Create Account
                  </button>
                  <button
                    onClick={() => { setMode('signin'); setError('') }}
                    className={`flex-1 py-2.5 text-sm font-semibold transition ${mode === 'signin' ? 'bg-[#2a241f] text-white' : 'text-black/50 hover:bg-black/5'}`}
                  >
                    Sign In
                  </button>
                </div>

                <form onSubmit={handleAccount} className="rounded-2xl bg-white border border-black/8 p-6 shadow-sm space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-black/50 mb-1 uppercase tracking-wide">Email</label>
                    <input
                      type="email" required value={email} onChange={e => setEmail(e.target.value)}
                      placeholder="you@email.com" autoComplete="email"
                      className="w-full rounded-xl border border-black/15 px-4 py-3 text-sm outline-none focus:border-[#ffd54f] transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-black/50 mb-1 uppercase tracking-wide">Password</label>
                    <input
                      type="password" required minLength={6} value={password} onChange={e => setPassword(e.target.value)}
                      placeholder={mode === 'signup' ? 'Choose a password (6+ characters)' : 'Your password'}
                      autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                      className="w-full rounded-xl border border-black/15 px-4 py-3 text-sm outline-none focus:border-[#ffd54f] transition"
                    />
                  </div>

                  {error && (
                    <p className="text-red-600 text-sm bg-red-50 rounded-lg px-3 py-2">{error}</p>
                  )}

                  <button
                    type="submit" disabled={loading}
                    className="w-full rounded-full bg-[#ffd54f] text-[#2a241f] py-3.5 text-sm font-bold hover:bg-yellow-300 transition shadow disabled:opacity-50 mt-1"
                  >
                    {loading ? 'Please wait…' : mode === 'signup' ? '🚀 Create Account & Start Free Trial' : '🚀 Sign In & Start Free Trial'}
                  </button>
                </form>

                <button
                  onClick={() => setStep('offer')}
                  className="mt-4 w-full text-sm text-black/40 hover:text-black/60 transition"
                >
                  ← Back to offer
                </button>
              </>
            )}
          </div>
        </main>
      </div>
    )
  }

  // ── Step 1: The offer ──
  return (
    <div className="min-h-screen bg-[#fff9ec] text-[#2a241f] flex flex-col">
      {nav}

      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl text-center">

          {/* Label */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ffd54f]/60 bg-[#ffd54f]/20 px-4 py-1.5 text-sm font-medium text-[#7a5c00]">
            ✅ Your free download is ready
          </div>

          {/* Headline */}
          <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            One second — want to unlock{' '}
            <span className="relative inline-block">
              <span className="relative z-10">everything</span>
              <span className="absolute inset-x-0 bottom-1 z-0 h-3 rounded bg-[#ffd54f]/60" />
            </span>{' '}
            while you're here?
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-base text-black/55 leading-relaxed">
            The free version gives you a taste. Premium unlocks all 20 music tracks, unlimited AI homework help,
            every theme, and the full experience — for less than a coffee a month.
          </p>

          {/* Offer card */}
          <div className="mt-8 rounded-3xl bg-[#2a241f] text-white p-8 shadow-2xl text-left">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold uppercase tracking-widest text-white/40">Premium — Monthly</span>
              <span className="rounded-full bg-green-500/20 text-green-300 text-xs font-bold px-3 py-1">7-Day Free Trial</span>
            </div>

            <div className="flex items-baseline gap-3 mt-3">
              <span className="text-4xl font-bold line-through text-red-400 opacity-70">$10</span>
              <span className="text-5xl font-bold">$5</span>
              <span className="text-lg text-white/40">/month</span>
            </div>
            <p className="text-sm text-white/40 mt-1 mb-6">Try free for 7 days — no charge until after the trial. Cancel anytime.</p>

            <div className="grid grid-cols-2 gap-2 mb-8">
              {[
                '✓  All 20 music tracks',
                '✓  Unlimited AI questions',
                '✓  All 10 themes',
                '✓  Kids encyclopedia',
                '✓  Parental lock',
                '✓  All future updates',
              ].map(item => (
                <div key={item} className="text-sm text-white/70">{item}</div>
              ))}
            </div>

            {/* Guarantee inside card */}
            <div className="flex items-center gap-2 rounded-xl bg-white/8 px-4 py-3 mb-6 text-sm">
              <span className="text-lg">🛡️</span>
              <span className="text-white/60">30-day money-back guarantee — no questions asked.</span>
            </div>

            <button
              onClick={() => setStep('account')}
              disabled={loading}
              className="w-full rounded-full bg-[#ffd54f] text-[#2a241f] py-4 text-base font-bold hover:bg-yellow-300 transition shadow-lg disabled:opacity-50"
            >
              🚀 Yes — Upgrade & Start My Free Trial
            </button>
          </div>

          {/* Decline */}
          <div className="mt-6">
            <button
              onClick={handleDecline}
              disabled={declining}
              className="w-full rounded-full border border-black/15 py-3 text-sm font-medium text-black/60 hover:bg-black/5 transition"
            >
              {declining ? 'Starting download…' : `↓ No thanks — download the free version for ${platformLabel}`}
            </button>
          </div>

          <p className="mt-3 text-xs text-black/30">
            Free includes: Clock, Notes, Weather, Pomodoro, 3 music tracks, 20 AI questions/day, Parental lock
          </p>
        </div>
      </main>
    </div>
  )
}

export default function OTOPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#fff9ec] flex items-center justify-center">
        <span className="text-2xl animate-pulse">🍌</span>
      </div>
    }>
      <OTOContent />
    </Suspense>
  )
}
