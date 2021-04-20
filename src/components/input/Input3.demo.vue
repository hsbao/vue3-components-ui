<demo>
textarea 文本域
</demo>
<template>
  <div>
    <p>{{ value }}</p>
    <Input type="textarea" v-model:value="value" :rows="4" />
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
