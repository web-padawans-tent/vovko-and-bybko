<template>
  <div class="price-card">
    <Heading level="h6">{{title}}</Heading>
    <p class="price">{{ price }}</p>
    <div class="deadlines">Сроки: {{ deadlines }}</div>
    <p>{{ description }}</p>
    <Button :color="buttonColor" :fullWidth="buttonFullWidth" customClass="price-card__btn">{{ buttonText }}</Button>
  </div>
</template>

<script>
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