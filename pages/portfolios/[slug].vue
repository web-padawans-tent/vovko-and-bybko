<script setup>
  const route = useRoute()

  const { find, findOne } = useStrapi()

  const {data: portfolioData} = await find("portfolios/", {
    filters: { slug: `${route.params.slug}` },
    populate: "*",
  });

  const portfolio = portfolioData?.[0] || null;
</script>

<template>
  <section class="portfolio section">
    <div class="container-main">
      <div class="portfolio__content">
        <Heading level="h1">О проекте</Heading>
        <div class="text">
          <p v-for="(item, index) in portfolio?.text" :key="index">{{ item.children[0].text }}</p>
          <p><b>Тип сайта:</b>{{ portfolio.siteType }}</p>
          <p><b>Задача:</b>{{ portfolio.tasks }}</p>
        </div>
      </div>
      <div class="portfolio__main">
        <template v-for="(item, index) in portfolio?.images" :key="index">
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
