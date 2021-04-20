<demo>
常规使用
</demo>
<template>
  <div>
    <Button type="primary" @click="toggle">打开对话框</Button>
    <Dialog
      v-model:visible="visible"
      title="哈哈哈"
      width="75%"
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
    </Dialog>
  </div>
</template>

<script lang="ts">
import { Button, Dialog } from '../../lib/index'
import { ref } from 'vue'
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const visible = ref(false)
    const toggle = () => {
      visible.value = !visible.value
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
      toggle,
      onClickOk,
      onClickCancel,
    }
  },
}
</script>
