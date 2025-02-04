<script lang="ts">
import Button from "~/components/Button.vue";
import Heading from "~/components/Heading.vue";
import { useModalStore } from "~/stores/modalStore";

export default {
  name: "Footer",
  components: {
    Heading,
    Button,
  },
  data() {
    return {
      menuServices: [
        { text: "Лендинг", link: "/landing/" },
        { text: "Сайт визитка", link: "/site-card/" },
        { text: "Корпоративный сайт", link: "/corporation-site/" },
        { text: "Интернет магазин", link: "/web-market/" },
      ],
      about: [
        { text: "Портфолио", link: "/portfolio/" },
        { text: "О нас", link: "/about/" },
        { text: "Контакты", link: "/contacts/" },
      ],
      socials: [
        { text: "Telegram", link: "href=\"https://t.me/zbybko\" target=\"_blank\"", svg: "telegram", extraClass: "footer__list-item_tg" },
        { text: "Email", link: "mailto:vovko.and.bybko@gmail.com", svg: "email", extraClass: "footer__list-item_email" },
        { text: "WhatsApp", link: "#", svg: "whatsapp", extraClass: "footer__list-item_wa" },
      ],
      texts: [
        {
          textLogo: "Vovko & Bybko Studio",
          textLove: "© 2024 Vovko & Bybko Studio сделано с ❤️",
        },
      ],
    };
  },
  methods: {
    openModal() {
      const modalStore = useModalStore();
      modalStore.openModal();
    },
  },
};
</script>

<template>
  <footer class="footer">
    <div class="container-main">
      <div class="footer__main">
        <div class="footer__col">
          <Logo customClasses="mb-2" />
          <div class="text max-w-[360px] m-auto">
            <p>
              Мы любим то что делаем, поэтому каждый проект для нас лучший!
            </p>
          </div>
        </div>
        <div class="footer__col">
          <Heading level="h6" customClasses="mb-2">УСЛУГИ</Heading>
          <ul class="footer__list">
            <li class="footer__list-item" v-for="(item, i) in menuServices" :key="i">
              <a :href="item.link">{{ item.text }}</a>
            </li>
          </ul>
        </div>
        <div class="footer__col">
          <Heading level="h6" customClasses="mb-2">О КОМПАНИИ</Heading>
          <ul class="footer__list">
            <li class="footer__list-item" v-for="(item, i) in about" :key="i">
              <a :href="item.link">{{ item.text }}</a>
            </li>
          </ul>
        </div>
        <div class="footer__col">
          <Heading level="h6" customClasses="mb-2">МЫ ВСЕГДА НА СВЯЗИ</Heading>
          <ul class="footer__list">
            <li :class="['footer__list-item', 'flex', 'gap-2', 'items-center', item.extraClass]" v-for="(item, i) in socials" :key="i">
              <svg v-if="item.svg" class="w-5 h-5 svg-ico svg-ico_no-stroke">
                <use :xlink:href="`#${item.svg}`"></use>
              </svg>
              <a :href="item.link">{{ item.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <p class="text-center">{{ texts[0].textLove }}</p>
    </div>
  </footer>
</template>
