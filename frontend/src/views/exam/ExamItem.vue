<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span class="no-wrap">{{ item.name }}</span>
        <div class="action">
          <slot v-bind="item"> </slot>
        </div>
      </div>
    </template>
    <div class="info">
      <el-image :src="item.avatar || DefaultImg" alt="" style="width: 100%; height: 100%" fit="contain" />
    </div>
    <el-divider style="margin: 12px 0" />
    <div class="score" :style="{ color: outTimeColor(item) }">
      <div class="no-wrap">
        限时：<span>{{ item.limit_time }}</span> 分钟
      </div>
      <el-divider direction="vertical" />
      <div class="no-wrap">
        总分：<span>{{ item.score }}</span> 分
      </div>
    </div>
    <div class="time" :style="{ color: outTimeColor(item) }">
      <div class="no-wrap">
        开始：<span>{{ item.start_date }}</span>
      </div>
      <div class="no-wrap">
        结束：<span>{{ item.end_date }}</span>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ExamListItem } from '/@/api/exam/types'
import dayjs from 'dayjs'
import DefaultImg from '/@/assets/images/default.jpeg'
import useSettingStore from '/@/store/setting'

const settingStore = useSettingStore()

defineProps<{
  item: ExamListItem
}>()

const outTimeColor = (item: ExamListItem): string => {
  const now = dayjs().format('YYYY-MM-DD HH:mm:ss')
  if (item.end_date < now) {
    return '#ff0000'
  }
  return settingStore.cssVars.primaryColor as string
}
</script>

<style lang="less" scoped>
.info {
  @apply w-full h-20;
}

.card-header {
  @apply flex justify-between items-center;

  span {
    width: 50%;
  }
}

.score {
  @apply flex justify-between items-center;

  span {
    @apply text-sm;
  }
}

.time {
  @apply flex flex-col justify-start items-start;

  span {
    @apply text-sm;
  }
}

.no-wrap {
  @apply whitespace-nowrap overflow-hidden text-ellipsis;
}
</style>
