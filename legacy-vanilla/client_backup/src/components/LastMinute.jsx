import { useState } from 'react'
import { motion } from 'framer-motion'
import { useSpring, animated } from '@react-spring/web'
import { LAST_MINUTE_100 } from '../data/dsaData'
import { CompanyIcon } from './IconSystem'
import { playCheckSound, playUncheckSound } from '../utils/audioSystem'

const diffColor = { Easy: 'var(--easy)', Medium: 'var(--medium)', Hard: 'var(--hard)' }

function LMItem({ item, index, isSolved, onToggle }) {
  const [popping, setPopping] = useState(false)
  const checkSpring = useSpring({
    scale: isSolved ? 1 : 0,
    config: { tension: 500, friction: 20 },
  })
  const borderSpring = useSpring({
    background: isSolved ? 'var(--green)' : 'transparent',
    borderColor: isSolved ? 'var(--green)' : 'rgba(255,255,255,0.15)',
    boxShadow: isSolved ? '0 0 12px rgba(0,255,136,0.5)' : '0 0 0px transparent',
    config: { tension: 400, friction: 25 },
  })

  const handleToggle = (e) => {
    if (e) e.stopPropagation()
    setPopping(true)
    setTimeout(() => setPopping(false), 400)
    if (!isSolved) {
      playCheckSound()
    } else {
      playUncheckSound()
    }
    onToggle(item.id, 'lmSolved')
  }

  return (
    <motion.div
      className={`lm-item${isSolved ? ' solved' : ''}`}
      onClick={handleToggle}
      whileHover={{ x: 5 }}
      transition={{ duration: 0.15 }}
      layout
    >
      <div className="lm-num">{String(index + 1).padStart(2, '0')}</div>

      <div className="lm-info">
        <div className="lm-name">{item.name}</div>
        <div className="lm-topic" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span>{item.topic}</span>
          {item.companies && item.companies.length > 0 && (
            <span style={{ color: 'var(--white-40)' }}>•</span>
          )}
          {item.companies && item.companies.map(comp => (
            <span key={comp} style={{ fontSize: '0.68rem', color: 'var(--white-70)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <CompanyIcon company={comp} size={12} />
              <span>{comp}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="lm-right" onClick={e => e.stopPropagation()}>
        <span className="badge" style={{
          background: `${diffColor[item.difficulty]}18`,
          color: diffColor[item.difficulty],
          borderColor: `${diffColor[item.difficulty]}40`,
        }}>
          {item.difficulty}
        </span>

        {/* GFG Link */}
        {item.gfg && (
          <motion.a
            href={item.gfg}
            target="_blank"
            rel="noopener noreferrer"
            className="solve-link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ background: 'rgba(47,158,110,0.12)', color: '#2f9e6e', borderColor: 'rgba(47,158,110,0.3)' }}
          >
            GFG
          </motion.a>
        )}

        {/* LeetCode Link */}
        <motion.a
          href={item.lc}
          target="_blank"
          rel="noopener noreferrer"
          className="solve-link"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ background: 'rgba(255,161,22,0.12)', color: '#ffa116', borderColor: 'rgba(255,161,22,0.3)' }}
        >
          LeetCode
        </motion.a>

        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {popping && (
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10 }}>
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, idx) => {
                const rad = (deg * Math.PI) / 180
                const x = Math.cos(rad) * 20
                const y = Math.sin(rad) * 20
                return (
                  <motion.span
                    key={idx}
                    initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                    animate={{ x, y, scale: 0, opacity: 0 }}
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
          <animated.div
            className="lm-checkbox"
            style={{ ...borderSpring, cursor: 'pointer' }}
            onClick={handleToggle}
          >
            <animated.div style={{ scale: checkSpring.scale, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </animated.div>
          </animated.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function LastMinute({ lmSolved, onToggle, searchQuery, diffFilter, companyFilter = [] }) {
  const filtered = LAST_MINUTE_100.filter(p => {
    const matchDiff    = !diffFilter.length || diffFilter.includes(p.difficulty)
    const matchCompany = !companyFilter.length || (p.companies && p.companies.some(c => companyFilter.includes(c)))
    const matchQuery   = !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.companies && p.companies.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())))
    return matchDiff && matchCompany && matchQuery
  })

  const solvedCount = LAST_MINUTE_100.filter(p => lmSolved[p.id]).length

  return (
    <div>
      <div style={{
        background: 'var(--black-90)', border: '1px solid var(--border)',
        borderRadius: 'var(--r-lg)', padding: '18px 22px', marginBottom: 24,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
        flexWrap: 'wrap',
      }}>
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--white-40)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
            Last Minute Progress
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--green)' }}>
            {solvedCount} <span style={{ color: 'var(--white-40)', fontSize: '0.9rem' }}>/ 100</span>
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 120 }}>
          <div style={{ height: 6, background: 'var(--black-60)', borderRadius: 50, overflow: 'hidden' }}>
            <motion.div
              style={{ height: '100%', borderRadius: 50, background: 'linear-gradient(90deg, var(--green), #00d4ff)' }}
              animate={{ width: `${solvedCount}%` }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            />
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--white-40)', marginTop: 4, fontFamily: 'var(--mono)' }}>
            {Math.round(solvedCount)}% complete
          </div>
        </div>
      </div>

      {!filtered.length ? (
        <div className="empty-state">
          <p className="empty-title">No problems found</p>
          <p className="empty-sub">Try adjusting your search or company filters.</p>
        </div>
      ) : (
        <motion.div
          className="lm-grid"
          variants={{ show: { transition: { staggerChildren: 0.02 } } }}
          initial="hidden"
          animate="show"
        >
          {filtered.map((item, i) => (
            <LMItem
              key={item.id}
              item={item}
              index={i}
              isSolved={!!lmSolved[item.id]}
              onToggle={onToggle}
            />
          ))}
        </motion.div>
      )}
    </div>
  )
}
