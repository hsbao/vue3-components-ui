<demo>
禁用
</demo>
<template>
  <div>
    <Input v-model:value="value" disabled />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { Input } from '../../lib/index'
export default {
  components: {
    Input,
  },
  setup() {
    const value = ref('123')
    return { value }
  },
}
</script>
