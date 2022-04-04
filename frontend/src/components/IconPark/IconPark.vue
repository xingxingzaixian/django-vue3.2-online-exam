<template>
  <i class="iconpark">
    <component
      :is="`icon-park-${icon}`"
      theme="outline"
      :size="size"
      :fill="color ? color: settingStore.cssVars.iconDefaultColor as string"
    ></component>
  </i>
</template>

<script lang="ts" setup>
import useSettingStore from '/@/store/setting'

const settingStore = useSettingStore()

withDefaults(
  defineProps<{
    icon: string
    size?: number
    color?: string
  }>(),
  {
    size: 16,
    color: undefined,
  }
)
</script>

<style lang="less" src="">
.iconpark {
  @apply flex justify-center items-center;
}
</style>
