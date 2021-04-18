<template>
  <div>
    <Switch v-model:value="visible" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue' 
import Switch from '../lib/Switch.vue'

export default {
  name: 'DocDefault',
  components: {
    Switch
  },
  setup() {
    const visible = ref(true)
    return { visible }
  }
}
</script>