import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="600">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <motion.a href="#" className="nav-logo" whileHover={{ scale: 1.04 }}>
              <div className="logo-box">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
                </svg>
              </div>
              <span>DSA Mastery</span>
            </motion.a>
            <p className="footer-desc">
              Master data structures and algorithms with curated problem sheets.
              Track your progress and ace technical interviews at top companies.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
              {['#00ff88', '#a855f7', '#3b82f6'].map((c, i) => (
                <div key={i} style={{ width: 24, height: 4, borderRadius: 2, background: c, opacity: 0.6 }} />
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <a href="#">Pattern-Wise Sheet</a>
            <a href="#">Last Minute 100</a>
            <a href="#">Progress Tracker</a>
          </div>

          <div className="footer-col">
            <h4>Practice</h4>
            <a href="https://leetcode.com" target="_blank" rel="noopener">LeetCode</a>
            <a href="https://www.geeksforgeeks.org" target="_blank" rel="noopener">GeeksForGeeks</a>
            <a href="https://codeforces.com" target="_blank" rel="noopener">Codeforces</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Built for competitive programmers<span className="footer-dot"/> Track, practice, excel.</span>
          <span>© 2025 DSA Mastery Sheet. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
