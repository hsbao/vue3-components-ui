<demo>
常规使用
</demo>
<template>
  <div>
    <Button>默认</Button>
    <Button type="primary">按钮</Button>
    <Button type="success">按钮</Button>
    <Button type="danger">按钮</Button>
  </div>
  <div style="margin-top: 10px">
    <Button type="warning">按钮</Button>
  </div>
</template>

<script lang="ts">
import { Button } from '../../lib/index'
export default {
  components: {
    Button,
  },
}
</script>
