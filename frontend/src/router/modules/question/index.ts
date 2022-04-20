import type { AppRouteRecordRaw } from '/@/router/types'
import Layout from '/@/layout/Layout.vue'

const managerRoute: AppRouteRecordRaw = {
  path: '/question',
  name: 'Question',
  component: Layout,
  meta: {
    title: '题目列表',
    icon: 'agreement',
    order: 2
  },
  redirect: '/question/list',
  children: [
    {
      path: '/question/list',
      name: 'QuestionList',
      component: () => import('/@/views/question/Question.vue'),
      meta: {
        title: '题目',
        icon: 'list-view'
      },
    },
    {
      path: '/question/option',
      name: 'QuestionOption',
      component: () => import('/@/views/question/option/Option.vue'),
      meta: {
        title: '选项',
        icon: 'list-view'
      }
    },
    {
      path: '/question/level',
      name: 'QuestionLevel',
      component: () => import('/@/views/question/level/QuestionLevel.vue'),
      meta: {
        title: '题目难度',
        hideInMenu: true
      }
    },
    {
      path: '/question/type',
      name: 'QuestionType',
      component: () => import('/@/views/question/type/QuestionType.vue'),
      meta: {
        title: '题目类型',
        hideInMenu: true
      }
    },
    {
      path: '/question/category',
      name: 'QuestionCategory',
      component: () => import('/@/views/question/category/QuestionCategory.vue'),
      meta: {
        title: '题目分类',
        hideInMenu: true
      }
    },
    {
      path: '/question/create',
      name: 'QuestionCreate',
      component: () => import('/@/views/question/edit/EditQuestion.vue'),
      meta: {
        title: '创建题目',
        hideInMenu: true
      }
    },
    {
      path: '/question/edit/:id',
      name: 'QuestionEdit',
      component: () => import('/@/views/question/edit/EditQuestion.vue'),
      meta: {
        title: '编辑题目',
        hideInMenu: true
      }
    }
  ]
}

export default managerRoute