<script setup>
const {findOne, find} = useStrapi()

const subdomain = window.location.hostname.split('.')[0];
const locales = { en: 'en', de: 'de', ru: '' };
const { data : example } = await find("/example", {populate: "*", locale: locales[subdomain]});

const endpoints = [
  {key: "home", path: "home", options: {populate: "*"}},
  {key: "priceCards", path: "products", options: {populate: "*", sort: 'id:asc'}},
];

const results = await Promise.all(
    endpoints.map(({path, options, method = "find"}) =>
        method === "findOne" ? findOne(path) : find(path, options)
    )
);

const data = Object.fromEntries(endpoints.map(({key}, index) => [key, results[index]?.data || null]));

const {home, priceCards} = data;
</script>

<template>
  <section class="section">
    <div class="container-main">
      <Heading level="h2" customClasses="mb-8 text-center">{{ home?.servicesTitle }}</Heading>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7">
        <template v-for="(item, index) in priceCards" :key="index">
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
