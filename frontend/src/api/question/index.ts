import apiHttp from '/@/utils/http'
import type {
  QuestionCategoryListItem,
  QuestionListItem,
  QuestionTypeListItem,
  QuestionLevelListItem,
  QuestionOptionItem,
  QuestionCreateItem,
  QuestionFilter,
  OptionFilter
} from './types'
import type { ReturnTotal, Pagination } from '/@/types/common'

// 获取题目列表
export const getQuestionListApi = async (pagination: Pagination, filterParams?: QuestionFilter): Promise<ReturnTotal<QuestionListItem>> => {
  return apiHttp.get<ReturnTotal<QuestionListItem>>({
    url: '/api/question/question/',
    params: {...pagination, ...filterParams},
  })
}

// 获取题目信息
export const getQuestionApi = async (id: number): Promise<QuestionCreateItem> => {
  return apiHttp.get<QuestionCreateItem>({
    url: `/api/question/question/${id}/`
  })
}

// 删除题目
export const deleteQuestionApi = async (id: number): Promise<void> => {
  return apiHttp.delete({
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
export const getQuestionOptionListApi = async (pagination: Pagination, filterParams?: OptionFilter) : Promise<ReturnTotal<QuestionOptionItem>> => {
  return apiHttp.get<ReturnTotal<QuestionOptionItem>>({
    url: '/api/question/option/',
    params: {...pagination, ...filterParams},
  })
}

// 创建题目
export const createQuestionApi = async (data: QuestionCreateItem) : Promise<void> => {
  return apiHttp.post({
    url: '/api/question/question/',
    data
  })
}

// 更新题目
export const updateQuestionApi = async (id: number, data: QuestionCreateItem) : Promise<void> => {
  return apiHttp.put({
    url: `/api/question/question/${id}/`,
    data
  })
}

// 创建题目选项
export const createQuestionOptionApi = async (data: QuestionOptionItem): Promise<void> => {
  return apiHttp.post({
    url: `/api/question/option/`,
    data
  })
}

// 更新题目选项
export const updateQuestionOptionApi = async (id: number, data: QuestionOptionItem): Promise<void> => {
  return apiHttp.put({
    url: `/api/question/option/${id}/`,
    data
  })
}

// 删除题目选项
export const deleteQuestionOptionApi = async (id: number): Promise<void> => {
  return apiHttp.delete({
    url: `/api/question/option/${id}/`
  })
}