<script lang="ts">
import {defineComponent} from 'vue'
import {useModalStore} from "~/stores/modalStore";

export default defineComponent({
  components: {},
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
  <header class="header bg-black">
    <div class="header__container container-main">
      <div class="header__main">
      <!-- Логотип -->
      <div class="logo flex gap-3 items-center">
        <router-link to="/">
          <img class="logo__img max-w-10" src="/assets/images/Logo.png" alt="logo"/>
        </router-link>

        <router-link to="/">
          <span class="logo__text text-white text-xl">
            Vovko & Bybko Studio
          </span>
          </router-link>
        </div>

      <!-- Меню навигации -->
      <nav class="header__nav ml-auto">
        <ul class="header__nav-list flex space-x-6">
          <li class="flex items-center gap-2" v-for="(item, index) in navItems" :key="index">
            <a :href="item.link" class="text-xl text-white">
              {{ item.text }}
            </a>
            <svg v-if="item.svg" class="w-4 h-4 fill-white">
              <use :xlink:href="`#${item.svg}`"></use>
            </svg>
          </li>
        </ul>
        <Button @click="openModal" color="purple" class="z-btn_style_default z-btn_md z-btn_glow">ОСТАВИТЬ ЗАЯВКУ</Button>
      </nav>

      <!-- Бургер-меню для мобильных устройств -->
      <div @click="toggleMenu" class="header__menu-mobile">
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
          <router-link to="/pages/contact" class="hover:text-gray-300">Contact</router-link>
        </li>
      </ul>
    </div>
    </div>
  </header>
</template>

