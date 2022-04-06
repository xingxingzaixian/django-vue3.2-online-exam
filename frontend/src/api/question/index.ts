import apiHttp from '/@/utils/http'
import {
  QuestionCategoryListItem,
  QuestionListItem,
  QuestionTypeListItem,
  QuestionLevelListItem,
  QuestionOptionItem,
  QuestionCreateItem
} from './types'

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

// 获取题目类型列表
export const getQuestionTypeListApi = async (): Promise<QuestionTypeListItem[]> => {
  return apiHttp.get<QuestionTypeListItem[]>({
    url: '/api/question/type/',
  })
}

// 获取题目分类列表
export const getQuestionCategoryListApi = async (): Promise<QuestionCategoryListItem[]> => {
  return apiHttp.get<QuestionCategoryListItem[]>({
    url: '/api/question/category/'
  })
}

// 获取题目难度列表
export const getQuestionLevelListApi = async () : Promise<QuestionLevelListItem[]> => {
  return apiHttp.get<QuestionLevelListItem[]>({
    url: '/api/question/level/'
  })
}

// 获取题目选项列表
export const getQuestionOptionListApi = async () : Promise<QuestionOptionItem[]> => {
  return apiHttp.get<QuestionOptionItem[]>({
    url: '/api/question/option/'
  })
}

// 创建题目
export const createQuestionApi = async (data: QuestionCreateItem) : Promise<void> => {
  return apiHttp.post({
    url: '/api/question/question/',
    data
  })
}