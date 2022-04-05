<template>
  <div class="question">
    <div class="tools">
      <el-button type="primary" icon="el-icon-plus" @click="addQuestion">添加题目</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" :border="true">
      <template v-for="item in columnData" :key="item.prop">
        <el-table-column
          v-if="!item.format || item.format === 'text'"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        />
        <el-table-column v-else-if="item.format && item.format === 'html'" :label="item.label" :width="item.width">
          <template #default="scope">
            <pre v-html="scope.row[item.prop]"></pre>
          </template>
        </el-table-column>
        <el-table-column v-else-if="item.format && item.format === 'action'" :label="item.label" :width="item.width">
          <template #default="scope">
            <el-button size="small" @click="editQuestion(scope.row)">编辑</el-button>
            <el-popconfirm title="确定删除此题目？" @confirm="deleteQuestion(scope.row)">
              <template #reference>
                <el-button size="small" type="danger">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue'
import { QuestionListItem } from '/@/api/question/types'
import { getQuestionListApi, deleteQuestionApi } from '/@/api/question'
import { QuestionColumn } from './types'
import { successMessage } from '/@/utils/message'
import { useRouter } from 'vue-router'

const router = useRouter()
const tableData = reactive<QuestionListItem[]>([])
const columnData = reactive<QuestionColumn[]>([
  {
    label: '序号',
    prop: 'id',
    width: 60,
  },
  {
    label: '题目内容',
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
    label: '分类',
    prop: 'category',
    width: 100,
  },
  {
    label: '难度',
    prop: 'level',
    width: 100,
  },
  {
    label: '类型',
    prop: 'type',
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
])

onMounted(async (): Promise<void> => {
  getQuestionListApi().then((res) => {
    tableData.splice(0, tableData.length, ...res)
  })
})

const addQuestion = () => {
  router.push({
    name: 'ManageQuestionCreate',
  })
}

const editQuestion = (row: QuestionListItem) => {
  router.push({
    name: 'ManageQuestionEdit',
    params: {
      id: row.id,
    },
  })
}

const deleteQuestion = (row: QuestionListItem) => {
  deleteQuestionApi(row.id)
    .then(() => {
      successMessage('删除成功')
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>

<style lang="less" scoped>
.question {
  @apply p-2;

  .tools {
    @apply my-2;
  }
}
</style>
