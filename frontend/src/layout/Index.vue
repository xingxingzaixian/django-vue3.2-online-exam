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

        <el-footer>
          <footer-bar />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import SideBar from './sideBar/Index.vue'
import HeaderBar from './headerBar/Index.vue'
import FooterBar from './footerBar/Index.vue'
import AppMain from './appMain/Index.vue'

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
