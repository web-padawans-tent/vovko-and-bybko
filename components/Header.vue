<script setup lang="ts">
import { ref } from 'vue';

const strapiStore = useStrapiStore()

const modalStore = useModalStore();

const isMenuOpen = ref(false);
const isDesktop = ref(false);

const openModal = (modalName: string) => {
  modalStore.openModal(modalName);
};

const closeModal = () => {
  modalStore.closeModal();
};

const clearTimeOut = () => {
  modalStore.clearTimeOut();
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const updateScreenSize = () => {
  isDesktop.value = window.innerWidth > 992;
};

onMounted(() => {
  updateScreenSize();
  window.addEventListener('resize', updateScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize);
});

</script>

<template>
  <header class="header bg-black">
    <div class="header__container container-main">
      <div class="header__main">
        <Logo :custom-classes="[ 'w-full', 'md:w-auto']"/>

        <!-- Меню навигации -->
        <nav class="header__nav ml-auto">
          <ul class="header__nav-list">
            <li class="relative" v-for="(item, index) in strapiStore.menuTops" :key="index"
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
        <button type="button" @click="toggleMenu" :class="{'header__menu-btn': true, 'header__menu-btn--active': isMenuOpen}">
        </button>
        <SwitchLangBtn v-if="isDesktop" />
      </div>
    </div>
    <nav :class="{'mobile-menu': true, 'mobile-menu--open': isMenuOpen}">
      <div class="mobile-menu__wrapper">
        <ul class="mobile-menu__list">
          <li class="mobile-menu__item" v-for="(item, index) in strapiStore.menuTops" :key="index">
            <a :href="item.link" class="mobile-menu__item-link">
              {{ item.title }}
            </a>
          </li>
        </ul>
        <SwitchLangBtn/>
      </div>
    </nav>
  </header>
</template>

