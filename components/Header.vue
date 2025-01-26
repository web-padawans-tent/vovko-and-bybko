<script lang="ts">
import { defineComponent } from 'vue'
import { useModalStore } from "~/stores/modalStore";

export default defineComponent({
  components: {
  },
  name: "header",
  data() {
    return {
      navItems: [
        {
          "text": "Услуги",
          "link": "/services/",
          "svg": "arrow_down_right",
        },
        {
          "text": "Портфолио",
          "link": "/portfolio/",
        },
        {
          "text": "Компания",
          "link": "/about/",
        },
        {
          "text": "Контакты",
          "link": "/contacts/",
        },
      ]
    }
  },
  methods: {
    openModal() {
      const modalStore = useModalStore();
      modalStore.openModal();
    }
  }
})
</script>

<template>
  <header class="header bg-black p-3">
    <div class="header__container container-main">
      <div class="header__main mx-auto flex items-center">
      <!-- Логотип -->
      <div class="z-logo flex gap-3 items-center">
        <router-link to="/">
          <img class="max-w-10" src="/public/images/Logo.png" alt="logo"/>
        </router-link>

        <router-link to="/">
          <span class="header__title text-white text-xl">
            Vovko & Bybko Studio
          </span>
        </router-link>
      </div>

      <!-- Меню навигации -->
      <nav class="header__nav ml-auto">
        <ul class="flex space-x-6">
          <li class="flex items-center gap-2" v-for="(item, index) in navItems" :key="index">
            <a :href="item.link" class="text-xl text-white">
              {{ item.text }}
            </a>
            <svg v-if="item.svg" class="w-4 h-4 fill-white">
              <use :xlink:href="`#${item.svg}`"></use>
            </svg>
          </li>
        </ul>
        <Button @click="openModal" color="white">ОСТАВИТЬ ЗАЯВКУ</Button>
      </nav>

      <!-- Бургер-меню для мобильных устройств -->
      <div @click="toggleMenu" class="md:hidden cursor-pointer">
        <span class="block w-6 h-0.5 bg-white mb-2"></span>
        <span class="block w-6 h-0.5 bg-white mb-2"></span>
        <span class="block w-6 h-0.5 bg-white"></span>
      </div>
    </div>

    <!-- Мобильное меню -->
    <div v-if="menuOpen" class="md:hidden bg-blue-600 py-4">
      <ul class="flex flex-col items-center space-y-4">
        <li>
          <router-link to="/" class="hover:text-gray-300">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="hover:text-gray-300">About</router-link>
        </li>
        <li>
          <router-link to="/pages/contacts" class="hover:text-gray-300">Contact</router-link>
        </li>
      </ul>
    </div>
    </div>
  </header>
</template>

<style scoped>
.header__title {
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
}
</style>
