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
  <header class="header bg-black p-3">
    <div class="header__container container-main">
      <div class="header__main mx-auto flex items-center">
        <!-- Логотип -->
        <div class="z-logo flex gap-3 items-center">
          <router-link to="/">
            <img class="max-w-10" src="/assets/images/Logo.png" alt="logo"/>
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
          <Button @click="openModal" color="purple" class="z-btn_style_default z-btn_md z-btn_glow">ОСТАВИТЬ ЗАЯВКУ</Button>
        </nav>

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
