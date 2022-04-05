<template>
  <div class="edit">
    <h1>{{ title }}</h1>
    <div class="form">
      <el-steps :active="stepActive" align-center finish-status="success" class="step">
        <el-step title="Step 1" description="Some description" />
        <el-step title="Step 2" description="Some description" />
        <el-step title="Step 3" description="Some description" />
      </el-steps>
      <el-form :model="form" label-width="50px">
        <el-form-item label="内容">
          <wang-editor />
        </el-form-item>
        <el-form-item label="描述">
          <wang-editor />
        </el-form-item>
      </el-form>
      <div class="step">
        <el-button @click="stepActive -= 1" :disabled="stepActive === 0">上一步</el-button>
        <el-button type="primary" @click="stepActive += 1" :disabled="stepActive === 3">
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

const route = useRoute()

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
const stepActive = ref<number>(0)

const title = computed<string>(() => {
  return route.meta.title as string
})

const nextStepText = computed<string>(() => {
  return stepActive.value >= 2 ? '提交' : '下一步'
})
</script>

<style lang="less" scoped>
.edit {
  h1 {
    @apply text-center text-2xl py-3;
  }

  .form {
    @apply w-2/3 mx-auto;

    .step {
      @apply pt-5 pb-10;
    }
  }
}
</style>
