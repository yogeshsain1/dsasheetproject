import { useEffect } from 'react'
import { motion } from 'framer-motion'
import SubtopicCard from './SubtopicCard'
import { TopicIcon } from './IconSystem'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function TopicSection({ topic, topicIdx, solved, starred, onToggle, onStar }) {
  useEffect(() => {
    AOS.refresh()
  }, [])

  return (
    <div
      className={`topic-block topic-color-${topic.colorIdx}`}
      data-aos="fade-up"
      data-aos-delay={topicIdx * 40}
      data-aos-duration="600"
    >
      <div className="topic-header">
        <h2 className="topic-title">
          <span className="topic-icon">
            <TopicIcon topicId={topic.id} size={20} />
          </span>
          {topic.name}
        </h2>
        <p className="topic-desc">{topic.desc}</p>
      </div>

      <motion.div
        className="subtopics-list"
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {topic.subtopics.map((sub) => (
          <SubtopicCard
            key={sub.id}
            subtopic={sub}
            solved={solved}
            starred={starred}
            onToggle={onToggle}
            onStar={onStar}
            colorIdx={topic.colorIdx}
          />
        ))}
      </motion.div>
    </div>
  )
}
