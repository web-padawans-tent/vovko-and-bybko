<script setup lang="ts">
import { ref } from 'vue';
import {useStrapiStore} from "~/stores/useStrapiStore";

const strapiStore = useStrapiStore()
await strapiStore.fetchMenuBottom()

const texts = ref([
  {
    textLogo: "Vovko & Bybko Studio",
    textLove: "© 2024 Vovko & Bybko Studio сделано с ❤️",
  }
]);
</script>

<template>
  <footer class="footer">
    <div class="container-main">
      <div class="footer__main">
        <div class="footer__col">
          <Logo customClasses="mb-2" />
        </div>
        <div class="footer__col">
          <Heading level="h6" customClasses="mb-2">УСЛУГИ</Heading>
          <ul class="footer__list">
            <li class="footer__list-item" v-for="(item, i) in strapiStore.menuBottoms[0].services" :key="i">
              <a :href="'/services/' + item.slug">{{ item.title }}</a>
            </li>
          </ul>
        </div>
        <div class="footer__col">
          <Heading level="h6" customClasses="mb-2">О КОМПАНИИ</Heading>
          <ul class="footer__list">
            <li class="footer__list-item" v-for="(item, i) in strapiStore.menuBottoms[0].menuLinksAbout" :key="i">
              <a :href="item.link">{{ item.name }}</a>
            </li>
          </ul>
        </div>
        <div class="footer__col">
          <Heading level="h6" customClasses="mb-2">МЫ ВСЕГДА НА СВЯЗИ</Heading>
          <ul class="footer__list">
            <li :class="['footer__list-item', 'flex', 'gap-2', 'items-center', item.extraClass]" v-for="(item, i) in strapiStore.menuBottoms[0].menuLinksSocials" :key="i">
              <svg v-if="item.svg" class="w-5 h-5 svg-ico svg-ico_no-stroke">
                <use :xlink:href="`#${item.svg}`"></use>
              </svg>
              <a :href="item.link">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      <p class="text-center">{{ texts[0].textLove }}</p>
    </div>
  </footer>
</template>
