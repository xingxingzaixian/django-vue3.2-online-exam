import type { Component } from 'vue'
import type { RouteMeta, RouteRecordRaw } from 'vue-router'


interface AppRouteMeta extends RouteMeta {
  title?: string
  icon?:string
  hideInMenu?: boolean
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