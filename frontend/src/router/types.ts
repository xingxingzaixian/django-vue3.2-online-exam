import type { Component } from 'vue'
import type { RouteMeta, RouteRecordRaw } from 'vue-router'


interface AppRouteMeta extends RouteMeta {
  title?: string
  icon?:string
  hideInMenu?: boolean  // 是否不显示在菜单拦中
  noTag?: boolean       // 是否不显示在标签栏中
  keepAlive?: boolean   // 是否需要缓存
}

// 类型和接口在扩展联合类型方面存在不足，因此可以用类型来扩展，而不是接口
export type AppRouteRecordRaw = RouteRecordRaw & {
  name: string
  meta?: AppRouteMeta
  component?: Component | string
  components?: Component
  children?: AppRouteRecordRaw[]
  props?: Recordable
  fullPath?: string
}