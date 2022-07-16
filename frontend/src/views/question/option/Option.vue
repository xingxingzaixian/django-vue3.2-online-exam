<template>
  <div>
    <div class="option">
      <table-tool>
        <el-button type="primary" @click="addQuestionOption">添加题目选项</el-button>
      </table-tool>
      <basic-table :data="tableData" :columns="columnData" :pagination="pagination">
        <template #content="scope">
          <pre v-html="scope.row.content" style="white-space: pre-wrap"></pre>
        </template>
        <template #description="scope">
          <pre v-html="scope.row.description" style="white-space: pre-wrap"></pre>
        </template>
        <template #action="scope">
          <el-button size="small" @click="editOption((scope as any).row, (scope as any).$index)">编辑</el-button>
          <el-popconfirm title="确定删除此选项？" @confirm="deleteOption((scope as any).row, (scope as any).$index)">
            <template #reference>
              <el-button size="small" type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </basic-table>
    </div>
    <teleport to="body">
      <el-dialog v-model="dialogFormVisible" title="编辑题目选项">
        <el-form ref="ruleFormRef" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="选项内容" prop="content">
            <wang-editor v-model:html="form.content" mode="simple" style="min-width: 300px" />
          </el-form-item>
          <el-form-item label="选项解释" prop="description">
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
    </teleport>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
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
import type { FormInstance, FormRules } from 'element-plus'
import { validateWangeditor } from '/@/utils/utils'

const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  content: [{ validator: validateWangeditor, required: true, trigger: 'blur' }],
  description: [{ validator: validateWangeditor, required: true, trigger: 'blur' }],
})
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
    label: '操作',
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
  text: '',
  content: '',
  description: '',
})
const pagination = reactive<Pagination>({
  total: 0,
  pageNo: 1,
  pageSize: 15,
})

const addQuestionOption = () => {
  dialogFormVisible.value = true
  isEdit = false
}

const onSubmit = async () => {
  ruleFormRef.value?.validate(async (valid, _) => {
    if (valid) {
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
  })
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

const updateData = () => {
  getQuestionOptionListApi(pagination).then((res) => {
    tableData.splice(0, tableData.length, ...res.results)
    pagination.total = res.count
  })
}

onMounted(() => {
  updateData()
})
</script>

<style lang="less" scoped>
.option {
  @apply w-1/2 mx-auto;
}

pre {
  p {
    @apply overflow-hidden text-ellipsis;
  }
}
</style>
