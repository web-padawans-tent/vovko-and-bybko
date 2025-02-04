<template>
  <TextareaField
    :modelValue="text"
    id="example-textarea"
    placeholder="Введите текст..."
    label="Описание"
    :errorMessage="error"
    :showErrorIcon="true"
  />
</template>

<script setup>
  import TextareaField from '~/components/formFields/TextareaField.vue';
  import { ref } from 'vue';

  const text = ref('');
  const error = ref('');
</script>