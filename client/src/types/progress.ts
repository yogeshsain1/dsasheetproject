export interface SrsEntry {
  step: number
  nextReviewDate: string
}

export interface ProgressState {
  solved:      Record<string, boolean>
  lmSolved:    Record<string, boolean>
  activityLog: Record<string, number>
  starred:     Record<string, boolean>
  srs:         Record<string, SrsEntry>
}

export interface NoteEntry {
  text: string
  code: string
  lang: string
}

export interface User {
  id: string
  name: string
  email: string
}

export interface AuthPayload {
  token: string
  user: User
}
