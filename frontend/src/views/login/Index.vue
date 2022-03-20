<template>
  <div class="login-main">
    <div class="logo">
      <img src="/@/assets/images/login_svg.svg" alt="" />
    </div>

    <div class="login">
      <div class="login-form">
        <div>用户登录</div>
        <t-form ref="form" :data="formData" :colon="true" :label-width="0" @submit="onSubmit">
          <t-form-item name="account">
            <t-input v-model="formData.username" clearable placeholder="请输入账户名">
              <template #prefix-icon>
                <icon-park name="user" />
              </template>
            </t-input>
          </t-form-item>
          <t-form-item name="password">
            <t-input v-model="formData.password" type="password" clearable placeholder="请输入密码">
              <template #prefix-icon>
                <icon-park name="lock" />
              </template>
            </t-input>
          </t-form-item>
          <t-form-item style="padding-top: 8px">
            <t-button theme="primary" type="submit" block>登录</t-button>
          </t-form-item>
        </t-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { MessagePlugin, SubmitContext } from 'tdesign-vue-next'
import { useRouter, useRoute } from 'vue-router'
import IconPark from '/@/components/icon-park/Index.vue'
import { LoginForm } from './types'
import useUserStore from '/@/store/user'

const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

const redirect = ref<string>((route.query.redirect as string) || '/')
const formData = reactive<LoginForm>({
  username: 'root',
  password: '12345678',
})

const onSubmit = (context: SubmitContext<FormData>) => {
  if (context.validateResult === true) {
    userStore
      .login(formData)
      .then(() => {
        MessagePlugin.success('登录成功')
        router.push(redirect.value)
      })
      .catch(() => {
        MessagePlugin.error('登录失败，请检查用户名或密码')
      })
  } else {
    console.log('Validate Errors: ', context.firstError, context.validateResult)
    MessagePlugin.warning(context.firstError as string)
  }
}
</script>

<style lang="less" scoped>
.login-main {
  @apply h-screen flex;

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
      @apply shadow-2xl h-64 w-80;

      div {
        @apply text-center text-2xl text-gray-500 mt-2;
      }

      .t-form {
        @apply m-6;
      }
    }
  }
}
</style>
