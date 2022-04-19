<template>
  <div class="exam">
    <table-tool>
      <el-button type="primary" @click="addExam">添加考试</el-button>
    </table-tool>
    <div class="content">
      <el-card class="exam_item" v-for="item in tableData" :key="item.id">
        <template #header>
          <div class="card-header">
            <span class="no-wrap">{{ item.name }}</span>
            <div class="action">
              <el-button class="button" type="text">进入考试</el-button>
              <div v-permission="'editAndDelete'">
                <el-button class="button" type="text">编辑</el-button>
                <el-button class="button" type="text" @click="deleteExam(item.id)">删除</el-button>
              </div>
            </div>
          </div>
        </template>
        <div class="info">
          <img :src="item.avatar || DefaultImg" alt="" style="width: 250px; height: 80px" />
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
    </div>
    <el-pagination
      class="pages"
      background
      layout="prev, pager, next"
      :total="pagination.total"
      v-model:page-size="pagination.pageSize"
      v-model:current-page="pagination.pageNo"
      :hide-on-single-page="true"
    />
  </div>
</template>

<script lang="ts" setup>
import { reactive, onBeforeMount, watch } from 'vue'
import { useRouter } from 'vue-router'
import { Pagination } from '/@/types/common'
import { ExamListItem } from '/@/api/exam/types'
import { getExamListApi, deleteExamApi } from '/@/api/exam'
import { successMessage } from '/@/utils/message'
import TableTool from '/@/components/BasicTable/TableTool.vue'
import DefaultImg from '/@/assets/images/default.jpeg'
import dayjs from 'dayjs'
import useSettingStore from '/@/store/setting'

const router = useRouter()
const settingStore = useSettingStore()
const tableData = reactive<ExamListItem[]>([])

const pagination = reactive<Pagination>({
  total: 0,
  pageNo: 1,
  pageSize: 18,
})
const outTimeColor = (item: ExamListItem): string => {
  const now = dayjs().format('YYYY-MM-DD HH:mm:ss')
  if (item.end_date < now) {
    return '#ff0000'
  }
  return settingStore.cssVars.primaryColor as string
}

const addExam = () => {}

const editExam = (row: ExamListItem) => {
  router.push({
    name: 'ExamAdd',
    params: {
      id: row.id,
    },
  })
}

const deleteExam = (id: number) => {
  deleteExamApi(id).then(() => {
    successMessage('删除成功')
  })
}

const updateData = () => {
  getExamListApi(pagination).then((res) => {
    tableData.splice(0, tableData.length, ...res.results)
    pagination.total = res.count
  })
}

onBeforeMount(() => {
  updateData()
})

watch(
  () => pagination.pageNo,
  () => {
    updateData()
  }
)
</script>

<style lang="less" scoped>
.content {
  @apply flex flex-wrap justify-start items-center;

  .exam_item {
    width: 15.66666667%;
    margin-right: 1%;
    margin-bottom: 1%;
    max-height: 288px;

    &:nth-child(6n) {
      margin-right: 0;
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
  }
}

.no-wrap {
  @apply whitespace-nowrap overflow-hidden text-ellipsis;
}

.pages {
  @apply pt-4;
}
</style>
