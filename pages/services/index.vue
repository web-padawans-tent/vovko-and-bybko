<script setup lang="ts">
  const endpoints: Endpoint[] = [
    { key: 'home', path: 'home', options: { populate: '*' } },
    { key: 'services', path: 'services', options: { populate: '*' } },
  ];

  const { computedData } = useFetchData(endpoints);

  const home = computedData.home;
  const services = computedData.services;
</script>

<template>
  <section class="section">
    <div class="container-main">
      <Heading level="h2" customClasses="mb-8 text-center">{{ home?.servicesTitle }}</Heading>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7">
        <template v-for="(item, index) in services" :key="index">
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
