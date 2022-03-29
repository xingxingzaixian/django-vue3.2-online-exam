<template>
  <div class="login-main">
    <div class="logo">
      <img alt="" border="0" />
    </div>

    <div class="login">
      <div class="login-form">
        <div class="title">用户登录</div>
        <el-form ref="ruleFormRef" :model="formData" :rules="rules" :label-width="0">
          <el-form-item prop="username">
            <el-input v-model="formData.username" clearable placeholder="请输入账户名">
              <template #prefix>
                <icon-park name="user" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="formData.password" type="password" show-password placeholder="请输入密码">
              <template #prefix>
                <icon-park name="lock" />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="submit" type="primary" @click="onSubmit()">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import type { FormInstance } from 'element-plus'
import IconPark from '/@/components/IconPark/Index.vue'
import { LoginForm } from './types'
import useUserStore from '/@/store/user'
import { successMessage, errorMessage } from '/@/utils/message'

const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

const ruleFormRef = ref<FormInstance>()

const redirect = ref<string>((route.query.redirect as string) || '/')
const formData = reactive<LoginForm>({
  username: 'root',
  password: '12345678',
})

const rules = reactive({
  username: [{ required: true, message: '请输入账户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})

const onSubmit = () => {
  if (!ruleFormRef.value) return

  ruleFormRef.value.validate(async (valid: boolean) => {
    if (valid) {
      userStore
        .login(formData)
        .then(() => {
          successMessage('登录成功')
          router.push(redirect.value)
        })
        .catch(() => {
          errorMessage('登录失败，请检查用户名或密码')
        })
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<style lang="less" scoped>
.login-main {
  @apply h-screen flex overflow-hidden;

  .logo {
    @apply h-full relative;
    flex: 2;

    &:before {
      @apply bg-blue-500 left-0 top-0 absolute;
      content: '';
      height: 150%;
      width: 150%;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }

    img {
      @apply absolute h-3/4 w-3/4 left-1/4 top-1/4;
      background: url('/@/assets/images/login_svg.svg') round;
    }
  }
  .login {
    @apply shadow-md h-full w-full flex-1 flex justify-center items-center relative;

    &:before {
      @apply bg-blue-500 top-0 right-0 absolute h-96 w-96;
      content: '';
      border-radius: 50%;
      transform: translate(50%, -50%);
    }

    &:after {
      @apply bg-blue-500 bottom-0 right-0 absolute h-96 w-96;
      content: '';
      border-radius: 50%;
      transform: translate(50%, 50%);
    }
    .login-form {
      @apply shadow-2xl h-64 w-80 p-4;

      .title {
        @apply text-center text-2xl text-gray-500 mt-2;
      }

      .submit {
        @apply w-full;
      }
    }
  }
}
</style>
