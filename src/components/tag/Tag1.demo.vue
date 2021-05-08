<demo>
基础用法
</demo>
<template>
  <div>
    <Tag>标签1</Tag>
    <Tag type="success">标签2</Tag>
    <Tag type="danger">标签3</Tag>
    <Tag type="warning">标签4</Tag>
  </div>
</template>

<script lang="ts">
import { Tag } from '../../lib/index'
export default {
  components: {
    Tag,
  },
}
</script>
