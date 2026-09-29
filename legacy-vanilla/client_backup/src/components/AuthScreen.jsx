import { useState } from 'react'
import { motion } from 'framer-motion'
import { login, register, setSession } from '../api/api'

export default function AuthScreen({ onAuthenticated }) {
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (event) => {
    event.preventDefault()
    setError('')
    setLoading(true)
    try {
      const response = await (mode === 'login' ? login(form) : register(form))
      setSession(response.data)
      onAuthenticated(response.data.user)
    } catch (err) {
      setError(err.response?.data?.error || 'Unable to connect to the server')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="auth-screen">
      <motion.form className="auth-panel" onSubmit={submit} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        <div className="logo-box" style={{ marginBottom: 20 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 16-4 4-4-4"/><path d="m6 8 4-4 4 4"/><path d="m14.5 4-5 16"/>
          </svg>
        </div>
        <p className="auth-kicker">DSA MASTERY</p>
        <h1>{mode === 'login' ? 'Continue your progress' : 'Create your profile'}</h1>
        <p className="auth-copy">Your solved problems, notes, and activity stay attached to your account.</p>
        {mode === 'register' && <label>Name<input required minLength="2" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label>}
        <label>Email<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label>
        <label>Password<input required minLength="8" type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="At least 8 characters" /></label>
        {error && <p className="auth-error">{error}</p>}
        <button className="btn-primary auth-submit" disabled={loading}>{loading ? 'Please wait...' : mode === 'login' ? 'Sign in' : 'Create account'}</button>
        <button type="button" className="auth-switch" onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setError('') }}>
          {mode === 'login' ? 'New here? Create an account' : 'Already have an account? Sign in'}
        </button>
      </motion.form>
    </main>
  )
}