<template>
  <div class="notice">
    <el-popover :width="300">
      <template #reference>
        <el-badge :value="55" :max="99" class="item">
          <icon-park icon="remind" :size="20" />
        </el-badge>
      </template>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="通知" name="notice">User</el-tab-pane>
        <el-tab-pane label="消息" name="message">Config</el-tab-pane>
      </el-tabs>
    </el-popover>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import IconPark from '/@/components/IconPark/IconPark.vue'

const activeName = ref<string>('notice')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style lang="less" scoped>
.notice {
  @apply mr-5;
}
</style>
