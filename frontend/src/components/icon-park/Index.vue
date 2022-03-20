<template>
  <component :is="`icon-park-${name}`" theme="outline" :size="size" :fill="color"></component>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    name: string
    size?: number
    color?: string
  }>(),
  {
    size: 12,
    color: '#333',
  }
)
</script>
