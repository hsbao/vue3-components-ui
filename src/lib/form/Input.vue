<template>
  <div
    :class="{
      'cmp-input': type !== 'textarea',
      'cmp-textarea': type === 'textarea',
    }"
  >
    <input
      v-if="type !== 'textarea'"
      class="cmp-input__inner"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      :maxlength="maxlength"
      :minlength="minlength"
      :class="classes"
      @input="input"
      @change="change"
      @blur="blur"
      @focus="focus"
    />

    <textarea
      v-if="type === 'textarea'"
      class="el-textarea__inner"
      :value="value"
      :rows="rows"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled"
      :maxlength="maxlength"
      :minlength="minlength"
      :class="classes"
      @input="input"
      @change="change"
      @blur="blur"
      @focus="focus"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
  name: 'Input',
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '请输入内容',
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: String,
    },
    minlength: {
      type: String,
    },
    rows: {
      type: Number,
      default: 2,
    },
  },
  setup(props, context) {
    const classes = computed(() => {
      return {
        'is-disabled': props.disabled,
      }
    })
    const input = (e) => {
      context.emit('update:value', e.target.value)
    }
    const change = (e) => {
      const val = e.target.value
      context.emit('update:value', val)
      context.emit('change', val)
    }
    const focus = (e) => {
      context.emit('focus', e)
    }
    const blur = (e) => {
      context.emit('blur', e)
    }
    return {
      classes,
      input,
      change,
      focus,
      blur,
    }
  },
}
</script>

<style lang="scss">
$height: 40px;
$color: #606266;
$border-color: #dcdfe6;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 14px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$error-color: #f1453d;
$primary-color: #409eff;

@mixin is-disabled {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}

@mixin focus {
  outline: none;
  border-color: $primary-color;
}

.cmp-input {
  position: relative;
  width: 180px;
  display: inline-block;
  font-size: $font-size;
  color: $color;

  .cmp-input__inner {
    width: 100%;
    -webkit-appearance: none;
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 15px;
    font-size: inherit;
    color: $color;
    outline: none;
    background: transparent;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    &::-webkit-input-placeholder {
      color: $color;
      font-size: $font-size;
    }
    &.is-disabled {
      @include is-disabled();
    }
    &:focus {
      @include focus();
    }
  }
}
.cmp-textarea {
  position: relative;
  display: inline-block;
  width: 414px;
  vertical-align: bottom;
  font-size: $font-size;
  .el-textarea__inner {
    outline: none;
    display: block;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    color: $color;
    background-color: #fff;
    background-image: none;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    &:focus {
      @include focus();
    }
    &.is-disabled {
      @include is-disabled();
    }
    &::-webkit-input-placeholder {
      color: $color;
      font-size: $font-size;
    }
  }
}
</style>
