import type { AppRouteRecordRaw } from '/@/router/types'
import Layout from '/@/layout/Index.vue'

const basicRoute: AppRouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('/@/views/login/Index.vue'),
    meta: {
      title: '登录',
      noAuth: true,
      hideInMenu: true
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
    children: [
      {
        path: '/home',
        name: 'HomeIndex',
        component: () => import('/@/views/home/Index.vue'),
        meta: {
          title: '首页',
        }
      }
    ]
  }
]

export default basicRoute
