import type { AppRouteRecordRaw } from '/@/router/types'
import Layout from '/@/layout/Layout.vue'
import Empty from '/@/layout/Empty.vue'

const managerRoute: AppRouteRecordRaw = {
  path: '/manage',
  name: 'Manage',
  component: Layout,
  meta: {
    title: '管理中心',
    icon: 'agreement',
    order: 2
  },
  redirect: '/manage/exam',
  children: [
    {
      path: '/manage/exam',
      name: 'ManageExam',
      component: () => import('/@/views/manage/exam/ManageExam.vue'),
      meta: {
        title: '考试管理',
        icon: 'brain'
      }
    },
    {
      path: '/manage/question',
      name: 'ManageQuestion',
      component: Empty,
      meta: {
        title: '题目管理',
        icon: 'list-view'
      },
      redirect: '/manage/question/list',
      children: [
        {
          path: '/manage/question/list',
          name: 'ManageQuestionList',
          component: () => import('/@/views/manage/question/ManageQuestion.vue'),
          meta: {
            title: '题目管理',
            hideInMenu: true
          },
        },
        {
          path: '/manage/question/level',
          name: 'ManageQuestionLevel',
          component: () => import('/@/views/manage/question/level/QuestionLevel.vue'),
          meta: {
            title: '题目难度',
            hideInMenu: true
          }
        },
        {
          path: '/manage/question/type',
          name: 'ManageQuestionType',
          component: () => import('/@/views/manage/question/type/QuestionType.vue'),
          meta: {
            title: '题目类型',
            hideInMenu: true
          }
        },
        {
          path: '/manage/question/category',
          name: 'ManageQuestionCategory',
          component: () => import('/@/views/manage/question/category/QuestionCategory.vue'),
          meta: {
            title: '题目类型',
            hideInMenu: true
          }
        },
        {
          path: '/manage/question/create',
          name: 'ManageQuestionCreate',
          component: () => import('/@/views/manage/question/edit/EditQuestion.vue'),
          meta: {
            title: '创建题目',
            hideInMenu: true
          }
        },
        {
          path: '/manage/question/edit/:id',
          name: 'ManageQuestionEdit',
          component: () => import('/@/views/manage/question/edit/EditQuestion.vue'),
          meta: {
            title: '编辑题目',
            hideInMenu: true
          }
        }
      ]
    }
  ]
}

export default managerRoute