'use client'

import { useState, useCallback } from 'react'
import {
  toggleProblem,
  toggleStar as apiToggleStar,
  resetProgress,
  getProgress,
  importBackup,
  reviewProblem as apiReviewProblem,
} from '@/lib/api'
import type { ProgressState, SrsEntry } from '@/types/progress'

const EMPTY: ProgressState = {
  solved:      {},
  lmSolved:    {},
  activityLog: {},
  starred:     {},
  srs:         {},
}

export function useProgress(initialData: ProgressState = EMPTY) {
  const [solved,      setSolved]      = useState<Record<string, boolean>>(initialData.solved      ?? {})
  const [lmSolved,    setLmSolved]    = useState<Record<string, boolean>>(initialData.lmSolved    ?? {})
  const [activityLog, setActivityLog] = useState<Record<string, number>> (initialData.activityLog ?? {})
  const [starred,     setStarred]     = useState<Record<string, boolean>>(initialData.starred     ?? {})
  const [srs,         setSrs]         = useState<Record<string, SrsEntry>>(initialData.srs        ?? {})

  const toggle = useCallback(async (id: string, type: 'solved' | 'lmSolved' = 'solved') => {
    const todayStr = new Date().toISOString().split('T')[0]
    if (type === 'lmSolved') {
      setLmSolved(prev => ({ ...prev, [id]: !prev[id] }))
    } else {
      setSolved(prev => {
        const isNowSolved = !prev[id]
        setActivityLog(actPrev => ({
          ...actPrev,
          [todayStr]: Math.max(0, (actPrev[todayStr] ?? 0) + (isNowSolved ? 1 : -1)),
        }))
        return { ...prev, [id]: isNowSolved }
      })
    }
    try {
      const res = await toggleProblem(id, type)
      if (res.data.todayCount !== undefined) {
        setActivityLog(prev => ({ ...prev, [todayStr]: res.data.todayCount }))
      }
      if (type === 'solved') {
        setSrs(prev => {
          const next = { ...prev }
          if (res.data.srs) next[id] = res.data.srs
          else delete next[id]
          return next
        })
      }
    } catch { /* optimistic — ignore server errors */ }
  }, [])

  const star = useCallback(async (id: string) => {
    setStarred(prev => ({ ...prev, [id]: !prev[id] }))
    try { await apiToggleStar(id) } catch { /* ignore */ }
  }, [])

  const review = useCallback(async (id: string) => {
    try {
      const res = await apiReviewProblem(id)
      if (res.data.srs) setSrs(prev => ({ ...prev, [id]: res.data.srs }))
    } catch { /* ignore */ }
  }, [])

  const reset = useCallback(async () => {
    await resetProgress()
    setSolved({})
    setLmSolved({})
    setActivityLog({})
    setStarred({})
    setSrs({})
  }, [])

  const reload = useCallback(async () => {
    try {
      const res = await getProgress()
      setSolved(res.data.solved      ?? {})
      setLmSolved(res.data.lmSolved  ?? {})
      setActivityLog(res.data.activityLog ?? {})
      setStarred(res.data.starred    ?? {})
      setSrs(res.data.srs            ?? {})
    } catch { /* ignore */ }
  }, [])

  const importData = useCallback(async (backupData: Partial<ProgressState>) => {
    await importBackup(backupData)
    await reload()
  }, [reload])

  const totalSolved   = Object.values(solved).filter(Boolean).length
  const lmTotalSolved = Object.values(lmSolved).filter(Boolean).length

  return {
    solved, lmSolved, activityLog, starred, srs,
    toggle, star, review, reset, reload, importData,
    totalSolved, lmTotalSolved,
  }
}
