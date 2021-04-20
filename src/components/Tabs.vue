<template>
  <div>
    <ElTabs v-model:selected="selected">
      <ElTab title="导航1">内容1</ElTab>
      <ElTab title="导航2">
        <div>内容2</div>
      </ElTab>
    </ElTabs>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { Tabs, Tab } from '../lib/index'
export default {
  name: 'Tabs',
  components: {
    ElTabs: Tabs,
    ElTab: Tab,
  },
  setup() {
    const selected = ref('导航1')
    return {
      selected,
    }
  },
}
</script>