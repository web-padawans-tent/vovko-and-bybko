<script>
import { useForm, useField } from 'vee-validate';
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
  },
  setup() {
    const { handleSubmit, resetForm } = useForm();

    const { value: name, errorMessage: nameError } = useField('name', (val) => {
      if (!val) return 'Введите имя';
      if (val.length < 2) return 'Слишком короткое имя';
      return true;
    });

    const { value: email, errorMessage: emailError } = useField('email', (val) => {
      if (!val) return 'Введите email';
      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val)) return 'Некорректный email';
      return true;
    });

    const { value: social, errorMessage: socialError } = useField('social', (val) => {
      if (!val) return 'Введите ваш Telegram';
      if (!/^@\w+$/.test(val)) return 'Некорректный Telegram (@username)';
      return true;
    });

    const { value: message, errorMessage: messageError } = useField('message', (val) => {
      if (!val) return 'Введите описание заказа';
      if (val.length < 10) return 'Описание слишком короткое';
      return true;
    });

    const onSubmit = handleSubmit(values => {
      console.log('Форма отправлена:', values);

      resetForm();
    });

    return {
      name,
      nameError,
      email,
      emailError,
      social,
      socialError,
      message,
      messageError,
      onSubmit
    };
  }
};
</script>


<template>
  <form action="/" :class="['form', customClasses]" title="" @submit.prevent="onSubmit">
    <Heading level="h3" customClasses="mb-3">{{ title }}</Heading>
    <p v-if="text" class="mb-3">{{ text }}</p>
    <FormField id="name" v-model="name" placeholder="Имя" customClass="mb-2" :error="nameError" />
    <FormField id="email" type="email" v-model="email" placeholder="Email" customClass="mb-2" :error="emailError" />
    <FormField id="social" v-model="social" placeholder="Ваш Telegram" customClass="mb-2" :error="socialError" />
    <FormField id="message" type="textarea" v-model="message" placeholder="Описание Заказа" customClass="mb-2" :error="messageError" />
    <Button type="submit" color="green" customClass="z-btn_style_default z-btn_md m-auto mt-1">ОТПРАВИТЬ</Button>
  </form>
</template>
