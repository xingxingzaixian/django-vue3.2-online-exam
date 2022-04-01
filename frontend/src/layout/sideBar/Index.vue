<template>
  <div class="sidebar">
    <h1 class="title">首页</h1>
    <el-scrollbar>
      <el-menu default-active="2" :collapse="collapse" class="el-menu-vertical">
        <sidebar-item v-for="menu in routes" :menu="menu" :key="menu.path"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import SidebarItem from './sidebarItem/Index.vue'
import { generateMenus } from '../sideBar/menus'
import type { AppRouteRecordRaw } from '/@/router/types'
import { MenuItemType } from './types'

defineProps<{
  collapse: boolean
}>()

const router = useRouter()

const routes = computed<MenuItemType[]>(() => {
  return generateMenus(router.getRoutes() as unknown as AppRouteRecordRaw[])
})
</script>

<style lang="less" scoped>
.sidebar {
  @apply flex flex-col;

  .title {
    @apply text-xl;
    height: @headerBarHeight;
  }

  .el-scrollbar {
    height: calc(100vh - @headerBarHeight);
  }

  .el-menu.el-menu-vertical {
    @apply border-r-0;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: @siderBarWidth;
}
</style>
