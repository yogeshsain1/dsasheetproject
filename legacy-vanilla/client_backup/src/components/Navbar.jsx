import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getProgress } from '../api/api'
import { isSoundEnabled, toggleSound } from '../utils/audioSystem'

export default function Navbar({ totalProblems, totalSolved, onReset, onImport, user, onLogout }) {
  const [scrolled, setScrolled] = useState(false)
  const [showReset, setShowReset] = useState(false)
  const [soundOn, setSoundOn] = useState(isSoundEnabled)
  const fileInputRef = useRef()

  const handleToggleSound = () => {
    const newState = toggleSound()
    setSoundOn(newState)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const pct = totalProblems ? Math.round((totalSolved / totalProblems) * 100) : 0

  // Export JSON backup file
  const handleExport = async () => {
    try {
      const res = await getProgress()
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(res.data, null, 2))
      const downloadAnchor = document.createElement('a')
      downloadAnchor.setAttribute("href", dataStr)
      downloadAnchor.setAttribute("download", `dsa_progress_backup_${new Date().toISOString().split('T')[0]}.json`)
      document.body.appendChild(downloadAnchor)
      downloadAnchor.click()
      downloadAnchor.remove()
    } catch {}
  }

  // Import JSON backup file
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = async (evt) => {
      try {
        const json = JSON.parse(evt.target.result)
        if (onImport) await onImport(json)
        alert('✅ Backup restored successfully!')
      } catch {
        alert('❌ Invalid backup JSON file')
      }
    }
    reader.readAsText(file)
  }

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".json"
        style={{ display: 'none' }}
      />

      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-glass" />
        <div className="navbar-inner">
          <motion.a
            href="#"
            className="nav-logo"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="logo-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
              </svg>
            </div>
            <span>DSA Mastery</span>
          </motion.a>

          <div className="nav-actions">
            <span style={{ color: 'var(--white-70)', fontSize: '0.8rem' }}>{user?.name}</span>

            <motion.button
              className="solve-link"
              onClick={onLogout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Sign out of your profile"
            >
              Sign out
            </motion.button>

            {/* Cyberpunk Sound Toggle button */}
            <motion.button
              className="solve-link"
              onClick={handleToggleSound}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: soundOn ? 'rgba(0,212,255,0.12)' : 'var(--black-80)',
                color: soundOn ? '#00d4ff' : 'var(--white-40)',
                borderColor: soundOn ? 'rgba(0,212,255,0.35)' : 'var(--border)',
                padding: '6px 12px'
              }}
              title={soundOn ? 'Mute Cyberpunk Audio SFX' : 'Enable Cyberpunk Audio SFX'}
            >
              {soundOn ? '🔊 SFX ON' : '🔇 SFX OFF'}
            </motion.button>

            {/* Export Backup button */}
            <motion.button
              className="solve-link"
              onClick={handleExport}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ background: 'rgba(0,255,136,0.1)', color: 'var(--green)', borderColor: 'rgba(0,255,136,0.3)', padding: '6px 12px' }}
              title="Download backup file"
            >
              📥 Backup
            </motion.button>

            {/* Import Backup button */}
            <motion.button
              className="solve-link"
              onClick={() => fileInputRef.current?.click()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ background: 'var(--purple-dim)', color: 'var(--purple)', borderColor: 'rgba(168,85,247,0.3)', padding: '6px 12px' }}
              title="Restore from JSON backup file"
            >
              📤 Restore
            </motion.button>

            {/* Progress pill */}
            <AnimatePresence mode="wait">
              <motion.div
                key={totalSolved}
                className="progress-pill"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <span className="pulse-dot" />
                <span>{totalSolved} / {totalProblems} solved</span>
                <span style={{
                  marginLeft: 6,
                  background: 'rgba(0,255,136,0.15)',
                  borderRadius: 50,
                  padding: '1px 8px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--green)',
                }}>
                  {pct}%
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Reset button */}
            <motion.button
              className="reset-btn"
              title="Reset all progress"
              whileHover={{ scale: 1.1, rotate: -20 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowReset(true)}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                <path d="M3 3v5h5"/>
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Thin progress bar at bottom of navbar */}
        <motion.div
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, var(--green), var(--purple))',
            boxShadow: '0 0 8px var(--green)',
            originX: 0,
          }}
          animate={{ scaleX: pct / 100 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </nav>

      {/* Reset confirmation modal */}
      <AnimatePresence>
        {showReset && (
          <motion.div
            style={{
              position: 'fixed', inset: 0, zIndex: 300,
              background: 'rgba(0,0,0,0.85)',
              backdropFilter: 'blur(12px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: 20,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              style={{
                background: 'var(--black-90)',
                border: '1px solid rgba(239,68,68,0.3)',
                borderRadius: 20,
                padding: '32px 28px',
                maxWidth: 400,
                width: '100%',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>⚠️</div>
              <h3 style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: 8 }}>Reset All Progress?</h3>
              <p style={{ color: 'var(--white-40)', fontSize: '0.875rem', marginBottom: 24, lineHeight: 1.6 }}>
                This will permanently erase all your solved problems, notes, and activity history. This action cannot be undone.
              </p>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                <motion.button
                  onClick={() => setShowReset(false)}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  style={{
                    padding: '10px 22px', borderRadius: 10, fontWeight: 600,
                    background: 'var(--black-80)', border: '1px solid var(--border)',
                    color: 'var(--white-70)', cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  onClick={() => { onReset(); setShowReset(false) }}
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  style={{
                    padding: '10px 22px', borderRadius: 10, fontWeight: 700,
                    background: 'var(--hard)', border: 'none',
                    color: '#fff', cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  Reset Everything
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
