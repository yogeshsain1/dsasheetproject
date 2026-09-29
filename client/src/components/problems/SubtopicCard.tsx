'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useSpring, animated } from '@react-spring/web'
import ProblemItem from './ProblemItem'
import type { Subtopic } from '@/types/dsa'

interface SubtopicCardProps {
  subtopic:  Subtopic
  solved:    Record<string, boolean>
  starred?:  Record<string, boolean>
  onToggle:  (id: string, type?: 'solved' | 'lmSolved') => void
  onStar?:   (id: string) => void
  colorIdx?: number
}

export default function SubtopicCard({ subtopic, solved, starred = {}, onToggle, onStar, colorIdx }: SubtopicCardProps) {
  const [expanded, setExpanded] = useState(false)
  const prevDoneRef = useRef(false)

  const solvedCount = subtopic.problems.filter(p => solved[p.id]).length
  const total = subtopic.problems.length
  const pct   = total ? Math.round((solvedCount / total) * 100) : 0
  const allDone = pct === 100

  useEffect(() => {
    prevDoneRef.current = allDone
  }, [allDone])

  const progSpring = useSpring({ width: `${pct}%`, config: { tension: 200, friction: 30 } })

  const articleUrl = `https://www.geeksforgeeks.org/search/?q=${encodeURIComponent(subtopic.name + ' DSA pattern guide')}`
  const videoUrl   = `https://www.youtube.com/results?search_query=${encodeURIComponent(subtopic.name + ' DSA pattern explanation')}`

  return (
    <motion.div
      className={`subtopic-card${expanded ? ' expanded' : ''}`}
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="subtopic-header"
        onClick={() => setExpanded(e => !e)}
        aria-expanded={expanded}
      >
        <div className="subtopic-left">
          <motion.svg
            className="chevron"
            width="16" height="16" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            animate={{ rotate: expanded ? 90 : 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <path d="m9 18 6-6-6-6"/>
          </motion.svg>

          <div>
            <div className="subtopic-name" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {subtopic.name}
              {allDone && (
                <motion.span
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                  style={{ fontSize: '0.8rem' }}
                >✅</motion.span>
              )}
            </div>
            <div className="subtopic-desc-short">{subtopic.desc}</div>
          </div>
        </div>

        <div className="subtopic-right">
          <div className="subtopic-count">
            <span className="solved-count">{solvedCount}</span>/{total}
          </div>
          <div className="prog-bar">
            <animated.div className="prog-bar-fill" style={progSpring} />
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            className="subtopic-body"
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="subtopic-divider" />

            {/* Study Material Banner */}
            <div style={{ background: 'var(--black-80)', border: '1px solid var(--green-border)', borderRadius: 'var(--r)', padding: '12px 16px', marginBottom: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: '1rem' }}>📖</span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--green)' }}>Study Material & Concept Notes</span>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <a href={articleUrl} target="_blank" rel="noopener noreferrer" className="solve-link"
                    style={{ background: 'rgba(0,255,136,0.1)', color: 'var(--green)', borderColor: 'rgba(0,255,136,0.3)' }}
                    onClick={e => e.stopPropagation()}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    Read Article
                  </a>
                  <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="solve-link"
                    style={{ background: 'rgba(239,68,68,0.1)', color: '#ef4444', borderColor: 'rgba(239,68,68,0.3)' }}
                    onClick={e => e.stopPropagation()}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                    Watch Tutorial
                  </a>
                </div>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--white-70)', marginTop: 8, lineHeight: 1.5 }}>
                <strong style={{ color: 'var(--white-90)' }}>Pattern Overview: </strong>
                {subtopic.desc}. Review the tutorial articles and video lessons above before tackling the questions below!
              </div>
            </div>

            {/* Problems */}
            <motion.div
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } } }}
              initial="hidden" animate="show"
            >
              {subtopic.problems.map(p => (
                <motion.div key={p.id} variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0, transition: { duration: 0.25 } } }}>
                  <ProblemItem
                    problem={p}
                    isSolved={!!solved[p.id]}
                    isStarred={!!starred[p.id]}
                    onToggle={onToggle}
                    onStar={onStar}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
