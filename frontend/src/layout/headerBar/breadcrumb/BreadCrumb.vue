<template>
  <el-breadcrumb separator="/">
    <template v-for="(item, index) in breadCrumbs">
      <el-breadcrumb-item
        v-if="index < breadCrumbs.length - 1"
        :to="{ path: item.path }"
        v-motion-slide-right
        :key="item.path"
      >
        {{ item.title }}
      </el-breadcrumb-item>
      <el-breadcrumb-item v-else v-motion-slide-right :key="item.path">
        {{ item.title }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import { CrumbType } from './types'

const routes = useRoute()

const breadCrumbs = reactive<CrumbType[]>([])

watch(
  () => routes.path,
  () => {
    breadCrumbs.splice(0, breadCrumbs.length)
    routes.matched.forEach((route) => {
      if (route.meta && route.meta.title) {
        breadCrumbs.push({
          title: route.meta.title as string,
          path: route.path,
        })
      }
    })
  },
  { immediate: true }
)
</script>

<style lang="less" scoped>
.el-breadcrumb {
  @apply ml-2;
}
</style>
