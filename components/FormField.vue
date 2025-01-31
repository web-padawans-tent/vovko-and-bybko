<script>
export default {
  name: "FormField",
  props: {
    id: { type: String, required: true },
    type: {
      type: String,
      default: "text",
      validator: (value) => ["text", "phone", "email", "textarea"].includes(value)
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    placeholder: { type: String, default: "" },
    error: { type: String, default: "" },
    rows: { type: Number, default: 3 },
    maxlength: { type: Number, default: null },
    disabled: { type: Boolean, default: false },
    customClass: { type: String, default: "" }
  },
  computed: {
    isInput() {
      return this.type !== "textarea";
    },
    isTextarea() {
      return this.type === "textarea";
    },
    inputType() {
      return this.isInput ? "input" : "textarea";
    },
    phoneMask() {
      return this.type === "phone" ? "+# (###) ###-##-##" : "";
    }
  }
};
</script>

<template>
  <div class="form-field">
    <component
      :is="inputType"
      :id="id"
      :type="isInput ? type : null"
      :placeholder="placeholder"
      :class="['form-field__input', customClass]"
      :rows="isTextarea ? rows : null"
      :maxlength="maxlength"
      :disabled="disabled"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-mask="phoneMask"
    ></component>
    <p v-if="error" class="form-field__error">{{ error }}</p>
  </div>
</template>
