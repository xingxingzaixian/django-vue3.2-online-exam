<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <side-bar :collapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header>
          <header-bar v-model:collapse="isCollapse" />
        </el-header>
        <el-main>
          <app-main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import SideBar from './sideBar/SideBar.vue'
import HeaderBar from './headerBar/HeaderBar.vue'
import AppMain from './appMain/AppMain.vue'

const isCollapse = ref<boolean>(false)
</script>

<style lang="less" scoped>
.common-layout {
  @apply h-screen;

  .el-side {
    @apply h-full;
  }

  .el-main {
    @apply -z-10;
  }
}
</style>
