<demo>
禁用按钮
</demo>
<template>
  <div>
    <Button disabled>默认</Button>
    <Button type="primary" disabled>按钮</Button>
    <Button type="success" disabled>按钮</Button>
    <Button type="danger" disabled>按钮</Button>
  </div>
  <div style="margin-top: 10px">
    <Button type="warning" disabled>按钮</Button>
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
