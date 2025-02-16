<script lang="ts">
import Button from "~/components/Button.vue";
import Heading from "~/components/Heading.vue";
import { useModalStore } from "~/stores/modalStore";
import {findOne} from "domutils";

export default {
  name: "Footer",
  components: {
    Heading,
    Button,
  },
  data() {
    return {
      menuServices: [],
      about: [],
      socials: [],
      texts: [
        {
          textLogo: "Vovko & Bybko Studio",
          textLove: "© 2024 Vovko & Bybko Studio сделано с ❤️",
        },
      ],
    };
  },
  methods: {
    openModal(modalName: string) {
      const modalStore = useModalStore();
      modalStore.openModal(modalName);
    },
  },
  async created() {
    try {
      const { find, findOne } = useStrapi();
      const { data : response } = await findOne('menu-bottoms', { populate: '*' });
      this.menuServices = response[0].services || [];
      this.about = response[0].menuLinksAbout || [];
      this.socials = response[0].menuLinksSocials || [];
    } catch (error) {
      console.error('Ошибка загрузки навигации:', error);
    }
  }
};
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
            <li class="footer__list-item" v-for="(item, i) in menuServices" :key="i">
              <a :href="'/products/' + item.slug">{{ item.title }}</a>
            </li>
          </ul>
        </div>
        <div class="footer__col">
          <Heading level="h6" customClasses="mb-2">О КОМПАНИИ</Heading>
          <ul class="footer__list">
            <li class="footer__list-item" v-for="(item, i) in about" :key="i">
              <a :href="item.link">{{ item.name }}</a>
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
              <a :href="item.link">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      <p class="text-center">{{ texts[0].textLove }}</p>
    </div>
  </footer>
</template>
