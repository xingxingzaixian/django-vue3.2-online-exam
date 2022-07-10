<template>
  <div class="edit">
    <h1>{{ title }}</h1>
    <div class="form">
      <el-steps :active="stepActive" align-center finish-status="success" class="step">
        <el-step title="题目内容" description="填写题目信息" />
        <el-step title="题目分类信息" description="类型、分类、难度" />
        <el-step title="题目选项" description="题目选项和答案" />
      </el-steps>
      <div class="question">
        <el-form ref="rule1FormRef" :model="form" :rules="rules" label-width="60px" v-show="stepActive === 0">
          <el-form-item label="内容" prop="content">
            <wang-editor v-model:html="form.content" mode="simple" style="min-width: 800px" />
          </el-form-item>
          <el-form-item label="描述" prop="description">
            <wang-editor v-model:html="form.description" mode="simple" style="min-width: 800px" />
          </el-form-item>
        </el-form>
        <el-form ref="rule2FormRef" :model="form" :rules="rules" label-width="60px" v-show="stepActive === 1">
          <el-form-item label="分类" prop="category_tag">
            <el-select v-model="form.category_tag" placeholder="选择题目分类" style="width: 240px">
              <el-option v-for="item in categoryList" :key="item.tag" :label="item.name" :value="item.tag" />
            </el-select>
          </el-form-item>
          <el-form-item label="难度" prop="level_tag">
            <el-select v-model="form.level_tag" placeholder="选择题目难度" style="width: 240px">
              <el-option v-for="item in levelList" :key="item.tag" :label="item.name" :value="item.tag" />
            </el-select>
          </el-form-item>
          <el-form-item label="类型" prop="type_tag">
            <el-select v-model="form.type_tag" placeholder="选择题目类型" style="width: 240px">
              <el-option v-for="item in typeList" :key="item.tag" :label="item.name" :value="item.tag" />
            </el-select>
          </el-form-item>
        </el-form>
        <el-form ref="rule3FormRef" :rules="rules" :model="form" label-width="60px" v-show="stepActive === 2">
          <el-form-item label="选项" prop="option_ids">
            <el-select-v2
              v-model="form.option_ids"
              :options="questionOptions"
              placeholder="选择题目选项"
              style="width: 440px"
              multiple
              filterable
              remote
              :remote-method="obtainRemoteOption"
            />
          </el-form-item>
          <el-form-item label="答案" prop="anser_ids">
            <el-select-v2
              v-model="form.anser_ids"
              :options="questionAnswers"
              placeholder="选择题目答案"
              style="width: 440px"
              multiple
              :multiple-limit="form.type_tag === 'S' ? 1 : form.option_ids.length"
            />
          </el-form-item>
        </el-form>
      </div>

      <div class="step">
        <el-button @click="stepActive -= 1" :disabled="stepActive === 0">上一步</el-button>
        <el-button type="primary" @click="onSubmit" :disabled="stepActive === 3">
          {{ nextStepText }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import WangEditor from '/@/components/WangEditor/WangEditor.vue'
import {
  getQuestionTypeListApi,
  getQuestionCategoryListApi,
  getQuestionLevelListApi,
  getQuestionOptionListApi,
  createQuestionApi,
  getQuestionApi,
  updateQuestionApi,
} from '/@/api/question'
import {
  QuestionCreateItem,
  QuestionTypeListItem,
  QuestionCategoryListItem,
  QuestionLevelListItem,
  QuestionOptionItem,
} from '/@/api/question/types'
import { Pagination } from '/@/types/common'
import { successMessage } from '/@/utils/message'
import { validateWangeditor } from '/@/utils/utils'
import type { FormInstance, FormRules } from 'element-plus'

const route = useRoute()
const router = useRouter()
const form = reactive<QuestionCreateItem>({
  content: '',
  description: '',
  option_ids: [],
  anser_ids: [],
  level_tag: '',
  type_tag: '',
  category_tag: '',
})
const stepActive = ref<number>(0)
const isEdit: boolean = route.params && route.params.id ? true : false
const rule1FormRef = ref<FormInstance>()
const rule2FormRef = ref<FormInstance>()
const rule3FormRef = ref<FormInstance>()
const categoryList = reactive<QuestionCategoryListItem[]>([])
const levelList = reactive<QuestionLevelListItem[]>([])
const typeList = reactive<QuestionTypeListItem[]>([])
const optionList = reactive<QuestionOptionItem[]>([])

const rules = reactive<FormRules>({
  content: [{ validator: validateWangeditor, trigger: 'blur' }],
  description: [{ validator: validateWangeditor, trigger: 'blur' }],
  option_ids: [{ required: true, message: '请选择题目选项', trigger: 'blur' }],
  anser_ids: [{ required: true, message: '请选择题目选项', trigger: 'blur' }],
  type_tag: [{ required: true, message: '请选择题目类型', trigger: 'blur' }],
  level_tag: [{ required: true, message: '请选择题目难度', trigger: 'blur' }],
  category_tag: [{ required: true, message: '请选择题目分类', trigger: 'blur' }],
})

const pagination = reactive<Pagination>({
  total: 0,
  pageNo: 1,
  pageSize: 500,
})

const title = computed<string>(() => {
  return route.meta.title as string
})

const nextStepText = computed<string>(() => {
  return stepActive.value >= 2 ? '提交' : '下一步'
})

// 获取题目类型列表
getQuestionTypeListApi().then((res) => {
  typeList.push(...res)
})

getQuestionCategoryListApi().then((res) => {
  categoryList.push(...res)
})

getQuestionLevelListApi().then((res) => {
  levelList.push(...res)
})

getQuestionOptionListApi(pagination).then((res) => {
  optionList.splice(0, optionList.length, ...res.results)
})

const obtainRemoteOption = (query: string) => {
  getQuestionOptionListApi(pagination, { content__icontains: query }).then((res) => {
    optionList.splice(0, optionList.length, ...res.results)
  })
}

const questionOptions = computed(() => {
  return optionList.map((item) => {
    return {
      label: item.content,
      value: item.id,
    }
  })
})

const questionAnswers = computed(() => {
  return form.option_ids.map((i) => {
    const item = optionList.find((option) => option.id === i)
    if (item) {
      return {
        label: item.content,
        value: item.id,
      }
    }
  })
})

const onSubmit = async () => {
  if (stepActive.value === 2) {
    rule3FormRef.value?.validate(async (valid, _) => {
      if (valid) {
        if (isEdit) {
          await updateQuestionApi(Number(route.params.id), form)
          successMessage('更新成功')
        } else {
          await createQuestionApi(form)
          successMessage('添加成功')
        }
        router.push({ name: 'Question' })
      }
    })
  } else {
    if (stepActive.value === 0) {
      rule1FormRef.value?.validate((valid, fields) => {
        console.log(form.content)
        if (valid) {
          stepActive.value += 1
        } else {
          console.log('submit error!', fields)
        }
      })
    }

    if (stepActive.value === 1) {
      rule2FormRef.value?.validate((valid, fields) => {
        if (valid) {
          stepActive.value += 1
        } else {
          console.log('submit error!', fields)
        }
      })
    }
  }
}

if (isEdit) {
  getQuestionApi(Number(route.params.id)).then((res) => {
    form.content = res.content
    form.description = res.description
    form.option_ids = res.option_ids
    form.anser_ids = res.anser_ids
    form.level_tag = res.level_tag
    form.type_tag = res.type_tag
    form.category_tag = res.category_tag
  })
}
</script>

<style lang="less" scoped>
.edit {
  h1 {
    @apply text-center text-2xl py-3;
  }

  .form {
    @apply w-2/3 mx-auto flex flex-col justify-center items-center;

    .el-steps {
      @apply w-full;
    }

    .question {
      @apply mx-auto;
    }

    .step {
      @apply pt-5 pb-10;
    }
  }
}
</style>
