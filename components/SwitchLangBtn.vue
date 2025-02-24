<template>
  <div class="lang-switcher">
    <button @click="toggleDropdown" class="lang-switcher__btn">
      {{ languages[modelValue] }}
      <svg class="lang-switcher__icon svg-ico svg-ico_no-fill">
        <use xlink:href="#chevron_right"></use>
      </svg>
    </button>
    <div v-if="isOpen" class="lang-switcher__dropdown">
      <ul class="lang-switcher__list">
        <li v-for="(label, code) in filteredLanguages" :key="code" class="lang-switcher__item">
          <button @click="changeLanguage(code)" class="lang-switcher__option">
            {{ label }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: String,
  languages: Object
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);

const filteredLanguages = computed(() => {
  return Object.fromEntries(Object.entries(props.languages).filter(([code]) => code !== props.modelValue));
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const changeLanguage = (code) => {
  emit('update:modelValue', code);
  isOpen.value = false;
};
</script>

<style scoped>
button:focus {
  outline: none;
}
</style>
