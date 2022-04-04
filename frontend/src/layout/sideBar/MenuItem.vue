<template>
  <el-sub-menu v-if="route.children && route.children.length > 0" :index="route.path">
    <template #title>
      <icon-park :icon="route.icon" :color="(settingStore.cssVars.menuTextColor as string)" />
      <span>{{ route.title }}</span>
    </template>
    <menu-item v-for="item in route.children" :route="item" />
  </el-sub-menu>
  <el-menu-item v-else :index="route.path">
    <icon-park :icon="route.icon" :color="(settingStore.cssVars.menuTextColor as string)" />
    <span>{{ route.title }}</span>
  </el-menu-item>
</template>

<script lang="ts" setup>
import IconPark from '/@/components/IconPark/IconPark.vue'
import { MenuItemType } from './types'
import useSettingStore from '/@/store/setting'

const settingStore = useSettingStore()

defineProps<{
  route: MenuItemType
}>()
</script>
<style lang="less" scoped>
.el-sub-menu__title,
.el-menu-item {
  span {
    @apply ml-1 text-base;
  }
}

.el-menu-item:hover {
  background-color: @menuHoverBgColor;
}

.el-menu-item.is-active {
  background-color: @menuActiveBgColor;
}

:deep(.el-sub-menu__title:hover) {
  background-color: @menuHoverBgColor;
}
</style>
