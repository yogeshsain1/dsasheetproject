import type { Metadata } from 'next'
import AuthForm from '@/components/auth/AuthForm'

export const metadata: Metadata = { title: 'Sign In — DSA Mastery' }

export default function LoginPage() {
  return <AuthForm mode="login" />
}
