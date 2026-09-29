'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'

/**
 * Initialises Lenis smooth scroll and syncs it with GSAP's ticker.
 * Call once at the top of a client component (e.g. LenisProvider).
 */
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis()

    const rafCallback = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(rafCallback)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(rafCallback)
    }
  }, [])
}
