<template>
  <div class="product-card">
    <img src="/public/images/product.jpeg" :alt="title" class="product-card__img" />
    <div class="product-card__content">
      <div>
        <h3 class="product-card__title">{{ title }}</h3>
        <p class="product-card__category">{{ category }}</p>
      </div>
      <a :href="link" class="product-card__link">Подробнее</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
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
