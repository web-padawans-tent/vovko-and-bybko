<script setup lang="ts">
import { ref } from 'vue';
const route = useRoute();

console.log(route.path)

const isHeaderOpacity = computed(() => route.path === "/portfolios/")

const strapiStore = useStrapiStore()
const modalStore = useModalStore();

const endpoints: Endpoint[] = [
  { key: 'services', path: 'services', options: { populate: '*' } },
];

const { computedData } = useFetchData(endpoints);

const services = computedData.services;

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
  <header class="header" :class="{'bg-black' : !isHeaderOpacity}">
    <div class="container mx-auto">
      <div class="header__main">
        <Logo :custom-classes="[ 'w-full', 'md:w-auto']"/>

        <nav class="header__nav ml-auto">
          <ul class="header__nav-list">
            <li class="relative" v-for="(item, index) in strapiStore.menuTops" :key="index"
                @mouseover="item.link.includes('/services') && openModal('subMenu'); clearTimeOut"
                @mouseleave="closeModal">
              <a :href="item.link" class="text-xl flex items-center gap-2 text-white">
                {{ item.title }}
                <svg v-if="item.svg" class="w-4 h-4 fill-white">
                  <use :xlink:href="`#${item.svg}`"></use>
                </svg>
              </a>
              <sub-menu :items="services" v-if="item.link.includes('/services')"/>
            </li>
          </ul>
          <Button @click="openModal('form-contact')" color="purple" class="z-btn_style_default z-btn_md z-btn_glow">ОСТАВИТЬ ЗАЯВКУ</Button>
        </nav>
        <button type="button" @click="toggleMenu" :class="{'header__menu-btn': true, 'header__menu-btn--active': isMenuOpen}">
          <span></span>
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

