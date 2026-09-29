import { motion, AnimatePresence } from 'framer-motion'
import { playCompleteSound } from '../utils/audioSystem'
import { DSA_DATA } from '../data/dsaData'

export default function RevisionSection({ srs, solved, onReview }) {
  const todayStr = new Date().toISOString().split('T')[0]
  
  const dueProblems = []
  
  DSA_DATA.forEach(topic => {
    topic.subtopics.forEach(sub => {
      sub.problems.forEach(p => {
        if (srs && srs[p.id] && solved[p.id]) {
          const reviewDateStr = srs[p.id].nextReviewDate.split('T')[0]
          if (reviewDateStr <= todayStr) {
            dueProblems.push({ ...p, topicName: topic.name, step: srs[p.id].step })
          }
        }
      })
    })
  })

  const handleReview = (id) => {
    playCompleteSound()
    onReview(id)
  }

  if (dueProblems.length === 0) {
    return (
      <div className="empty-state">
        <div style={{ fontSize: '3rem', marginBottom: 12 }}>??</div>
        <p className="empty-title">All Caught Up!</p>
        <p className="empty-sub">You have no pending revisions for today.</p>
      </div>
    )
  }

  return (
    <div className="topics-container">
      <div className="topic-card">
        <h3 className="topic-title">Due for Review ({dueProblems.length})</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: 16, fontSize: '0.9rem' }}>
          Review these to strengthen your neural pathways.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <AnimatePresence>
            {dueProblems.map(p => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, x: 20 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '12px 16px', background: 'var(--bg-lighter)',
                  border: '1px solid var(--border)', borderRadius: 8,
                }}
              >
                <div>
                  <h4 style={{ color: 'var(--white)', margin: 0, fontSize: '0.95rem' }}>{p.name}</h4>
                  <div style={{ display: 'flex', gap: 8, marginTop: 4, alignItems: 'center' }}>
                    <span className={`diff-badge diff-${p.difficulty.toLowerCase()}`}>
                      {p.difficulty}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      {p.topicName}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent)', background: 'var(--accent-10)', padding: '2px 6px', borderRadius: 4 }}>
                      Step {p.step}
                    </span>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleReview(p.id)}
                  style={{
                    padding: '8px 16px',
                    background: 'transparent',
                    border: '1px solid var(--green)',
                    color: 'var(--green)',
                    borderRadius: 4,
                    cursor: 'pointer',
                    fontFamily: 'var(--mono)',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'var(--green-20)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  Mark Reviewed
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
