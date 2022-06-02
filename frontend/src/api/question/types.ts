export interface QuestionListItem {
  id: number
  content: string
  description : string
  category: string
  level: string
  type: string
  update_time: string
}

export interface QuestionCreateItem {
  content: string
  description : string
  option_ids: number[]
  anser_ids: number[]
  level_tag: string
  type_tag: string
  category_tag: string
}

interface QuestionCommonItem {
  id: number
  name: string
  tag: string
  description: string
}

export interface QuestionTypeListItem extends QuestionCommonItem {
}

export interface QuestionCategoryListItem extends QuestionCommonItem {
}

export interface QuestionLevelListItem extends QuestionCommonItem {
}

export interface QuestionOptionItem {
  id: number
  text: string
  content: string
  description: string
}

export interface QuestionFilter {
  content__icontains?: string
  description__icontains?: string
}

export interface OptionFilter {
  content__icontains?: string
  description__icontains?: string
}