<template>
  <el-breadcrumb separator="/">
    <template v-for="(item, index) in breadCrumbs">
      <el-breadcrumb-item
        v-if="index < breadCrumbs.length - 1"
        :to="{ path: item.path }"
        class="animate__animated animate__lightSpeedInRight animate__faster"
        :key="item.path"
      >
        {{ item.title }}
      </el-breadcrumb-item>
      <!-- 在v-for中使用v-if，必须要用不同的key，即v-if、v-else中可以必须不相同且唯一 -->
      <el-breadcrumb-item v-else class="animate__animated animate__lightSpeedInRight animate__faster" :key="item.title">
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
