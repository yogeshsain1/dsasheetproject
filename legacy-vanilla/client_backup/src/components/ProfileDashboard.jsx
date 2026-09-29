import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { DSA_DATA } from '../data/dsaData'

export default function ProfileDashboard({ user, solved, lmSolved, starred, activityLog, totalProblems, onOpenSheet }) {
  const solvedCount = Object.values(solved).filter(Boolean).length
  const lastMinuteCount = Object.values(lmSolved).filter(Boolean).length
  const bookmarkedCount = Object.values(starred).filter(Boolean).length
  const activeDays = Object.values(activityLog).filter(count => count > 0).length
  const completion = totalProblems ? Math.round((solvedCount / totalProblems) * 100) : 0

  const topicStats = useMemo(() => DSA_DATA.map(topic => {
    const total = topic.subtopics.reduce((sum, subtopic) => sum + subtopic.problems.length, 0)
    const complete = topic.subtopics.reduce((sum, subtopic) => (
      sum + subtopic.problems.filter(problem => solved[problem.id]).length
    ), 0)
    return { ...topic, total, complete, percentage: total ? Math.round((complete / total) * 100) : 0 }
  }).sort((a, b) => b.percentage - a.percentage).slice(0, 5), [solved])

  return (
    <motion.div className="profile-dashboard" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
      <section className="profile-hero">
        <div>
          <p className="profile-kicker">PERSONAL PROGRESS</p>
          <h1>{user?.name}'s dashboard</h1>
          <p>{user?.email}</p>
        </div>
        <div className="profile-ring" style={{ '--completion': `${completion * 3.6}deg` }}>
          <strong>{completion}%</strong>
          <span>complete</span>
        </div>
      </section>

      <section className="profile-stats" aria-label="Progress summary">
        <div className="profile-stat"><span>Problems solved</span><strong>{solvedCount}<small> / {totalProblems}</small></strong></div>
        <div className="profile-stat"><span>Last Minute 100</span><strong>{lastMinuteCount}<small> solved</small></strong></div>
        <div className="profile-stat"><span>Bookmarked</span><strong>{bookmarkedCount}<small> problems</small></strong></div>
        <div className="profile-stat"><span>Active days</span><strong>{activeDays}<small> days</small></strong></div>
      </section>

      <section className="profile-columns">
        <div className="profile-section">
          <div className="profile-section-heading"><div><p className="profile-kicker">MASTERY MAP</p><h2>Strongest topics</h2></div><button className="profile-link" onClick={onOpenSheet}>Open sheet</button></div>
          <div className="mastery-list">
            {topicStats.map(topic => (
              <div className="mastery-row" key={topic.id}>
                <div><span>{topic.icon} {topic.name}</span><small>{topic.complete} / {topic.total}</small></div>
                <div className="mastery-track"><i style={{ width: `${topic.percentage}%` }} /></div>
                <strong>{topic.percentage}%</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-section profile-focus">
          <p className="profile-kicker">NEXT SESSION</p>
          <h2>Keep the streak alive</h2>
          <p>Pick up where you left off and turn one more unchecked problem green.</p>
          <button className="btn-primary" onClick={onOpenSheet}>Continue solving</button>
        </div>
      </section>
    </motion.div>
  )
}
