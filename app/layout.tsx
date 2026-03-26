import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StudyBanana — A better screen for studying',
  description: 'Music, timer, and AI help in one simple immersive screen. Download StudyBanana and start focusing in seconds.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
