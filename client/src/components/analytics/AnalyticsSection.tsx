'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { DSA_DATA } from '@/data/dsaData'
import type { Topic } from '@/types/dsa'

interface AnalyticsSectionProps {
  solved:      Record<string, boolean>
  lmSolved:    Record<string, boolean>
  activityLog: Record<string, number>
}

interface Cell { dateStr: string; count: number; dayOfWeek: number; dateObj: Date }
interface Tooltip { text: string; x: number; y: number }

const getHeatmapColor = (count: number) => {
  if (count === 0) return 'var(--black-80)'
  if (count === 1) return 'rgba(0, 255, 136, 0.25)'
  if (count === 2) return 'rgba(0, 255, 136, 0.55)'
  return 'rgba(0, 255, 136, 0.95)'
}

export default function AnalyticsSection({ solved, lmSolved, activityLog = {} }: AnalyticsSectionProps) {
  const [tooltip, setTooltip] = useState<Tooltip | null>(null)

  const heatmapData = useMemo<Cell[]>(() => {
    const cells: Cell[] = []
    const today = new Date()
    for (let i = 363; i >= 0; i--) {
      const d = new Date(today)
      d.setDate(d.getDate() - i)
      const dateStr = d.toISOString().split('T')[0]
      cells.push({ dateStr, count: activityLog[dateStr] || 0, dayOfWeek: d.getDay(), dateObj: d })
    }
    return cells
  }, [activityLog])

  const weeks = useMemo<Cell[][]>(() => {
    const cols: Cell[][] = []
    let week: Cell[] = []
    heatmapData.forEach((cell, i) => {
      week.push(cell)
      if (week.length === 7 || i === heatmapData.length - 1) { cols.push(week); week = [] }
    })
    return cols
  }, [heatmapData])

  const { currentStreak, longestStreak, totalActivityCount } = useMemo(() => {
    const dates = Object.keys(activityLog).filter(d => activityLog[d] > 0).sort()
    let curr = 0, maxS = 0, temp = 0, total = 0
    Object.values(activityLog).forEach(c => (total += c))

    const todayStr = new Date().toISOString().split('T')[0]
    let checkDate = new Date()
    while (true) {
      const dStr = checkDate.toISOString().split('T')[0]
      if ((activityLog[dStr] || 0) > 0) { curr++; checkDate.setDate(checkDate.getDate() - 1) }
      else if (dStr === todayStr) checkDate.setDate(checkDate.getDate() - 1)
      else break
    }
    dates.forEach((date, i) => {
      if (i === 0) temp = 1
      else {
        const diff = Math.round((new Date(date).getTime() - new Date(dates[i - 1]).getTime()) / 86400000)
        temp = diff === 1 ? temp + 1 : 1
      }
      if (temp > maxS) maxS = temp
    })
    return { currentStreak: curr, longestStreak: Math.max(curr, maxS), totalActivityCount: total }
  }, [activityLog])

  const topicStats = useMemo(() =>
    (DSA_DATA as Topic[]).map(t => {
      let tTotal = 0, tSolved = 0
      t.subtopics.forEach(s => {
        tTotal += s.problems.length
        tSolved += s.problems.filter(p => solved[p.id]).length
      })
      const pct = tTotal ? Math.round((tSolved / tTotal) * 100) : 0
      return { id: t.id, name: t.name, icon: t.icon, solved: tSolved, total: tTotal, pct, colorIdx: t.colorIdx }
    }).sort((a, b) => b.pct - a.pct),
  [solved])

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: 48 }}>
      {/* Header stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, marginBottom: 28 }}>
        {[
          { label: 'Current Streak', value: currentStreak, unit: 'days', emoji: '🔥', color: 'var(--green)' },
          { label: 'Longest Streak', value: longestStreak, unit: 'days', emoji: '⚡', color: 'var(--purple)' },
          { label: 'Total Submissions', value: totalActivityCount, unit: 'solves', emoji: '🎯', color: '#3b82f6' },
        ].map(({ label, value, unit, emoji, color }) => (
          <div key={label} className="stat-card" style={{ textAlign: 'left', padding: '20px 22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--white-40)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</span>
              <span style={{ fontSize: '1.4rem' }}>{emoji}</span>
            </div>
            <div className="stat-number" style={{ color }}>
              {value} <span style={{ fontSize: '0.9rem', color: 'var(--white-40)' }}>{unit}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Heatmap */}
      <div style={{ background: 'var(--black-90)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: '24px 28px', marginBottom: 36 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--white)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span>📅</span> Activity Heatmap
            </h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--white-40)', marginTop: 2 }}>Problem solving history over the last 52 weeks</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.72rem', color: 'var(--white-40)' }}>
            <span>Less</span>
            {[0, 1, 2, 3].map(lvl => <div key={lvl} style={{ width: 11, height: 11, borderRadius: 2, background: getHeatmapColor(lvl), border: '1px solid var(--border)' }} />)}
            <span>More</span>
          </div>
        </div>

        <div style={{ overflowX: 'auto', paddingBottom: 8 }}>
          <div style={{ display: 'flex', gap: 3, minWidth: 700 }}>
            {weeks.map((week, wIdx) => (
              <div key={wIdx} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {week.map(cell => (
                  <motion.div
                    key={cell.dateStr}
                    whileHover={{ scale: 1.4, zIndex: 10 }}
                    onMouseEnter={e => {
                      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
                      setTooltip({ text: `${cell.count} problem${cell.count === 1 ? '' : 's'} solved on ${cell.dateStr}`, x: rect.left + rect.width / 2, y: rect.top - 36 })
                    }}
                    onMouseLeave={() => setTooltip(null)}
                    style={{
                      width: 11, height: 11, borderRadius: 2,
                      background: getHeatmapColor(cell.count),
                      border: cell.count > 0 ? '1px solid var(--green-border)' : '1px solid var(--border)',
                      boxShadow: cell.count >= 3 ? '0 0 8px var(--green-glow)' : 'none',
                      cursor: 'pointer', transition: 'background 0.2s',
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Topic mastery */}
      <div style={{ background: 'var(--black-90)', border: '1px solid var(--border)', borderRadius: 'var(--r-xl)', padding: '24px 28px' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--white)', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span>📊</span> Topic Mastery Breakdown
        </h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--white-40)', marginBottom: 20 }}>Your completion progress across all 15+ Data Structure topics</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 14 }}>
          {topicStats.map(t => (
            <div key={t.id} style={{ background: 'var(--black-85)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '14px 16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--white-90)', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span>{t.icon}</span>{t.name}
                </span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.78rem', color: 'var(--green)', fontWeight: 700 }}>{t.pct}%</span>
              </div>
              <div style={{ height: 5, background: 'var(--black-60)', borderRadius: 50, overflow: 'hidden' }}>
                <motion.div
                  style={{ height: '100%', borderRadius: 50, background: 'linear-gradient(90deg, var(--green), #00d4ff)' }}
                  initial={{ width: 0 }} animate={{ width: `${t.pct}%` }} transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: '0.72rem', color: 'var(--white-40)' }}>
                <span>{t.solved} / {t.total} solved</span>
                <span>{t.total - t.solved} remaining</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            style={{
              position: 'fixed', left: tooltip.x, top: tooltip.y, transform: 'translateX(-50%)',
              background: 'var(--black-70)', border: '1px solid var(--green-border)',
              boxShadow: 'var(--shadow-md)', borderRadius: 6, padding: '4px 10px',
              fontSize: '0.73rem', color: 'var(--white)', pointerEvents: 'none',
              zIndex: 300, whiteSpace: 'nowrap', fontFamily: 'var(--mono)',
            }}
          >
            {tooltip.text}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
