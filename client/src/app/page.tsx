'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { motion } from 'motion/react'

export default function RootPage() {
  const { user, isReady } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isReady) return
    router.replace(user ? '/dashboard' : '/login')
  }, [user, isReady, router])

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      justifyContent: 'center', background: '#000', flexDirection: 'column', gap: 16,
    }}>
      <motion.div
        style={{
          width: 48, height: 48,
          border: '3px solid var(--border)',
          borderTop: '3px solid var(--green)',
          borderRadius: '50%',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
      />
      <p style={{ color: 'var(--white-40)', fontFamily: 'var(--mono)', fontSize: '0.85rem' }}>
        Loading DSA Mastery…
      </p>
    </div>
  )
}
