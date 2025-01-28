<script lang="ts">
import FormField from "~/components/FormField.vue";
import Button from "~/components/Button.vue";
import Heading from "~/components/Heading.vue";

export default {
  name: "Form",
  components: {
    Heading,
    Button,
    FormField
  },
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: ""
    },
    customClasses: {
      type: [String, Array, Object],
      default: "",
    },
  }
};
</script>

<template>
  <form action="/" :class="['form', customClasses]" title="">
    <Heading level="h3" customClasses="mb-3">{{ title }}</Heading>
    <p v-if="text" class="mb-3">{{ text }}</p>
    <FormField
        id="email"
        type="text"
        placeholder="Имя"
        customClass="mb-2"
    />
    <FormField
        id="email"
        type="email"
        placeholder="Email"
        customClass="mb-2"
    />
    <FormField
        id="email"
        type="text"
        placeholder="Ваш Telegram"
        customClass="mb-2"
    />
    <FormField
        id="email"
        type="textarea"
        placeholder="Описание Заказа"
        customClass="mb-2"
    />
    <Button color="green" customClass="z-btn_style_default z-btn_md m-auto mt-1">ОТПРАВИТЬ</Button>
  </form>
</template>
