import { motion, AnimatePresence } from 'framer-motion'
import { useSpring, animated } from '@react-spring/web'
import ProblemItem from './ProblemItem'

export default function ProblemModal({ subtopic, topicName, solved, onToggle, onClose }) {
  const solvedCount = subtopic.problems.filter(p => solved[p.id]).length
  const total = subtopic.problems.length
  const pct = total ? Math.round((solvedCount / total) * 100) : 0

  const progSpring = useSpring({
    width: `${pct}%`,
    config: { tension: 200, friction: 30 },
  })

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          onClick={e => e.stopPropagation()}
        >
          <div className="modal-header">
            <div>
              <div className="modal-badges">
                <span className="badge badge-topic">{topicName}</span>
                <span className="badge badge-purple">{total} problems</span>
              </div>
              <h3 className="modal-title">{subtopic.name}</h3>
              <p className="modal-subtitle">{subtopic.desc}</p>
            </div>
            <button className="modal-close" onClick={onClose} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <div className="modal-body">
            <div className="modal-prog-bar">
              <animated.div className="modal-prog-fill" style={progSpring} />
            </div>
            <p className="modal-prog-label">{solvedCount} / {total} problems solved — {pct}%</p>

            <div className="modal-problems">
              {subtopic.problems.map(p => (
                <ProblemItem
                  key={p.id}
                  problem={p}
                  isSolved={!!solved[p.id]}
                  onToggle={onToggle}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
