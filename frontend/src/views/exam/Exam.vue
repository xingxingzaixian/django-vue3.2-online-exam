<template>
  <div class="exam">
    <table-tool>
      <el-button type="primary" @click="addExam">添加考试</el-button>
    </table-tool>
    <basic-table :data="tableData" :columns="columnData" :pagination="pagination" @changePage="changePage">
      <template #content="scope">
        <pre v-html="scope.row['content']"></pre>
      </template>
      <template #descrption="scope">
        <pre v-html="scope.row['descrption']"></pre>
      </template>
      <template #action="scope">
        <el-button size="small" @click="editExam(scope.row)">编辑</el-button>
        <el-popconfirm title="确定删除此考试？" @confirm="deleteExam(scope.row)">
          <template #reference>
            <el-button size="small" type="danger">删除</el-button>
          </template>
        </el-popconfirm>
      </template>
    </basic-table>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { Pagination, ColumnType } from '/@/types/common'
import { ExamListItem } from '/@/api/exam/types'
import { getExamListApi, deleteExamApi } from '/@/api/exam'
import { successMessage } from '/@/utils/message'
import TableTool from '/@/components/BasicTable/TableTool.vue'
import BasicTable from '/@/components/BasicTable/BasicTable.vue'

const router = useRouter()
const tableData = reactive<ExamListItem[]>([])
const columnData: ColumnType[] = [
  {
    label: '序号',
    prop: 'id',
    width: 60,
  },
  {
    label: '考试名称',
    prop: 'content',
    width: 500,
    format: 'html',
  },
  {
    label: '描述',
    prop: 'descrption',
    format: 'html',
  },
  {
    label: '时长',
    prop: 'limit_time',
    width: 100,
  },
  {
    label: '开始时间',
    prop: 'start_date',
    width: 100,
  },
  {
    label: '结束时间',
    prop: 'end_date',
    width: 100,
  },
  {
    label: '创建时间',
    prop: 'create_time',
    width: 180,
  },
  {
    label: '更新时间',
    prop: 'update_time',
    width: 180,
  },
  {
    label: '操作',
    prop: 'action',
    width: 180,
    format: 'action',
  },
]
const pagination = reactive<Pagination>({
  total: 0,
  pageNo: 1,
  pageSize: 15,
})

const addExam = () => {}

const editExam = (row: ExamListItem) => {
  router.push({
    name: 'ManageQuestionEdit',
    params: {
      id: row.id,
    },
  })
}

const deleteExam = (row: ExamListItem) => {
  deleteExamApi(row.id).then(() => {
    successMessage('删除成功')
  })
}

const updateData = () => {
  getExamListApi(pagination).then((res) => {
    tableData.splice(0, tableData.length, ...res.results)
    pagination.total = res.count
  })
}

const changePage = () => {
  updateData()
}

onBeforeMount(() => {
  updateData()
})
</script>

<style lang="less" scoped></style>
