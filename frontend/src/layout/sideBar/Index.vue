<template>
  <div class="sidebar">
    <h1 class="title">首页</h1>
    <el-menu default-active="2" :collapse="collapse" class="el-menu-vertical">
      <el-menu-item>
        <icon-park name="user" />
        <template #title>用户中心</template>
      </el-menu-item>
      <el-sub-menu index="1">
        <template #title>
          <icon-park name="user" />
          <span>考试管理</span>
        </template>
        <el-menu-item index="1-1">
          <icon-park name="home" />
          <template #title>考试列表</template>
        </el-menu-item>
        <el-menu-item index="1-2">
          <icon-park name="home" />
          <template #title>我的考试</template>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import IconPark from '/@/components/IconPark/Index.vue'

defineProps<{
  collapse: boolean
}>()
</script>

<style lang="less" scoped>
.sidebar {
  @apply flex flex-col;

  .title {
    @apply text-xl;
    height: @headerBarHeight;
  }

  .el-menu.el-menu-vertical {
    @apply border-r-0;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: @siderBarWidth;
}
</style>
