<template>
  <div
    :class="['checkbox', className, {
      'checkbox--circle': type === 'circle',
      'checkbox--square': type === 'square',
      'checkbox--checked': isChecked,
      'checkbox--focused': isFocus,
      'checkbox--error': isError && !isChecked,
      'checkbox--disabled': disabled
    }]"
  >
    <div class="checkbox__box">
      <input
        ref="checkboxRef"
        type="checkbox"
        :id="id"
        :name="name"
        :disabled="disabled"
        class="checkbox__input"
        v-model="isChecked"  
        @focus="handleFocus"
        @blur="handleBlur"
        @click="handleClick"
        @change="handleChange"
      />
      <span class="checkbox__checkmark"></span>
    </div>
    <label
      :for="id"
      class="checkbox__label"
      @click="handleClick"
    >
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    type: {
      type: String,
      default: 'square',
    },
    className: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    isError: {
      type: Boolean,
      default: false,
    },
    modelValue: {  
      type: Boolean,
      default: false,
      required: true,
    },
    onClick: {
      type: Function,
      default: null,
    },
    onChange: {
      type: Function,
      default: null,
    },
    onBlur: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      isFocus: false,
      isChecked: this.modelValue,
    };
  },
  methods: {
    handleClick(e) {
      if (this.onChange) this.onChange(e);

      if (this.onClick) {
        this.onClick();
      }
    },
    handleFocus() {
      this.isFocus = true;
    },
    handleBlur(e) {
      this.isFocus = false;
      if (this.onBlur) this.onBlur(e);
    },
    handleChange(e) {
      this.$emit('update:modelValue', e.target.checked);
    },
  },
  watch: {
    modelValue(newValue) {
      this.isChecked = newValue;
    },
  },
};
</script>
