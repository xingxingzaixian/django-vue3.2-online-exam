<template>
  <div class="tags">
    <div class="tag-view">
      <div
        class="tag-view-item"
        :class="{ active: route.fullPath === item.path }"
        v-for="item in tagRoutes"
        :key="item.path"
        @click="changeView(item)"
      >
        <icon-park :icon="item.icon" :color="iconColor(item.path)" />
        <span class="tag-item-name">{{ item.title }}</span>
        <icon-park
          :class="item.path === '/welcome' ? '' : 'close'"
          v-show="isShowClose(item.path)"
          icon="close-small"
          :color="iconColor(item.path)"
          @click.stop="handleClose(item.path)"
        />
      </div>
    </div>
    <div class="tag_option">
      <el-dropdown @command="handleClickOption">
        <div class="option">
          <icon-park icon="drop-down-list" :size="18" />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="refresh">刷新</el-dropdown-item>
            <el-dropdown-item command="current">关闭当前</el-dropdown-item>
            <el-dropdown-item command="left">关闭左侧</el-dropdown-item>
            <el-dropdown-item command="right">关闭右侧</el-dropdown-item>
            <el-dropdown-item command="other">关闭其他</el-dropdown-item>
            <el-dropdown-item divided command="all">关闭全部</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch, inject } from 'vue'
import { TagViewProps } from './types'
import IconPark from '/@/components/IconPark/IconPark.vue'
import { useRoute, useRouter } from 'vue-router'
import useSettingStore from '/@/store/setting'

const settingStore = useSettingStore()
const route = useRoute()
const router = useRouter()

const reload = inject<Function>('reload')

// 默认显示首页标签，且不可关闭
const tagRoutes = reactive<TagViewProps[]>([
  {
    path: '/welcome',
    title: '首页',
    icon: 'home',
  },
])
const uniqueTags = new Set<string>(['/welcome'])

const handleClose = (path: string) => {
  const index = tagRoutes.findIndex((tag) => tag.path === path)
  if (index > 0 && index < tagRoutes.length) {
    uniqueTags.delete(path)
    tagRoutes.splice(index, 1)

    if (route.fullPath === path) {
      router.push(tagRoutes[index - 1].path)
    }
  }
}

const handleClickOption = (item: string) => {
  const index = tagRoutes.findIndex((tag) => tag.path === route.fullPath)
  if (index === -1) return

  let deleteList: TagViewProps[] = []
  switch (item) {
    case 'refresh':
      reload!()
      break
    case 'current':
      handleClose(route.fullPath)
      break
    case 'left':
      deleteList = tagRoutes.splice(1, index - 1)
      break
    case 'right':
      deleteList = tagRoutes.splice(index + 1, tagRoutes.length - index - 1)
      break
    case 'other':
      // 先删除右侧，再删除左侧
      const temp = tagRoutes[index]
      deleteList = tagRoutes.splice(1, tagRoutes.length - 1, temp).filter((item) => item.path !== temp.path)
      break
    case 'all':
      deleteList = tagRoutes.splice(1, tagRoutes.length - 1)
      router.push('/welcome')
      break
    default:
      break
  }

  deleteList.forEach((item) => uniqueTags.delete(item.path))
}

const changeView = (item: TagViewProps) => {
  if (item.path === route.fullPath) return

  router.push(item.path)
}

const isShowClose = (path: string): boolean => {
  return route.fullPath !== '/welcome' && route.fullPath === path
}

const iconColor = (path: string): string => {
  return route.fullPath === path ? (settingStore.cssVars.tagActiveTextColor as string) : ''
}

watch(
  () => route.path,
  () => {
    // 如果当前路由已经存在，则不再添加；如果当前路由不需要在标签栏中显示，则不添加
    if (route.meta.noTag || uniqueTags.has(route.fullPath)) return

    uniqueTags.add(route.fullPath)
    tagRoutes.push({
      title: route.meta.title as unknown as string,
      icon: route.meta.icon as unknown as string,
      path: route.fullPath,
    })
  },
  { immediate: true }
)
</script>

<style lang="less" scoped>
.tags {
  @apply mb-2;
  height: @tagViewHeight;

  .tag-view {
    @apply float-left h-full flex justify-center items-center;
    background-color: @tagViewBgColor;

    .tag-view-item {
      @apply flex items-center h-full justify-center relative px-2 rounded-sm overflow-hidden shadow-lg;
      border-right: 0.5rem solid @mainBackgroundColor;

      &:hover {
        .close {
          @apply cursor-pointer;
          display: block !important;
        }
      }

      &:last-child {
        border-right: 0;
      }

      .tag-item-name {
        @apply mx-1;
      }
    }

    .active {
      @apply border-b-0;
      color: @tagActiveTextColor;
    }
  }

  .tag_option {
    @apply float-right;

    .option {
      @apply flex items-center h-full justify-center;
    }
  }
}
</style>
