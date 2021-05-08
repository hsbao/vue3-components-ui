<template>
  <div>
    <h1>Tag 示例</h1>
    <Demo :component="Tag1Demo" />
    <Demo :component="Tag2Demo" />
  </div>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Tag1Demo from './Tag1.demo.vue'
import Tag2Demo from './Tag2.demo.vue'
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Tag1Demo,
      Tag2Demo,
    }
  },
}
</script>
