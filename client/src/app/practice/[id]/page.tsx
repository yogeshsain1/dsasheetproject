import { getAllProblemIds, getProblemDetails } from '@/data/problemDetails'
import PracticeWorkspace from '@/components/practice/PracticeWorkspace'
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
    title: problem ? `Practice: ${problem.name} — DSA Mastery` : 'Practice Problem — DSA Mastery',
    description: problem ? `Interactive practice playground for ${problem.name} (${problem.difficulty}). Test and run code in C++, Java, Python, and JavaScript.` : 'Practice DSA coding interview problem.',
  }
}

export default async function PracticePage({ params }: PageProps) {
  const { id } = await params
  return <PracticeWorkspace id={id} />
}
