<script>
import { mask } from 'vue-the-mask';

export default {
  name: 'PhoneInput',
  directives: {
    mask
  },
  props: {
    id: { type: String, required: true },
    customClass: { type: String, default: "" },
    error: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
    modelValue: {
      type: [String, Number],
      default: ""
    }
  },
};
</script>

<template>
  <div class="form-field">
    <input
      :id="id"
      v-mask="'+380 (##) ###-##-##'"
      type="tel"
      placeholder="+49 (__) ___-__-__"
      :class="['form-field__input', customClass]"
      :disabled="disabled"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
  <p v-if="error" class="form-field__error">{{ error }}</p>
</template>
