<template>
  <div class="wrapper">
    <Header/>
    <div class="hidden">
      <SvgSprite/>
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
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Modal from "~/components/Modal.vue";
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
