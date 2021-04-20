<template>
  <button class="cmp-button" :class="classes">
    <span v-if="loading" class="cmp-button--loading"></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
  name: 'ElButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'normal',
    },
    round: {
      type: Boolean,
      default: false,
    },
    plain: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { type, size, round, plain, disabled } = props
    const classes = computed(() => {
      return {
        [`cmp-type--${type}`]: type,
        [`cmp-size--${size}`]: size,
        'is-round': round,
        'is-plain': plain,
        'is-disabled': disabled,
      }
    })
    return { classes }
  },
}
</script>

<style lang="scss">
$h: 36px;
$border-color: #d9d9d9;
$color: #333;
$radius: 4px;
$round: 20px;

$primary-color: #40a9ff;
$success-color: #67c23a;
$danger-color: #f56c6c;
$warning-color: #e6a23c;

@mixin btn-size {
  &.cmp-size--big {
    padding: 0 18px;
    height: 44px;
    font-size: 16px;
  }

  &.cmp-size--small {
    padding: 0 12px;
    height: 32px;
    font-size: 12px;
  }
}

@mixin is-round {
  &.is-round {
    border-radius: $round;
  }
}

@mixin is-loading($loading-color) {
  > .cmp-button--loading {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 6px;
    border-radius: 8px;
    border-color: $loading-color $loading-color $loading-color transparent;
    border-style: solid;
    border-width: 2px;
    animation: spin 1s infinite linear;
  }
}

@mixin is-plain($clr, $bg-clolr, $bd-color) {
  &.is-plain {
    color: $clr;
    background: $bg-clolr;
    border-color: $bd-color;
  }
}

@mixin hover-focus($bg-color) {
  &:hover,
  &:focus {
    background: $bg-color;
    border-color: $bg-color;
    color: #fff;
  }
}

@mixin is-disabled($bg-color) {
  &.is-disabled {
    cursor: not-allowed;
    background-image: none;
    background-color: $bg-color;
    border-color: $bg-color;
  }
}

.cmp-button {
  box-sizing: border-box;
  padding: 0 14px;
  width: auto;
  height: $h;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid $border-color;
  border-radius: $radius;
  color: $color;
  outline: none;
  background: #fff;
  box-shadow: 0 1px 0 fade-out(black, 0.9);
  white-space: nowrap;

  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $primary-color;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &::-moz-focus-inner {
    border: 0;
  }

  &.cmp-type--link {
    border-color: transparent;
    box-shadow: none;
    color: $primary-color;
    &:hover,
    &:focus {
      color: lighten($primary-color, 10%);
    }
  }

  &.cmp-type--text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  &.cmp-type--default {
    @include btn-size;
    @include is-round;
    @include is-loading($primary-color);
    &.is-disabled {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
  }

  &.cmp-type--primary {
    background: $primary-color;
    border-color: $primary-color;
    color: #fff;

    @include btn-size;
    @include is-round;
    @include is-plain($primary-color, #ecf5ff, #b3d8ff);
    @include hover-focus(#66b1ff);
    @include is-disabled(#a0cfff);
    @include is-loading(white);
  }

  &.cmp-type--success {
    color: #fff;
    background-color: $success-color;
    border-color: $success-color;

    @include btn-size;
    @include is-round;
    @include is-plain($success-color, #f0f9eb, #c2e7b0);
    @include hover-focus(#85ce61);
    @include is-disabled(#b3e19d);
    @include is-loading(white);
  }

  &.cmp-type--danger {
    color: #fff;
    background-color: $danger-color;
    border-color: $danger-color;

    @include btn-size;
    @include is-round;
    @include is-plain($danger-color, #fef0f0, #fbc4c4);
    @include hover-focus(#f78989);
    @include is-disabled(#fab6b6);
    @include is-loading(white);
  }

  &.cmp-type--warning {
    color: #fff;
    background-color: $warning-color;
    border-color: $warning-color;

    @include btn-size;
    @include is-round;
    @include is-plain($warning-color, #fdf6ec, #f5dab1);
    @include hover-focus(#ebb563);
    @include is-disabled(#f3d19e);
    @include is-loading(white);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>