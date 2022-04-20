export interface ExamListItem {
  id: number
  name: string
  avatar: string
  description: string
  score: string
  limit_time: number
  start_date: string
  end_date: string
}

export type ExamCreateItem = Omit<ExamListItem, 'id' | 'score'>

export interface ExamFilter {
  name?: string
  name__icontains?: string
  description__icontains?: string
}

export interface ExamRecordItem {
  id: number
  score: number
  time_cost: number
  category_score: number
  start_time: number
}