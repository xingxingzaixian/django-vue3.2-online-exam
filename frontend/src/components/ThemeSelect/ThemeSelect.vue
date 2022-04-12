<template>
  <div class="theme">
    <el-popover trigger="hover" :width="280">
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
import { generateColors } from '@element-plus/colors'
import IconPark from '/@/components/IconPark/IconPark.vue'

const presetColors = reactive<string[]>([
  '#3491FA',
  '#165DFF',
  '#14C9C9',
  '#D91AD9',
  '#F53F3F',
  '#F77234',
  '#FADC19',
  '#86909c',
])
const primaryColorVar: string[] = [
  '--el-color-primary',
  '--el-color-primary-light-1',
  '--el-color-primary-light-2',
  '--el-color-primary-light-3',
  '--el-color-primary-light-4',
  '--el-color-primary-light-5',
  '--el-color-primary-light-6',
  '--el-color-primary-light-7',
  '--el-color-primary-light-8',
  '--el-color-primary-light-9',
]

const modifyVars = (color?: string) => {
  // 1. 根据色值生成新的主题颜色
  const { primary } = generateColors(color)
  primaryColorVar.forEach((item, index) => {
    // 2. 将新的主题颜色设置到全局变量中
    document.documentElement.style.setProperty(item, primary![index])
  })
}

modifyVars()

const selectTheme = (color: string) => {
  console.log(color)
  modifyVars(color)
}
</script>

<style lang="less" scoped>
.theme {
  @apply mx-2;
}

.preset-color {
  @apply flex justify-center items-center w-64;

  .color-item {
    @apply mx-1 w-5 h-5 cursor-pointer;
    border-radius: 20%;
  }
}
</style>
