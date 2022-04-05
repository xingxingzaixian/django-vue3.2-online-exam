<template>
  <div class="editor-main">
    <div ref="toolbarEl" class="toolbar"></div>
    <div ref="editorEl" class="editor"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import '@wangeditor/editor/dist/css/style.css'
import { createEditor, createToolbar, IEditorConfig, IDomEditor } from '@wangeditor/editor'

const toolbarEl = ref<Element | null>(null)
const editorEl = ref<Element | null>(null)

const editorConfig: Partial<IEditorConfig> = {}
editorConfig.placeholder = '请输入内容'
editorConfig.onChange = (editor: IDomEditor) => {
  // 当编辑器选区、内容变化时，即触发
  console.log('content', editor.children)
  console.log('html', editor.getHtml())
}

onMounted(() => {
  // 创建编辑器
  const editor = createEditor({
    selector: editorEl.value!,
    config: editorConfig,
    mode: 'simple', // 或 'simple' 参考下文
  })

  // 创建工具栏
  createToolbar({
    editor,
    selector: toolbarEl.value!,
    mode: 'simple', // 或 'simple' 参考下文
  })
})
</script>

<style lang="less" scoped>
.editor-main {
  border: 1px solid black;

  .toolbar {
    border-bottom: 1px solid #ccc;
  }
}
</style>
