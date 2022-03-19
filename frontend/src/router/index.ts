import type { RouteRecordRaw } from 'vue-router'
import { Router, createRouter, createWebHashHistory, RouterHistory } from 'vue-router'

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
    return createWebHashHistory()
  }

  // 动态获取 modules 目录下的所有 .ts 文件生成基础路由
  static createBasicRoutes = (): RouteRecordRaw[] => {
    const moduleFiles: Recordable<{ [key: string]: any }> = import.meta.globEager('./modules/**/*.ts')
    const routeModuleList: RouteRecordRaw[] = []
    Object.keys(moduleFiles).forEach((key) => {
      const mod: { [key: string]: any } = moduleFiles[key].default || {}
      const modList: RouteRecordRaw[] = Array.isArray(mod) ? [...mod] : [mod]
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
      console.log(to)
      next()
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
