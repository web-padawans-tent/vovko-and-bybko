<script>
import { useForm, useField } from 'vee-validate';
import FormField from "~/components/FormField.vue";
import Button from "~/components/Button.vue";
import Heading from "~/components/Heading.vue";

export default {
  name: "PhoneForm",
  components: {
    Heading,
    Button,
    FormField
  },
  setup() {
    const { handleSubmit, resetForm } = useForm();

    const { value: phone, errorMessage: phoneError } = useField('phone', (val) => {
      if (!val) return 'Введите номер телефона';
      if (!/^\+?(380|7)\d{9}$/.test(val)) return 'Некорректный формат телефона';
      return true;
    });

    const onSubmit = handleSubmit(values => {
      console.log('Форма отправлена:', values);
      resetForm();
    });

    return {
      phone,
      phoneError,
      onSubmit
    };
  }
};
</script>

<template>
  <form action="/" class="consultation-form" @submit.prevent="onSubmit">
    <Heading level="h4" customClasses="consultation-form__title">
      Закажите <span>бесплатную</span> консультацию
    </Heading>
    <p class="consultation-form__text">Мы подберем вам оптимальное решение.</p>
    <FormField
      id="phone"
      type="tel"
      v-model="phone"
      placeholder="Введите номер телефона"
      customClass="consultation-form__input"
      :error="phoneError"
    />
    <Button color="purple" :fullWidth="true" type="submit" class="z-btn_style_default z-btn_md">
      ОСТАВИТЬ ЗАЯВКУ
    </Button>
  </form>
</template>
