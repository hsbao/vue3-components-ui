<template>
  <span class="cmp-tag" :class="classes">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
  name: 'Tag',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    effect: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const classes = computed(() => {
      return {
        [`cmp-tag--${props.type}`]: props.type,
        [`cmp-tag--${props.effect}`]: props.effect,
      }
    })

    return { classes }
  }
}
</script>

<style lang="scss">
$h: 30px;
$font-size: 12px;
$radius: 4px;
$white-color: #fff;
$primary-color: #40a9ff;
$success-color: #67c23a;
$danger-color: #f56c6c;
$warning-color: #e6a23c;

@mixin type-color($color, $bg, $border-color) {
  background: $bg;
  border: 1px solid $border-color;
  color: $color;
}

.cmp-tag {
  display: inline-block;
  height: $h;
  padding: 0 10px;
  line-height: $h;
  font-size: $font-size;
  border-radius: $radius;

  & + & {
    margin-left: 10px;
  }

  &.cmp-tag--primary {
    @include type-color($primary-color, #ecf5ff, #d9ecff);

    &.cmp-tag--dark {
      @include type-color($white-color, $primary-color, $primary-color);
    }

    &.cmp-tag--plain {
      @include type-color($primary-color, $white-color, #b3d8ff);
    }
  }
  &.cmp-tag--success {
    @include type-color($success-color, #f0f9eb, #e1f3d8);

    &.cmp-tag--dark {
      @include type-color($white-color, $success-color, $success-color);
    }

    &.cmp-tag--plain {
      @include type-color($success-color, $white-color, #c2e7b0);
    }
  }
  &.cmp-tag--danger {
    @include type-color($danger-color, #fef0f0, #fde2e2);

    &.cmp-tag--dark {
      @include type-color($white-color, $danger-color, $danger-color);
    }

    &.cmp-tag--plain {
      @include type-color($danger-color, $white-color, #fbc4c4);
    }
  }
  &.cmp-tag--warning {
    @include type-color($warning-color, #fdf6ec, #faecd8);

    &.cmp-tag--dark {
      @include type-color($white-color, $warning-color, $warning-color);
    }

    &.cmp-tag--plain {
      @include type-color($warning-color, $white-color, #f5dab1);
    }
  }
}
</style>