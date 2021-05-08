<demo>
不同主题
</demo>
<template>
  <div>
    <Tag effect="dark">标签1</Tag>
    <Tag type="success" effect="dark">标签2</Tag>
    <Tag type="danger" effect="dark">标签3</Tag>
    <Tag type="warning" effect="dark">标签4</Tag>
  </div>

  <div style="margin-top: 20px;">
    <Tag effect="plain">标签1</Tag>
    <Tag type="success" effect="plain">标签2</Tag>
    <Tag type="danger" effect="plain">标签3</Tag>
    <Tag type="warning" effect="plain">标签4</Tag>
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
