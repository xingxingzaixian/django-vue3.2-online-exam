<template>
  <div class="exam">
    <table-tool>
      <el-button type="primary" @click="addExam">添加考试</el-button>
    </table-tool>
    <div class="content">
      <exam-item class="exam_item" v-for="item in tableData" :key="item.id" :item="item">
        <el-button class="button" type="text" v-permission="'editAndDelete'">进入考试</el-button>
        <div v-permission="'user'">
          <el-button class="button" type="text" @click="editExam(item)">编辑</el-button>
          <el-button class="button" type="text" @click="deleteExam(item.id)">删除</el-button>
        </div>
      </exam-item>
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
import ExamItem from './ExamItem.vue'

const router = useRouter()
const tableData = reactive<ExamListItem[]>([])

const pagination = reactive<Pagination>({
  total: 0,
  pageNo: 1,
  pageSize: 18,
})

const addExam = () => {
  router.push({ name: 'ExamAdd' })
}

const editExam = (row: ExamListItem) => {
  router.push({
    name: 'ExamEdit',
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

    // .info {
    //   @apply w-full h-20;
    // }

    // .card-header {
    //   @apply flex justify-between items-center;

    //   span {
    //     width: 50%;
    //   }
    // }

    // .score {
    //   @apply flex justify-between items-center;

    //   span {
    //     @apply text-sm;
    //   }
    // }

    // .time {
    //   @apply flex flex-col justify-start items-start;

    //   span {
    //     @apply text-sm;
    //   }
    // }
  }
}

.no-wrap {
  @apply whitespace-nowrap overflow-hidden text-ellipsis;
}

.pages {
  @apply pt-4;
}
</style>
