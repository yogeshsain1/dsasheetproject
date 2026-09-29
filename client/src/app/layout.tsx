import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/context/AuthContext'
import LenisProvider from '@/components/providers/LenisProvider'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DSA Mastery — Pattern-Based Sheet',
  description: 'Track your journey through curated DSA problems. Master patterns and crack FAANG interviews.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <AuthProvider>
          <LenisProvider>
            <div className="grid-bg" aria-hidden="true" />
            <div className="corner-glow-tl" aria-hidden="true" />
            <div className="corner-glow-br" aria-hidden="true" />
            {children}
            <Footer />
          </LenisProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
