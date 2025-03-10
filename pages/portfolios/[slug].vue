<script setup lang="ts">
  const route = useRoute()

  const endpoints: Endpoint[] = [
    { key: 'portfolio', path: 'portfolios', options: { populate: '*', filters: { slug: `${route.params.slug}` } }, method: 'findOne' },
  ];

  const { computedData } = useFetchData(endpoints);

  const portfolio = computedData.portfolio;
</script>

<template>
  <section class="portfolio section">
    <div class="container-main">
      <div class="portfolio__content">
        <Heading level="h1">О проекте</Heading>
        <div class="text">
          <template v-if="portfolio">
            <p v-for="(item, index) in portfolio?.text" :key="index">{{ item.children[0].text }}</p>
            <p><b>Тип сайта:</b>{{ portfolio.siteType }}</p>
            <p><b>Задача:</b>{{ portfolio.tasks }}</p>
          </template>
        </div>
      </div>
      <div class="portfolio__main">
        <template v-if="portfolio" v-for="(item, index) in portfolio?.images" :key="index">
          <img
            class="portfolio__img"
            :class="{'portfolio__img--1': index === 0}"
            :src="'http://localhost:1337' + item.url"
            alt=""
          />
        </template>
      </div>
      <ContactForm customClass="portfolio__action" />
    </div>
  </section>
</template>
