import { useRef } from 'react'
import { motion } from 'framer-motion'
import { playClickSound } from '../utils/audioSystem'

const TABS = [
  { id: 'profile', label: 'My Profile', icon: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>
    </svg>
  )},
  { id: 'pattern', label: 'Pattern-Wise', icon: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  )},
  { id: 'lastmin', label: 'Last Minute 100', icon: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  )},
  { id: 'analytics', label: 'Analytics & Heatmap', icon: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
    </svg>
  )},
  { id: 'revision', label: 'SRS Revision', icon: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )},
]

export default function TabBar({ activeTab, onChange }) {
  const tabRefs = useRef({})

  return (
    <div className="tab-bar" role="tablist">
      {TABS.map(tab => (
        <button
          key={tab.id}
          ref={el => tabRefs.current[tab.id] = el}
          role="tab"
          aria-selected={activeTab === tab.id}
          className={`tab-btn${activeTab === tab.id ? ' active' : ''}`}
          onClick={() => {
            playClickSound()
            onChange(tab.id)
          }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="tab-indicator"
              className="tab-indicator"
              style={{ position: 'absolute', inset: 0, borderRadius: 999, zIndex: -1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  )
}
