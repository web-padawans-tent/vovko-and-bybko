<script setup>
import { useForm, useField } from 'vee-validate';


const { handleSubmit, resetForm } = useForm();


const { value: phone, errorMessage: phoneError } = useField('phone', (val) => {
  if (!val) return 'Введите номер телефона';
  return true;
});

const onSubmit = handleSubmit((values) => {
  console.log('Форма отправлена:', values);
  resetForm();
});
</script>

<template>
  <form action="/" class="consultation-form" title="" @submit.prevent="onSubmit">
    <Heading level="h4" customClasses="consultation-form__title">
      Закажите <span>бесплатную</span> консультацию
    </Heading>
    <p class="consultation-form__text">Мы подберем вам оптимальное решение.</p>
    <PhoneInput
      id="phone"
      v-model="phone"
      customClass="consultation-form__input"
      :error="phoneError"
    />
    <Button color="purple" :fullWidth="true" type="submit" class="z-btn_style_default z-btn_md">
      ОСТАВИТЬ ЗАЯВКУ
    </Button>
  </form>
</template>
