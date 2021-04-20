<demo>
圆角按钮
</demo>
<template>
  <div>
    <Button round>默认</Button>
    <Button type="primary" round>按钮</Button>
    <Button type="success" round>按钮</Button>
    <Button type="danger" round>按钮</Button>
  </div>
  <div style="margin-top: 10px">
    <Button type="warning" round>按钮</Button>
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
