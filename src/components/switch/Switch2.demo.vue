<demo>
支持 disabled
</demo>
<template>
  <Switch v-model:value="visible" disabled />
</template>

<script lang="ts">
import { Switch } from '../../lib/index'
import { ref } from 'vue'
export default {
  components: {
    Switch,
  },
  setup() {
    const visible = ref(false)
    return { visible }
  },
}
</script>
