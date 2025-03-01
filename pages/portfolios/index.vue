<script setup>
const strapiStore = useStrapiStore()

await Promise.all([
  strapiStore.fetchHomeData(),
  strapiStore.fetchPortfolioData(),
]);

const {homeData, allPortfolioData} = strapiStore;
</script>

<template>
  <section class="section">
    <div class="container-main">
      <Heading level="h2" customClasses="mb-1 text-center">{{ homeData?.portfolioTitle }}</Heading>
      <p class="text-center mb-10">{{ homeData?.portfolioText }}</p>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7">
        <template v-for="(item, index) in allPortfolioData" :key="index">
          <ProductCard :title="item.projectName" :slug="item.slug" :category="item.siteType" :id="item.documentId" :imageUrl="item.promoImage.url" />
        </template>
      </div>
    </div>
  </section>
</template>
