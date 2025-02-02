<script>
  import {defineComponent} from 'vue'
  import {useModalStore} from "~/stores/modalStore";

  export default defineComponent({
    components: {},
    name: "header",
    data() {
      return {
        isMenuOpen: false,
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
      },
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
      },
      closeMenu() {
        this.isMenuOpen = false;
        document.body.style.overflow = '';
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
        <button type="button" @click="toggleMenu" class="header__menu-btn">
          <span class="block w-6 h-0.5 bg-white mb-2"></span>
          <span class="block w-6 h-0.5 bg-white mb-2"></span>
          <span class="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>
    </div>
  </header>
  <!-- Мобильное меню -->
  <div :class="{'mobile-menu': true, 'mobile-menu--open': isMenuOpen}">
    <button type="button" @click="closeMenu" class="mobile-menu__close"></button>
    <div class="mobile-menu__logo logo flex gap-3 items-center">
      <router-link to="/">
        <img class="logo__img max-w-10" src="/assets/images/Logo.png" alt="logo"/>
      </router-link>
      <router-link to="/">
        <span class="logo__text text-white text-xl">
          Vovko & Bybko Studio
        </span>
      </router-link>
    </div>
    <ul class="mobile-menu__list">
      <li class="mobile-menu__item" v-for="(item, index) in navItems" :key="index">
        <a :href="item.link" class="mobile-menu__item-link">
          {{ item.text }}
        </a>
        <svg v-if="item.svg" class="w-4 h-4 fill-white">
          <use :xlink:href="`#${item.svg}`"></use>
        </svg>
      </li>
    </ul>
  </div>
</template>

