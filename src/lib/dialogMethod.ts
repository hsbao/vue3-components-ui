import { createApp, h } from 'vue'
import Dialog from './Dialog.vue'

export const show = (options) => {
  const { visible, title = '标题', content, top = '15vh', width = '50%', ok, cancel } = options

  const div = document.createElement('div')
  document.body.appendChild(div)

  // 关闭的时候销毁组件和移除创建的元素
  const close = () => {
    app.unmount()
    div.remove()
  }

  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible,
          top,
          width,

          // 在组件内如果实现了emit('update:visible', false) 
          // 然后可以这种方法监听dialog的visible
          'onUpdate:visible': (newVisible) => { 
            if (newVisible === false) {
              close()
            }
          },
          ok,
          cancel
        },
        {
          title,
          content,
        }
      )
    },
  })
  app.mount(div)
}

export default { show }