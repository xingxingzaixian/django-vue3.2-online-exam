import type { AppRouteRecordRaw } from '/@/router/types'
import { MenuItemType } from './types'

const getChildRoutes = (routes: AppRouteRecordRaw[], isTop: boolean): string[] => {
  const childPaths: string[] = []
  routes.forEach((route) => {
    if (!isTop) {
      childPaths.push(route.path)
    }

    if (route.children &&
      route.children.length > 0 ) {
      childPaths.push(...getChildRoutes(route.children, false))
    }
  })

  return childPaths
}

// 对路由进行标准化
const normalizaRoutes = (routes: AppRouteRecordRaw[]): AppRouteRecordRaw[] => {
  const childPaths: string[] = getChildRoutes(routes, true)

  // 将数组转为集合，方便查询
  const childSets = new Set<string>(childPaths)

  return routes.filter((route) => {
    // 1. 如果路由是包含在子路由中，就过滤掉
    if (childSets.has(route.path)) {
      return false
    }

    return true
  })
}

// 生成导航菜单
export const generateMenus = (routes: AppRouteRecordRaw[]): MenuItemType[] => {
  const normalRoutes: AppRouteRecordRaw[] = normalizaRoutes(routes)
  const menus: MenuItemType[] = []
  normalRoutes.forEach((route) => {
    if (!route.meta || route.meta.hideInMenu) {
      return
    }

    menus.push({
      title: route.meta.title as string,
      icon: route.meta.icon || '',
      path: route.path,
      order: route.meta.order || 1000,
      children: route.children && route.children.length > 0 ? generateMenus(route.children) : [],
    })
  })

  // 按照 order 排序
  menus.sort((a, b) => {
    return a.order - b.order
  })
  return menus
}