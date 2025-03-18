<script lang="ts">

</script>

<template>
  <div class="wrapper">
    <Header />
    <div class="hidden">
      <SvgSprite />
    </div>
    <main>
      <nuxt-page/>
    </main>
    <Footer v-if="!isFooterHidden"/>
    <Modal />
  </div>
</template>

<script setup>
  const route = useRoute();

  const isFooterHidden = computed(() => route.path === "/portfolios/")

  useHead({
    title: "V&B Studio",
  })
</script>
