<template>
  <div class="header">
    <div class="left">
      <icon-park :name="collapse ? 'expand-left' : 'expand-right'" :size="24" @click="toggleCollapse" />
    </div>
    <div class="right">
      <el-avatar :size="30" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
      <span>星星在线</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconPark from '/@/components/IconPark/Index.vue'

const props = defineProps<{
  collapse: boolean
}>()

const emits = defineEmits<{
  (e: 'update:collapse', collapse: boolean): void
}>()

const toggleCollapse = () => {
  emits('update:collapse', !props.collapse)
}
</script>

<style lang="less" scoped>
.header {
  @apply overflow-hidden z-10 w-full h-full;

  .left {
    @apply h-full float-left flex justify-center items-center pl-2;
  }

  .right {
    @apply h-full float-right flex justify-center items-center mr-5;

    .el-avatar {
      @apply mx-2;
    }
  }
}
</style>
