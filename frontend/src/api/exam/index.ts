import type { Pagination, ReturnTotal } from '/@/types/common';
import type { ExamCreateItem, ExamListItem, ExamFilter } from './types'
import apiHttp from '/@/utils/http'

// 获取考试列表
export const getExamListApi = async (pagination: Pagination, filterParams?: ExamFilter): Promise<ReturnTotal<ExamListItem>> => {
  return apiHttp.get<ReturnTotal<ExamListItem>>({
    url: '/api/exam/exam/',
    params: {...pagination, ...filterParams},
  })
}

// 获取考试信息
export const getExamApi = async (id: number): Promise<ExamCreateItem> => {
  return apiHttp.get<ExamCreateItem>({
    url: `/api/exam/exam/${id}/`
  })
}

// 创建考试
export const createExamApi = async (data: ExamCreateItem): Promise<void> => {
  return apiHttp.post({
    url: '/api/exam/exam/',
    data
  })
}

// 更新考试
export const updateExamApi = async (id: number, data: ExamCreateItem): Promise<void> => {
  return apiHttp.put({
    url: `/api/exam/exam/${id}/`,
    data
  })
}

// 删除考试
export const deleteExamApi = async (id: number): Promise<void> => {
  return apiHttp.delete({
    url: `/api/exam/exam/${id}/`,
  })
}