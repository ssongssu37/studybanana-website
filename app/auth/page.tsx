'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` }
    })
    if (error) { alert(error.message); setLoading(false) }
    else setSent(true)
  }

  return (
    <div className="min-h-screen bg-[#fff9ec] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <span className="text-5xl">🍌</span>
          <h1 className="mt-4 text-2xl font-semibold text-[#2a241f]">Sign in to StudyBanana</h1>
          <p className="mt-2 text-sm text-black/50">We'll send you a magic link — no password needed</p>
        </div>

        {sent ? (
          <div className="rounded-2xl bg-white border border-black/8 p-8 text-center shadow-sm">
            <div className="text-4xl mb-4">📬</div>
            <h2 className="font-semibold text-lg mb-2">Check your email!</h2>
            <p className="text-sm text-black/55">We sent a magic link to <strong>{email}</strong>. Click it to sign in.</p>
          </div>
        ) : (
          <form onSubmit={handleSignIn} className="rounded-2xl bg-white border border-black/8 p-8 shadow-sm">
            <label className="block text-sm font-medium text-black/70 mb-2">Email address</label>
            <input
              type="email" required value={email} onChange={e => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full rounded-xl border border-black/15 px-4 py-3 text-sm outline-none focus:border-[#ffd54f] transition mb-4"
            />
            <button type="submit" disabled={loading}
              className="w-full rounded-full bg-[#2a241f] text-white py-3 text-sm font-semibold hover:bg-black/80 transition disabled:opacity-50">
              {loading ? 'Sending…' : 'Send Magic Link'}
            </button>
          </form>
        )}

        <p className="text-center mt-6 text-sm text-black/40">
          <a href="/" className="hover:text-black/70">← Back to home</a>
        </p>
      </div>
    </div>
  )
}
