<script setup lang="ts">
  const route = useRoute()

  const modalStore = useModalStore();
  const openModal = (modalName) => modalStore.openModal(modalName);

  const endpoints: Endpoint[] = [
    { key: 'service', path: 'services', options: { populate: '*', filters: { slug: `${route.params.slug}` } }, method: 'findOne' },
    { key: 'benefits', path: 'services', options: { populate: 'benefits.list', filters: { slug: `${route.params.slug}` } }, method: 'findOne' },
    { key: 'steps', path: 'services', options: { populate: 'steps.list', filters: { slug: `${route.params.slug}` } }, method: 'findOne' },
    { key: 'faq', path: 'services', options: { populate: 'faq.list', filters: { slug: `${route.params.slug}` } }, method: 'findOne' },
    { key: 'form', path: 'contact-form', method: 'findOne' },
  ];

  const { computedData } = useFetchData(endpoints);

  const service = computedData.service;
  const benefits = computedData.benefits;
  const steps = computedData.steps;
  const faq = computedData.faq;
  const form = computedData.form;

  console.log(service)
</script>

<template>
  <section class="promo section">
    <div class="promo__container container-main">
      <template v-if="service">
        <div class="promo__content">
          <Heading level="h1" customClasses="mb-1">{{ service.title }}</Heading>
          <Heading level="h4" customClasses="mb-2">{{ service.subtitle }}</Heading>
          <div class="text mb-7">
            <p v-for="(item, index) in service?.text" :key="index">{{ item.children[0].text }}</p>
          </div>
          <Button color="purple" @click="openModal('form-contact')" class="z-btn_style_default z-btn_md">ОСТАВИТЬ ЗАЯВКУ</Button>
        </div>
        <div class="promo__img">
          <img :src="'http://localhost:1337' + service.promoImage.url" alt="">
        </div>
      </template>
    </div>
  </section>
  <section class="info section">
    <div class="info__container container-main">
      <template v-if="service">
        <div class="info__main">
          <div class="info__content">
            <Heading level="h2" customClasses="mb-5">{{ service.info.title }}</Heading>
            <div class="text">
              <p v-for="(item, index) in service.info.text" :key="index">{{ item.children[0].text }}</p>
            </div>
          </div>
          <ConsultationForm/>
        </div>
      </template>
    </div>
  </section>
  <section class="section">
    <div class="container-main">
      <template v-if="benefits">
        <Heading level="h2" customClasses="text-center mb-8">{{ benefits?.benefits.title }}</Heading>
        <ul class="list list--scattered">
          <li class="list__item" v-for="(item, index) in benefits.benefits.list" :key="index">
            <span class="list__item-number">0{{ index + 1 }}</span>
            <Heading level="h4" customClasses="list__item-title">{{ item?.title }}</Heading>
            <p>{{ item?.text }}</p>
          </li>
        </ul>
      </template>
    </div>
  </section>
  <section class="steps section">
    <div class="container-main">
      <template v-if="steps">
        <div class="steps__head">
          <Heading level="h2">{{ steps?.steps.title }}</Heading>
          <div class="steps__head-text text">
            <span>{{ steps?.steps.text }}</span>
          </div>
        </div>
        <ul class="list list--col-3">
          <li class="list__item" v-for="(item, index) in steps?.steps.list" :key="index">
            <span class="list__item-number">0{{ index + 1 }}</span>
            <Heading level="h5" customClasses="mb-2">{{ item?.title }}</Heading>
            <p>{{ item?.text }}</p>
          </li>
        </ul>
      </template>
    </div>
  </section>
  <section class="faq section">
    <div class="container-main">
      <template v-if="faq">
        <div class="faq__content">
          <div>
            <Heading level="h2" customClasses="max-w-[800px] mb-5 sm:mb-8">{{ faq?.faq.title }}</Heading>
            <div class="flex flex-col gap-3 sm:gap-5">
              <Accordion :title="item.title" v-for="(item, index) in faq?.faq.list" :key="index">
                {{ item.text }}
              </Accordion>
            </div>
          </div>
          <img class="faq__decor" src="../../assets/images/faq-decor.svg" alt="">
        </div>
      </template>
    </div>
  </section>
  <section class="action section">
    <div class="container-main">
      <template v-if="form">
        <div class="action__main">
          <div>
            <Heading level="h2" customClasses="action__title">{{ form.title }}</Heading>
            <div class="text">
              <p v-for="(item, index) in form.text" :key="index">{{ item.children[0].text }}</p>
            </div>
          </div>
          <Form title="Успешные проекты начинают свой путь с этой формы!" text="Заполните форму и с вами сконтактирует наш специалист" />
        </div>
      </template>
    </div>
  </section>
</template>
