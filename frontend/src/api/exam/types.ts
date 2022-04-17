export interface ExamListItem {
  id: number
  name: string
  avatar: string
  description: string
  score: string
  limit_time: string
  start_date: string
  end_date: string
}

export interface ExamCreateItem {}

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