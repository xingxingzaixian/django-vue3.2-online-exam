import apiHttp from '/@/utils/http'
import { QuestionListItem } from './types'

// 获取题目列表
export const getQuestionListApi = async (): Promise<QuestionListItem[]> => {
  return apiHttp.get<QuestionListItem[]>({
    url: '/api/question/question/',
  })
}

// 删除题目
export const deleteQuestionApi = async (id: number): Promise<void> => {
  return apiHttp.delete<void>({
    url: `/api/question/question/${id}/`,
  })
}