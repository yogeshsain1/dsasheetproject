import type { AuthPayload, User } from '@/types/progress'

export const getStoredUser = (): User | null => {
  if (typeof window === 'undefined') return null
  try {
    return JSON.parse(localStorage.getItem('dsa_user') || 'null')
  } catch {
    return null
  }
}

export const setSession = ({ token, user }: AuthPayload): void => {
  localStorage.setItem('dsa_token', token)
  localStorage.setItem('dsa_user', JSON.stringify(user))
}

export const clearSession = (): void => {
  localStorage.removeItem('dsa_token')
  localStorage.removeItem('dsa_user')
}

export const getToken = (): string | null => {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('dsa_token')
}
