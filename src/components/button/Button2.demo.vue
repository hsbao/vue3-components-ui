<demo>
支持 size
</demo>
<template>
  <div>
    <div>
      <Button size="big">按钮</Button>
      <Button>按钮</Button>
      <Button size="small">按钮</Button>
    </div>
    <div style="margin-top: 10px">
      <Button type="primary" size="big">按钮</Button>
      <Button type="primary">按钮</Button>
      <Button type="primary">按钮</Button>
    </div>
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
