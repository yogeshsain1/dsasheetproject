import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { DSA_DATA } from './data/dsaData'
import { useProgress } from './hooks/useProgress'
import { clearSession, getProgress, getStoredUser } from './api/api'

import Navbar           from './components/Navbar'
import HeroSection      from './components/HeroSection'
import TabBar           from './components/TabBar'
import FiltersBar       from './components/FiltersBar'
import TopicSection     from './components/TopicSection'
import LastMinute       from './components/LastMinute'
import AnalyticsSection from './components/AnalyticsSection'
import RevisionSection  from './components/RevisionSection'
import Footer           from './components/Footer'
import AuthScreen       from './components/AuthScreen'
import ProfileDashboard from './components/ProfileDashboard'
import './index.css'

const totalProblems = DSA_DATA.reduce((a, t) =>
  a + t.subtopics.reduce((b, s) => b + s.problems.length, 0), 0)

export default function App() {
  const [ready,         setReady]         = useState(false)
  const [activeTab,     setActiveTab]     = useState('profile')
  const [searchQuery,   setSearchQuery]   = useState('')
  const [diffFilter,    setDiffFilter]    = useState([])
  const [topicFilter,   setTopicFilter]   = useState([])
  const [companyFilter, setCompanyFilter] = useState([])
  const [user, setUser] = useState(getStoredUser)
  const sheetRef = useRef()

  const { solved, lmSolved, activityLog, starred, srs, toggle, star, review, reset, reload, importData, totalSolved } = useProgress()

  useEffect(() => {
    if (!user) {
      setReady(true)
      return
    }
    AOS.init({ duration: 600, once: true, offset: 60, easing: 'ease-out-cubic' })
    getProgress()
      .then(res => reload())
      .catch(() => {})
      .finally(() => setReady(true))
  }, [user, reload])

  const handleLogout = () => {
    clearSession()
    setUser(null)
  }

  const scrollToSheet = () => {
    sheetRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') {
        setSearchQuery('')
        setDiffFilter([])
        setTopicFilter([])
        setCompanyFilter([])
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const filteredTopics = DSA_DATA
    .filter(t => !topicFilter.length || topicFilter.includes(t.id))
    .map(topic => ({
      ...topic,
      subtopics: topic.subtopics.map(sub => ({
        ...sub,
        problems: sub.problems.filter(p => {
          const matchDiff    = !diffFilter.length || diffFilter.includes(p.difficulty)
          const matchCompany = !companyFilter.length || (p.companies && p.companies.some(c => companyFilter.includes(c)))
          const matchQuery   = !searchQuery ||
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (p.companies && p.companies.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())))
          return matchDiff && matchCompany && matchQuery
        })
      })).filter(sub => sub.problems.length > 0)
    })).filter(t => t.subtopics.length > 0)

  if (!user) return <AuthScreen onAuthenticated={setUser} />

  if (!ready) {
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#000', flexDirection: 'column', gap: 16,
      }}>
        <motion.div
          style={{
            width: 48, height: 48,
            border: '3px solid var(--border)',
            borderTop: '3px solid var(--green)',
            borderRadius: '50%',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
        />
        <p style={{ color: 'var(--white-40)', fontFamily: 'var(--mono)', fontSize: '0.85rem' }}>
          Loading DSA Mastery…
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="grid-bg" aria-hidden="true" />
      <div className="corner-glow-tl" aria-hidden="true" />
      <div className="corner-glow-br" aria-hidden="true" />

      <Navbar
        totalProblems={totalProblems}
        totalSolved={totalSolved}
        onReset={reset}
        onImport={importData}
        user={user}
        onLogout={handleLogout}
      />

      <main>
        <HeroSection
          totalProblems={totalProblems}
          scrollToSheet={scrollToSheet}
        />

        <section className="sheet-section" ref={sheetRef}>
          <div className="container">
            <div className="section-sep" />

            <TabBar activeTab={activeTab} onChange={setActiveTab} />

            {activeTab !== 'analytics' && (
              <FiltersBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                diffFilter={diffFilter}
                setDiffFilter={setDiffFilter}
                topicFilter={topicFilter}
                setTopicFilter={setTopicFilter}
                companyFilter={companyFilter}
                setCompanyFilter={setCompanyFilter}
                topics={DSA_DATA}
              />
            )}

            <AnimatePresence mode="wait">
              {activeTab === 'profile' && (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProfileDashboard
                    user={user}
                    solved={solved}
                    lmSolved={lmSolved}
                    starred={starred}
                    activityLog={activityLog}
                    totalProblems={totalProblems}
                    onOpenSheet={() => setActiveTab('pattern')}
                  />
                </motion.div>
              )}

              {activeTab === 'pattern' && (
                <motion.div
                  key="pattern"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="view-header">
                    <h2 className="view-title">Pattern Wise Sheet</h2>
                    <p className="view-sub">Master data structures and algorithms topic by topic</p>
                  </div>

                  {filteredTopics.length === 0 ? (
                    <div className="empty-state">
                      <div style={{ fontSize: '3rem', marginBottom: 12 }}>🔍</div>
                      <p className="empty-title">No problems found</p>
                      <p className="empty-sub">Try adjusting your search or company filters.</p>
                    </div>
                  ) : (
                    <div className="topics-container">
                      {filteredTopics.map((topic, i) => (
                        <TopicSection
                          key={topic.id}
                          topic={topic}
                          topicIdx={i}
                          solved={solved}
                          starred={starred}
                          onToggle={toggle}
                          onStar={star}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === 'lastmin' && (
                <motion.div
                  key="lastmin"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="view-header">
                    <h2 className="view-title">Last Minute 100</h2>
                    <p className="view-sub">Top 100 must-solve problems before your interview</p>
                  </div>
                  <LastMinute
                    lmSolved={lmSolved}
                    onToggle={toggle}
                    searchQuery={searchQuery}
                    diffFilter={diffFilter}
                    companyFilter={companyFilter}
                  />
                </motion.div>
              )}

              {activeTab === 'analytics' && (
                <motion.div
                  key="analytics"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="view-header">
                    <h2 className="view-title">Analytics & Activity Heatmap</h2>
                    <p className="view-sub">Track your daily solving consistency and topic mastery</p>
                  </div>
                  <AnalyticsSection
                    solved={solved}
                    lmSolved={lmSolved}
                    activityLog={activityLog}
                  />
                </motion.div>
              )}

              {activeTab === 'revision' && (
                <motion.div
                  key="revision"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="view-header">
                    <h2 className="view-title">Spaced Repetition System</h2>
                    <p className="view-sub">Review these problems to strengthen your mastery.</p>
                  </div>
                  <RevisionSection
                    srs={srs}
                    solved={solved}
                    onReview={review}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
