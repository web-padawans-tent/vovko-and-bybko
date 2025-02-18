<script>
export default {
  name: "FormField",
  props: {
    id: { type: String, required: true },
    type: {
      type: String,
      default: "text"
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    placeholder: { type: String, default: "" },
    error: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
    customClass: { type: String, default: "" }
  },
};
</script>

<template>
  <div class="form-field">
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :class="['form-field__input', customClass]"
      :disabled="disabled"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <p v-if="error" class="form-field__error">{{ error }}</p>
  </div>
</template>
