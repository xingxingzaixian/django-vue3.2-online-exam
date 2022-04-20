<template>
  <div :style="{ width: `${width}px`, height: `${height}px` }">
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <a v-else href="javascript:;" class="a-upload">
      <icon-park class="icon" icon="plus" :size="26" color="#aaa" />
      <input type="file" @change="selectFile" />
    </a>
    <teleport to="body">
      <el-dialog v-model="dialogVisible" title="裁剪图片" width="30%" :before-close="handleClose">
        <vue-picture-cropper
          :boxStyle="{
            width: '100%',
            height: '100%',
            backgroundColor: '#f8f8f8',
            margin: 'auto',
          }"
          :img="copperImage"
          :options="{
            viewMode: 1,
            dragMode: 'move',
            aspectRatio: 250 / 80,
            cropBoxResizable: false,
          }"
          :presetMode="{
            mode: 'fixedSize',
            width: 250,
            height: 80,
          }"
        />
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="handleClose">取消</el-button>
            <el-button type="primary" @click="onSubmit">确定</el-button>
          </span>
        </template>
      </el-dialog>
    </teleport>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import IconPark from '/@/components/IconPark/IconPark.vue'
import VuePictureCropper from 'vue-picture-cropper'

const imageUrl = ref<string>('')
const copperImage = ref<string>('')
const dialogVisible = ref<boolean>(false)
const uploadInput = ref<HTMLInputElement | null>(null)

defineProps<{
  width: number
  height: number
}>()

const selectFile = (e: Event): void => {
  // 如果有多个裁剪框，也需要重置掉裁剪目标的值，避免使用同一张图片无法触发watch
  imageUrl.value = ''
  copperImage.value = ''
  // 获取选取的文件
  const target = e.target as HTMLInputElement
  const { files } = target
  if (!files) return
  const file: File = files[0]
  // 转换为base64传给裁切组件
  const reader: FileReader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = (): void => {
    // 更新裁切弹窗的图片源
    copperImage.value = String(reader.result)
    // 显示裁切弹窗
    dialogVisible.value = true
    // 清空已选择的文件
    if (!uploadInput.value) return
    uploadInput.value.value = ''
  }
}

const handleClose = (): void => {
  dialogVisible.value = false
}

const onSubmit = () => {
  dialogVisible.value = false
}
</script>

<style lang="less" scoped>
.avatar {
  @apply w-full h-full;
}

.a-upload {
  @apply w-full h-full cursor-pointer overflow-hidden inline-block relative rounded-md;
  border: 1px dashed var(--el-border-color);
  transition: var(--el-transition-duration-fast);

  input {
    @apply opacity-0 cursor-pointer w-full h-full;
    font-size: 100px;
    filter: alpha(opacity=0);
  }

  .icon {
    @apply absolute left-1/2 top-1/2;
    transform: translate(-50%, -50%);
  }

  &:hover {
    border-color: var(--el-color-primary);
    text-decoration: none;
  }
}
</style>
