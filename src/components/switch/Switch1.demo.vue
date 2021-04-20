<demo>
常规用法
</demo>

<template>
  <Switch v-model:value="visible" />
</template>

<script lang="ts">
import { Switch } from '../../lib/index'
import { ref } from 'vue'
export default {
  components: {
    Switch,
  },
  setup() {
    const visible = ref(true)
    return { visible }
  },
}
</script>
