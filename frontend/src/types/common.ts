export interface Pagination {
  page: number
  pageSize: number
  total: number
}

export interface ColumnType {
  prop: string
  label: string
  width?: number
  format?: 'html' | 'action'
}

export interface ReturnTotal<T> {
  count: number
  results: T[]
}
