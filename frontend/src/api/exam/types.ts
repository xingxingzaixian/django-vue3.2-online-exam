export interface ExamListItem {
  id: number
}

export interface ExamCreateItem {}

export interface ExamFilter {
  name?: string
  name__icontains?: string
  description__icontains?: string
}