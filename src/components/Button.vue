<template>
  <div>
    <h1>Button 组件示例</h1>
    <ElButton>我是按钮</ElButton>
    <ElButton type="primary">我是按钮</ElButton>
    <ElButton type="success">我是按钮</ElButton>
    <ElButton type="danger">我是按钮</ElButton>
    <ElButton type="warning">我是按钮</ElButton>
    <ElButton type="text">我是按钮</ElButton>
    <ElButton type="link">我是按钮</ElButton>
    <br>
    <br>
    <h1>Button 组件示例：按钮大小</h1>
    <ElButton size="big">我是按钮</ElButton>
    <ElButton>我是按钮</ElButton>
    <ElButton size="small">我是按钮</ElButton>

    <br>
    <br>
    <h1>Button 组件示例：按钮大小</h1>
    <ElButton type="primary" size="big">我是按钮</ElButton>
    <ElButton type="primary">我是按钮</ElButton>
    <ElButton type="primary" size="small">我是按钮</ElButton>

    <br>
    <br>
    <h1>Button 组件示例： 圆角按钮</h1>
    <ElButton round>我是按钮</ElButton>
    <ElButton type="primary" round>我是按钮</ElButton>
    <ElButton type="success" round>我是按钮</ElButton>
    <ElButton type="danger" round>我是按钮</ElButton>
    <ElButton type="warning" round>我是按钮</ElButton>

    <br>
    <br>
    <h1>Button 组件示例： 朴素按钮</h1>
    <ElButton plain>我是按钮</ElButton>
    <ElButton type="primary" plain>我是按钮</ElButton>
    <ElButton type="success" plain>我是按钮</ElButton>
    <ElButton type="danger" plain>我是按钮</ElButton>
    <ElButton type="warning" plain>我是按钮</ElButton>

    <br>
    <br>
    <h1>Button 组件示例： 禁用状态</h1>
    <ElButton disabled>我是按钮</ElButton>
    <ElButton type="primary" disabled>我是按钮</ElButton>
    <ElButton type="success" disabled>我是按钮</ElButton>
    <ElButton type="danger" disabled>我是按钮</ElButton>
    <ElButton type="warning" disabled>我是按钮</ElButton>
  </div>

  <br>
    <br>
    <h1>Button 组件示例： loading按钮</h1>
    <ElButton loading>我是按钮</ElButton>
    <ElButton type="primary" loading>我是按钮</ElButton>
    <ElButton type="success" loading>我是按钮</ElButton>
    <ElButton type="danger" loading>我是按钮</ElButton>
    <ElButton type="warning" loading>我是按钮</ElButton>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  name: 'Button',
  components: { ElButton: Button }
}
</script>