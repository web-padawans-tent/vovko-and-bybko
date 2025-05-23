<script setup>
const endpoints = [
  { key: 'home', path: 'home', options: { populate: '*' } },
  { key: 'benefits', path: 'home', options: { populate: 'benefits.list' } },
  { key: 'faq', path: 'home', options: { populate: 'faq.list' } },
  { key: 'services', path: 'services', options: { populate: '*' } },
  { key: 'portfolio', path: 'portfolios', options: { populate: '*' } },
  { key: 'form', path: 'contact-form', method: 'findOne' },
];

const { computedData } = useFetchData(endpoints);

const home = computedData.home;
const benefits = computedData.benefits;
const faq = computedData.faq;
const services = computedData.services;
const portfolio = computedData.portfolio;
const form = computedData.form;

const modalStore = useModalStore();
const openModal = (modalName) => modalStore.openModal(modalName);
</script>

<template>
  <section class="promo section">
    <div class="promo__container container-main">
      <div class="promo__content">
        <Heading level="h1" customClasses="promo__title">
          <template v-if="home?.title">
            {{ home.title }}
          </template>
        </Heading>
        <div class="promo__text">
          <template v-if="home?.subtitle">
            <p>{{ home.subtitle }}</p>
          </template>
        </div>
        <div class="promo__actions">
          <Button color="purple" class="z-btn_style_default z-btn_md" :fullWidth="true"
                  @click="openModal('form-contact')">ОСТАВИТЬ ЗАЯВКУ
          </Button>
          <Button type="link" href="/portfolios" :fullWidth="true" color="white" class="z-btn_style_ghost z-btn_md">Наши
            работы
          </Button>
        </div>
      </div>
      <video muted playsinline autoplay loop class="promo__decor">
        <source src="/assets/videos/promo-anim.mp4" type="video/mp4">
      </video>
    </div>
  </section>

  <section class="info section">
    <div class="info__container container-main">
      <div class="info__main">
        <div class="info__content">
          <Heading level="h2" customClasses="info__title">{{ home?.about?.title }}</Heading>
          <div class="text">
            <template v-if="home?.about?.text">
              <p v-for="(item, index) in home.about.text" :key="index">{{ item.children[0].text }}</p>
            </template>
          </div>
        </div>
       <ConsultationForm/>
      </div>
    </div>
  </section> 


  <section class="section">
    <div class="container-main">
      <Heading level="h2" customClasses="mb-8 text-center">
        <template v-if="home?.servicesTitle">{{ home?.servicesTitle }}</template>
      </Heading>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7">
        <template v-if="services">
          <PriceCard
              v-for="(item, index) in services"
              :key="index"
              :title="item.priceCard.title"
              :price="item.priceCard.price"
              :deadlines="item.priceCard.deadlines"
              :description="item.priceCard.descr"
              :productId="item.slug"
          />
        </template>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container-main">
      <Heading level="h2" customClasses="mb-1 text-center">{{ home?.portfolioTitle }}</Heading>
      <p class="text-center mb-10">{{ home?.portfolioText }}</p>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7">
        <template v-if="portfolio">
          <ProductCard
              v-for="(item, index) in portfolio"
              :key="index"
              :title="item.projectName"
              :category="item.siteType"
              :id="item.documentId"
              :imageUrl="item.images[0].url"
              :slug="item.slug"
          />
        </template>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container-main">
      <Heading level="h2" customClasses="mb-3" v-if="benefits?.title">
        {{ benefits.title }}
      </Heading>
      <div class="text" v-if="benefits?.text">
        <p class="ml-auto mb-10 max-w-[800px]" v-for="(item, index) in benefits.text" :key="index">
          {{ item.children[0].text }}</p>
      </div>
      <ul class="list" v-if="benefits?.benefits?.list">
        <li class="list__item" v-for="(item, index) in benefits.benefits.list" :key="index">
          <span class="list__item-number">0{{ index + 1 }}</span>
          <Heading level="h4" customClasses="list__item-title">{{ item?.title }}</Heading>
          <p>{{ item?.text }}</p>
        </li>
      </ul>
    </div>
  </section>

  <section class="faq section">
    <div class="container-main">
      <div class="faq__content">
        <div>
          <Heading level="h2" customClasses="max-w-[800px] mb-5 sm:mb-8">
            <template v-if="faq?.title">
              {{ faq.title }}
            </template>
          </Heading>
          <div class="flex flex-col gap-3 sm:gap-5" v-if="faq?.faq?.list">
            <Accordion :title="item.title" v-for="(item, index) in faq.faq.list" :key="index">
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
          <Heading level="h2" customClasses="action__title">
            <template v-if="form?.title">
              {{ form.title }}
            </template>
          </Heading>
          <div class="text">
            <template v-if="form?.text">
              <p v-for="(item, index) in form.text" :key="index">{{ item.children[0].text }}</p>
            </template>
          </div>
        </div>
        <Form title="Успешные проекты начинают свой путь с этой формы!"
              text="Заполните форму и с вами сконтактирует наш специалист"/>
      </div>
    </div>
  </section> 
</template>
