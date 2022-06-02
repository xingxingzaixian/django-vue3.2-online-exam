<template>
  <div class="exam-content">
    <h1>{{ route.meta.title }}</h1>
    <el-divider />
    <el-form :model="form" label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="图标">
        <el-input v-model="form.avatar" />
      </el-form-item>
      <el-form-item label="描述">
        <wang-editor v-model:html="form.description" mode="simple"></wang-editor>
      </el-form-item>
      <el-form-item label="限时">
        <el-input-number v-model="form.limit_time" />
      </el-form-item>
      <el-form-item label="开始时间">
        <el-date-picker
          v-model="form.start_date"
          type="datetime"
          placeholder="选择开始时间"
          format="YYYY-MM-DD HH:mm:ss"
          value-format="YYYY-MM-DD HH:mm:ss"
          :disabledDate="disableStartDate"
        />
      </el-form-item>
      <el-form-item label="结束时间">
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
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import dayjs from 'dayjs'
import { ExamCreateItem } from '/@/api/exam/types'
import WangEditor from '/@/components/WangEditor/WangEditor.vue'
import { getExamApi, createExamApi, updateExamApi } from '/@/api/exam'
import { successMessage } from '/@/utils/message'

const route = useRoute()
const router = useRouter()
const isEdit: boolean = route.params && route.params.id ? true : false
const form = reactive<ExamCreateItem>({
  name: '',
  avatar: '',
  description: '',
  limit_time: 0,
  start_date: '',
  end_date: '',
})

const onSubmit = () => {
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
}

const disableStartDate = (date: Date) => {
  return dayjs().isAfter(date, 'day')
}

const disableEndDate = (date: Date) => {
  return dayjs(form.start_date).isAfter(date, 'day')
}

if (isEdit) {
  getExamApi(Number(route.params.id)).then((res) => {
    console.log(res)
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
