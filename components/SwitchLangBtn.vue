<template>
  <div class="lang-switcher">
    <button @click="toggleDropdown" class="lang-switcher__btn">
      {{ languages[selectedLang] }}
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
import {ref, computed, onMounted} from 'vue';

// Доступные языки
const languages = {
  en: "EN",
  de: "DE",
  ru: "RU",
};

// Открыт ли дропдаун
const isOpen = ref(false);

// Определяем текущий язык по поддомену
const selectedLang = ref("en");

onMounted(() => {
  selectedLang.value = getCurrentLang();
});

// Получение языка из поддомена
const getCurrentLang = () => {
  const subdomain = window.location.hostname.split(".")[0];
  return languages[subdomain] ? subdomain : "ru";
};

// Переключение языка
const changeLanguage = (lang) => {
  window.location.href = `http://${lang}.localhost:3000${window.location.pathname}`;
};

// Оставляем только языки, кроме текущего
const filteredLanguages = computed(() => {
  return Object.fromEntries(Object.entries(languages).filter(([code]) => code !== selectedLang.value));
});

// Открытие/закрытие дропдауна
const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>
