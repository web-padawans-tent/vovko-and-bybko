<script setup>
import { ref, onMounted } from 'vue';
const { find } = useStrapi();

const portfolios = ref([]);

try {
  const { data } = await find('potfolios', {
    populate: '*',
    locale: 'en',
    sort: 'sort'
  });

  if (data?.length > 0) {
    portfolios.value = data.map(portfolio => ({
      title: portfolio.title || null,
      font: portfolio.font || null,
      titleImage: portfolio.titleImage?.url || '',
      bgImage: portfolio.bgImage?.url || null,
      bgHEX: portfolio.bgHEX || null,
      linkBg: portfolio.linkBg?.url || '',
      logo: portfolio.logo.url || '',
      textPreview: portfolio.textPreview || '',
      stack: portfolio.stack || [],
      steps: portfolio.steps || []
    }));
  }
} catch (error) {
  console.error('Ошибка загрузки портфолио:', error);
}

const currentIndex = ref(0);
const isScrolling = ref(false);
const touchStartY = ref(0);

const sections = [
  { 
    title: 'LOVER FLOWER', 
    content: 'Beauty without loud words', 
    logo: "lover-flower-logo.png",
    bg: "url(assets/images/lover-flover-banner.jpg)", 
    isBgImg: true,
    steps: [
      "design",
      "frontend",
      "backend"
    ],
    linkBg: "lover-flower-link-bg.jpg",
    fontFamily: "Cormorant",
    hightLogo: "15rem",
    stack: [
      "REACT",  
      "NODEJS",
      "MONGODB"
    ]
  },
  {
    title: 'zarinit-title.png', 
    logo: "zarinit-logo.png",
    isTitleImg: true,
    content: 'Software for smart routers', 
    bg: "#1B1B1F",
    steps: [
      "design",
      "frontend",
      "backend"
    ],
    linkBg: "zarinit-link-bg.jpg",
    fontFamily: "Orbitron",
    stack: [
      "VUE",  
      "GO",
      "FEDORA"
    ],
    hightLogo: "10rem"
  },
];

const handleScroll = (e) => {
  if (isScrolling.value) return;
  
  const delta = Math.sign(e.deltaY);
  if (delta > 0 && currentIndex.value < sections.length - 1) {
    currentIndex.value++;
  } else if (delta < 0 && currentIndex.value > 0) {
    currentIndex.value--;
  }
  
  isScrolling.value = true;
  setTimeout(() => {
    isScrolling.value = false;
  }, 1000);
};

const touchStart = (e) => {
  touchStartY.value = e.touches[0].clientY;
};

const touchEnd = (e) => {
  if (isScrolling.value) return;
  
  const touchEndY = e.changedTouches[0].clientY;
  const diff = touchStartY.value - touchEndY;

  if (Math.abs(diff) < 50) return;

  if (diff > 0 && currentIndex.value < sections.length - 1) {
    currentIndex.value++;
  } else if (diff < 0 && currentIndex.value > 0) {
    currentIndex.value--;
  }

  isScrolling.value = true;
  setTimeout(() => {
    isScrolling.value = false;
  }, 1000);
};

onMounted(() => {
  document.body.style.overflow = 'hidden';
});

</script>

<template>
  <div 
    class="fixed t-0 l-0 w-full h-full"
    @wheel="handleScroll"
    @touchstart="touchStart"
    @touchend="touchEnd"
  >
    <div 
      v-for="(portfolio, index) in portfolios"
      :key="index"
      class="section w-full h-full flex 
      flex-col transition-transform duration-[800ms] 
      ease-[cubic-bezier(0.645,0.045,0.355,1) 
      bg-cover bg-center"
      :style="{ transform: `translateY(-${currentIndex * 100}%)`, backgroundImage: portfolio.bgImage ? `url(http://localhost:1337${portfolio.bgImage})` : '', backgroundColor: portfolio.bgHEX ? `${portfolio.bgHEX}` : '', fontFamily : portfolio.font}"
    >
      <div class="container mx-auto relative">
        <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img class="h-[14rem]" :src="`http://localhost:1337${portfolio.logo}`" :alt="portfolio.title">
        </div>
        <div class="py-[10rem] grid grid-cols-2 grid-rows-2 h-screen gap-5 p-5">
          <div class="flex justify-start items-start flex-col">
            <div v-if="portfolio.titleImage" class="pb-8">
              <img class="h-12" :src="`http://localhost:1337${portfolio.titleImage}`" :alt="portfolio.title">
            </div>
            <h1 v-else class="text-8xl pb-8 text-nowrap">{{ portfolio.title }}</h1>
            <p class="text-4xl">{{ portfolio.textPreview }}</p>
          </div>
          <div class="flex justify-end items-start">
            <div class="w-[18rem] relative">
              <img :src="`http://localhost:1337${portfolio.linkBg}`" class="top-0 left-0 w-full h-full" :alt="portfolio.title">
              <div class="absolute top-0 right-0 color-white p-3 bg-black">
                <svg class="w-9 h-9 stroke-current">
                  <use href="#arrow_top_right" />
                </svg>
              </div>
            </div>
          </div>
          <div class="flex justify-start items-end">
            <div class="flex flex-col">
              <div class="text-4xl" v-for="(step, index) in portfolio.steps">
                {{ step.item }}
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-end items-end">
              <div class="text-4xl pb-4">Stack:</div>
              <div class="flex gap-4">
                <template v-for="(item, index) in portfolio.stack">
                    <img class="h-16" :src="`http://localhost:1337${item.url}`" :alt="portfolio.title">
                </template>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.font-oswald {
  font-family: 'Oswald';
} 

.font-orbitron {
  font-family: 'Orbitron';
} 
</style>
