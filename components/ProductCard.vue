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
    slug: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <div class="product-card">
    <a :href="`/portfolios/${slug}`" class="product-card__img-wrapper">
      <img :src="'http://localhost:1337' + imageUrl"  :alt="title" class="product-card__img" />
    </a>
    <div class="product-card__content">
      <div>
        <a :href="`/portfolios/${slug}`">
          <Heading level="h6">{{ title }}</Heading>
        </a>
        <p class="product-card__category">{{ category }}</p>
      </div>
      <a :href="`/portfolios/${slug}`" class="product-card__link">
        <svg class="product-card__link-icon">
          <use xlink:href="#arrow_down_right"></use>
        </svg>
      </a>
    </div>
  </div>
</template>
