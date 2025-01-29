<script lang="ts">

export default {
  name: 'ProductCard',
  components: {
  },
  props: {
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <div class="product-card">
    <img src="/assets/images/product.jpeg" :alt="title" class="product-card__img" />
    <div class="product-card__content">
      <div>
        <Heading level="h6">{{ title }}</Heading>
        <p class="product-card__category">{{ category }}</p>
      </div>
      <a :href="link" class="product-card__link">Подробнее</a>
    </div>
  </div>
</template>
