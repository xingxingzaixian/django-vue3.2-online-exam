import type { AppRouteRecordRaw } from '/@/router/types'
import Layout from '/@/layout/Index.vue'

const userRoute: AppRouteRecordRaw = {
  path: '/me',
  name: 'Me',
  component: Layout,
  meta: {
    title: '个人中心',
    icon: 'me'
  },
  children: [
    {
      path: '/me/info',
      name: 'UserInfo',
      component: () => import('/@/views/user/info/Index.vue'),
      meta: {
        title: '个人信息',
        icon: 'me'
      }
    },
    {
      path: '/me/exam',
      name: 'UserExam',
      component: () => import('/@/views/user/exam/Index.vue'),
      meta: {
        title: '我的考试',
        icon: 'me'
      }
    },
    {
      path: '/me/question',
      name: 'UserQuestion',
      component: () => import('/@/views/user/question/Index.vue'),
      meta: {
        title: '我的题目',
        icon: 'me'
      }
    }
  ]
}

export default userRoute