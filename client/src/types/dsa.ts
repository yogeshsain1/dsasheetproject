export interface Problem {
  id: string
  name: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  lc?: string
  gfg?: string
  companies?: string[]
  lmTag?: boolean
  /** Used in LAST_MINUTE_100 items */
  topic?: string
}

export interface LMProblem {
  id: string
  name: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  lc?: string
  gfg?: string
  companies?: string[]
  topic: string
}

export interface Subtopic {
  id: string
  name: string
  desc: string
  problems: Problem[]
}

export interface Topic {
  id: string
  name: string
  desc?: string
  icon?: string
  colorIdx?: number
  subtopics: Subtopic[]
}
