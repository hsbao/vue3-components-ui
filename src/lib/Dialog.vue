<template>
  <!-- 使用teleport内置组件，把dialog挂载在body上 -->
  <teleport to='body'>
    <section class="cmp-dialog__wrapper" v-if="visible">
      <div class="cmp-modal" @click="closeOnModal"></div>
      <div class="cmp-dalog" :style="style">
        <!-- dialog header -->
        <div class="cmp-dialog__header">
          <slot name="title">
            <span>{{ title }}</span>
          </slot>
          <span class="cmp-dialog__close" @click="close">X</span>
        </div>

        <!-- dialog content -->
        <div class="cmp-dialog__body">
          <slot />
        </div>

        <!-- dialog footer -->
        <div class="cmp-dialog__footer">
          <slot name="footer">
            <ElButton @click="close">取消</ElButton>
            <ElButton type="primary" :loading="loading" :disabled="disabled" @click=ok>确定</ElButton>
          </slot>
        </div>
      </div>
    </section>
  </teleport>
</template>

<script lang="ts">
import { computed, ref, watchEffect } from 'vue'
import Button from './Button.vue'
export default {
  name: 'ElDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
      required: true
    },
    title: {
      type: String,
      default: '标题'
    },
    top: {
      type: String,
      default: '15vh'
    },
    width: {
      type: String,
      default: '50%'
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    confirmLoading: {
      type: Boolean,
      default: false
    }
  },
  components: {
    ElButton: Button
  },
  setup(props, context) {
    const { top, width, closeOnClickModal, confirmLoading } = props

    // 动态绑定style
    const style = computed(() => ({ marginTop: top, width }))

    // 控制确定按钮loading和disabled
    const loading = ref(false)
    const disabled = ref(false)

    // 点击确定按钮
    const ok = () => {
      if (confirmLoading) {
        loading.value = true
        disabled.value = true
      }
      context.emit('ok')
    }

    // 点击右上角关闭 / 点击取消按钮
    const close = () => {
      context.emit('cancel')
      context.emit('update:visible')
    }

    // 是否可以通过点击 modal 关闭 Dialog
    const closeOnModal = () => {
      closeOnClickModal && close()
    }

    // 监听dialog关闭
    watchEffect(() => {
      if (!props.visible) {
        loading.value = false
        disabled.value = false
      }
    })
    return {
      style,
      loading,
      disabled,
      ok,
      close,
      closeOnModal
    }
  }
}
</script>

<style lang="scss">
$font-color: #303133;

.cmp-dialog__wrapper {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2021;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  overflow: auto;

  > .cmp-modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  > .cmp-dalog {
    width: 50%;
    margin: 0 auto 50px;
    position: relative;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
    box-sizing: border-box;

    > .cmp-dialog__header {
      padding: 20px 20px 10px;
      line-height: 24px;
      font-size: 18px;
      color: $font-color;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .cmp-dialog__close {
        display: inline-block;
        width: 24px;
        height: 24px;
        text-align: right;
        color:$font-color;
        cursor: pointer;
      }
    }
    > .cmp-dialog__body {
      padding: 30px 20px;
      font-size: 14px;
      color: #606266;
      word-break: break-all;
    }
    > .cmp-dialog__footer {
      padding: 10px 20px 20px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
}
</style>