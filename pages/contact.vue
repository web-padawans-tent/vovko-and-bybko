<script setup>
  import Header from "~/components/Header.vue";
  import Heading from "~/components/Heading.vue";
  import FormField from "~/components/FormField.vue";
  import Button from "~/components/Button.vue";
</script>

<template>
  <Header />
  <section class="contact">
    <div class="container-main">
      <Heading level="h1" customClasses="contact__title">КОНТАКТЫ</Heading>
      <ul class="contact__list">
        <li class="contact__list-item">
          <Heading level="h5" customClasses="contact__list-title">Телефон</Heading>
          <p>(000)-000-00-00</p>
        </li>
        <li class="contact__list-item">
          <Heading level="h5" customClasses="contact__list-title">График работы</Heading>
          <ul class="flex flex-col gap-1">
            <li>
              <p>пн-пт: <b>9:00 - 20:00</b></p>
            </li>
            <li>
              <p>сб-вс: <b>закрыто</b></p>
            </li>
          </ul>
        </li>
        <li class="contact__list-item">
          <Heading level="h5" customClasses="contact__list-title">Почта</Heading>
          <a href="mailto:vovko.and.bybko@gmail.com">vovko.and.bybko@gmail.com</a>
        </li>
      </ul>
      <div class="contact__main">
        <video muted playsinline autoplay loop class="contact__decor">
          <source src="/public/videos/contact-anim.mp4" type="video/mp4"></source>
        </video>
        <form action="/" class="form contact__form">
          <Heading level="h3" customClasses="mb-3">ГОТОВЫ ЗАКАЗАТЬ УСЛУГИ?</Heading>
          <p class="mb-3">Заполните форму и с вами сконтактирует наш специалист</p>
          <FormField
              id="email"
              type="text"
              placeholder="Имя"
              customClass="mb-2"
          />
          <FormField
              id="email"
              type="email"
              placeholder="Email"
              customClass="mb-2"
          />
          <FormField
              id="email"
              type="text"
              placeholder="Ваш Telegram"
              customClass="mb-2"
          />
          <FormField
              id="email"
              type="textarea"
              placeholder="Описание Заказа"
              customClass="mb-2"
          />
          <Button color="green" customClass="ml-auto mt-1">ОТПРАВИТЬ</Button>
        </form>
      </div>
    </div>
  </section>
</template>
