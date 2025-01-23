<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close']);

const close = () => {
  emit('close');
};
</script>

<template>
<div v-if="isVisible" class="modal-overlay" @click.self="close">
  <div class="modal-content">
    <button @click="close" class="modal-close">
      <svg class="w-6 h-6 fill-black">
        <use xlink:href="#close"></use>
      </svg>
    </button>
  </div>
</div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
}
.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
