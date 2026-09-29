'use client'

import { motion } from 'motion/react'
import SubtopicCard from './SubtopicCard'
import { TopicIcon } from '@/components/ui/Icons'
import type { Topic } from '@/types/dsa'

interface TopicSectionProps {
  topic:    Topic
  topicIdx: number
  solved:   Record<string, boolean>
  starred:  Record<string, boolean>
  onToggle: (id: string, type?: 'solved' | 'lmSolved') => void
  onStar:   (id: string) => void
}

export default function TopicSection({ topic, topicIdx, solved, starred, onToggle, onStar }: TopicSectionProps) {
  return (
    <motion.div
      className={`topic-block topic-color-${topic.colorIdx}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: topicIdx * 0.04, ease: [0.4, 0, 0.2, 1] }}
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
        {topic.subtopics.map(sub => (
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
    </motion.div>
  )
}
