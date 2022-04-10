<template>
  <div class="theme">
    <el-popover trigger="hover">
      <template #reference>
        <icon-park icon="clothes-crew-neck" :size="20" />
      </template>
      <div class="preset-color">
        <div
          class="color-item"
          v-for="item in presetColors"
          :key="item"
          :style="{ backgroundColor: item }"
          @click="selectTheme(item)"
        />
      </div>
    </el-popover>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import IconPark from '/@/components/IconPark/IconPark.vue'

const presetColors = reactive<string[]>(['#f56a00', '#7265e6', '#ffbf00', '#00a2ae', '#6c757d'])

const selectTheme = (color: string) => {
  console.log('select theme', color)
}
</script>

<style lang="less" scoped>
.theme {
  @apply mx-2;
}

.preset-color {
  @apply flex justify-center items-center;

  .color-item {
    @apply mx-1 w-5 h-5 rounded-md cursor-pointer;
  }
}
</style>
