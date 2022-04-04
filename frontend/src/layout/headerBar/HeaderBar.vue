<template>
  <div class="header">
    <div class="left">
      <icon-park :icon="collapse ? 'indent-right' : 'indent-left'" :size="24" @click="toggleCollapse" />
      <bread-crumb :separator="'/'" />
    </div>
    <div class="right">
      <notice />
      <el-dropdown :hide-on-click="false">
        <div class="user">
          <el-avatar :size="30" :src="userAvatar" />
          <span>{{ userName }}</span>
        </div>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <icon-park icon="me" />
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
import IconPark from '/@/components/IconPark/IconPark.vue'
import useUserStore from '/@/store/user'
import { computed } from 'vue'
import vatar from '/@/assets/images/avatar.png'
import BreadCrumb from './breadcrumb/BreadCrumb.vue'
import Notice from './notice/Notice.vue'

const props = defineProps<{
  collapse: boolean
}>()

const emits = defineEmits<{
  (e: 'update:collapse', collapse: boolean): void
}>()

const userStore = useUserStore()

const userAvatar = computed<string>(() => {
  return userStore.userInfo?.avatar || vatar
})

const userName = computed<string>(() => {
  return userStore.userInfo?.nickname || '未登录'
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
