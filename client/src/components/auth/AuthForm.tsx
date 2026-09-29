'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'

interface AuthFormProps {
  mode: 'login' | 'register'
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login, register } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (mode === 'login') {
        await login({ email: form.email, password: form.password })
      } else {
        await register(form)
      }
      router.push('/dashboard')
    } catch (err: unknown) {
      const axiosErr = err as { response?: { data?: { error?: string } } }
      setError(axiosErr.response?.data?.error || 'Unable to connect to the server')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="auth-screen">
      <motion.form
        className="auth-panel"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="logo-box" style={{ marginBottom: 20 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 16-4 4-4-4"/><path d="m6 8 4-4 4 4"/><path d="m14.5 4-5 16"/>
          </svg>
        </div>
        <p className="auth-kicker">DSA MASTERY</p>
        <h1>{mode === 'login' ? 'Continue your progress' : 'Create your profile'}</h1>
        <p className="auth-copy">Your solved problems, notes, and activity stay attached to your account.</p>

        {mode === 'register' && (
          <label>
            Name
            <input
              required
              minLength={2}
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
            />
          </label>
        )}
        <label>
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
          />
        </label>
        <label>
          Password
          <input
            required
            minLength={8}
            type="password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            placeholder="At least 8 characters"
          />
        </label>

        {error && <p className="auth-error">{error}</p>}

        <button className="btn-primary auth-submit" disabled={loading}>
          {loading ? 'Please wait…' : mode === 'login' ? 'Sign in' : 'Create account'}
        </button>

        <Link
          href={mode === 'login' ? '/register' : '/login'}
          className="auth-switch"
        >
          {mode === 'login' ? 'New here? Create an account' : 'Already have an account? Sign in'}
        </Link>
      </motion.form>
    </main>
  )
}
