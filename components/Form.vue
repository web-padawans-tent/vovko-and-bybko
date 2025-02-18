<script>
import FormField from "~/components/formFields/FormField.vue";
import TextareaField from '~/components/formFields/TextareaField.vue';
import Checkbox from '~/components/formFields/Checkbox.vue';
import FileField from './formFields/FileField.vue';
import Button from "~/components/Button.vue";
import Heading from "~/components/Heading.vue";
import {useField, useForm} from "vee-validate";

export default {
  name: "Form",
  components: {
    Heading,
    Button,
    FormField,
    TextareaField,
    Checkbox,
    FileField
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

    const { value: aggree, errorMessage: aggreeError } = useField('aggree', (val) => {
      if (!val) return 'Вы должны согласиться с условиями';
      return true;
    });

    const { value: file } = useField('file');

    const onSubmit = handleSubmit( async ({name, email, social, message, file}) => {
      const formData = new FormData();
      formData.append("files", file);

      const uploadResponse = await fetch("http://localhost:1337/api/upload", {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadResponse.json();
      if (!uploadResponse.ok) throw new Error("Ошибка загрузки файла");

      const fileId = uploadData[0]?.id;

      await fetch("http://localhost:1337/api/feedbacks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            name,
            email,
            social,
            message: [{ type: "paragraph", children: [{ type: "text", text: message }] }],
            file: fileId,
          }
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          resetForm();
        })
        .catch(error => console.error("Ошибка загрузки:", error));
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
      aggree,
      aggreeError,
      file,
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
    <TextareaField id="message" v-model="message" placeholder="Описание Заказа" customClass="mb-2" :errorMessage="messageError" />
    <FileField id="file" v-model="file" :customClass="'mb-2'" />
    <Checkbox
      v-model="aggree"
      type="square"
      name="aggree"
      id="aggree"
      :isError="!!aggreeError"
      className="mb-2"
    >
      Согласие на обработку персональных данных
    </Checkbox>
    <Button type="submit" color="green" customClass="z-btn_style_default z-btn_md ml-auto">ОТПРАВИТЬ</Button>
  </form>
</template>
