<template>
  <div>
    <div class="option">
      <table-tool>
        <el-button type="primary" @click="addQuestionOption">添加题目选项</el-button>
      </table-tool>
      <basic-table :data="tableData" :columns="columnData" :pagination="pagination">
        <template #content="scope">
          <pre v-html="scope.row.content"></pre>
        </template>
        <template #description="scope">
          <pre v-html="scope.row.description"></pre>
        </template>
        <template #action="scope">
          <el-button size="small" @click="editOption(scope.row, scope.$index)">编辑</el-button>
          <el-popconfirm title="确定删除此选项？" @confirm="deleteOption(scope.row, scope.$index)">
            <template #reference>
              <el-button size="small" type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </basic-table>
    </div>
    <el-dialog v-model="dialogFormVisible" title="编辑题目选项">
      <el-form :model="form" label-width="70px">
        <el-form-item label="选项内容">
          <wang-editor v-model:html="form.content" mode="simple" style="min-width: 300px" />
        </el-form-item>
        <el-form-item label="选项解释">
          <wang-editor v-model:html="form.description" mode="simple" style="min-width: 300px" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="onSubmit" :loading="isLoading">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { QuestionOptionItem } from '/@/api/question/types'
import TableTool from '/@/components/BasicTable/TableTool.vue'
import BasicTable from '/@/components/BasicTable/BasicTable.vue'
import {
  getQuestionOptionListApi,
  createQuestionOptionApi,
  updateQuestionOptionApi,
  deleteQuestionOptionApi,
} from '/@/api/question'
import { ColumnType, Pagination } from '/@/types/common'
import WangEditor from '/@/components/WangEditor/WangEditor.vue'
import { errorMessage, successMessage } from '/@/utils/message'

const tableData = reactive<QuestionOptionItem[]>([])
const columnData: ColumnType[] = [
  {
    label: '选项内容',
    prop: 'content',
    width: 300,
    format: 'html',
  },
  {
    label: '选项解释',
    prop: 'description',
    format: 'html',
  },
  {
    label: '选项内容',
    prop: 'action',
    width: 150,
    format: 'action',
  },
]
const dialogFormVisible = ref<boolean>(false)
const isLoading = ref<boolean>(false)
let isEdit: boolean = false
let currentId: number = -1
let editIndex: number = -1
const form = reactive<QuestionOptionItem>({
  id: -1,
  content: '',
  description: '',
})

const pagination = reactive<Pagination>({
  total: 0,
  page: 1,
  pageSize: 15,
})

const addQuestionOption = () => {
  dialogFormVisible.value = true
  isEdit = false
}

getQuestionOptionListApi().then((res) => {
  tableData.splice(0, tableData.length, ...res)
})

const onSubmit = async () => {
  try {
    isLoading.value = true
    if (!isEdit) {
      await createQuestionOptionApi(form)
      successMessage('创建选项成功')
    } else {
      await updateQuestionOptionApi(currentId, form)
      tableData.splice(editIndex, 1, form)
      successMessage('更新选项成功')
    }
    dialogFormVisible.value = false
  } catch (err) {
    console.log(err)
  } finally {
    isLoading.value = false
  }
}

const editOption = (row: QuestionOptionItem, index: number) => {
  dialogFormVisible.value = true
  isEdit = true
  currentId = row.id
  editIndex = index
  form.content = row.content
  form.description = row.description
}

const deleteOption = (row: QuestionOptionItem, index: number) => {
  deleteQuestionOptionApi(Number(row.id))
    .then(() => {
      tableData.splice(index, 1)
      successMessage('删除选项成功')
    })
    .catch((err) => {
      errorMessage(err.message)
    })
}
</script>

<style lang="less" scoped>
.option {
  @apply w-1/2 mx-auto p-2;

  .tools {
    @apply my-2;
  }

  .pages {
    @apply pt-4;
  }
}
</style>
