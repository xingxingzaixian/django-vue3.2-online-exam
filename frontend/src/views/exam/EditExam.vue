<template>
  <div class="exam-content">
    <h1>{{ route.meta.title }}</h1>
    <el-divider />
    <el-form ref="ruleFormRef" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="图标" prop="avatar">
        <el-input v-model="form.avatar" />
      </el-form-item>
      <el-form-item label="描述">
        <wang-editor v-model:html="form.description" mode="simple"></wang-editor>
      </el-form-item>
      <el-form-item label="限时" prop="limit_time">
        <el-input-number v-model="form.limit_time" />
      </el-form-item>
      <el-form-item label="开始时间" prop="start_date">
        <el-date-picker
          v-model="form.start_date"
          type="datetime"
          placeholder="选择开始时间"
          format="YYYY-MM-DD HH:mm:ss"
          value-format="YYYY-MM-DD HH:mm:ss"
          :disabledDate="disableStartDate"
        />
      </el-form-item>
      <el-form-item label="结束时间" prop="end_date">
        <el-date-picker
          v-model="form.end_date"
          type="datetime"
          placeholder="选择结束时间"
          format="YYYY-MM-DD HH:mm:ss"
          value-format="YYYY-MM-DD HH:mm:ss"
          :disabledDate="disableEndDate"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import dayjs from 'dayjs'
import { ExamCreateItem } from '/@/api/exam/types'
import WangEditor from '/@/components/WangEditor/WangEditor.vue'
import { getExamApi, createExamApi, updateExamApi } from '/@/api/exam'
import { successMessage } from '/@/utils/message'
import type { FormInstance, FormRules } from 'element-plus'

const route = useRoute()
const router = useRouter()
const isEdit: boolean = route.params && route.params.id ? true : false
const ruleFormRef = ref<FormInstance>()

const form = reactive<ExamCreateItem>({
  name: '',
  avatar: '',
  description: '',
  limit_time: 0,
  start_date: '',
  end_date: '',
})

const rules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入名称', trigger: 'blur' },
    { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' },
  ],
  avatar: [{ required: true, message: '请选择图标', trigger: 'blur' }],
  limit_time: [
    { required: true, message: '请输入限时', trigger: 'blur' },
    { type: 'number', message: '请输入数字', trigger: 'blur' },
  ],
  start_date: [{ required: true, message: '请选择开始时间', trigger: 'blur' }],
  end_date: [{ required: true, message: '请选择结束时间', trigger: 'blur' }],
})

const onSubmit = () => {
  if (!ruleFormRef.value) return
  ruleFormRef.value.validate((valid, fields) => {
    if (valid) {
      if (isEdit) {
        updateExamApi(Number(route.params.id), form).then(() => {
          successMessage('修改成功')
          router.push({ name: 'Exam' })
        })
      } else {
        createExamApi(form).then(() => {
          successMessage('创建成功')
          router.push({ name: 'Exam' })
        })
      }
    } else {
      console.log('error submit!!', fields)
    }
  })
}

const disableStartDate = (date: Date) => {
  return dayjs().isAfter(date, 'day')
}

const disableEndDate = (date: Date) => {
  return dayjs(form.start_date).isAfter(date, 'day')
}

if (isEdit) {
  getExamApi(Number(route.params.id)).then((res) => {
    form.name = res.name
    form.avatar = res.avatar
    form.description = res.description
    form.limit_time = res.limit_time
    form.start_date = res.start_date
    form.end_date = res.end_date
  })
}
</script>

<style lang="less" scoped>
.exam-content {
  @apply w-1/3 mx-auto shadow-md p-5;

  h1 {
    @apply text-center text-xl font-semibold;
  }

  .el-button {
    @apply w-full;
  }
}
</style>
