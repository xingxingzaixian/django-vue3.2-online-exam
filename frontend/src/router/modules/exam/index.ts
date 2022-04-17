import type { AppRouteRecordRaw } from '/@/router/types'
import Layout from '/@/layout/Layout.vue'

const examRoute: AppRouteRecordRaw = {
  path: '/exam',
  name: 'Exam',
  component: Layout,
  meta: {
    title: '考试列表',
    icon: 'list-view'
  },
  redirect: '/exam/list',
  children:[
    {
      path: '/exam/list',
      name: 'ExamList',
      component: () => import('/@/views/exam/Exam.vue'),
      meta: {
        hideInMenu: true
      }
    },
    {
      path: '/exam/add',
      name: 'ExamAdd',
      component: () => import('/@/views/exam/EditExam.vue'),
      meta: {
        hideInMenu: true
      }
    }
  ]
}

export default examRoute