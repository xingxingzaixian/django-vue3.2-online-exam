import type { RouteRecordRaw } from 'vue-router'

const basicRoute: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('/@/views/login/Index.vue'),
    meta: {
      title: '登录',
      noAuth: true,
      hiddenMenu: true
    },
  },
  {
    path: '/',
    name: 'home',
    component: () => import('/@/views/home/Index.vue'),
    meta: {
      title: '首页',
      hiddenMenu: true
    }
  }
]

export default basicRoute
