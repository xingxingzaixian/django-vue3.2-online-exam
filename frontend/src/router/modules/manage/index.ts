import type { AppRouteRecordRaw } from '/@/router/types'
import Layout from '/@/layout/Layout.vue'

const managerRoute: AppRouteRecordRaw = {
  path: '/manage',
  name: 'Manage',
  component: Layout,
  meta: {
    title: '管理中心',
    icon: 'agreement'
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
      component: () => import('/@/views/manage/question/ManageQuestion.vue'),
      meta: {
        title: '题目管理',
        icon: 'list-view'
      }
    }
  ]
}

export default managerRoute