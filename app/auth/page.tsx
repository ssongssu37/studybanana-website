'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function AuthPage() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    if (mode === 'signin') {
      const { error: err } = await supabase.auth.signInWithPassword({ email, password })
      if (err) {
        setError('Incorrect email or password.')
        setLoading(false)
      } else {
        window.location.href = '/'
      }
    } else {
      const { error: err } = await supabase.auth.signUp({ email, password })
      if (err) {
        if (err.message.toLowerCase().includes('already registered') || err.message.toLowerCase().includes('already exists')) {
          setError('This email already has an account. Sign in instead.')
        } else {
          setError(err.message)
        }
        setLoading(false)
      } else {
        setSuccess('Account created! You can now sign in to StudyBanana.')
        setLoading(false)
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#fff9ec] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <span className="text-5xl">🍌</span>
          <h1 className="mt-4 text-2xl font-semibold text-[#2a241f]">
            {mode === 'signin' ? 'Sign in to StudyBanana' : 'Create your account'}
          </h1>
          <p className="mt-2 text-sm text-black/50">
            {mode === 'signin' ? 'Enter your email and password to continue.' : 'Choose an email and password to get started.'}
          </p>
        </div>

        {/* Tab toggle */}
        <div className="flex rounded-xl overflow-hidden border border-black/10 mb-4">
          <button
            onClick={() => { setMode('signin'); setError(''); setSuccess('') }}
            className={`flex-1 py-2.5 text-sm font-semibold transition ${mode === 'signin' ? 'bg-[#2a241f] text-white' : 'text-black/50 hover:bg-black/5'}`}
          >
            Sign In
          </button>
          <button
            onClick={() => { setMode('signup'); setError(''); setSuccess('') }}
            className={`flex-1 py-2.5 text-sm font-semibold transition ${mode === 'signup' ? 'bg-[#2a241f] text-white' : 'text-black/50 hover:bg-black/5'}`}
          >
            Create Account
          </button>
        </div>

        {success ? (
          <div className="rounded-2xl bg-white border border-black/8 p-8 text-center shadow-sm">
            <div className="text-4xl mb-4">✅</div>
            <h2 className="font-semibold text-lg mb-2">Account created!</h2>
            <p className="text-sm text-black/55 mb-4">{success}</p>
            <button
              onClick={() => { setMode('signin'); setSuccess('') }}
              className="w-full rounded-full bg-[#2a241f] text-white py-3 text-sm font-semibold hover:bg-black/80 transition"
            >
              Sign In Now
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-2xl bg-white border border-black/8 p-8 shadow-sm space-y-4">
            <div>
              <label className="block text-sm font-medium text-black/70 mb-1">Email address</label>
              <input
                type="email" required value={email} onChange={e => setEmail(e.target.value)}
                placeholder="you@email.com" autoComplete="email"
                className="w-full rounded-xl border border-black/15 px-4 py-3 text-sm outline-none focus:border-[#ffd54f] transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black/70 mb-1">Password</label>
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

            <button type="submit" disabled={loading}
              className="w-full rounded-full bg-[#2a241f] text-white py-3 text-sm font-semibold hover:bg-black/80 transition disabled:opacity-50">
              {loading ? 'Please wait…' : mode === 'signin' ? 'Sign In' : 'Create Account'}
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
