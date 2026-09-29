import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CompanyIcon, TopicIcon } from './IconSystem'

const COMPANIES = [
  { id: 'Google',    name: 'Google' },
  { id: 'Amazon',    name: 'Amazon' },
  { id: 'Meta',      name: 'Meta' },
  { id: 'Microsoft', name: 'Microsoft' },
  { id: 'Apple',     name: 'Apple' },
  { id: 'Netflix',   name: 'Netflix' },
  { id: 'Uber',      name: 'Uber' },
]

export default function FiltersBar({
  searchQuery, setSearchQuery,
  diffFilter, setDiffFilter,
  topicFilter, setTopicFilter,
  companyFilter, setCompanyFilter,
  topics
}) {
  const [diffOpen,    setDiffOpen]    = useState(false)
  const [topicOpen,   setTopicOpen]   = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)

  const toggleDiff = (val) => {
    setDiffFilter(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val])
  }
  const toggleTopic = (id) => {
    setTopicFilter(prev => prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id])
  }
  const toggleCompany = (id) => {
    setCompanyFilter(prev => prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id])
  }

  const hasDiffFilter    = diffFilter.length > 0
  const hasTopicFilter   = topicFilter.length > 0
  const hasCompanyFilter = companyFilter.length > 0

  return (
    <div className="filters-bar">
      {/* Search */}
      <div className="search-wrap">
        <span className="search-icon-wrap">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
        </span>
        <input
          type="text"
          className="search-input"
          placeholder="Search problems, topics, companies…"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          autoComplete="off"
        />
        <kbd className="search-kbd">⌘K</kbd>
      </div>

      <div className="filter-group">
        {/* Company Dropdown */}
        <div className="dropdown-wrap">
          <button
            className={`filter-btn${hasCompanyFilter ? ' active' : ''}`}
            onClick={() => { setCompanyOpen(o => !o); setDiffOpen(false); setTopicOpen(false) }}
          >
            Company
            {hasCompanyFilter && (
              <span style={{
                background: 'var(--green)', color: '#000', borderRadius: 50,
                padding: '0 6px', fontSize: '0.68rem', fontWeight: 800,
              }}>
                {companyFilter.length}
              </span>
            )}
            <motion.svg
              width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              animate={{ rotate: companyOpen ? 180 : 0 }} transition={{ duration: 0.2 }}
            >
              <path d="m6 9 6 6 6-6"/>
            </motion.svg>
          </button>

          <AnimatePresence>
            {companyOpen && (
              <motion.div
                className="dropdown-menu"
                style={{ minWidth: 180 }}
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.15 }}
              >
                {COMPANIES.map(c => (
                  <label key={c.id} className="dropdown-item">
                    <input type="checkbox" checked={companyFilter.includes(c.id)} onChange={() => toggleCompany(c.id)} />
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <CompanyIcon company={c.id} size={14} />
                      <span>{c.name}</span>
                    </span>
                  </label>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Difficulty dropdown */}
        <div className="dropdown-wrap">
          <button
            className={`filter-btn${hasDiffFilter ? ' active' : ''}`}
            onClick={() => { setDiffOpen(o => !o); setCompanyOpen(false); setTopicOpen(false) }}
          >
            Difficulty
            {hasDiffFilter && (
              <span style={{
                background: 'var(--green)', color: '#000', borderRadius: 50,
                padding: '0 6px', fontSize: '0.68rem', fontWeight: 800,
              }}>
                {diffFilter.length}
              </span>
            )}
            <motion.svg
              width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              animate={{ rotate: diffOpen ? 180 : 0 }} transition={{ duration: 0.2 }}
            >
              <path d="m6 9 6 6 6-6"/>
            </motion.svg>
          </button>

          <AnimatePresence>
            {diffOpen && (
              <motion.div
                className="dropdown-menu"
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.15 }}
              >
                {['Easy','Medium','Hard'].map(d => (
                  <label key={d} className="dropdown-item">
                    <input type="checkbox" checked={diffFilter.includes(d)} onChange={() => toggleDiff(d)} />
                    <span className={`badge badge-${d.toLowerCase()}`}>{d}</span>
                  </label>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Topic dropdown */}
        <div className="dropdown-wrap">
          <button
            className={`filter-btn${hasTopicFilter ? ' active' : ''}`}
            onClick={() => { setTopicOpen(o => !o); setDiffOpen(false); setCompanyOpen(false) }}
          >
            Topic
            {hasTopicFilter && (
              <span style={{
                background: 'var(--green)', color: '#000', borderRadius: 50,
                padding: '0 6px', fontSize: '0.68rem', fontWeight: 800,
              }}>
                {topicFilter.length}
              </span>
            )}
            <motion.svg
              width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              animate={{ rotate: topicOpen ? 180 : 0 }} transition={{ duration: 0.2 }}
            >
              <path d="m6 9 6 6 6-6"/>
            </motion.svg>
          </button>

          <AnimatePresence>
            {topicOpen && (
              <motion.div
                className="dropdown-menu"
                style={{ minWidth: 200, maxHeight: 300, overflowY: 'auto' }}
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.15 }}
              >
                {topics.map(t => (
                  <label key={t.id} className="dropdown-item">
                    <input type="checkbox" checked={topicFilter.includes(t.id)} onChange={() => toggleTopic(t.id)} />
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <TopicIcon topicId={t.id} size={14} />
                      <span>{t.name}</span>
                    </span>
                  </label>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Clear filters */}
        <AnimatePresence>
          {(hasDiffFilter || hasTopicFilter || hasCompanyFilter || searchQuery) && (
            <motion.button
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              className="filter-btn"
              onClick={() => { setDiffFilter([]); setTopicFilter([]); setCompanyFilter([]); setSearchQuery('') }}
              style={{ color: 'var(--hard)', borderColor: 'rgba(239,68,68,0.3)' }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
              Clear
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
