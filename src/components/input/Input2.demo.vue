<demo>
基础用法
</demo>
<template>
  <div>
    <p>{{ value }}</p>
    <Input v-model:value="value" />
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
