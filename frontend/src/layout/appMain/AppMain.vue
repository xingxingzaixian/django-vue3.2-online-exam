<template>
  <div class="main-container">
    <tag-view />
    <div class="main-content">
      <router-view v-slot="{ Component, route }" v-if="isReloadRoute">
        <keep-alive v-if="route.meta.keepAlive">
          <component :is="Component" class="animate__animated animate__fadeInRight animate__faster" :key="route.path" />
        </keep-alive>
        <component
          v-else
          :is="Component"
          class="animate__animated animate__fadeInRight animate__faster"
          :key="route.path"
        />
      </router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, provide } from 'vue'
import TagView from '/@/components/TagView/TagView.vue'

const isReloadRoute = ref<boolean>(true)

const reload = () => {
  isReloadRoute.value = false
  nextTick(() => {
    isReloadRoute.value = true
  })
}

// 将重新加载接口暴露给子组件
provide('reload', reload)
</script>

<style lang="less" scoped>
.main-container {
  @apply h-full px-4 py-2;
  background-color: @mainBackgroundColor;

  .main-content {
    height: calc(100% - @tagViewHeight);
    background-color: @tagViewBgColor;
  }
}
</style>
