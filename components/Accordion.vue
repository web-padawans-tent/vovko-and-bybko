<script lang="ts">
export default {
  name: 'Accordion',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isActive: false,
      contentHeight: 0
    };
  },
  methods: {
    toggleAccordion() {
      this.isActive = !this.isActive;
    },
    onEnter(el) {
      el.style.maxHeight = el.scrollHeight + 'px';
    },
    onLeave(el) {
      el.style.maxHeight = el.scrollHeight + 'px';
      requestAnimationFrame(() => {
        el.style.maxHeight = '0';
      });
    }
  }
};
</script>

<template>
  <div class="accordion" :class="{ 'accordion--active': isActive }">
    <button
        type="button"
        class="accordion__trigger"
        @click="toggleAccordion">
      <span class="accordion__trigger-text">{{ title }}</span>
      <span class="accordion__trigger-icon" :class="{ 'accordion__trigger-icon--active': isActive }"></span>
    </button>
    <transition name="accordion" @enter="onEnter" @leave="onLeave">
      <div ref="content" class="accordion__content" v-if="isActive">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
