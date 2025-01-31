<script>
  import Form from "~/components/Form.vue";

  export default {
    name: 'ContactForm',
    components: {Form},
    props: {
      customClass: {
        type: [String, Array, Object],
        default: "",
      },
    },
  }
</script>

<template>
  <div :class="['contact-form', customClass]">
    <video muted playsinline autoplay loop class="contact-form__decor">
      <source src="/assets/videos/contact-anim.mp4" type="video/mp4">
    </video>
    <Form
        title="ГОТОВЫ ЗАКАЗАТЬ УСЛУГИ?"
        text="Заполните форму и с вами сконтактирует наш специалист"
        customClasses="max-w-[650px] ml-auto"
    />
  </div>
</template>

<style scoped>

</style>
