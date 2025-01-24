<template>
  <div class="wrapper">
    <div class="hidden">
      <SvgSprite />
    </div>
    <main>
      <nuxt-page />
    </main>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
  import SvgSprite from "~/components/SvgSprite.vue";
  import Footer from "~/components/Footer.vue";
</script>