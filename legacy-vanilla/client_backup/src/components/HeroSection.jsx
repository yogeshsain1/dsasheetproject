import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import ThreeBackground from './ThreeBackground'

gsap.registerPlugin(SplitText)

const CODE_SNIPPETS = [
  'O(log n)', 'BFS', 'DFS', 'DP', 'O(1)', 'MST',
  'O(n²)', 'LCA', 'KMP', 'Trie', 'Heap', 'BST',
  'O(n)', 'Hash', 'GCD', 'XOR', 'LIS', 'SCC',
]

export default function HeroSection({ totalProblems, scrollToSheet }) {
  const titleRef    = useRef()
  const subtitleRef = useRef()
  const badgeRef    = useRef()
  const ctaRef      = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.from(badgeRef.current, { opacity: 0, y: 20, duration: 0.6 }, 0.2)

      try {
        const split = new SplitText(titleRef.current, { type: 'lines,words' })
        tl.from(split.words, {
          opacity: 0, y: 60, rotateX: -30, stagger: 0.05, duration: 0.8,
          ease: 'power3.out',
        }, 0.4)
      } catch {
        tl.from(titleRef.current, { opacity: 0, y: 40, duration: 0.8 }, 0.4)
      }

      tl.from(subtitleRef.current, { opacity: 0, y: 24, duration: 0.7 }, 0.9)
      tl.from(ctaRef.current, { opacity: 0, y: 16, duration: 0.6 }, 1.1)
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="hero">
      <ThreeBackground />

      {/* floating code tags */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1
      }}>
        {CODE_SNIPPETS.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 0.35, 0.2, 0.35], y: [20, 0, -10, 0] }}
            transition={{
              duration: 5 + Math.random() * 4,
              delay: i * 0.4,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              left: `${8 + (i * 5.8) % 85}%`,
              top: `${10 + (i * 7.3) % 75}%`,
              fontFamily: 'var(--mono)',
              fontSize: '0.68rem',
              fontWeight: 600,
              color: i % 3 === 0 ? 'var(--green)' : i % 3 === 1 ? 'var(--purple)' : '#3b82f6',
              background: 'rgba(0,0,0,0.6)',
              border: `1px solid ${i % 3 === 0 ? 'rgba(0,255,136,0.2)' : i % 3 === 1 ? 'rgba(168,85,247,0.2)' : 'rgba(59,130,246,0.2)'}`,
              borderRadius: '6px',
              padding: '3px 8px',
              backdropFilter: 'blur(4px)',
              whiteSpace: 'nowrap',
            }}
          >
            {s}
          </motion.div>
        ))}
      </div>

      <div className="container">
        <div className="hero-content">
          <div ref={badgeRef} className="hero-eyebrow">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
            Pattern-Based DSA Sheet
          </div>

          <h1 ref={titleRef} className="hero-title">
            Master DSA for<br />
            <span className="gradient-text">Coding Interviews</span>
          </h1>

          <p ref={subtitleRef} className="hero-sub">
            Track your journey through {totalProblems}+ curated problems, organized by patterns.
            Crack FAANG interviews with a structured, proven approach.
          </p>

          <div ref={ctaRef} className="hero-cta">
            <button className="btn-primary" onClick={scrollToSheet}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              Start Practicing
            </button>
            <a href="https://leetcode.com" target="_blank" rel="noopener" className="btn-secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M10 14L21 3M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/></svg>
              Open LeetCode
            </a>
          </div>

          <StatsPreview totalProblems={totalProblems} />
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px',
        background: 'linear-gradient(to bottom, transparent, #000)',
        pointerEvents: 'none', zIndex: 2,
      }} />
    </section>
  )
}

function StatsPreview({ totalProblems }) {
  const items = [
    { label: 'Problems', value: `${totalProblems}+`, color: 'var(--green)' },
    { label: 'Topics',   value: '15+',               color: 'var(--purple)' },
    { label: 'Patterns', value: '50+',               color: '#3b82f6' },
    { label: 'Free',     value: '100%',              color: '#f59e0b' },
  ]
  return (
    <motion.div
      className="stats-row"
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 1.3 } } }}
    >
      {items.map(({ label, value, color }) => (
        <motion.div
          key={label}
          className="stat-card"
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
        >
          <div className="stat-number" style={{ color }}>{value}</div>
          <div className="stat-label">{label}</div>
        </motion.div>
      ))}
    </motion.div>
  )
}
