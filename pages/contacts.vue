<script setup>
  const {data} = await useFetch("http://localhost:1337/api/contact");
  const contactData = data.value?.data;
</script>

<template>
  <section class="contact section">
    <div class="container-main">
      <Heading level="h1" customClasses="contact__title">{{ contactData?.title }}</Heading>
      <ul class="contact__list">
        <li class="contact__list-item">
          <Heading level="h6" customClasses="contact__list-title">Телефон</Heading>
          <p>{{ contactData?.phone }}</p>
        </li>
        <li class="contact__list-item">
          <Heading level="h6" customClasses="contact__list-title">График работы</Heading>
          <ul class="flex flex-col gap-1">
            <li>
              <p>пн-пт: <b>{{ contactData?.workTime }}</b></p>
            </li>
            <li>
              <p>сб-вс: <b>закрыто</b></p>
            </li>
          </ul>
        </li>
        <li class="contact__list-item">
          <Heading level="h6" customClasses="contact__list-title">Почта</Heading>
          <a href="mailto:vovko.and.bybko@gmail.com">{{ contactData?.mail }}</a>
        </li>
      </ul>
      <ContactForm customClass="contact__form"/>
    </div>
  </section>
</template>
