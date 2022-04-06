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
        <el-form :model="form" label-width="50px" v-show="stepActive === 0">
          <el-form-item label="内容">
            <wang-editor v-model:value="form.content" />
          </el-form-item>
          <el-form-item label="描述">
            <wang-editor v-model:value="form.description" />
          </el-form-item>
        </el-form>
        <el-form :model="form" label-width="50px" v-show="stepActive === 1">
          <el-form-item label="分类">
            <el-select v-model="form.category_tag" placeholder="选择题目分类" style="width: 240px">
              <el-option v-for="item in categoryList" :key="item.tag" :label="item.name" :value="item.tag" />
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-select v-model="form.level_tag" placeholder="选择题目难度" style="width: 240px">
              <el-option v-for="item in levelList" :key="item.tag" :label="item.name" :value="item.tag" />
            </el-select>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="form.type_tag" placeholder="选择题目类型" style="width: 240px">
              <el-option v-for="item in typeList" :key="item.tag" :label="item.name" :value="item.tag" />
            </el-select>
          </el-form-item>
        </el-form>
        <el-form :model="form" label-width="50px" v-show="stepActive === 2">
          <el-form-item label="选项">
            <el-select-v2
              v-model="form.option_ids"
              :options="questionOptions"
              placeholder="选择题目选项"
              style="width: 440px"
              multiple
            />
          </el-form-item>
          <el-form-item label="答案">
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
import { useRoute } from 'vue-router'
import WangEditor from '/@/components/WangEditor/WangEditor.vue'
import {
  getQuestionTypeListApi,
  getQuestionCategoryListApi,
  getQuestionLevelListApi,
  getQuestionOptionListApi,
  createQuestionApi,
} from '/@/api/question'
import {
  QuestionCreateItem,
  QuestionTypeListItem,
  QuestionCategoryListItem,
  QuestionLevelListItem,
  QuestionOptionItem,
} from '/@/api/question/types'

const route = useRoute()

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
const categoryList = reactive<QuestionCategoryListItem[]>([])
const levelList = reactive<QuestionLevelListItem[]>([])
const typeList = reactive<QuestionTypeListItem[]>([])
const optionList = reactive<QuestionOptionItem[]>([])

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

getQuestionOptionListApi().then((res) => {
  optionList.push(...res)
})

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
    console.log(form)
    await createQuestionApi(form)
  } else {
    stepActive.value += 1
  }
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
