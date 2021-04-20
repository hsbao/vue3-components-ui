<demo>
一键打开 Dialog
</demo>
<template>
  <div>
    <Button type="primary" @click="showDialog">打开对话框</Button>
  </div>
</template>

<script lang="ts">
import { Button, show } from '../../lib/index'
export default {
  components: {
    Button,
  },
  setup() {
    const showDialog = () => {
      show({
        visible: true,
        top: '35vh',
        width: '65%',
        title: 'Dialog Title',
        content: 'Dialog content',
        ok() {
          console.log('点击确定按钮')
        },
        cancel() {
          console.log('点击取消按钮')
        },
      })
    }
    return {
      showDialog,
    }
  },
}
</script>
