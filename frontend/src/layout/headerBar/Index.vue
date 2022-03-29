<template>
  <div class="header">
    <div class="left">
      <icon-park :name="collapse ? 'expand-left' : 'expand-right'" :size="24" @click="toggleCollapse" />
    </div>
    <div class="right">
      <el-dropdown :hide-on-click="false">
        <div class="user">
          <el-avatar :size="30" :src="userInfo.avatar" />
          <span>{{ userInfo.nickname }}</span>
        </div>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <icon-park name="me" />
              用户中心
            </el-dropdown-item>
            <el-dropdown-item>用户中心</el-dropdown-item>
            <el-dropdown-item divided @click="handleExit">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IconPark from '/@/components/IconPark/Index.vue'
import useUserStore from '/@/store/user'
import { UserInfo } from '/@/api/user/types'
import { computed } from 'vue'

const props = defineProps<{
  collapse: boolean
}>()

const emits = defineEmits<{
  (e: 'update:collapse', collapse: boolean): void
}>()

const userStore = useUserStore()

const userInfo = computed<UserInfo>(() => {
  return userStore.userInfo
})

const toggleCollapse = () => {
  emits('update:collapse', !props.collapse)
}

const handleExit = () => {
  userStore.logout()
}
</script>

<style lang="less" scoped>
.header {
  @apply overflow-hidden z-10 w-full h-full;

  .left {
    @apply h-full float-left flex justify-center items-center pl-2;
  }

  .right {
    @apply h-full float-right flex justify-center items-center mr-5;

    .user {
      @apply flex items-center;

      .el-avatar {
        @apply mx-2;
      }

      span {
        @apply text-gray-600;
      }
    }
  }
}
</style>
