import type { AppRouteRecordRaw } from '/@/router/types'
import Layout from '/@/layout/Index.vue'

const managerRoute: AppRouteRecordRaw = {
  path: '/manage',
  name: 'Manage',
  component: Layout,
  meta: {
    title: '管理中心',
    icon: 'agreement'
  },
  children: [
    {
      path: '/manage/exam',
      name: 'ManageExam',
      component: import('/@/views/manage/exam/Index.vue'),
      meta: {
        title: '考试管理',
        icon: 'exam'
      }
    },
    {
      path: '/manage/question',
      name: 'ManageQuestion',
      component: import('/@/views/manage/question/Index.vue'),
      meta: {
        title: '题目管理',
        icon: 'question'
      },
      children: [
        {
          path: '/manage/question/add',
          name: 'ManageQuestionAdd',
          component: import('/@/views/manage/question/Index.vue'),
          meta: {
            title: '添加题目',
            icon: 'question'
          }
        }
      ]
    }
  ]
}

export default managerRoute