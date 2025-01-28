<script>
import Button from "~/components/Button.vue";
import Modal from "~/components/Modal.vue";
import Heading from "~/components/Heading.vue";


export default {
  name: "Footer",
  components: {
    Heading,
    Button,
    Modal,
  },
  data() {
    return {
      menuServices: [
        {
          "text": "Лендинг",
          "link": "/landing/",
        },
        {
          "text": "Сайт визитка",
          "link": "/site-card/",
        },
        {
          "text": "Корпоративный сайт",
          "link": "/corporation-site/",
        },
        {
          "text": "Интернет магазин",
          "link": "/web-market/",
        },
      ],
      about: [
        {
          "text": "Портфолио",
          "link": "/portfolio/",
        },
        {
          "text": "О нас",
          "link": "/about/",
        },
        {
          "text": "Контакты",
          "link": "/contacts/",
        }
      ],
      texts: [
        {
          "textUnder": "Мы любим то что делаем, поэтому каждый проект для нас лучший!",
          "textLogo": "Vovko & Bybko Studio",
          "textLove": "© 2024 Vovko & Bybko Studio сделано с ❤️"
        }
      ]
    }
  }

};
</script>

<template>
  <footer class="footer">
    <div class="container-main">
      <div class="footer__main">
        <div class="footer__col">
          <div class="logo flex gap-3 items-center mb-2">
            <img class="max-w-10" src="/public/images/Logo.png" alt="logo"/>
            <span class="header__title text-white text-xl">
              {{ texts[0].textLogo }}
            </span>
          </div>
          <p>{{ texts[0].textUnder }}</p>
        </div>
        <div class="footer__col">
          <Heading level="h6" customClasses="mb-2">УСЛУГИ</Heading>
          <ul class="footer__list">
            <li class="footer__list-item" v-for="(item, i) in menuServices" :key="i">
              <a :href=item.link class="footer__list-link">{{ item.text }}</a>
            </li>
          </ul>
        </div>
        <div class="footer__col">
          <Heading level="h6" customClasses="mb-2">О КОМПАНИИ</Heading>
          <ul class="footer__list">
            <li class="footer__list-item" v-for="(item, i) in about" :key="i">
              <a :href=item.link class="footer__list-link">{{ item.text }}</a>
            </li>
          </ul>
        </div>
        <div class="footer__col">
          <Heading level="h6" customClasses="mb-2">ОСТАЛИСЬ ВОПРОСЫ?</Heading>
          <Button @click="showModal = true" color="purple">ОСТАВИТЬ ЗАЯВКУ</Button>
        </div>
      </div>
      <p class="text-center">{{ texts[0].textLove }}</p>
    </div>
  </footer>
</template>
