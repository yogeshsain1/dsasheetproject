import { getAllProblemIds, getProblemDetails } from '@/data/problemDetails'
import ExplanationView from '@/components/explanation/ExplanationView'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const ids = getAllProblemIds()
  return ids.map(id => ({ id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const problem = getProblemDetails(id)
  return {
    title: problem ? `Explanation: ${problem.name} — DSA Mastery` : 'Problem Explanation — DSA Mastery',
    description: problem ? `In-depth algorithmic explanation, intuition, brute-force vs optimal approaches, and complete solutions in C++, Java, Python, and JavaScript for ${problem.name}.` : 'Comprehensive DSA solution explanation.',
  }
}

export default async function ExplanationPage({ params }: PageProps) {
  const { id } = await params
  return <ExplanationView id={id} />
}
