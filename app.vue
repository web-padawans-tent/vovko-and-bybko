<script lang="ts">

</script>

<template>
  <div class="hidden">
    <SvgSprite/>
  </div>
  <div class="wrapper">
    <Header/>
    <div class="hidden">
      <SvgSprite />
    </div>
    <main>
      <nuxt-page/>
    </main>
    <Footer/>
    <Modal />
  </div>
</template>

<script setup lang="ts">
  import SvgSprite from "~/components/SvgSprite.vue";
  import Footer from "~/components/Footer.vue";

  useHead({
    title: "V&B Studio",
  })
</script>
