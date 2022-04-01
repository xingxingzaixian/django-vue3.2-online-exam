<template>
  <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
    <template #title>
      <icon-park :name="menu.icon" />
      <span>{{ menu.title }}</span>
    </template>
    <sidebar-item v-for="item in menu.children" :menu="item" :key="item.path" />
  </el-sub-menu>
  <el-menu-item v-else :index="menu.path">
    <icon-park :name="menu.icon" />
    <span>{{ menu.title }}</span>
  </el-menu-item>
</template>

<script lang="ts" setup>
import IconPark from '/@/components/IconPark/Index.vue'
import { MenuItemType } from '../types'

defineProps<{
  menu: MenuItemType
}>()
</script>
<style lang="less" scoped></style>
