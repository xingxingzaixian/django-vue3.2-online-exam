export interface QuestionColumn {
  prop: string
  label: string
  width?: number
  format?: 'html' | 'text' | 'action'
}

export interface Pagination {
  page: number
  pageSize: number
  total: number
}