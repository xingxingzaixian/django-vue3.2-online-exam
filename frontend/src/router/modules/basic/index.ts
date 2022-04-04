import type { AppRouteRecordRaw } from '/@/router/types'
import Layout from '/@/layout/Layout.vue'

const basicRoute: AppRouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('/@/views/login/Login.vue'),
    meta: {
      title: '登录',
      noAuth: true,
      hideInMenu: true,
      noTag: true
    },
  },
  {
    path: '/',
    name: 'Home',
    component: Layout,
    meta: {
      title: '首页',
      hideInMenu: true
    },
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'Welcome',
        component: () => import('/@/views/home/Home.vue')
      }
    ]
  }
]

export default basicRoute
