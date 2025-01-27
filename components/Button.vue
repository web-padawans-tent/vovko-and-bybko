<script lang="ts">
export default {
  name: "Button",
  props: {
    color: {
      type: String,
      default: "transparent",
      validator: (value) => ["transparent", "green", "purple", "white"].includes(value),
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    customClass: {
      type: [String, Array, Object],
      default: "",
    },
  },
  computed: {
    colorClass() {
      return `btn--${this.color}`;
    },
  },
  methods: {
    onClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>

<template>
  <button
      :class="['btn', colorClass, customClass, { 'btn--full': fullWidth }]"
      @click="onClick"
  >
    <slot></slot>
  </button>
</template>

