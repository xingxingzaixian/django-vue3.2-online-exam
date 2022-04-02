<template>
  <i class="iconpark">
    <component :is="`icon-park-${name}`" theme="outline" :size="size" :fill="color"></component>
  </i>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    name: string
    size?: number
    color?: string
  }>(),
  {
    size: 16,
    color: '#333',
  }
)
</script>

<style lang="less" src="">
.iconpark {
  @apply flex justify-center items-center;
}
</style>
