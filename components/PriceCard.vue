<script lang="ts">
import Heading from '~/components/Heading'

export default {
  name: "PriceCard",
  components: {
    Heading
  },
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    deadlines: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    productId: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      default: "ЗАКАЗАТЬ"
    },
    buttonColor: {
      type: String,
      default: "white"
    },
    buttonFullWidth: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<template>
  <div class="price-card">
    <Heading level="h6">{{title}}</Heading>
    <p class="price">{{ price }}</p>
    <div class="deadlines">{{ deadlines }}</div>
    <p>{{ description }}</p>
    <Button type="link" :href="`/services/${productId}`" :color="buttonColor" :fullWidth="buttonFullWidth" customClass="z-btn_style_default z-btn_sm price-card__btn">{{ buttonText }}</Button>
  </div>
</template>
