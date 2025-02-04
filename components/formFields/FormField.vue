<script>
export default {
  name: "FormField",
  props: {
    id: { type: String, required: true },
    type: {
      type: String,
      default: "text",
      validator: (value) => ["text", "phone", "email"].includes(value)
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    placeholder: { type: String, default: "" },
    error: { type: String, default: "" },
    maxlength: { type: Number, default: null },
    disabled: { type: Boolean, default: false },
    customClass: { type: String, default: "" }
  },
  computed: {
    phoneMask() {
      return this.type === "phone" ? "+# (###) ###-##-##" : "";
    }
  }
};
</script>

<template>
  <div class="form-field">
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :class="['form-field__input', customClass]"
      :maxlength="maxlength"
      :disabled="disabled"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-mask="phoneMask"
    />
    <p v-if="error" class="form-field__error">{{ error }}</p>
  </div>
</template>
