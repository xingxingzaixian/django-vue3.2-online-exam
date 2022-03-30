import type { RouteRecordRaw } from 'vue-router'
import Layout from '/@/layout/Index.vue'

const basicRoute: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('/@/views/login/Index.vue'),
    meta: {
      title: '登录',
      noAuth: true,
      hiddenMenu: true
    },
  },
  {
    path: '/',
    name: 'Home',
    component: Layout,
    meta: {
      title: '首页',
      hiddenMenu: true
    },
    children: [
      {
        path: '',
        name: 'HomeIndex',
        component: () => import('/@/views/home/Index.vue'),
      }
    ]
  }
]

export default basicRoute
