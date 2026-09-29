'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import Prism from 'prismjs'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-python'

import { getProblemDetails, getAdjacentProblemIds } from '@/data/problemDetails'
import { useProgress } from '@/hooks/useProgress'
import { CompanyIcon } from '@/components/ui/Icons'

const LANGUAGES = [
  { id: 'cpp',        name: 'C++',        prismLang: 'cpp' },
  { id: 'java',       name: 'Java',       prismLang: 'java' },
  { id: 'python',     name: 'Python 3',   prismLang: 'python' },
  { id: 'javascript', name: 'JavaScript', prismLang: 'javascript' },
] as const

type LangId = typeof LANGUAGES[number]['id']

interface ExplanationViewProps {
  id: string
}

export default function ExplanationView({ id }: ExplanationViewProps) {
  const problem = getProblemDetails(id)
  const { prevId, nextId } = getAdjacentProblemIds(id)
  const { solved, starred, toggle, star } = useProgress()

  const isSolved = Boolean(solved?.[id])
  const isStarred = Boolean(starred?.[id])

  const [selectedLang, setSelectedLang] = useState<LangId>('cpp')
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [activeApproach, setActiveApproach] = useState<'optimal' | 'brute'>('optimal')

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3000)
  }

  const handleCopyCode = () => {
    if (!problem) return
    const code = problem.explanation.code[selectedLang] || ''
    navigator.clipboard.writeText(code)
    showToast('Code copied to clipboard!')
  }

  if (!problem) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', flexDirection: 'column', gap: 16 }}>
        <p style={{ color: 'var(--white-70)' }}>Problem not found.</p>
        <Link href="/dashboard" className="solve-link" style={{ background: 'var(--green)', color: '#000' }}>
          Back to Dashboard
        </Link>
      </div>
    )
  }

  const diffColor = {
    Easy: 'var(--easy)',
    Medium: 'var(--medium)',
    Hard: 'var(--hard)',
  }[problem.difficulty]

  const currentCode = problem.explanation.code[selectedLang] || ''
  const currentPrismLang = LANGUAGES.find(l => l.id === selectedLang)?.prismLang || 'cpp'
  const highlightedCode = Prism.highlight(
    currentCode,
    Prism.languages[currentPrismLang] || Prism.languages.javascript,
    currentPrismLang
  )

  return (
    <div className="explanation-screen">
      {/* Toast Alert */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="toast-alert"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Navbar */}
      <header className="practice-navbar">
        <div className="practice-nav-left">
          <Link href="/dashboard" className="practice-back-btn" title="Back to Dashboard">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            <span>Sheet</span>
          </Link>

          <div className="practice-title-box">
            <span className="practice-problem-title">{problem.name}</span>
            <span className="badge" style={{ background: `${diffColor}18`, color: diffColor, borderColor: `${diffColor}40` }}>
              {problem.difficulty}
            </span>
          </div>

          <div className="practice-nav-arrows">
            {prevId && (
              <Link href={`/explanation/${prevId}`} className="nav-arrow-btn" title="Previous problem">
                ‹
              </Link>
            )}
            {nextId && (
              <Link href={`/explanation/${nextId}`} className="nav-arrow-btn" title="Next problem">
                ›
              </Link>
            )}
          </div>
        </div>

        <div className="practice-nav-right">
          <Link
            href={`/practice/${id}`}
            className="solve-link practice-cta-btn"
            title="Open interactive code playground"
          >
            💻 Practice Playground
          </Link>

          <button
            onClick={() => star(id)}
            className="practice-icon-btn"
            style={{ color: isStarred ? '#f59e0b' : 'var(--white-40)' }}
            title={isStarred ? 'Bookmarked' : 'Bookmark'}
          >
            {isStarred ? '⭐' : '☆'}
          </button>

          <button
            onClick={() => toggle(id, 'solved')}
            className={`practice-solve-toggle ${isSolved ? 'solved' : ''}`}
            title="Toggle Solved Status"
          >
            {isSolved ? '✓ Solved' : 'Mark Solved'}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="explanation-container">
        {/* Hero Section */}
        <section className="explanation-hero">
          <div className="topic-breadcrumb">
            <span>{problem.topic}</span>
            <span className="sep">›</span>
            <span>{problem.subtopic}</span>
          </div>
          <h1 className="problem-hero-heading">{problem.name}</h1>

          {/* Quick Info Bar */}
          <div className="explanation-quick-meta">
            <div className="pattern-pill">
              <span className="pill-dot"></span>
              <span>Pattern: <strong>{problem.explanation.pattern}</strong></span>
            </div>

            {problem.companies && problem.companies.length > 0 && (
              <div className="explanation-companies">
                <span className="meta-label">Frequent in:</span>
                {problem.companies.map(comp => (
                  <span key={comp} className="company-badge">
                    <CompanyIcon company={comp} size={12} />
                    <span>{comp}</span>
                  </span>
                ))}
              </div>
            )}

            <div className="external-btn-group">
              {problem.lc && (
                <a href={problem.lc} target="_blank" rel="noopener noreferrer" className="external-link-btn lc">
                  LeetCode ↗
                </a>
              )}
              {problem.gfg && (
                <a href={problem.gfg} target="_blank" rel="noopener noreferrer" className="external-link-btn gfg">
                  GeeksforGeeks ↗
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Section 1: Problem Summary & Core Intuition */}
        <section className="explanation-card">
          <div className="card-header-row">
            <div className="card-title-group">
              <span className="card-icon">💡</span>
              <h2>Core Intuition & Mental Model</h2>
            </div>
          </div>
          <div className="card-body">
            <p className="intuition-text">{problem.explanation.intuition}</p>
          </div>
        </section>

        {/* Section 2: Step-by-Step Approaches (Brute vs Optimal) */}
        <section className="explanation-card">
          <div className="card-header-row">
            <div className="card-title-group">
              <span className="card-icon">⚡</span>
              <h2>Algorithmic Approaches</h2>
            </div>
            <div className="approach-toggle-group">
              <button
                className={`approach-tab ${activeApproach === 'optimal' ? 'active' : ''}`}
                onClick={() => setActiveApproach('optimal')}
              >
                Optimal Solution
              </button>
              <button
                className={`approach-tab ${activeApproach === 'brute' ? 'active' : ''}`}
                onClick={() => setActiveApproach('brute')}
              >
                Brute Force Baseline
              </button>
            </div>
          </div>

          <div className="card-body">
            {activeApproach === 'optimal' ? (
              <div className="approach-details optimal">
                <div className="complexity-badge-row">
                  <span className="comp-pill time">Time: {problem.explanation.optimal.timeComplexity}</span>
                  <span className="comp-pill space">Space: {problem.explanation.optimal.spaceComplexity}</span>
                </div>
                <p className="approach-summary">{problem.explanation.optimal.description}</p>
                <div className="algorithm-steps-box">
                  <h4>Step-by-step Execution:</h4>
                  <ol>
                    {problem.explanation.optimal.steps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ) : (
              <div className="approach-details brute">
                <div className="complexity-badge-row">
                  <span className="comp-pill time brute">Time: {problem.explanation.bruteForce.timeComplexity}</span>
                  <span className="comp-pill space brute">Space: {problem.explanation.bruteForce.spaceComplexity}</span>
                </div>
                <p className="approach-summary">{problem.explanation.bruteForce.description}</p>
                <div className="algorithm-steps-box">
                  <h4>Naive Steps:</h4>
                  <ol>
                    {problem.explanation.bruteForce.steps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 3: Visual Dry Run / State Walkthrough */}
        {problem.explanation.dryRun && problem.explanation.dryRun.length > 0 && (
          <section className="explanation-card">
            <div className="card-header-row">
              <div className="card-title-group">
                <span className="card-icon">🔍</span>
                <h2>Visual Dry Run & Trace Simulation</h2>
              </div>
            </div>
            <div className="card-body">
              <div className="dry-run-table-wrapper">
                <table className="dry-run-table">
                  <thead>
                    <tr>
                      <th>Step</th>
                      <th>State / Variables</th>
                      <th>Action Taken</th>
                      <th>Outcome / Explanation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {problem.explanation.dryRun.map(item => (
                      <tr key={item.step}>
                        <td className="step-num">#{item.step}</td>
                        <td className="state-cell"><code>{item.state}</code></td>
                        <td className="action-cell">{item.action}</td>
                        <td className="explain-cell">{item.explanation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Section 4: Multi-Language Code Implementations */}
        <section className="explanation-card">
          <div className="card-header-row">
            <div className="card-title-group">
              <span className="card-icon">💻</span>
              <h2>Complete Code Implementation</h2>
            </div>
            <div className="code-lang-selector">
              {LANGUAGES.map(l => (
                <button
                  key={l.id}
                  onClick={() => setSelectedLang(l.id)}
                  className={`lang-tab-btn ${selectedLang === l.id ? 'active' : ''}`}
                >
                  {l.name}
                </button>
              ))}
            </div>
          </div>

          <div className="card-body no-pad">
            <div className="code-block-header">
              <span className="code-lang-label">{selectedLang.toUpperCase()} Solution</span>
              <div className="code-block-actions">
                <button onClick={handleCopyCode} className="copy-code-btn">
                  📋 Copy Code
                </button>
                <Link href={`/practice/${id}`} className="load-practice-btn">
                  Open in Practice ↗
                </Link>
              </div>
            </div>

            <pre className="code-display-pre">
              <code
                className={`language-${currentPrismLang}`}
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
              />
            </pre>
          </div>
        </section>

        {/* Section 5: Edge Cases & Common Traps */}
        <section className="explanation-card">
          <div className="card-header-row">
            <div className="card-title-group">
              <span className="card-icon">⚠️</span>
              <h2>Edge Cases & Interview Traps</h2>
            </div>
          </div>
          <div className="card-body">
            <ul className="edge-cases-list">
              {problem.explanation.edgeCases.map((ec, idx) => (
                <li key={idx}>{ec}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Footer */}
        <div className="explanation-footer-cta">
          <div className="footer-cta-text">
            <h3>Ready to code it yourself?</h3>
            <p>Solidify your understanding by writing the solution in the interactive playground.</p>
          </div>
          <Link href={`/practice/${id}`} className="cta-launch-practice-btn">
            Launch Practice Workspace 💻
          </Link>
        </div>
      </main>
    </div>
  )
}
