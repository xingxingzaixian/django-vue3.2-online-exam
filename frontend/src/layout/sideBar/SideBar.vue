<template>
  <div class="sidebar">
    <div class="title" @click="goHome">
      <img src="/logo.svg" alt="" width="32" height="32" />
      <span v-show="!collapse">首页</span>
    </div>
    <el-scrollbar>
      <el-menu
        :default-active="route.fullPath"
        :collapse="collapse"
        router
        background-color="@menuBgColor"
        text-color="@menuTextColor"
        active-text-color="@menuActiveTextColor"
        class="el-menu-vertical"
      >
        <menu-item v-for="menu in routes" :route="menu" :key="menu.path"></menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import MenuItem from './MenuItem.vue'
import { generateMenus } from './menus'
import type { AppRouteRecordRaw } from '/@/router/types'
import { MenuItemType } from './types'

defineProps<{
  collapse: boolean
}>()

const router = useRouter()
const route = useRoute()

const routes = computed<MenuItemType[]>(() => {
  return generateMenus(router.getRoutes() as unknown as AppRouteRecordRaw[])
})

const goHome = () => {
  router.push({ name: 'Home' })
}
</script>

<style lang="less" scoped>
.sidebar {
  @apply flex flex-col;
  background-color: @menuBgColor;
  color: @menuTextColor;

  .title {
    @apply flex items-center justify-center;
    height: @headerBarHeight;

    span {
      @apply text-xl ml-1;
    }
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
