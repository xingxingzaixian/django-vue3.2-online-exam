import type { AppRouteRecordRaw } from '/@/router/types'
import Layout from '/@/layout/Layout.vue'

const userRoute: AppRouteRecordRaw = {
  path: '/me',
  name: 'Me',
  component: Layout,
  meta: {
    title: '个人中心',
    icon: 'me'
  },
  redirect: '/me/info',
  children: [
    {
      path: '/me/info',
      name: 'UserInfo',
      component: () => import('/@/views/user/info/UserInfo.vue'),
      meta: {
        title: '个人信息',
        icon: 'user'
      }
    },
    {
      path: '/me/exam',
      name: 'UserExam',
      component: () => import('/@/views/user/exam/UserExam.vue'),
      meta: {
        title: '我的考试',
        icon: 'brain'
      }
    },
    {
      path: '/me/question',
      name: 'UserQuestion',
      component: () => import('/@/views/user/question/UserQuestion.vue'),
      meta: {
        title: '我的题目',
        icon: 'list-view'
      }
    }
  ]
}

export default userRoute