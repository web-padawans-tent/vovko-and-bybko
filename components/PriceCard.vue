<template>
  <div class="price-card">
    <h6 class="title title--h6">{{title}}</h6>
    <p class="price">{{ price }}</p>
    <div class="deadlines">Сроки: {{ deadlines }}</div>
    <p>{{ description }}</p>
    <Button :color="buttonColor" :fullWidth="buttonFullWidth" customClass="price-card__btn">{{ buttonText }}</Button>
  </div>
</template>

<script>
export default {
  name: "PriceCard",
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