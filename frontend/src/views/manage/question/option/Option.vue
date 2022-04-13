<template>
  <div class="option">
    <el-card class="tools">
      <el-button type="primary" @click="addQuestionOption">添加题目选项</el-button>
    </el-card>
    <el-card class="content">
      <el-table :data="tableData" :border="true">
        <el-table-column label="题目内容" width="300">
          <template #default="scope">
            <pre v-html="scope.row.content"></pre>
          </template>
        </el-table-column>
        <el-table-column label="选项解释">
          <template #default="scope">
            <pre v-html="scope.row.description"></pre>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template #default="scope">
            <el-button size="small" @click="editOption(scope.row, scope.$index)">编辑</el-button>
            <el-popconfirm title="确定删除此选项？" @confirm="deleteOption(scope.row, scope.$index)">
              <template #reference>
                <el-button size="small" type="danger">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="pages"
        background
        layout="prev, pager, next"
        :total="pagination.total"
        v-model:page-size="pagination.pageSize"
        v-model:current-page="pagination.page"
        :hide-on-single-page="true"
      />
    </el-card>
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
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { QuestionOptionItem } from '/@/api/question/types'
import {
  getQuestionOptionListApi,
  createQuestionOptionApi,
  updateQuestionOptionApi,
  deleteQuestionOptionApi,
} from '/@/api/question'
import { Pagination } from '../types'
import WangEditor from '/@/components/WangEditor/WangEditor.vue'
import { errorMessage, successMessage } from '/@/utils/message'

const tableData = reactive<QuestionOptionItem[]>([])
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
