<template>
  <div class="lang-switcher">
    <!-- desktop -->
    <template v-if="!isMobile">
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
    </template>

    <!-- mobile -->
    <template v-else>
      <div class="lang-switcher__buttons">
        <button
            v-for="(label, code) in filteredLanguages"
            :key="code"
            @click="changeLanguage(code)"
            class="lang-switcher__mobile-btn"
        >
          {{ label }}
        </button>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const languages = {
  en: "EN",
  de: "DE",
  ru: "RU",
};

const isOpen = ref(false);
const selectedLang = ref("en");
const isMobile = ref(false);

onMounted(() => {
  selectedLang.value = getCurrentLang();
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 991.98;
  console.log('work')
};

const getCurrentLang = () => {
  const subdomain = window.location.hostname.split(".")[0];
  return languages[subdomain] ? subdomain : "ru";
};

const changeLanguage = (lang) => {
  window.location.href = `http://${lang}.localhost:3000${window.location.pathname}`;
};

const filteredLanguages = computed(() => {
  return Object.fromEntries(Object.entries(languages).filter(([code]) => code !== selectedLang.value));
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};
</script>
