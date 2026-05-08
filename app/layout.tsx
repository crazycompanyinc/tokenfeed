import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TokenFeed — Real-Time AI Token Dashboard for Dev Teams',
  description: 'Track, allocate, and optimize LLM costs across your team in real-time. Connect OpenAI, Anthropic, Gemini & more.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
