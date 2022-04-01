import type { Router, RouterHistory } from 'vue-router'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import useUserStore from '../store/user'
import type { AppRouteRecordRaw } from './types'

class RouteView {
  // 路由对象
  private router: Router | unknown = undefined

  constructor() {
    this.router = RouteView.createRouter()
    this.beforeRouteChange()
    this.afterRouteChange()
  }

  // 根据环境变量中的配置生成路由模式
  static createHistory = (): RouterHistory => {
    if (import.meta.env.VITE_APP_ROUTER_TYPE === 'hash') {
      return createWebHashHistory()
    } else {
      return createWebHistory()
    }
  }

  // 动态获取 modules 目录下的所有 .ts 文件生成基础路由
  static createBasicRoutes = (): AppRouteRecordRaw[] => {
    const moduleFiles: Recordable<{ [key: string]: any }> = import.meta.globEager('./modules/**/*.ts')
    const routeModuleList: AppRouteRecordRaw[] = []
    Object.keys(moduleFiles).forEach((key) => {
      const mod: { [key: string]: any } = moduleFiles[key].default || {}
      const modList: AppRouteRecordRaw[] = Array.isArray(mod) ? [...mod] : [mod]
      routeModuleList.push(...modList)
    })

    return routeModuleList
  }

  // 创建路由对象
  static createRouter(): Router {
    return createRouter({
      history: RouteView.createHistory(),
      routes: RouteView.createBasicRoutes(),
      strict: true,
      scrollBehavior: () => ({ left: 0, top: 0 }),
    })
  }

  // 路由守卫
  private beforeRouteChange(): void {
    if (!this.router) {
      return
    }

    const curRouter = this.router as Router
    curRouter.beforeEach((to, _, next) => {
      const userStore = useUserStore()
      // 1. 如果页面需要改变 title，就设置 title
      if (to.meta.title) {
        document.title = to.meta.title as string
      }

      // 2. 如果页面不需要登录，就直接跳转
      if (to.meta.noAuth) {
        return next()
      }

      // 3 如果没有登录，就跳转到登录页
      if (!userStore.isLoggedIn) {
        next({
          name: 'Login',
          query: { redirect: to.fullPath },
        })
      } else {
        // 4. 如果用户信息不存在，就获取一次用户信息
        if (!userStore.hasUserInfo) {
          userStore.getUserInfo()
        }

        next()
      }
    })
  }

  private afterRouteChange(): void {
    if (!this.router) {
      return
    }

    const curRouter = this.router as Router
    curRouter.afterEach(() => {
      console.log('after')
    })
  }

  // 获取路由对象
  public getRouter(): Router {
    return this.router as Router
  }
}

const router = new RouteView()

export default router.getRouter()
