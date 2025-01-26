<script setup lang="ts">
  import Header from "~/components/Header.vue";
  import Heading from "~/components/Heading.vue";
  import Form from "~/components/Form.vue";
</script>

<template>
  <Header/>
  <section class="portfolio section-mb">
    <div class="container-main">
      <div class="portfolio__content">
        <Heading level="h1">О проекте</Heading>
        <div class="text">
          <p>Для компании ONLY WINE нами был разработан интернет-магазин. Цель которого была открыть новый канал продаж, для реализации продукции онлайн. Также нам необходимо было существенно выделить сайт уже среди имеющихся конкурентов.</p>
          <p>Детально проработанная структура страниц, удобный личный кабинет, функциональная корзина и быстрое оформление заказа - все это помогло сделать интернет-магазин не только эргономичным, но и удобным для пользователя. Нейтральный фон, использованный в оформлении сайта, дает возможность успешно выделить продукцию и необходимый информационный посыл. Все поставленные перед нами задачи были выполнены в полном объеме, о чем свидетельствует текущая конверсия сайта и другие рекламные показатели ☝️</p>
          <p><b>Тип сайта:</b> интернет магазин</p>
          <p><b>Задача:</b> Разработка сайта для открытия нового канала продаж</p>
        </div>
      </div>
      <div class="portfolio__main">
        <img class="portfolio__img portfolio__img--1" src="/public/images/portfolio-1.jpg" alt="">
        <img class="portfolio__img" src="/public/images/portfolio-2.jpg" alt="">
        <img class="portfolio__img" src="/public/images/portfolio-3.jpg" alt="">
        <img class="portfolio__img" src="/public/images/portfolio-4.jpg" alt="">
      </div>
      <div class="portfolio__action">
        <video muted playsinline autoplay loop class="portfolio__decor">
          <source src="/public/videos/contact-anim.mp4" type="video/mp4"></source>
        </video>
        <Form
            title="ГОТОВЫ ЗАКАЗАТЬ УСЛУГИ?"
            text="Заполните форму и с вами сконтактирует наш специалист"
            customClasses="portfolio__form"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>