export interface QuestionColumn {
  prop: string
  label: string
  width?: number
  format?: 'html' | 'text' | 'action'
}