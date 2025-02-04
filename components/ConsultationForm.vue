<script>
import { useForm, useField } from 'vee-validate';
import FormField from "~/components/formFields/FormField.vue";
import PhoneInput from './formFields/PhoneInput.vue';
import Button from "~/components/Button.vue";
import Heading from "~/components/Heading.vue";

export default {
  name: "PhoneForm",
  components: {
    Heading,
    Button,
    FormField,
    PhoneInput
  },
  setup() {
    const { handleSubmit, resetForm } = useForm();

    const { value: phone, errorMessage: phoneError } = useField('phone', (val) => {
      if (!val) return 'Введите номер телефона';
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
