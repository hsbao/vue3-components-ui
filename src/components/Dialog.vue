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
      <template v-slot:content>
        <p>内容1</p>
        <p>内容22333</p>
      </template>
    </ElDialog>

    <br />
    <br />
    <br />
    <ElButton type="primary" @click="onClickshowDialog">点击显示</ElButton>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'

import dialogMethod from '../lib/dialogMethod'

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
    const onClickshowDialog = () => {
      dialogMethod.show({
        visible: true,
        top: '35vh',
        width: '45%',
        title: 'Dialog Title',
        content: 'Dialog content',
        ok() {
          console.log('点击确定按钮')
        }, 
        cancel() {
          console.log('点击取消按钮')
        }
      })
    }
    return {
      visible,
      onClickOk,
      onClickCancel,
      onClickshowDialog,
      onClickChangeVisible
    }
  }
}
</script>