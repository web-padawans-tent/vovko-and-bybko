<script lang="ts">
export default {
  name: "Heading",
  props: {
    level: {
      type: String,
      default: "h1",
      validator: (value) => ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value),
    },
    customClasses: {
      type: [String, Array, Object],
      default: "",
    },
  },
  computed: {
    tag() {
      return this.level;
    },
    sizeClass() {
      return `title--${this.level}`;
    },
  },
};
</script>

<template>
  <component
      :is="tag"
      :class="['title', sizeClass, customClasses]"
  >
    <slot></slot>
  </component>
</template>
