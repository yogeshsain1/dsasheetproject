'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import { login as apiLogin, register as apiRegister } from '@/lib/api'
import { getStoredUser, setSession, clearSession } from '@/lib/auth'
import type { User } from '@/types/progress'
import { useRouter } from 'next/navigation'

interface AuthContextValue {
  user:    User | null
  isReady: boolean
  login:   (data: { email: string; password: string }) => Promise<void>
  register:(data: { name: string; email: string; password: string }) => Promise<void>
  logout:  () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser]   = useState<User | null>(null)
  const [isReady, setIsReady] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setUser(getStoredUser())
    setIsReady(true)
  }, [])

  const login = useCallback(async (data: { email: string; password: string }) => {
    const res = await apiLogin(data)
    setSession(res.data)
    setUser(res.data.user)
  }, [])

  const register = useCallback(async (data: { name: string; email: string; password: string }) => {
    const res = await apiRegister(data)
    setSession(res.data)
    setUser(res.data.user)
  }, [])

  const logout = useCallback(() => {
    clearSession()
    setUser(null)
    router.push('/login')
  }, [router])

  return (
    <AuthContext.Provider value={{ user, isReady, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
