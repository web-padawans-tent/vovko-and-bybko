<script setup>
  import Header from "~/components/Header.vue";
  import Heading from "~/components/Heading.vue";
  import ContactForm from "~/components/ContactForm.vue";
</script>

<template>
  <Header />
  <section class="contact">
    <div class="container-main">
      <Heading level="h1" customClasses="contact__title">КОНТАКТЫ</Heading>
      <ul class="contact__list">
        <li class="contact__list-item">
          <Heading level="h6" customClasses="contact__list-title">Телефон</Heading>
          <p>(000)-000-00-00</p>
        </li>
        <li class="contact__list-item">
          <Heading level="h6" customClasses="contact__list-title">График работы</Heading>
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
          <Heading level="h6" customClasses="contact__list-title">Почта</Heading>
          <a href="mailto:vovko.and.bybko@gmail.com">vovko.and.bybko@gmail.com</a>
        </li>
      </ul>
      <ContactForm customClass="contact__form"/>
    </div>
  </section>
</template>
