<script setup>
const strapiStore = useStrapiStore()

await Promise.all([
  strapiStore.fetchHomeData(),
  strapiStore.fetchAllServiceData(),
]);

const {homeData, allServiceData} = strapiStore;
</script>

<template>
  <section class="section">
    <div class="container-main">
      <Heading level="h2" customClasses="mb-8 text-center">{{ homeData?.servicesTitle }}</Heading>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7">
        <template v-for="(item, index) in allServiceData" :key="index">
          <PriceCard
              :title="item.priceCard.title"
              :price="item.priceCard.price"
              :deadlines="item.priceCard.deadlines"
              :description="item.priceCard.descr"
              :productId="item.slug"
          />
        </template>
      </div>
    </div>
  </section>
</template>
