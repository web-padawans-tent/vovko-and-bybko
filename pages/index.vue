<script setup lang="ts">
import {useModalStore} from "~/stores/modalStore";

const modalStore = useModalStore();
const openModal = (modalName) => modalStore.openModal(modalName);

const strapiStore = useStrapiStore()

await Promise.all([
  strapiStore.fetchMenuTop(),
  strapiStore.fetchMenuBottom(),
  strapiStore.fetchHomeData(),
  strapiStore.fetchBenefitsData(),
  strapiStore.fetchFaqData(),
  strapiStore.fetchPortfolioData(),
  strapiStore.fetchFormData()
]);

const {homeData, benefitsData, faqData, allPortfolioData, formData} = strapiStore;
</script>

<template>
  <section class="promo section">
    <div class="promo__container container-main">
      <div class="promo__content">
        <Heading level="h1" customClasses="promo__title">{{ homeData?.title }}</Heading>
        <div class="promo__text">
          <p>{{ homeData?.subtitle }}</p>
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
          <Heading level="h2" customClasses="info__title">{{ homeData?.about.title }}</Heading>
          <div class="text">
            <p v-for="(item, index) in homeData?.about.text" :key="index">{{ item.children[0].text }}</p>
          </div>
        </div>
        <ConsultationForm/>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container-main">
<!--      <Heading level="h2" customClasses="mb-8 text-center">{{ home?.servicesTitle }}</Heading>-->
      <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7">
<!--        <template v-for="(item, index) in priceCards" :key="index">
          <PriceCard
              :title="item.priceCard.title"
              :price="item.priceCard.price"
              :deadlines="item.priceCard.deadlines"
              :description="item.priceCard.descr"
              :productId="item.slug"
          />
        </template>-->
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container-main">
      <Heading level="h2" customClasses="mb-1 text-center">{{ homeData?.portfolioTitle }}</Heading>
      <p class="text-center mb-10">{{ homeData?.portfolioText }}</p>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-7">
        <template v-for="(item, index) in allPortfolioData" :key="index">
          <ProductCard
              :title="item.projectName"
              :category="item.siteType"
              :id="item.documentId"
              :imageUrl=item.images[0].url
              :slug="item.slug"
          />
        </template>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container-main">
      <Heading level="h2" customClasses="mb-3">{{ benefitsData?.title }}</Heading>
      <div class="text">
        <p class="ml-auto mb-10 max-w-[800px]" v-for="(item, index) in benefitsData?.text" :key="index">
          {{ item.children[0].text }}</p>
      </div>
      <ul class="list">
        <li class="list__item" v-for="(item, index) in benefitsData.benefits.list" :key="index">
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
          <Heading level="h2" customClasses="max-w-[800px] mb-5 sm:mb-8">{{ faqData.title }}</Heading>
          <div class="flex flex-col gap-3 sm:gap-5">
            <Accordion :title="item.title" v-for="(item, index) in faqData.faq.list" :key="index">
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
          <Heading level="h2" customClasses="action__title">{{ formData.title }}</Heading>
          <div class="text">
            <p v-for="(item, index) in formData.text" :key="index">{{ item.children[0].text }}</p>
          </div>
        </div>
        <Form title="Успешные проекты начинают свой путь с этой формы!"
              text="Заполните форму и с вами сконтактирует наш специалист"/>
      </div>
    </div>
  </section>
</template>
