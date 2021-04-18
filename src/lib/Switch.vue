<template>
  <button :class="{checked: value}" @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">
export default {
  name: 'SwitchCmp',
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    return {
      toggle
    }
  },
}
</script>

<style lang="scss" scoped>
$height: 22px;
$height2: $height - 4px;
button {
  width: $height * 2;
  height: $height;
  position: relative;
  border-radius: $height / 2;
  background: grey;
  border: none;
  outline: none;

  span {
    position: absolute;
    left: 2px;
    top: 2px;
    width: $height2;
    height: $height2;
    background: #fff;
    border-radius: $height2 / 2;
    transition: all 0.25s;
  }

  &.checked {
    background: #1890ff;
  
    > span {
      left: calc(100% - #{$height2} - 2px);
    }
  }

  &:active {
    > span {
      width: $height2 + 8px;
    }
  }
  &.checked:active {
    > span {
      width: $height2 + 8px;
      margin-left: -8px;
    }
  }
}

</style>