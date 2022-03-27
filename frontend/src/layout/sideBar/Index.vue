<template>
  <el-menu default-active="2" class="el-menu-vertical" :collapse="collapse">
    <el-menu-item class="title">
      <icon-park name="home" :size="24" />
      <template #title>首页</template>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <icon-park name="home" />
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <icon-park name="home" />
      <template #title>Navigator Two</template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <icon-park name="home" />
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <icon-park name="home" />
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import IconPark from '/@/components/IconPark/Index.vue'

defineProps<{
  collapse: boolean
}>()
</script>

<style lang="less" scoped>
.el-menu-vertical {
  @apply h-screen;

  .title {
    @apply text-xl;
    height: @headerBarHeight;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: @siderBarWidth;
}
</style>
