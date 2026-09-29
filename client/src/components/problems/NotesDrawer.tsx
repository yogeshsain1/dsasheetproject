'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { getNotes, saveNotes } from '@/lib/api'
import Editor from 'react-simple-code-editor'
import Prism from 'prismjs'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-python'
import type { Problem } from '@/types/dsa'

const LANGUAGES = [
  { id: 'cpp',        name: 'C++',        prismLang: 'cpp' },
  { id: 'java',       name: 'Java',       prismLang: 'java' },
  { id: 'python',     name: 'Python 3',   prismLang: 'python' },
  { id: 'javascript', name: 'JavaScript', prismLang: 'javascript' },
] as const

type LangId = typeof LANGUAGES[number]['id']

interface NotesDrawerProps {
  problem: Problem
  onClose: () => void
}

export default function NotesDrawer({ problem, onClose }: NotesDrawerProps) {
  const [text,     setText]     = useState('')
  const [code,     setCode]     = useState('')
  const [lang,     setLang]     = useState<LangId>('cpp')
  const [saving,   setSaving]   = useState(false)
  const [savedMsg, setSavedMsg] = useState(false)

  useEffect(() => {
    if (!problem) return
    getNotes(problem.id).then(res => {
      if (res.data) {
        setText(res.data.text || '')
        setCode(res.data.code || '')
        setLang((res.data.lang as LangId) || 'cpp')
      }
    }).catch(() => {})
  }, [problem])

  const handleSave = async () => {
    setSaving(true)
    try {
      await saveNotes(problem.id, { text, code, lang })
      setSavedMsg(true)
      setTimeout(() => setSavedMsg(false), 2000)
    } catch { /* ignore */ }
    finally { setSaving(false) }
  }

  const highlightWithPrism = (c: string) => {
    const pLang = LANGUAGES.find(l => l.id === lang)?.prismLang || 'javascript'
    return Prism.highlight(c, Prism.languages[pLang] || Prism.languages.javascript, pLang)
  }

  if (!problem) return null

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ justifyContent: 'flex-end', padding: 0 }}
      >
        <motion.div
          initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          onClick={e => e.stopPropagation()}
          style={{
            width: '100%', maxWidth: 580, height: '100vh',
            background: 'var(--black-90)', borderLeft: '1px solid var(--border-hover)',
            display: 'flex', flexDirection: 'column', position: 'relative',
          }}
        >
          <div style={{
            padding: '24px 28px 16px', borderBottom: '1px solid var(--border)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12,
          }}>
            <div>
              <span className="badge badge-topic" style={{ marginBottom: 6 }}>Notes & Code Solution</span>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--white)' }}>{problem.name}</h3>
            </div>
            <button className="modal-close" onClick={onClose}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div style={{ padding: '24px 28px', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--white-40)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: 8 }}>
                📝 Personal Approach & Notes
              </label>
              <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Write your key intuition, edge cases, time/space complexity notes..."
                rows={4}
                style={{ width: '100%', background: 'var(--black-80)', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '12px 14px', color: 'var(--white-90)', fontSize: '0.875rem', outline: 'none', resize: 'vertical' }}
              />
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--white-40)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  💻 Code Solution
                </label>
                <select
                  value={lang}
                  onChange={e => setLang(e.target.value as LangId)}
                  style={{ background: 'var(--black-80)', border: '1px solid var(--border)', borderRadius: 6, color: 'var(--green)', fontSize: '0.78rem', padding: '3px 8px', fontWeight: 600, outline: 'none' }}
                >
                  {LANGUAGES.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
                </select>
              </div>
              <div className="code-editor-container">
                <Editor
                  value={code}
                  onValueChange={c => setCode(c)}
                  highlight={highlightWithPrism}
                  padding={16}
                  style={{ fontFamily: 'var(--mono)', fontSize: '0.85rem', minHeight: 280, backgroundColor: 'var(--black)' }}
                  textareaClassName="code-textarea"
                />
              </div>
            </div>
          </div>

          <div style={{ padding: '18px 28px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--black-95)' }}>
            <span style={{ fontSize: '0.78rem', color: savedMsg ? 'var(--green)' : 'var(--white-40)', fontFamily: 'var(--mono)' }}>
              {savedMsg ? '✓ Notes saved!' : 'Auto-save disabled — click save'}
            </span>
            <motion.button
              className="btn-primary"
              onClick={handleSave}
              disabled={saving}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{ padding: '10px 22px', fontSize: '0.85rem' }}
            >
              {saving ? 'Saving…' : 'Save Solution'}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
