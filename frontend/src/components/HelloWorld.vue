<script setup lang="ts">
import { ref } from 'vue'
import { AddFour } from '@icon-park/vue-next'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div style="display: flex; align-items: center">
    <add-four theme="outline" />
    <t-button theme="primary"> 新建 </t-button>
  </div>

  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style lang="less" scoped>
h1 {
  @apply text-3xl font-bold;
}

p {
  a {
    @apply text-green-400 underline;
  }

  code {
    @apply bg-gray-200 px-1 py-1 rounded text-gray-700;
  }
}
</style>
