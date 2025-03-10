<script setup lang="ts">
  const endpoints: Endpoint[] = [
    { key: 'home', path: 'home', options: { populate: '*' } },
    { key: 'portfolio', path: 'portfolios', options: { populate: '*' } },
  ];

  const { computedData } = useFetchData(endpoints);

  const home = computedData.home;
  const portfolio = computedData.portfolio;
</script>

<template>
  <section class="section">
    <div class="container-main">
      <Heading level="h2" customClasses="mb-1 text-center">{{ home?.portfolioTitle }}</Heading>
      <p class="text-center mb-10">{{ home?.portfolioText }}</p>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7">
        <template v-for="(item, index) in portfolio" :key="index">
          <ProductCard :title="item.projectName" :slug="item.slug" :category="item.siteType" :id="item.documentId" :imageUrl="item.promoImage.url" />
        </template>
      </div>
    </div>
  </section>
</template>
