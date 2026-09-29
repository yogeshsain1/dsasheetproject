'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { useSpring, animated } from '@react-spring/web'
import { CompanyIcon } from '@/components/ui/Icons'
import NotesDrawer from './NotesDrawer'
import type { Problem } from '@/types/dsa'

interface ProblemItemProps {
  problem:  Problem
  isSolved: boolean
  isStarred?: boolean
  onToggle: (id: string, type?: 'solved' | 'lmSolved') => void
  onStar?:  (id: string) => void
}

export default function ProblemItem({ problem, isSolved, isStarred = false, onToggle, onStar }: ProblemItemProps) {
  const [popping,   setPopping]   = useState(false)
  const [showNotes, setShowNotes] = useState(false)

  const checkSpring  = useSpring({ scale: isSolved ? 1 : 0, config: { tension: 500, friction: 20 } })
  const borderSpring = useSpring({
    boxShadow:   isSolved ? '0 0 12px rgba(0,255,136,0.5)' : '0 0 0px rgba(0,255,136,0)',
    background:  isSolved ? 'var(--green)' : 'transparent',
    borderColor: isSolved ? 'var(--green)' : 'rgba(255,255,255,0.15)',
    config: { tension: 400, friction: 25 },
  })

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    setPopping(true)
    setTimeout(() => setPopping(false), 400)
    onToggle(problem.id)
  }

  const handleStar = (e: React.MouseEvent) => {
    e.stopPropagation()
    onStar?.(problem.id)
  }

  const diffColor = {
    Easy:   'var(--easy)',
    Medium: 'var(--medium)',
    Hard:   'var(--hard)',
  }[problem.difficulty] ?? 'var(--white-40)'

  const PARTICLES = [0, 45, 90, 135, 180, 225, 270, 315]

  return (
    <>
      <motion.div
        className={`problem-item${isSolved ? ' solved' : ''}`}
        onClick={handleToggle}
        whileHover={{ x: 3 }}
        transition={{ duration: 0.15 }}
        layout
      >
        {/* Checkbox with particle pop */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {popping && (
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10 }}>
              {PARTICLES.map((deg, idx) => {
                const rad = (deg * Math.PI) / 180
                return (
                  <motion.span
                    key={idx}
                    initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                    animate={{ x: Math.cos(rad) * 22, y: Math.sin(rad) * 22, scale: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    style={{
                      position: 'absolute', left: '50%', top: '50%',
                      width: 5, height: 5, borderRadius: '50%',
                      background: idx % 2 === 0 ? 'var(--green)' : '#00d4ff',
                      boxShadow: '0 0 6px var(--green)',
                    }}
                  />
                )
              })}
            </div>
          )}
          <animated.div className="problem-checkbox" style={{ ...borderSpring, cursor: 'pointer' }} onClick={handleToggle}>
            <animated.div style={{ scale: checkSpring.scale, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </animated.div>
          </animated.div>
        </div>

        {/* Info */}
        <div className="problem-info" style={{ flex: 1, minWidth: 0 }}>
          <div className="problem-name" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {problem.name}
          </div>
          <div className="problem-meta">
            <span className="badge" style={{ background: `${diffColor}18`, color: diffColor, borderColor: `${diffColor}40` }}>
              {problem.difficulty}
            </span>
            {problem.companies && problem.companies.length > 0 && (
              <div style={{ display: 'inline-flex', gap: 4, marginLeft: 4 }}>
                {problem.companies.slice(0, 3).map(comp => (
                  <span key={comp} style={{
                    fontSize: '0.68rem', background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4,
                    padding: '1px 5px', color: 'var(--white-70)',
                  }} title={`Asked at ${comp}`}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      <CompanyIcon company={comp} size={12} />
                      <span>{comp}</span>
                    </span>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="problem-actions" onClick={e => e.stopPropagation()}>
          {onStar && (
            <motion.button
              className="solve-link"
              onClick={handleStar}
              whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
              style={{
                background: isStarred ? 'rgba(245,158,11,0.18)' : 'var(--black-80)',
                color: isStarred ? '#f59e0b' : 'var(--white-40)',
                borderColor: isStarred ? 'rgba(245,158,11,0.4)' : 'var(--border)',
              }}
              title={isStarred ? 'Bookmarked for Revision' : 'Bookmark for Revision'}
            >
              {isStarred ? '⭐' : '☆'}
            </motion.button>
          )}

          <Link
            href={`/practice/${problem.id}`}
            className="solve-link"
            style={{ background: 'rgba(0,255,136,0.12)', color: 'var(--green)', borderColor: 'rgba(0,255,136,0.3)', fontWeight: 600 }}
            title="Open Interactive Practice Playground"
          >
            💻 Practice
          </Link>

          <Link
            href={`/explanation/${problem.id}`}
            className="solve-link"
            style={{ background: 'rgba(168,85,247,0.12)', color: 'var(--purple)', borderColor: 'rgba(168,85,247,0.3)', fontWeight: 600 }}
            title="Read Complete Explanation & Approaches"
          >
            💡 Explain
          </Link>

          <motion.button
            className="solve-link"
            onClick={() => setShowNotes(true)}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            style={{ background: 'var(--purple-dim)', color: 'var(--purple)', borderColor: 'rgba(168,85,247,0.3)' }}
          >
            📝 Notes
          </motion.button>

          {problem.gfg && (
            <motion.a href={problem.gfg} target="_blank" rel="noopener noreferrer"
              className="solve-link" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              style={{ background: 'rgba(47,158,110,0.12)', color: '#2f9e6e', borderColor: 'rgba(47,158,110,0.3)' }}
              title="Practice on GeeksforGeeks"
            >GFG</motion.a>
          )}

          {problem.lc && (
            <motion.a href={problem.lc} target="_blank" rel="noopener noreferrer"
              className="solve-link" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              style={{ background: 'rgba(255,161,22,0.12)', color: '#ffa116', borderColor: 'rgba(255,161,22,0.3)' }}
              title="Practice on LeetCode"
            >LeetCode</motion.a>
          )}
        </div>
      </motion.div>

      {showNotes && <NotesDrawer problem={problem} onClose={() => setShowNotes(false)} />}
    </>
  )
}
