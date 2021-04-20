<demo>
loading 按钮
</demo>
<template>
  <div>
    <Button loading>默认</Button>
    <Button type="primary" loading>按钮</Button>
    <Button type="success" loading>按钮</Button>
  </div>
  <div style="margin-top: 10px">
    <Button type="danger" loading>按钮</Button>
    <Button type="warning" loading>按钮</Button>
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
