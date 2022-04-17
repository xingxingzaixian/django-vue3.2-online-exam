<template>
  <el-card class="content">
    <el-table :data="data" :border="true">
      <template #empty>
        <el-empty description="description" />
      </template>
      <template v-for="item in columns" :key="item.prop">
        <el-table-column
          v-if="!item.format"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        ></el-table-column>
        <el-table-column v-else :label="item.label" :width="item.width">
          <template #default="scope">
            <slot :name="item.prop" v-bind="scope"></slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      class="pages"
      background
      layout="prev, pager, next"
      :total="pagin.total"
      v-model:page-size="pagin.pageSize"
      v-model:current-page="pagin.pageNo"
      :hide-on-single-page="true"
    />
  </el-card>
</template>

<script lang="ts" setup>
import { reactive, toRaw, watch } from 'vue'
import type { ColumnType, Pagination } from '/@/types/common'

const props = defineProps<{
  data: any[]
  columns: ColumnType[]
  pagination: Pagination
}>()

const emits = defineEmits<{
  (e: 'changePage', currentPage: number): void
  (e: 'changePageSize', currentPageSize: number): void
}>()

const pagin = reactive<Pagination>(toRaw(props.pagination))

watch(
  () => props.pagination,
  () => {
    pagin.pageNo = props.pagination.pageNo
    pagin.pageSize = props.pagination.pageSize
    pagin.total = props.pagination.total
  },
  {
    immediate: true,
  }
)

watch(
  () => pagin.pageNo,
  () => {
    emits('changePage', pagin.pageNo)
  }
)

watch(
  () => pagin.pageSize,
  () => {
    emits('changePageSize', pagin.pageSize)
  }
)
</script>

<style lang="less" scoped>
.pages {
  @apply pt-4;
}
</style>
