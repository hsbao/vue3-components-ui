<template>
  <div>
    <h1>Dialog 示例</h1>
    <ElButton type="primary" @click="onClickChangeVisible">我是按钮</ElButton>
    <ElDialog 
      v-model:visible="visible"
      title="哈哈哈"
      :confirmLoading="true"
      @ok="onClickOk"
      @cancel="onClickCancel"
    >
      <!-- v-slot只能作用在template上 -->
      <template v-slot:title>测试啊啊</template>
      <div>
        <p>内容1</p>
        <p>内容22333</p>
      </div>
    </ElDialog>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
export default {
  name: 'Dialog',
  components: {
    ElDialog: Dialog,
    ElButton: Button
  },
  setup() {
    const visible = ref(false)
    const onClickChangeVisible = () => {
      visible.value = true
    }
    const onClickOk = () => {
      setTimeout(() => {
        visible.value = false
      }, 5000)
    }
    const onClickCancel = () => {
      console.log('close dialog')
    }
    return {
      visible,
      onClickOk,
      onClickCancel,
      onClickChangeVisible
    }
  }
}
</script>