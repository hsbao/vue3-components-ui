<demo>
朴素按钮
</demo>
<template>
  <div>
    <Button plain>默认</Button>
    <Button type="primary" plain>按钮</Button>
    <Button type="success" plain>按钮</Button>
    <Button type="danger" plain>按钮</Button>
  </div>
  <div style="margin-top: 10px">
    <Button type="warning" plain>按钮</Button>
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
