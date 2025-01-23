<script>
import Title from "~/components/Title.vue";
import Button from "~/components/Button.vue";

export default {
  name: "Footer",
  components: {
    Title,
    Button
  }
};
</script>

<template>
  <footer class="footer">
    <div class="container-main">
      <div class="footer__main">
        <div class="footer__col">
          <div class="z-logo flex gap-3 items-center mb-2">
            <img class="max-w-10" src="/public/images/Logo.png" alt="logo"/>
            <span class="header__title text-white text-xl">
              Vovko & Bybko Studio
            </span>
          </div>
          <p>Мы любим то что делаем, поэтому каждый проект для нас лучший!</p>
        </div>
        <div class="footer__col">
          <Title level="h6" customClasses="mb-2">УСЛУГИ</Title>
          <ul class="footer__list">
            <li class="footer__list-item">
              <a href="#" class="footer__list-link">Лендинг</a>
            </li>
            <li class="footer__list-item">
              <a href="#" class="footer__list-link">Сайт визитка</a>
            </li>
            <li class="footer__list-item">
              <a href="#" class="footer__list-link">Корпоративный сайт</a>
            </li>
            <li class="footer__list-item">
              <a href="#" class="footer__list-link">Интернет магазин</a>
            </li>
          </ul>
        </div>
        <div class="footer__col">
          <Title level="h6" customClasses="mb-2">О КОМПАНИИ</Title>
          <ul class="footer__list">
            <li class="footer__list-item">
              <a href="#" class="footer__list-link">Портфолио</a>
            </li>
            <li class="footer__list-item">
              <a href="#" class="footer__list-link">О нас</a>
            </li>
            <li class="footer__list-item">
              <a href="#" class="footer__list-link">Контакты</a>
            </li>
          </ul>
        </div>
        <div class="footer__col">
          <Title level="h6" customClasses="mb-2">ОСТАЛИСЬ ВОПРОСЫ?</Title>
          <Button color="purple" :fullWidth="true">ОСТАВИТЬ ЗАЯВКУ</Button>
        </div>
      </div>
      <p class="text-center">© 2024 Vovko & Bybko Studio сделано с ❤️</p>
    </div>
  </footer>
</template>