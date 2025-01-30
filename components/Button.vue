<script>
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
      return `z-btn_color_${this.color}`;
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
      :class="['z-btn', colorClass, customClass, { 'z-btn_full': fullWidth }]"
      @click="onClick"
  >
    <slot></slot>
  </button>
</template>

