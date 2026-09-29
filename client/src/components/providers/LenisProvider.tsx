'use client'

import { type ReactNode } from 'react'
import { useLenis } from '@/hooks/useLenis'

/**
 * Drop this inside app/layout.tsx to activate Lenis smoothscroll site-wide.
 */
export default function LenisProvider({ children }: { children: ReactNode }) {
  useLenis()
  return <>{children}</>
}
