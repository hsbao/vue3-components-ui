<template>
  <div class="cmp-tabs">
    <div class="cmp-tabs-nav" ref="container">
      <div
        class="cmp-tabs-nav-item"
        v-for="(t, index) in titles"
        :ref="
          (el) => {
            if (t === selected) selectedItem = el
          }
        "
        @click="select(t)"
        :class="{ selected: t === selected }"
        :key="index"
      >
        {{ t }}
      </div>
      <div class="cmp-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="cmp-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import { computed, ref, watchEffect, onMounted, Component } from 'vue'

export default {
  name: 'ElTabs',
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)

    onMounted(() => {
      watchEffect(
        () => {
          const { width } = selectedItem.value.getBoundingClientRect()
          indicator.value.style.width = width + 'px'
          const { left: left1 } = container.value.getBoundingClientRect()
          const { left: left2 } = selectedItem.value.getBoundingClientRect()
          const left = left2 - left1
          indicator.value.style.left = left + 'px'
        },
        {
          flush: 'post',
        }
      )
    })

    const defaults = context.slots.default() // 获取插槽里所有的内容

    // slots.default()会返回所有slot，每一项是一个对象，对象上有type属性，这个对应的就是组件的数据
    defaults.forEach((tag) => {
      if ((tag.type as Component).name !== Tab.name) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    const current = computed(() => {
      return defaults.find((tag) => tag.props.title === props.selected)
    })
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    const select = (title: string) => {
      context.emit('update:selected', title)
    }

    return {
      titles,
      indicator,
      container,
      selectedItem,
      current,
      select,
    }
  },
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.cmp-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
