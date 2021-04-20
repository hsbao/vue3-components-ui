# 介绍

VUE3 LIB UI 是一款基于 Vue 3 和 TypeScript 的 UI 组件库

这个只是我个人学习 vue3 的时候写的 demo

所以强烈不建议你将此 UI 库用于生产环境。源代码放在了 [GitHub](https://github.com/hsbao/vue3-components-ui)。你也可以直接查看每个组件的源代码和示例

# 链接

[文档链接](https://hsbao.github.io/vue3-lib-ui/#/)

# 安装

在项目根目录下，打开终端运行下列命令：

```
npm install vue3-lib-ui
```

或

```
yarn add vue3-lib-ui
```

# 示例

```
import { Button, Tabs, Tab, Switch, Dialog } from 'vue3-lib-ui'
```

就可以使用我提供的组件了。

Button 代码示例：

```
<template>
  <div>
    <Button type="primary">按钮</Button>
  </div>
</template>
<script>
import { Button } from 'vue3-lib-ui'
import 'vue3-lib-ui/dist/lib/vue3-lib-ui.css' // 引入样式文件
export default {
  components: {
    Button
  }
}
</script>
```

Dialog 代码示例：

```
<template>
    <Button type="primary" @click="toggle">打开对话框</Button>

    <Dialog
      v-model:visible="visible"
      :confirmLoading="true"
      @ok="onClickOk"
      @cancel="onClickCancel"
    >
      <template v-slot:title>测试标题</template>
      <template v-slot:content>
        <p>内容1</p>
        <p>内容22333</p>
      </template>
    </Dialog>
</template>
<script>
import { ref } from 'vue'
import { Dialog, Button } from 'vue3-lib-ui'
import 'vue3-lib-ui/dist/lib/vue3-lib-ui.css' // 引入样式文件
export default {
  components: {
    Dialog,
    Button
  },
  setup() {
    const visible = ref(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    const onClickOk = () => {
      setTimeout(() => {
        visible.value = false
      }, 2000)
    }
    const onClickCancel = () => {
      console.log('close dialog')
    }
    return {
      visible,
      toggle,
      onClickOk,
      onClickCancel,
    }
  }
}
</script>
```
