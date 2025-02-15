<script lang="ts">
  const route = useRoute()

  const {data: productData} = await useFetch(`http://localhost:1337/api/products/${route.params.id}?populate=*`);
  const data = productData.value?.data;

  const {data: benefitsData} = await useFetch(`http://localhost:1337/api/products/${route.params.id}?populate=benefits.list`);
  const {benefits} = benefitsData.value?.data;

  const {data: stepsData} = await useFetch(`http://localhost:1337/api/products/${route.params.id}?populate=steps.list`);
  const {steps} = stepsData.value?.data;

  const {data: faqData} = await useFetch(`http://localhost:1337/api/products/${route.params.id}?populate=faq.list`);
  const {faq} = faqData.value?.data;

  const {data: formData} = await useFetch("http://localhost:1337/api/contact-form");
  const form = formData.value?.data;
</script>

<template>
  <section class="promo section">
    <div class="promo__container container-main">
      <div class="promo__content">
        <Heading level="h1" customClasses="mb-1">{{ data.title }}</Heading>
        <Heading level="h4" customClasses="mb-2">{{ data.subtitle }}</Heading>
        <div class="text mb-7">
          <p v-for="(item, index) in data?.text" :key="index">{{ item.children[0].text }}</p>
        </div>
        <Button color="purple" @click="openModal('form-application')" class="z-btn_style_default z-btn_md">ОСТАВИТЬ ЗАЯВКУ</Button>
      </div>
      <div class="promo__img">
        <img :src="'http://localhost:1337' + data.promoImage.url" alt="">
      </div>
    </div>
  </section>
  <section class="info section">
    <div class="info__container container-main">
      <div class="info__main">
        <div class="info__content">
          <Heading level="h2" customClasses="mb-5">{{ data.info.title }}</Heading>
          <div class="text">
            <p v-for="(item, index) in data.info.text" :key="index">{{ item.children[0].text }}</p>
          </div>
        </div>
        <ConsultationForm/>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container-main">
      <Heading level="h2" customClasses="text-center mb-8">{{ benefits?.title }}</Heading>
      <ul class="list list--scattered">
        <li class="list__item" v-for="(item, index) in benefits.list" :key="index">
          <span class="list__item-number">0{{ index + 1 }}</span>
          <Heading level="h4" customClasses="list__item-title">{{ item?.title }}</Heading>
          <p>{{ item?.text }}</p>
        </li>
      </ul>
    </div>
  </section>
  <section class="steps section">
    <div class="container-main">
      <div class="steps__head">
        <Heading level="h2">{{ steps.title }}</Heading>
        <div class="steps__head-text text">
          <span>{{ steps.text }}</span>
        </div>
      </div>
      <ul class="list list--col-3">
        <li class="list__item" v-for="(item, index) in steps.list" :key="index">
          <span class="list__item-number">0{{ index + 1 }}</span>
          <Heading level="h5" customClasses="mb-2">{{ item?.title }}</Heading>
          <p>{{ item?.text }}</p>
        </li>
      </ul>
    </div>
  </section>
  <section class="faq section">
    <div class="container-main">
      <div class="faq__content">
        <div>
          <Heading level="h2" customClasses="max-w-[800px] mb-5 sm:mb-8">{{ faq.title }}</Heading>
          <div class="flex flex-col gap-3 sm:gap-5">
            <Accordion :title="item.title" v-for="(item, index) in faq.list" :key="index">
              {{ item.text }}
            </Accordion>
          </div>
        </div>
        <img class="faq__decor" src="../assets/images/faq-decor.svg" alt="">
      </div>
    </div>
  </section>
  <section class="action section">
    <div class="container-main">
      <div class="action__main">
        <div>
          <Heading level="h2" customClasses="action__title">{{ form.title }}</Heading>
          <div class="text">
            <p v-for="(item, index) in form.text" :key="index">{{ item.children[0].text }}</p>
          </div>
        </div>
        <Form title="Успешные проекты начинают свой путь с этой формы!" text="Заполните форму и с вами сконтактирует наш специалист" />
      </div>
    </div>
  </section>
</template>
