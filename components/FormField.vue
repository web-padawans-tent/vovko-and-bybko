<script lang="ts">
export default {
  name: "FormField",
  props: {
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "text",
      validator: (value) => ["text", "phone", "email", "textarea"].includes(value)
    },
    value: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    error: {
      type: String,
      default: ""
    },
    rows: {
      type: Number,
      default: 3
    },
    maxlength: {
      type: Number,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    customClass: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      internalValue: this.value
    };
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
    }
  },
  watch: {
    value(newValue) {
      this.internalValue = newValue;
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
        v-model="internalValue"
        :placeholder="placeholder"
        :class="['form-field__input', customClass]"
        :rows="isTextarea ? rows : null"
        :maxlength="maxlength"
        :disabled="disabled"
        @input="$emit('input', internalValue)"
    ></component>
    <p v-if="error" class="form-field__error">{{ error }}</p>
  </div>
</template>
