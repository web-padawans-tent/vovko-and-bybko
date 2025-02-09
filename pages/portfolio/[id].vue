<script setup>
  const route = useRoute()

  const {data: portfolioData} = await useFetch(`http://localhost:1337/api/portfolios/${route.params.id}?populate=*`);
  const data = portfolioData.value?.data;
</script>

<template>
  <section class="portfolio section">
    <div class="container-main">
      <div class="portfolio__content">
        <Heading level="h1">О проекте</Heading>
        <div class="text">
          <p v-for="(item, index) in data?.text" :key="index">{{ item.children[0].text }}</p>
          <p><b>Тип сайта:</b>{{ data.siteType }}</p>
          <p><b>Задача:</b>{{ data.tasks }}</p>
        </div>
      </div>
      <div class="portfolio__main">
        <template v-for="(item, index) in data?.images" :key="index">
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