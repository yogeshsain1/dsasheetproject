import axios from 'axios'
import type { AuthPayload, NoteEntry, ProgressState, SrsEntry, User } from '@/types/progress'

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL ?? '/api'

const api = axios.create({ baseURL })

// ── Session helpers (SSR-safe) ───────────────────────────────────────────────
export const getStoredUser = (): User | null => {
  if (typeof window === 'undefined') return null
  try { return JSON.parse(localStorage.getItem('dsa_user') || 'null') } catch { return null }
}

export const setSession = ({ token, user }: AuthPayload) => {
  localStorage.setItem('dsa_token', token)
  localStorage.setItem('dsa_user', JSON.stringify(user))
}

export const clearSession = () => {
  localStorage.removeItem('dsa_token')
  localStorage.removeItem('dsa_user')
}

// ── Request interceptor: attach JWT ─────────────────────────────────────────
api.interceptors.request.use(config => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('dsa_token')
    if (token) config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// ── Auth ─────────────────────────────────────────────────────────────────────
export const register = (data: { name: string; email: string; password: string }) =>
  api.post<AuthPayload>('/auth/register', data)

export const login = (data: { email: string; password: string }) =>
  api.post<AuthPayload>('/auth/login', data)

// ── Progress ─────────────────────────────────────────────────────────────────
export const getProgress = () =>
  api.get<ProgressState>('/progress')

export const toggleProblem = (id: string, type: 'solved' | 'lmSolved') =>
  api.post<{ id: string; solved: boolean; type: string; todayCount: number; srs?: SrsEntry }>(
    '/progress/toggle', { id, type }
  )

export const toggleStar = (id: string) =>
  api.post<{ id: string; starred: boolean }>('/progress/star', { id })

export const resetProgress = () =>
  api.delete<{ message: string }>('/progress/reset')

export const getStats = () =>
  api.get('/progress/stats')

export const getAnalytics = () =>
  api.get<{
    activityLog: Record<string, number>
    currentStreak: number
    longestStreak: number
    totalSolved: number
    lmSolved: number
  }>('/progress/analytics')

export const getNotes = (id: string) =>
  api.get<NoteEntry>(`/progress/notes/${id}`)

export const saveNotes = (id: string, data: NoteEntry) =>
  api.post<{ success: boolean; notes: NoteEntry }>(`/progress/notes/${id}`, data)

export const importBackup = (data: Partial<ProgressState>) =>
  api.post<{ message: string }>('/progress/import', data)

export const reviewProblem = (id: string) =>
  api.post<{ id: string; srs: SrsEntry }>('/progress/srs/review', { id })
