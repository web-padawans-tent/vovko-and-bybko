<template>
  <div class="form-field">
    <textarea
        :id="id"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="['form-field__textarea', customClass]"
        ref="textareaRef"
        @input="handleInput"
    />
    <p v-if="errorMessage" class="form-field__error">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
  import { ref, watch, onMounted, defineProps } from 'vue';

  const props = defineProps({
    id: String,
    modelValue: String,
    placeholder: String,
    customClass: String,
    disabled: Boolean,
    errorMessage: String,
  });

  const emit = defineEmits(['update:modelValue']);
  const textareaRef = ref(null);

  const adjustHeight = () => {
    if (textareaRef.value) {
      textareaRef.value.style.height = 'auto';
      textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`;
    }
  };

  const handleInput = (event) => {
    emit('update:modelValue', event.target.value);
    adjustHeight();
  };

  watch(() => props.modelValue, adjustHeight);

  onMounted(() => {
    adjustHeight();
  });
</script>