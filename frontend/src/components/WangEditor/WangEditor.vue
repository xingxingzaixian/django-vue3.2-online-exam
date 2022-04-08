<template>
  <div class="editor-main" v-bind="$attrs">
    <Toolbar
      editorId="editor"
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      editorId="editor"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, shallowRef, onBeforeUnmount, watch } from 'vue'
import '@wangeditor/editor/dist/css/style.css'
import type { IToolbarConfig, IEditorConfig, IDomEditor } from '@wangeditor/editor'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

const props = defineProps<{
  mode: 'default' | 'simple'
  html: string
}>()

const emits = defineEmits<{
  (e: 'update:html', html: string): void
}>()

const editorRef = shallowRef<IDomEditor>()

const valueHtml = ref<string>(props.html)

const editorConfig: Partial<IEditorConfig> = { placeholder: '请输入内容' }
const toolbarConfig: Partial<IToolbarConfig> = {}

const handleCreated = (editor: IDomEditor) => {
  console.log('handleCreated', editor)
  editorRef.value = editor // 记录 editor 实例，重要！
}

onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

watch(
  () => props.html,
  (val) => {
    console.log('prop html changed', val)
    if (valueHtml.value === val) return
    valueHtml.value = val
  }
)

watch(
  () => valueHtml.value,
  (val) => {
    console.log('html changed', val)
    if (props.html === val) return
    emits('update:html', val)
  }
)
</script>

<style lang="less" scoped>
.editor-main {
  border: 1px solid #ccc;
}
</style>
