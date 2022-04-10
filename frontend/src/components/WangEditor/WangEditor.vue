<template>
  <div class="editor-main" v-bind="$attrs">
    <div style="border: 1px solid #ccc">
      <Toolbar :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" style="border-bottom: 1px solid #ccc" />
      <Editor
        :defaultConfig="editorConfig"
        :mode="mode"
        v-model="valueHtml"
        @onCreated="handleCreated"
        @onChange="handleChange"
        @onFocus="handleFocus"
        @onBlur="handleBlur"
      />
    </div>
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
  disable?: boolean
}>()

const emits = defineEmits<{
  (e: 'update:html', html: string): void
  (e: 'onfocus'): void
  (e: 'onblur'): void
}>()

const editorRef = shallowRef<IDomEditor>()
const valueHtml = ref<string>(props.html)
const editorConfig: Partial<IEditorConfig> = { placeholder: '请输入内容' }
const toolbarConfig: Partial<IToolbarConfig> = {}

const handleCreated = (editor: IDomEditor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

const handleChange = (editor: IDomEditor) => {
  console.log('change:', editor.getText())
}

const handleFocus = () => {
  emits('onfocus')
}
const handleBlur = () => {
  emits('onblur')
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

watch(
  () => props.disable,
  (val) => {
    if (editorRef.value == null) return
    if (val) {
      editorRef.value.disable()
    } else {
      editorRef.value.enable()
    }
  },
  {
    immediate: true,
  }
)
</script>

<style lang="less" scoped>
.editor-main {
  border: 1px solid #ccc;
}
</style>
