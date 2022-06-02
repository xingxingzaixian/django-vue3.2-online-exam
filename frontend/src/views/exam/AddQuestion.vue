<template>
  <div>
    <exam-item :item="item" />
  </div>
</template>

<script lang="ts" setup>
import { ExamListItem } from '/@/api/exam/types'
import ExamItem from './ExamItem.vue'

defineProps<{
  item: ExamListItem
}>()
</script>

<style lang="less" scoped></style>
