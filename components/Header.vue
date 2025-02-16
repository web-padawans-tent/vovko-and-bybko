<script lang="ts">
import { defineComponent } from 'vue';
import { useModalStore } from '~/stores/modalStore';  // Путь к store
import SubMenu from '~/components/SubMenu.vue';


export default defineComponent<Component> ({
  name: 'Header',
  components: { SubMenu },
  data() {
    return {
      modalStore: useModalStore(),  // Pinia store
      isMenuOpen: false,
      navItems: [] as any[],
    };
  },
  methods: {
    openModal(modalName: string) {
      this.modalStore.openModal(modalName);
    },
    closeModal() {
      this.modalStore.closeModal();
    },
    clearTimeOut() {
      this.modalStore.clearTimeOut();
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    },
    closeMenu() {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    },
  },
  async created() {
    try {
      const { find } = useStrapi();
      const response = await find('menu-tops', { sort: 'sort:asc' });
      this.navItems = response.data || [];
    } catch (error) {
      console.error('Ошибка загрузки навигации:', error);
    }
  }
});

</script>

<template>
  <header class="header bg-black">
    <div class="header__container container-main">
      <div class="header__main">
        <Logo/>

        <!-- Меню навигации -->
        <nav class="header__nav ml-auto">
          <ul class="header__nav-list flex space-x-6">
            <li class="relative" v-for="(item, index) in navItems" :key="index"
                @mouseover="index === 0 && openModal('subMenu'); clearTimeOut"
                @mouseleave="closeModal">
              <a :href="item.link" class="text-xl flex items-center gap-2 text-white">
                {{ item.title }}
                <svg v-if="item.svg" class="w-4 h-4 fill-white">
                  <use :xlink:href="`#${item.svg}`"></use>
                </svg>
              </a>
              <sub-menu v-if="index === 0"/>
            </li>
          </ul>
          <Button @click="openModal('form-contact')" color="purple" class="z-btn_style_default z-btn_md z-btn_glow">ОСТАВИТЬ ЗАЯВКУ</Button>
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
  <nav :class="{'mobile-menu': true, 'mobile-menu--open': isMenuOpen}">
    <button type="button" @click="closeMenu" class="mobile-menu__close"></button>
    <Logo customClasses="mobile-menu__logo" />
    <ul class="mobile-menu__list">
      <li class="mobile-menu__item" v-for="(item, index) in navItems" :key="index">
        <a :href="item.link" class="mobile-menu__item-link">
          {{ item.text }}
        </a>
        <svg v-if="item.svg" class="w-4 h-4 fill-white">
          <use :href="`#${item.svg}`"></use>
        </svg>
      </li>
    </ul>
  </nav>
</template>

