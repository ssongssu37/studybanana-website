'use client'
import { useEffect } from 'react'

export default function SuccessPage() {
  useEffect(() => {
    setTimeout(() => { window.location.href = '/' }, 5000)
  }, [])

  return (
    <div className="min-h-screen bg-[#fff9ec] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-6xl mb-6">🍌</div>
        <h1 className="text-3xl font-semibold text-[#2a241f] mb-3">Welcome to Premium!</h1>
        <p className="text-black/55 max-w-sm mx-auto mb-6">
          Your account has been upgraded. Open StudyBanana and sign in to unlock all features.
        </p>
        <a href="/" className="rounded-full bg-[#2a241f] text-white px-8 py-3 text-sm font-semibold hover:bg-black/80 transition">
          Back to Home
        </a>
      </div>
    </div>
  )
}
