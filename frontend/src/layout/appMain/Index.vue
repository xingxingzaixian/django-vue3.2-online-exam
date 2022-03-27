<template>
  <div class="main-container">
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.main-container {
  @apply h-full;
  background-color: @mainBackgroundColor;
}
</style>
